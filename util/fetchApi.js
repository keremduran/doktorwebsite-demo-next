const TEST_DATA = {
  default: {
    imgUrl: 'assets/img/DoctorImage.jpg',
    heading: `Doktor`,
    heading2: `Ad Soyad`,
    subheading: 'Uzmanlik',
    buttonText: 'Devam et',
  },
  about: {
    imgUrl: 'assets/img/AboutImageMain.jpg',
    heading: `Hakkimizda`,
    subheading: 'Yaptiklarimiz',
    buttonText: 'Bize Ulas',
  },
  contact: {
    imgUrl: 'assets/img/contact-bg.jpg',
    heading: `Iletisim`,
    subheading: 'Sorularinizin cevabi burada!',
  },
  posts: {
    imgUrl: 'assets/img/YenilikciHastane.jpg',
    heading: `Yenilikci Hastane Secenekleri`,
    subheading: 'Paylasan: Doktor Ad Soyad, Tarih: 22 Ocak 2022',
  },
};

export const fetchApi = (url) => {
  let props;
  switch (url) {
    case '/':
      props = TEST_DATA.default;
      break;
    case '/about':
      props = TEST_DATA.about;
      break;
    case '/contact':
      props = TEST_DATA.contact;
      break;
    case '/posts':
      props = TEST_DATA.posts;
      break;
    default:
      props = TEST_DATA.default;
      break;
  }
  return props;
};
