/* =============================================================
 * detail.js — 상세 페이지(project-detail.html) 렌더링
 *
 * 주소 형식 : project-detail.html?id=<data.js의 FEATURED_PROJECTS[].id>
 * 상위 5개(FEATURED_PROJECTS)만 상세 페이지를 가집니다.
 * 이 파일은 수정할 필요가 없습니다. 콘텐츠는 data.js에서 바꾸세요.
 * ============================================================= */
(function () {
  'use strict';

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

  $('headerName').textContent = profile.name || '포트폴리오';

  /* ---------- 1. 어떤 프로젝트인지 결정 ---------- */
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  var index = -1;
  for (var i = 0; i < featured.length; i++) {
    if (String(featured[i].id) === String(id)) { index = i; break; }
  }

  var root = $('detailRoot');

  /* ---------- 2. 없는 프로젝트일 때 ---------- */
  if (index === -1) {
    document.title = '프로젝트를 찾을 수 없습니다 | 포트폴리오';
    root.innerHTML =
      '<div class="empty-state">' +
        '<h1>프로젝트를 찾을 수 없습니다</h1>' +
        '<p>주소가 잘못되었거나 삭제된 프로젝트입니다.<br>목록에서 다시 선택해 주세요.</p>' +
        '<a class="btn btn--primary" href="index.html">목록으로 돌아가기</a>' +
      '</div>';
    renderFooter();
    return;
  }

  /* ---------- 3. 상세 내용 렌더링 ---------- */
  var p = featured[index];
  document.title = p.name + ' | ' + (profile.name || '포트폴리오');

  var tagsHtml = (p.tags && p.tags.length)
    ? '<div class="tag-row">' + p.tags.map(function (t) {
        return '<span class="tag">' + esc(t) + '</span>';
      }).join('') + '</div>'
    : '';

  var screens = p.screens || (p.screen ? [p.screen] : []);
  var screensHtml = screens.map(function (src, i) {
    return '' +
      '<div class="screen"><figure>' +
        '<img src="' + esc(src) + '" alt="' + esc(p.name) + ' 사용 화면 ' + (i + 1) + '" loading="lazy">' +
        '<figcaption>' + esc(p.name) + ' — 사용 화면 ' + (i + 1) + '</figcaption>' +
      '</figure></div>';
  }).join('');

  var prev = featured[index - 1];
  var next = featured[index + 1];

  function pagerItem(project, dir, cls) {
    if (!project) return '<span class="pager__item pager__item--empty" aria-hidden="true"></span>';
    return '' +
      '<a class="pager__item ' + cls + '" href="project-detail.html?id=' + encodeURIComponent(project.id) + '">' +
        '<div class="pager__dir">' + dir + '</div>' +
        '<div class="pager__name">' + esc(project.name) + '</div>' +
      '</a>';
  }

  root.innerHTML = '' +
    '<a class="breadcrumb" href="index.html"><span aria-hidden="true">←</span> 프로젝트 목록</a>' +

    '<div class="detail__header">' +
      (p.period ? '<p class="detail__period" style="margin:0 0 10px;">' + esc(p.period) + '</p>' : '') +
      '<h1 class="detail__title">' + esc(p.name) + '</h1>' +
      /* ① 한 줄 소개 */
      '<p class="detail__summary">' + esc(p.summary) + '</p>' +
      tagsHtml +
      /* ④ 실제 사이트 링크 (새 탭) */
      '<a class="btn btn--primary" href="' + esc(p.siteUrl) + '" target="_blank" rel="noopener noreferrer">' +
        '실제 사이트 보기 <span class="ext" aria-hidden="true">↗</span>' +
        '<span class="sr-only">(새 탭에서 열림)</span>' +
      '</a>' +
    '</div>' +

    /* ② 담당 역할 */
    '<section class="detail__block">' +
      '<h2 class="detail__label">담당 역할</h2>' +
      '<p class="detail__role">' + esc(p.role) + '</p>' +
    '</section>' +

    /* ③ 사용 화면 이미지 */
    '<section class="detail__block">' +
      '<h2 class="detail__label">사용 화면</h2>' +
      '<div class="screens">' + screensHtml + '</div>' +
    '</section>' +

    /* ④ 실제 사이트 링크 (하단 재노출) */
    '<section class="detail__block">' +
      '<div class="detail__cta">' +
        '<p><strong>실제 서비스에서 확인해 보세요</strong>' +
          '기획한 화면이 어떻게 운영되고 있는지 직접 볼 수 있습니다.</p>' +
        '<a class="btn btn--primary" href="' + esc(p.siteUrl) + '" target="_blank" rel="noopener noreferrer">' +
          '사이트 바로가기 <span class="ext" aria-hidden="true">↗</span>' +
          '<span class="sr-only">(새 탭에서 열림)</span>' +
        '</a>' +
      '</div>' +
    '</section>' +

    '<nav class="pager" aria-label="다른 프로젝트">' +
      pagerItem(prev, '이전 프로젝트', 'pager__item--prev') +
      pagerItem(next, '다음 프로젝트', 'pager__item--next') +
    '</nav>';

  renderFooter();

  /* ---------- 4. 푸터 ---------- */
  function renderFooter() {
    $('footerContact').innerHTML = profile.email
      ? '프로젝트 문의는 <a href="mailto:' + esc(profile.email) + '">' + esc(profile.email) + '</a> 로 보내주세요.'
      : '';
    $('footerCopy').textContent =
      '© ' + new Date().getFullYear() + ' ' + (profile.name || '') + '. All rights reserved.';
  }
})();
