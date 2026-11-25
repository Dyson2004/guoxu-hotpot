/* 鍋序共用腳本：漢堡選單、營業狀態、麵包屑 scroll-spy
   單一真相：營業時間只寫這個檔（HOURS）。各個 IIFE 都自我防護，
   元素不存在就直接 no-op。
   行動裝置 ≤920px 的狀態徽章文字由此設定 data-mobile（styles.css 讀取）。 */
(function () {
  var toggle = document.getElementById('toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;
  function syncToggle(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '收合選單' : '展開選單');
  }
  function closeMenu(refocus) {
    nav.classList.remove('open');
    syncToggle(false);
    if (refocus) toggle.focus();
  }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    syncToggle(open);
    if (open) {
      var first = nav.querySelector('a');
      if (first) first.focus();
    }
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { closeMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
  });
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (e.target === toggle || toggle.contains(e.target) || nav.contains(e.target)) return;
    closeMenu(false);
  });
  nav.addEventListener('focusout', function (e) {
    if (!nav.contains(e.relatedTarget) && e.relatedTarget !== toggle) closeMenu(false);
  });
})();

/* 分類捷徑 scroll-spy（menu/guide/pot 頁）：只給目前區塊的捷徑加上壓按態，內容不隱藏、關 JS 也照樣能點 */
(function () {
  var links = document.querySelectorAll('.menu-shortcut a');
  if (!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function (a) {
    var hash = (a.getAttribute('href') || '').split('#')[1];
    if (hash) map[hash] = a;
  });
  var targets = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (!targets.length) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var link = map[en.target.id];
      if (!link) return;
      links.forEach(function (a) { a.classList.remove('is-current'); a.removeAttribute('aria-current'); });
      link.classList.add('is-current');
      link.setAttribute('aria-current', 'location');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  targets.forEach(function (el) { obs.observe(el); });
})();

/* 營業狀態：以 Asia/Taipei 判斷，取不到時區就保留 HTML 的靜態說明。
   桌機寫完整句（aria-live），手機 ≤680px 由 CSS ::after 讀 data-mobile。 */
(function () {
  var HOURS = { 0: [17, 0, 21, 30], 1: [17, 0, 21, 30], 2: [17, 0, 21, 30], 3: [17, 0, 21, 30], 4: [17, 0, 21, 30], 5: [17, 0, 21, 30], 6: [11, 0, 21, 30] };
  var boxes = document.querySelectorAll('.open-now--head');
  var outs = document.querySelectorAll('.open-now--head .open-now-text');
  if (!boxes.length || !outs.length) return;
  function updateOpenNow() {
    var day, mins;
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Taipei', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false
      }).formatToParts(new Date());
      var map = {};
      parts.forEach(function (p) { map[p.type] = p.value; });
      var names = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      day = names[map.weekday];
      var h = parseInt(map.hour, 10) % 24;
      mins = h * 60 + parseInt(map.minute, 10);
    } catch (e) {
      return;
    }
    if (typeof day !== 'number' || isNaN(day)) return;

    function fmt(m) {
      var h = Math.floor(m / 60), mm = m % 60;
      return (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm;
    }

    var slot = HOURS[day];
    var openAt = slot[0] * 60 + slot[1];
    var closeAt = slot[2] * 60 + slot[3];
    var text, mobile;

    var isOpen = mins >= openAt && mins < closeAt;
    if (isOpen) {
      text = '現在開鍋中・到 ' + fmt(closeAt);
      mobile = '開鍋中・' + fmt(closeAt);
    } else if (mins < openAt) {
      var left = openAt - mins;
      if (left <= 60) {
        text = '還有 ' + left + ' 分鐘開鍋・' + fmt(openAt);
        mobile = left + ' 分後開鍋';
      } else {
        text = '今天 ' + fmt(openAt) + ' 開鍋';
        mobile = '今天 ' + fmt(openAt) + ' 開鍋';
      }
    } else {
      var next = (day + 1) % 7;
      var nextOpen = HOURS[next][0] * 60 + HOURS[next][1];
      var label = next === 6 ? '週六' : '明天';
      text = '今天打烊了・' + label + ' ' + fmt(nextOpen) + ' 開鍋';
      mobile = label + ' ' + fmt(nextOpen) + ' 開鍋';
    }
    /* 文字不變就不覆寫：避免 aria-live 每 60 秒重複打斷讀屏 */
    outs.forEach(function (o) { if (o.textContent !== text) o.textContent = text; });
    boxes.forEach(function (b) {
      b.classList.toggle('is-open', isOpen);
      b.classList.toggle('is-closed', !isOpen);
      if (b.getAttribute('data-mobile') !== mobile) b.setAttribute('data-mobile', mobile);
    });

    document.querySelectorAll('.hours-table tr.is-today').forEach(function (r) { r.classList.remove('is-today'); });
    document.querySelectorAll('.today-dot').forEach(function (d) { d.remove(); });
    document.querySelectorAll('.today-chip').forEach(function (c) { c.remove(); });
    var row = document.querySelector('.hours-table tr[data-day="' + day + '"]');
    if (row) {
      row.classList.add('is-today');
      /* 「今天」是文字，放進 DOM 才讀得到（原本只活在 CSS content）；與開鍋狀態無關 */
      var th = row.querySelector('th');
      if (th && !th.querySelector('.today-chip')) {
        var chip = document.createElement('span');
        chip.className = 'today-chip'; chip.textContent = '今天';
        th.appendChild(chip);
      }
      var td = row.querySelector('td');
      if (td && isOpen && !td.querySelector('.today-dot')) {
        var dot = document.createElement('span');
        dot.className = 'today-dot'; dot.setAttribute('aria-hidden', 'true');
        td.appendChild(dot);
      }
    }
  }
  updateOpenNow();
  setInterval(updateOpenNow, 60000);
})();
