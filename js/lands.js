const translations2 = {
    en: {
        page_title: "Document",
        country1: "Egypt",
        city1: "Cairo",
        city2: "Hurghada",
        city3: "Istanbul",
        country2: "Turkey",
        link_flight: "Flight",
        link_home: "Home",
        link_hotels: "Hotels",
        header_plane: "Your Plane",
        button_go: "Go",
        article_title1: "Visa-Free Countries for Egyptian Passport 2024:",
        article_content1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
        article_title2: "Another Title for Article 2024:",
        article_content2: "Details about visa-free countries for Egyptians...",
        footer_company1: "Company",
        footer_about1: "About Your Plane",
        footer_about2: "Our Services",
        footer_about3: "Contact Us",
        footer_about4: "Careers",
        footer_company2: "Services",
        footer_service1: "Booking Flights",
        footer_service2: "Hotels",
        footer_service3: "Tours",
        footer_follow: "Follow Us",
        footer_twitter: "Twitter",
        footer_facebook: "Facebook",
        footer_instagram: "Instagram",
        footer_copyright: "Copyright © 2025 Your Plane, Inc. All rights reserved"
    },
    ar: {
        page_title: "الوثيقة",
        country1: "مصر",
        city1: "القاهرة",
        city2: "الغردقة",
        city3: "إسطنبول",
        country2: "تركيا",
        link_flight: "الطيران",
        link_home: "الرئيسية",
        link_hotels: "الفنادق",
        header_plane: "طائرتك",
        button_go: "اذهب",
        article_title1: "دول بدون تأشيرة لجواز السفر المصري 2024:",
        article_content1: "هذا نص تجريبي عن الدول التي لا تحتاج إلى تأشيرة...",
        article_title2: "عنوان آخر للمقال 2024:",
        article_content2: "تفاصيل حول الدول التي لا تحتاج إلى تأشيرة للمصريين...",
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
function switchLanguage(language) {
    document.documentElement.lang = language;
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations2[language][key];
    });
    
}
function go2(){
    const search=document.getElementById('search').value;
    if(search=="cairo"){
      window.location.href = "cairo.html";
    }
    else if(search=="egypt"){
      window.location.href = "egypt.html";
    }
    else if(search=="hurghada"){
      window.location.href = "HURGHADA.html";
    }
    else if(search=="turkey"){
      window.location.href = "turkey.html";
    }
    else if(search=="istanbul"){
      window.location.href = "istanbul.html";
    }
    else{
      alert("Please enter all small letters")
    }
  }