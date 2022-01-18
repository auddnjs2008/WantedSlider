const imgSliders = [
  {
    src: "https://static.wanted.co.kr/images/banners/1493/12493a1b.thumb_1006_280.jpg",
    alt: "유니콘 기업 같이 만드실 분",
    content: "글로벌 진출 위한 대규모 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1494/eec5db81.thumb_1006_280.jpg",
    alt: "NO1 고기/식자재 플랫폼",
    content: "개발자 및 전직군 채용중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1483/4eea3f16.thumb_1006_280.jpg",
    alt: "두핸즈 개발자 채용",
    content: "매년 유급 안식월 지원!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1416/ba1d5ec4.thumb_1006_280.jpg",
    alt: "사이닝보너스 최대 &quot;천만원&quot;",
    content: "AI기업 제네시스랩 (개발자/ 채용 시)",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1479/ca13528c.thumb_1006_280.jpg",
    alt: "트레이딩 카드 서비스 플랫폼",
    content: "브레이크앤컴퍼니 전 직군 적극 채용중",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1466/cf576f93.thumb_1006_280.jpg",
    alt: "채팅 상담의 국룰 - 채널톡",
    content: "개발, 비즈니스 외 전 직군 채용",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1462/2d5411a9.thumb_1006_280.jpg",
    alt: "우리가 바라던 내차팔기",
    content: "헤이딜러, 전 직군 적극 채용!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1470/a6714baa.thumb_1006_280.jpg",
    alt: "메타버스 플랫폼 레드브릭",
    content: "전 직군 적극 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1463/b9342037.thumb_1006_280.jpg",
    alt: "럭셔리 쇼핑을 발란",
    content: "전 직군 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1475/8921b3d5.thumb_1006_280.jpg",
    alt: "시니어 케어 플랫폼 '케어닥'",
    content: "돌봄을 혁신할 동료를 모집해요!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1478/3f3a53ef.thumb_1006_280.jpg",
    alt: "글로벌 뷰티 테크 팜스킨",
    content: "이커머스 개발 최저 연봉 5천만원!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1422/051f7850.thumb_1006_280.jpg",
    alt: "세무회계 테크핀 삼쩜삼",
    content: "개발자 포함 전 직군 상시 채용 중",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1481/890e6c37.thumb_1006_280.jpg",
    alt: "라이프디자인 펀딩플랫폼",
    content: "시리즈D 1,000억 투자유치! 전직군 채용 중",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1476/54a3b6c8.thumb_1006_280.jpg",
    alt: "2천만의 라이프스타일 플랫폼",
    content: "우리의 일은 업계의 표준이 됩니다",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1419/560ba36f.thumb_1006_280.jpg",
    alt: "No.1 가상자산 플랫폼, 빗썸",
    content: "블록체인 개발자 등 IT 직군 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1482/a0c32036.thumb_1006_280.jpg",
    alt: "당신의 진짜 자율이 실현 되는곳",
    content: "Node.js Engineer 외, 적극 채용 중",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1384/29e4ef11.thumb_1006_280.jpg",
    alt: "인턴을 Wanted",
    content: "국내 최고의 IT 기업에서 인턴 적극 모집 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1465/909bb691.thumb_1006_280.jpg",
    alt: "앱개발자라면 더즌을 주목하라!",
    content: "22년 1분기 전직군 30명 이상 채용",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1410/0ebe112a.thumb_1006_280.jpg",
    alt: "메타쇼핑 플랫폼, 위메프",
    content: "개발직군 적극 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1491/e16b1eba.thumb_1006_280.jpg",
    alt: "프롭테크 기업, 스페이스워크",
    content: "UX 디자이너, 알고리즘 엔지니어 등 채용",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1480/176ed904.thumb_1006_280.jpg",
    alt: "골드만삭스가 주주라고?!",
    content: "잘 봐 핀테크 1등 싸움이다.",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1461/b0c2a379.thumb_1006_280.jpg",
    alt: "농산물 셀러 전용 플랫폼",
    content: "팜모닝 신선마켓 대규모 채용 중!",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1492/f7607492.thumb_1006_280.jpg",
    alt: "월세를 받으니 개발이 더 잘돼요",
    content: "프롭테크 기업 점프컴퍼니, 개발자 적극 채용",
  },
  {
    src: "https://static.wanted.co.kr/images/banners/1485/2c48ab9a.thumb_1006_280.jpg",
    alt: "글로벌 음성 AI &amp; 메타버스",
    content: "카카오 53억 투자유치! 전직군 채용",
  },
];

export default imgSliders;
