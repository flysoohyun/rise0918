/* =============================================================
 * data.js — 사이트의 모든 콘텐츠는 이 파일 하나만 수정하면 됩니다.
 * HTML/CSS/JS는 건드릴 필요 없습니다.
 *
 * [수정 방법]
 *  1. PROFILE      : 상단 이름 / 한 줄 소개 / 소개 문단 / 연락처
 *  2. FEATURED_PROJECTS : 상위 5개(카드형 + 상세페이지). 배열 순서 = 화면 노출 순서
 *  3. LINK_PROJECTS     : 하위 5개(텍스트 + 바로가기). 배열 순서 = 화면 노출 순서
 *
 * ※ 정렬/필터 로직은 없습니다. 아래 배열에 적은 순서 그대로 노출됩니다.
 *   순서를 바꾸고 싶으면 배열 안에서 항목의 위치를 옮기세요.
 * ============================================================= */

/* -------------------------------------------------------------
 * 1. 프로필
 * ----------------------------------------------------------- */
const PROFILE = {
  name: '김하늘',                                  // 이름
  role: '웹기획자 · Product Planner',              // 직함
  tagline: '흩어진 요구사항을 실행 가능한 구조로 정리합니다.', // 한 줄 포지셔닝
  intro:
    '서비스 기획 7년 차 웹기획자입니다. 온라인 교육, 공공, 커머스 도메인에서 ' +
    '정보구조 설계부터 화면 정의서·운영 정책 수립까지 담당했습니다. ' +
    '“무엇을 만들까”보다 “왜 이 화면이 필요한가”를 먼저 정리해, ' +
    '개발·디자인이 되묻지 않아도 되는 기준 문서를 만드는 것을 가장 중요하게 생각합니다.',
  // 상단/하단에 표시되는 요약 지표 (원하지 않으면 빈 배열 [] 로 두세요)
  highlights: [
    { label: '경력', value: '7년' },
    { label: '진행 프로젝트', value: '10건+' },
    { label: '주력 영역', value: 'IA · 화면정의 · 운영정책' }
  ],
  email: 'hello@example.com',                      // 연락용 이메일
  // 외부 링크 (필요 없으면 빈 배열 [] 로 두세요)
  links: [
    { label: '이력서 (Notion)', url: 'https://www.notion.so/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' }
  ]
};

/* -------------------------------------------------------------
 * 2. 상위 5개 — 카드형 + 상세 페이지
 *
 *  id        : 상세 페이지 주소에 쓰이는 고유값 (영문/숫자/하이픈, 중복 금지)
 *  name      : 프로젝트명
 *  thumbnail : 목록 카드의 대표 이미지 URL
 *  summary   : 한 줄 소개
 *  role      : 담당 역할
 *  screens   : 사용 화면 이미지 URL 목록 (1개 이상, 원하는 만큼 추가 가능)
 *  siteUrl   : 실제 사이트 링크 (새 탭으로 열림)
 *  period, tags : 선택 항목. 비워두거나 삭제하면 화면에 표시되지 않습니다.
 * ----------------------------------------------------------- */
const FEATURED_PROJECTS = [
  {
    id: 'lms-renewal',
    name: '온라인 교육 플랫폼 LMS 리뉴얼',
    thumbnail: 'https://picsum.photos/seed/planner-lms/1200/750',
    summary: '수강 이탈이 잦던 학습 화면을 진도 중심 구조로 재설계한 LMS 개편 프로젝트입니다.',
    role:
      '서비스 기획 총괄. 기존 수강 데이터 분석으로 이탈 구간을 정의하고, ' +
      '학습 홈·강의 재생·진도 관리 화면의 정보구조와 화면정의서를 작성했습니다. ' +
      '수강 기간 연장·환불 등 운영 정책 문서도 함께 정리해 CS 문의 기준을 통일했습니다.',
    screens: [
      'https://picsum.photos/seed/planner-lms-a/1600/1000',
      'https://picsum.photos/seed/planner-lms-b/1600/1000'
    ],
    siteUrl: 'https://example.com/lms',
    period: '2025.03 – 2025.08',
    tags: ['정보구조 설계', '화면정의서', '운영정책']
  },
  {
    id: 'public-reservation',
    name: '지자체 통합 예약 서비스',
    thumbnail: 'https://picsum.photos/seed/planner-reserve/1200/750',
    summary: '기관별로 흩어져 있던 시설 예약 창구를 하나의 흐름으로 통합했습니다.',
    role:
      '기획 리드. 12개 기관의 예약 규칙을 비교해 공통 예약 프로세스를 정의하고, ' +
      '기관별 예외 규칙은 옵션으로 분리했습니다. 예약–결제–취소 전 구간의 ' +
      '사용자 시나리오와 예외 케이스 정의서를 작성했습니다.',
    screens: [
      'https://picsum.photos/seed/planner-reserve-a/1600/1000',
      'https://picsum.photos/seed/planner-reserve-b/1600/1000'
    ],
    siteUrl: 'https://example.com/reservation',
    period: '2024.09 – 2025.02',
    tags: ['프로세스 설계', '예외 케이스 정의', '공공 서비스']
  },
  {
    id: 'saas-admin',
    name: 'B2B SaaS 관리자 콘솔 개선',
    thumbnail: 'https://picsum.photos/seed/planner-admin/1200/750',
    summary: '기능이 누적되며 복잡해진 관리자 화면의 메뉴 구조와 권한 체계를 정리했습니다.',
    role:
      '기획 담당. 사용 로그와 고객사 인터뷰를 바탕으로 메뉴 트리를 3단계로 재편하고, ' +
      '역할별 권한 매트릭스를 정의했습니다. 대량 데이터 처리 화면의 ' +
      '목록·필터·일괄처리 패턴을 표준화해 신규 화면 기획 시간을 줄였습니다.',
    screens: [
      'https://picsum.photos/seed/planner-admin-a/1600/1000',
      'https://picsum.photos/seed/planner-admin-b/1600/1000'
    ],
    siteUrl: 'https://example.com/console',
    period: '2024.02 – 2024.07',
    tags: ['메뉴 구조', '권한 설계', '어드민 UX']
  },
  {
    id: 'commerce-checkout',
    name: '커머스 앱 결제 플로우 개편',
    thumbnail: 'https://picsum.photos/seed/planner-checkout/1200/750',
    summary: '단계가 많아 이탈이 발생하던 모바일 결제 과정을 3스텝으로 축소했습니다.',
    role:
      '기획 담당. 결제 퍼널의 단계별 이탈 지점을 정리하고, 배송지·결제수단·주문확인을 ' +
      '한 화면 흐름으로 재구성했습니다. 결제 실패·중복 결제 등 예외 상황의 ' +
      '문구와 복구 동선을 정의했습니다.',
    screens: [
      'https://picsum.photos/seed/planner-checkout-a/1600/1000',
      'https://picsum.photos/seed/planner-checkout-b/1600/1000'
    ],
    siteUrl: 'https://example.com/commerce',
    period: '2023.08 – 2023.12',
    tags: ['퍼널 분석', '결제 플로우', '모바일 UX']
  },
  {
    id: 'public-ia',
    name: '공공기관 홈페이지 정보구조 재설계',
    thumbnail: 'https://picsum.photos/seed/planner-ia/1200/750',
    summary: '부서 기준으로 나뉘어 있던 메뉴를 방문 목적 기준으로 다시 묶었습니다.',
    role:
      '기획 담당. 1,200여 개 페이지를 전수 조사해 중복·폐기 대상을 분류하고, ' +
      '방문 목적 기준의 새 메뉴 트리를 설계했습니다. 카드소팅 결과를 근거로 ' +
      '메뉴명을 확정하고, 이관 매핑표와 콘텐츠 운영 가이드를 작성했습니다.',
    screens: [
      'https://picsum.photos/seed/planner-ia-a/1600/1000',
      'https://picsum.photos/seed/planner-ia-b/1600/1000'
    ],
    siteUrl: 'https://example.com/public-site',
    period: '2023.01 – 2023.06',
    tags: ['IA 설계', '카드소팅', '콘텐츠 운영']
  }
];

/* -------------------------------------------------------------
 * 3. 하위 5개 — 텍스트 + 바로가기 (상세 페이지 없음)
 *
 *  name    : 프로젝트명
 *  siteUrl : 외부 실제 사이트 링크 (새 탭으로 열림)
 *  note    : 선택 항목. 비워두거나 삭제하면 표시되지 않습니다.
 * ----------------------------------------------------------- */
const LINK_PROJECTS = [
  { name: '사내 위키 정보구조 정비',      siteUrl: 'https://example.com/wiki',        note: '문서 분류 체계 재정의' },
  { name: '브랜드 캠페인 랜딩페이지 기획', siteUrl: 'https://example.com/landing',     note: '시즌 캠페인 · 단발성' },
  { name: '채용 사이트 리뉴얼',           siteUrl: 'https://example.com/careers',     note: '공고 등록 백오피스 포함' },
  { name: '뉴스레터 구독 페이지 개편',     siteUrl: 'https://example.com/newsletter',  note: '구독 전환율 개선' },
  { name: '고객센터 FAQ 구조 개편',        siteUrl: 'https://example.com/help',        note: '문의 유형 기준 재분류' }
];
