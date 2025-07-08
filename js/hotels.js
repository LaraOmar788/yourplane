
const translations = {
  en: {
      "home": "Home",
      "flight": "Flight",
      "blog": "Blog",
      "language": "Language",
      "dots": "...",
      "hello": "Hello",
      "lorem": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, laborum ratione corporis consequatur tempora fuga. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "home-nav": "Home",
      "where": "Where",
      "more-hotels": "More Hotels",
      "thanks": "Thanks",
      "book-now": "Book now",
      "enter-country": "Please enter the country",
      best_hotels: "Best Hotels",
      unique_hotel: "Unique Hotel",
      giza: "Giza",
      lorem_text: "Lorem ipsum dolor sit amet consect",
      get_it: "Get it",
      company: "Company",
      about_plane: "About your plane",
      message: "Message",
      copyright: "Copyright © 2025 your plane, Inc. All rights reserved",

  },
  ar: {
      "home": "الصفحة الرئيسية",
      "flight": "الرحلات",
      "blog": "المدونة",
      "language": "اللغة",
      "dots": "...",
      "hello": "مرحباً",
      "lorem": "لوريم إيبسوم دولور سيت، أميت كونسكتتور أديبسيشينغ إيليت. فاسيليس، لابوروم راتيونير كوربوريس كونسيتورات تيمبورا فوغا. لوريم إيبسوم دولور سيت، أميت كونسكتتور أديبسيشينغ إيليت.",
      "home-nav": "الصفحة الرئيسية",
      "where": "أين",
      "more-hotels": "المزيد من الفنادق",
      "thanks": "شكراً",
      "book-now": "احجز الآن",
      "enter-country": "يرجى إدخال الدولة",
      best_hotels: "أفضل الفنادق",
      unique_hotel: "فندق فريد",
      giza: "الجيزة",
      lorem_text: "لوريم إيبسوم دولور سيت أميت كونسيكتيتور",
      get_it: "احصل عليه",
      company: "شركة",
      about_plane: "عن طائرتك",
      message: "رسالة",
      copyright: "حقوق الطبع والنشر © 2025 طائرتك، جميع الحقوق محفوظة",
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
      footer_copyright: "حقوق الطبع © 2025 طائرتك، جميع الحقوق محفوظة"
  }
};

// دالة لتغيير اللغة
function changeLanguage() {
  const language = document.getElementById("languageSelect").value;
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[language] && translations[language][key]) {
          el.innerText = translations[language][key];
      }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  changeLanguage();
});


const texts = [
  "Where luxury meets comfort",
  "An experience beyond expectations",
  "Redefining luxury, one stay at a time",
];
let index = 0;
const past = document.getElementById("button-move");
const next = document.getElementById("button-move2");
const text2 = document.getElementById("text");
function updateText() {
  text2.innerHTML = texts[index];
}

next.addEventListener("click", () => {
  index = (index + 1) % texts.length;
  updateText();
});
past.addEventListener("click", () => {
  index = (index - 1 + texts.length) % texts.length;
  updateText();
});

const input2 = document.getElementById("text-input");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

input2.addEventListener("input", () => {
  if (input2.value.includes("hurghada")) {
    section1.style.zIndex = "1";
    section2.style.zIndex = "2";
    option1.style.zIndex = "1";
    option2.style.zIndex = "2";
    card1.forEach((card) => (card.style.display = "flex"));
    card2.forEach((card) => (card.style.display = "none"));
    card3.forEach((card) => (card.style.display = "none"));
  } else if (input2.value.includes("cairo")) {
    section1.style.zIndex = "1";
    section3.style.zIndex = "2";
    option1.style.zIndex = "1";
    option3.style.zIndex = "2";
    card1.forEach((card) => (card.style.display = "none"));
    card2.forEach((card) => (card.style.display = "flex"));
    card3.forEach((card) => (card.style.display = "none"));
  } else if (input2.value.includes("turkia")) {
    section1.style.zIndex = "1";
    section4.style.zIndex = "2";
    option1.style.zIndex = "1";
    option4.style.zIndex = "2";
    card1.forEach((card) => (card.style.display = "none"));
    card2.forEach((card) => (card.style.display = "none"));
    card3.forEach((card) => (card.style.display = "flex"));
  } else {
    section1.style.zIndex = "2";
    section2.style.zIndex = "1";
    section3.style.zIndex = "1";
    section4.style.zIndex = "1";
    option1.style.zIndex = "2";
    option2.style.zIndex = "1";
    option3.style.zIndex = "1";
    option4.style.zIndex = "1";
  }
});


const pastButtons = document.querySelectorAll(".but2"); 
const nextButtons = document.querySelectorAll(".but");  
const slideImages = document.querySelectorAll(".slides2"); 

const slides = [
  { image: "img/img-hotels/1.avif" },
  { image: "img/img-hotels/2.avif" },
  { image: "img/img-hotels/3.avif" }
];

let indices = Array(slideImages.length).fill(0);

function updateImage1(cardIndex) {
  slideImages[cardIndex].src = slides[indices[cardIndex]].image;
}

nextButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices[index] = (indices[index] + 1) % slides.length;
    updateImage1(index);
  });
});
pastButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices[index] = (indices[index] - 1 + slides.length) % slides.length;
    updateImage1(index);
  });
});
slideImages.forEach((_, index) => updateImage1(index));
const pastButtons2 = document.querySelectorAll(".but23");
const nextButtons2 = document.querySelectorAll(".but3"); 
const slideImages2 = document.querySelectorAll(".slides3"); 

const slides3 = [
  { image: "img/img-hotels/hur1.jpg" },
  { image: "img/img-hotels/hur2.jpg" },
  { image: "img/img-hotels/hur3.jpg" }
];

let indices2 = Array(slideImages2.length).fill(0);

function updateImage2(cardIndex) {
  slideImages2[cardIndex].src = slides3[indices2[cardIndex]].image;
}
nextButtons2.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices2[index] = (indices2[index] + 1) % slides3.length;
    updateImage2(index);
  });
});

pastButtons2.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices2[index] = (indices2[index] - 1 + slides3.length) % slides3.length;
    updateImage2(index);
  });
});

slideImages2.forEach((_, index) => updateImage2(index));

const pastButtons3 = document.querySelectorAll(".but24");
const nextButtons3 = document.querySelectorAll(".but4"); 
const slideImages3 = document.querySelectorAll(".slides4"); 

const slides4 = [
  { image: "img/img-hotels/tur1.jpg" },
  { image: "img/img-hotels/tur2.jpg" },
  { image: "img/img-hotels/tur3.jpg" }
];

let indices3 = Array(slideImages3.length).fill(0);

function updateImage3(cardIndex) {
  slideImages3[cardIndex].src = slides4[indices3[cardIndex]].image;
}
nextButtons3.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices3[index] = (indices3[index] + 1) % slides4.length;
    updateImage3(index);
  });
});

pastButtons3.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices3[index] = (indices3[index] - 1 + slides4.length) % slides4.length;
    updateImage3(index);
  });
});

slideImages3.forEach((_, index) => updateImage3(index));

const pastButtons4 = document.querySelectorAll(".but5");
const nextButtons4 = document.querySelectorAll(".but25"); 
const slideImages4 = document.querySelectorAll(".slides5"); 

const slides5 = [
  { image: "img/img-hotels/hur4.jpg" },
  { image: "img/img-hotels/hur5.jpg" },
  { image: "img/img-hotels/hur6.jpg" }
];

let indices4 = Array(slideImages2.length).fill(0);

function updateImage4(cardIndex) {
  slideImages4[cardIndex].src = slides5[indices4[cardIndex]].image;
}
nextButtons4.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices4[index] = (indices4[index] + 1) % slides5.length;
    updateImage4(index);
  });
});

pastButtons4.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices4[index] = (indices4[index] - 1 + slides5.length) % slides5.length;
    updateImage4(index);
  });
});

slideImages4.forEach((_, index) => updateImage4(index));


const pastButtons5 = document.querySelectorAll(".but26");
const nextButtons5 = document.querySelectorAll(".but6"); 
const slideImages5 = document.querySelectorAll(".slides6"); 

const slides6 = [
  { image: "img/img-hotels/hur7.jpg" },
  { image: "img/img-hotels/hur8.jpg" },
  { image: "img/img-hotels/hur9.jpg" }
];

let indices5 = Array(slideImages5.length).fill(0);

function updateImage5(cardIndex) {
  slideImages5[cardIndex].src = slides6[indices5[cardIndex]].image;
}
nextButtons5.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices5[index] = (indices5[index] + 1) % slides6.length;
    updateImage5(index);
  });
});

pastButtons5.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    indices5[index] = (indices5[index] - 1 + slides6.length) % slides6.length;
    updateImage5(index);
  });
});

slideImages5.forEach((_, index) => updateImage5(index));

const cardSlider3 = document.querySelector(".cards-ho3");
const cardSlider2 = document.querySelector(".cards-ho2");
const cardSlider = document.querySelector(".cards-ho");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
let currentIndex = 0;

let clickCount = 0; 
function moveNext() {
  const card = document.querySelectorAll(".card1-ho");
  if (currentIndex < card.length) {
    currentIndex++;
    clickCount++;
    updateSlider();
    if (clickCount == 3) {
      nextButton.style.display = "none";
    }

  }
}
function movePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    clickCount--;
    updateSlider();
    if (clickCount < 3) {
      nextButton.style.display = "block";
    }
  }
}
function updateSlider() {
  const cardWidth = document.querySelector(".card1-ho").offsetWidth + 300;

  cardSlider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  cardSlider2.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  cardSlider3.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

}

let card1 = document.querySelectorAll(".cards-ho");
let card2 = document.querySelectorAll(".cards-ho2");
let card3 = document.querySelectorAll(".cards-ho3");
let how1 = document.getElementById("hrg");
let how2 = document.getElementById("cai");
let how3 = document.getElementById("tur");
how1.addEventListener("click", () => {
  card1.forEach((card) => (card.style.display = "flex"));
  card2.forEach((card) => (card.style.display = "none"));
  card3.forEach((card) => (card.style.display = "none"));
});
how2.addEventListener("click", () => {
  card1.forEach((card) => (card.style.display = "none"));
  card2.forEach((card) => (card.style.display = "flex"));
  card3.forEach((card) => (card.style.display = "none"));
});
how3.addEventListener("click", () => {
  card1.forEach((card) => (card.style.display = "none"));
  card2.forEach((card) => (card.style.display = "none"));
  card3.forEach((card) => (card.style.display = "flex"));
});
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(button) {
    const name = button.getAttribute("data-name");
    const price = Number(button.getAttribute("data-price"));
    const image = button.getAttribute("data-image");

    const item = { name, price, image };

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => addToCart(button));
});
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
