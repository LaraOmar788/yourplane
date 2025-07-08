const translations = {
  en: {
      home: "home",
      hotels: "hotels",
      vlog: "blog",
      signup: "sign up",
      signin: "sign in",
      "one-way": "One-way",
      "round-trip": "Round-trip",
      from: "from",
      to: "to",
      "departure-date": "Departure Date",
      "return-date": "Return Date",
      go: "go",
      "top-travel-app": "Top travel app in The United Kingdom",
      "shop-with-confidence": "Shop with confidence",
      "instant-booking": "Instant booking",
      "short-description": "A short sentence describing this callout is.",
      "trip-ideas": "Trip Ideas",
      "hurghada": "Hurghada",
      "marsa-alam": "Marsa Alam City",
      "sharm-el-sheikh": "Sharm El Sheikh",
      "egypt": "Egypt",
      "round-trip": "Round-trip from",
      "turkey": "Turkey",
      "istanbul": "Istanbul",
      "round-trip": "Round-trip from",
      "milan": "Milan",
      "italy": "ITALY",
      "venice": "Venice",
      "barcelona": "Barcelona",
      "spain": "Spain",
      "cape-town": "Cape Town",
      "south-africa": "South Africa",
      "taif": "Taif",
      "saudi-arabia": "Saudi Arabia",
      "stories": "Stories",
      "visa-free-countries": "Visa-Free Countries for Egyptian Passport 2025: Countries Egyptians Can Travel to Without a Visa like Cairo",
      "your-plane": "Your plane",
      "decadent-stays": "Indulge in Decadent Stays This Winter at Rabat, Hurghada",
      "new-hotels": "Discover the Best New Hotels in Istanbul in 2025",
      "pharaoh-appointment": "An Appointment With the Pharaoh: Face to Face with King Tutankhamun at the Egyptian Museum",
      "company": "Company",
      "about-your-plane": "About your plane",
      "massage": "Massage",
      "copyright": "Copyright © 2025 your plane, Inc. All rights reserved",
          "home": "Home"
  },
  ar: {
      home: "الصفحة الرئيسية",
      hotels: "الفنادق",
      vlog: "مدونة الفيديو",
      signup: "التسجيل",
      signin: "تسجيل الدخول",
      "one-way": "ذهاب فقط",
      "round-trip": "ذهاب وعودة",
      from: "من",
      to: "إلى",
      "departure-date": "تاريخ المغادرة",
      "return-date": "تاريخ العودة",
      go: "اذهب",
      "top-travel-app": "أفضل تطبيق للسفر في lwv ",
      "shop-with-confidence": "تسوق بثقة",
      "instant-booking": "حجز فوري",
      "short-description": "جملة قصيرة تصف هذا العنصر.",
      "trip-ideas": "أفكار رحلات",
      "hurghada": "الغردقة",
      "marsa-alam": "مدينة مرسى علم",
      "sharm-el-sheikh": "شرم الشيخ",
      "egypt": "مصر",
      "round-trip": "ذهاب وعودة من",
      "turkey": "تركيا",
      "istanbul": "إسطنبول",
      "round-trip": "ذهاب وعودة من",
      "milan": "ميلانو",
      "italy": "إيطاليا",
      "venice": "البندقية",
      "barcelona": "برشلونة",
      "spain": "إسبانيا",
      "cape-town": "كيب تاون",
      "south-africa": "جنوب أفريقيا",
      "taif": "الطائف",
      "saudi-arabia": "السعودية",
      "stories": "قصص",
      "visa-free-countries": "دول بدون تأشيرة لجواز السفر المصري 2025: دول يمكن للمصريين السفر إليها بدون تأشيرة مثل القاهرة",
      "your-plane": "طائرتك",
      "decadent-stays": "استمتع بالإقامة الفاخرة هذا الشتاء في الرباط، الغردقة",
      "new-hotels": "اكتشف أفضل الفنادق الجديدة في إسطنبول في 2025",
      "pharaoh-appointment": "موعد مع الفرعون: مواجهة مع الملك توت عنخ آمون في المتحف المصري",
      "company": "الشركة",
      "about-your-plane": "حول طائرتك",
      "massage": "تدليك",
      "copyright": "حقوق الطبع والنشر © 2025 طائرتك، جميع الحقوق محفوظة",
      footer_company1: "الشركة",
      footer_about1: "عن طائرتك",
      footer_about2: "خدماتنا",
      footer_about3: "اتصل بنا",
      footer_about4: "وظائف",
      footer_company2: "الخدمات",
      footer_service1: "حجز الطيران",
      footer_service2: "الفنادق",
      footer_service3: "الجولات",
      footer_follow: "تابعنا",
      footer_twitter: "تويتر",
      footer_facebook: "فيسبوك",
      footer_instagram: "إنستجرام",
      footer_copyright: "حقوق الطبع © 2025 طائرتك، جميع الحقوق محفوظة",
          "home": "الرئيسية"
      
  }
};

// دالة لتبديل اللغة
function switchLanguage(language) {
  document.documentElement.lang = language; 
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[language][key];
  });

  // تغيير اتجاه النصوص بناءً على اللغة
  if (language === 'ar') {
      document.body.setAttribute('dir', 'rtl'); 
  } else {
      document.body.setAttribute('dir', 'ltr'); 
  }
}
const slides = [
  { image: 'url("img/hero-image_1.webp")', text: 'Flying in the sky where the adventure begins. ' },
  { image: 'url("img/hero-image_2.webp")', text: 'Your wings are waiting for you to fly' },
  { image: 'url("img/hero-image_4.webp")', text: 'Fly where there are no limits. ' },
  { image: 'url("img/hero-image_5.webp")', text: ' In heaven, dreams come true' }
];

let currentIndex = 0;
const backgroundContainer = document.querySelector('.background-container');
const captionElement = document.querySelector('.caption');
const dots = document.querySelectorAll('.dot');

// تحديث الخلفية والعبارة
function updateSlide() {
  backgroundContainer.style.backgroundImage = slides[currentIndex].image;
  captionElement.textContent = slides[currentIndex].text;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// الانتقال إلى الصورة التالية
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

// التنقل بين الصور باستخدام النقاط
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.dataset.index, 10);
    updateSlide();
  });
});


updateSlide();

setInterval(nextSlide, 5000);
window.onscroll = function() {
  const scrollButton = document.getElementById("scrollButton");
  
  if (window.scrollY > 100) {
    scrollButton.style.display = "inline-block";
  } else {
    scrollButton.style.display = "none";
  }
};
const firstName = localStorage.getItem('Name13');
const lastName = localStorage.getItem('Name23');
const startDate4 = localStorage.getItem('startDate3');
const endDate4 = localStorage.getItem('endDate3');
document.getElementById('Name1').value = firstName || 'Not provided';
document.getElementById('Name2').value = lastName || 'Not provided';
document.getElementById('startDate').value = startDate4 || 'Not provided';
document.getElementById('endDate').value = endDate4 || 'Not provided';
function save() {
  const Name1 = document.getElementById('Name1').value;
  const Name2 = document.getElementById('Name2').value;
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;

  localStorage.setItem('Name11', Name1);
  localStorage.setItem('Name22', Name2);
  localStorage.setItem('startDate', startDate);
  localStorage.setItem('endDate', endDate);

  window.location.href = 'TI.html'; 
}
const cardSlider = document.querySelector('.st-card')

let currentIndex1 = 0;

function moveNext() {
  const card = document.querySelectorAll('.stories1')
  if (currentIndex1 < card.length) {
      currentIndex1++
      updateSlider();
  }
}

function movePrev() {

  if (currentIndex1 > 0) {
      currentIndex1--
      updateSlider();
  }
}
function updateSlider() {
  const cardWidth = document.querySelector('.stories1').offsetWidth + 20
  cardSlider.style.transform = `translateX(-${currentIndex1*cardWidth}px)`

}

    function nav(){
      var ornav=document.getElementById('ornav');
      ornav.style.display="flex"
  }
  function up(){
      var ornav=document.getElementById('ornav');
      ornav.style.display="none"
  }
  const lightModeBtn = document.getElementById("light-mode");
  const darkModeBtn = document.getElementById("dark-mode");
  
  lightModeBtn.addEventListener("click", () => {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
  });
  
  darkModeBtn.addEventListener("click", () => {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
  });
  
  window.onload = () => {
      if (localStorage.getItem("theme") === "dark") {
          document.body.classList.add("dark-mode");
      }
  };

  const lightModeBtn2 = document.getElementById("light-mode2");
  const darkModeBtn2 = document.getElementById("dark-mode2");
  
  lightModeBtn2.addEventListener("click", () => {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
  });
  
  darkModeBtn2.addEventListener("click", () => {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
  });
  
  window.onload = () => {
      if (localStorage.getItem("theme") === "dark") {
          document.body.classList.add("dark-mode");
      }
  };