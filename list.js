/* =============================================================
 * list.js — 목록 페이지(index.html) 렌더링
 * data.js의 배열 "순서 그대로" 화면에 출력합니다. (정렬/필터 로직 없음)
 * 이 파일은 수정할 필요가 없습니다. 콘텐츠는 data.js에서 바꾸세요.
 * ============================================================= */
(function () {
  'use strict';

  /* HTML 특수문자 이스케이프 — 데이터에 <, & 등이 들어와도 안전하게 출력 */
  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function $(id) { return document.getElementById(id); }

  var profile  = typeof PROFILE !== 'undefined' ? PROFILE : {};
  var featured = typeof FEATURED_PROJECTS !== 'undefined' ? FEATURED_PROJECTS : [];
  var others   = typeof LINK_PROJECTS !== 'undefined' ? LINK_PROJECTS : [];

  /* ---------- 1. 소개 영역 ---------- */
  function renderProfile() {
    document.title = (profile.name ? profile.name + ' | ' : '') + '웹기획자 포트폴리오';

    $('headerName').textContent = profile.name || '포트폴리오';
    if (profile.role) $('heroEyebrow').textContent = profile.role;

    $('heroTitle').innerHTML =
      '<span class="accent">' + esc(profile.name || '') + '</span>';

    $('heroTagline').textContent = profile.tagline || '';
    $('heroIntro').textContent = profile.intro || '';

    /* 요약 지표 */
    var stats = profile.highlights || [];
    $('heroStats').innerHTML = stats.map(function (s) {
      return '<div class="hero__stat"><dt>' + esc(s.label) + '</dt><dd>' + esc(s.value) + '</dd></div>';
    }).join('');
    if (!stats.length) $('heroStats').style.display = 'none';

    /* 연락 / 외부 링크 (문의 폼 없이 메일·링크 수준) */
    var actions = [];
    if (profile.email) {
      actions.push(
        '<a class="btn btn--primary" href="mailto:' + esc(profile.email) + '">' +
        '이메일로 문의하기</a>'
      );
    }
    (profile.links || []).forEach(function (l) {
      actions.push(
        '<a class="btn btn--ghost" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' +
        esc(l.label) + ' <span class="ext" aria-hidden="true">↗</span>' +
        '<span class="sr-only">(새 탭에서 열림)</span></a>'
      );
    });
    $('heroActions').innerHTML = actions.join('');
  }

  /* ---------- 2. 상위 5개 — 카드형 ---------- */
  function renderFeatured() {
    $('featuredCount').textContent = featured.length + '건';

    $('featuredGrid').innerHTML = featured.map(function (p, i) {
      var num = String(i + 1).padStart(2, '0');
      return '' +
        '<a class="card" href="project-detail.html?id=' + encodeURIComponent(p.id) + '">' +
          '<div class="card__thumb">' +
            '<img src="' + esc(p.thumbnail) + '" alt="' + esc(p.name) + ' 대표 이미지" loading="lazy">' +
            '<span class="card__index">' + num + '</span>' +
          '</div>' +
          '<div class="card__body">' +
            (p.period ? '<span class="card__period">' + esc(p.period) + '</span>' : '') +
            '<h3 class="card__title">' + esc(p.name) + '</h3>' +
            '<p class="card__summary">' + esc(p.summary) + '</p>' +
            '<span class="card__more">자세히 보기 <span class="arrow" aria-hidden="true">→</span></span>' +
          '</div>' +
        '</a>';
    }).join('');
  }

  /* ---------- 3. 하위 5개 — 텍스트 + 바로가기 ---------- */
  function renderOthers() {
    $('othersCount').textContent = others.length + '건';

    $('linkList').innerHTML = others.map(function (p) {
      return '' +
        '<li class="link-list__item">' +
          '<div class="link-list__text">' +
            '<p class="link-list__name">' + esc(p.name) + '</p>' +
            (p.note ? '<p class="link-list__note">' + esc(p.note) + '</p>' : '') +
          '</div>' +
          '<a class="btn btn--ghost btn--sm" href="' + esc(p.siteUrl) + '" ' +
             'target="_blank" rel="noopener noreferrer">' +
            '바로가기 <span class="ext" aria-hidden="true">↗</span>' +
            '<span class="sr-only">' + esc(p.name) + ' 사이트 (새 탭에서 열림)</span>' +
          '</a>' +
        '</li>';
    }).join('');
  }

  /* ---------- 4. 푸터 ---------- */
  function renderFooter() {
    $('footerContact').innerHTML = profile.email
      ? '프로젝트 문의는 <a href="mailto:' + esc(profile.email) + '">' + esc(profile.email) + '</a> 로 보내주세요.'
      : '';
    $('footerCopy').textContent =
      '© ' + new Date().getFullYear() + ' ' + (profile.name || '') + '. All rights reserved.';
  }

  renderProfile();
  renderFeatured();
  renderOthers();
  renderFooter();
})();
