
const translations2 = {
  en: {
      "egypt": "Egypt",
      "cairo": "Cairo",
      "hurghada": "Hurghada",
      "istanbul": "Istanbul",
      "turkey": "Turkey",
      "twitter": "Twitter",
      "facebook": "Facebook",
      "instagram": "Instagram",
      "hotels": "Hotels",
      "flights": "Flight",
      "home": "Home",
      "your-plane": "YOUR PLANE",
      "search": "Search",
      "go": "Go",
      "egypt-link": "EGYPT",
      "cairo-link": "Cairo",
      "hurghada-link": "Hurghada",
      "istanbul-link": "Istanbul",
      "turkey-link": "Turkey",
      "latest-travel-stories": "Latest Travel Stories",
      "story1": "Visa-Free Countries for Egyptian Passport 2025...",
      "story2": "Egypt Green List: Which Countries Are on Egypt’s Green List?",
      "story3": "Egypt Green List: Which Countries Are on Egypt’s Green List?",
      "story4": "Discover the Best New Hotels in Istanbul in 2025",
      "story5": "An Appointment With the Pharaoh: Face to Face with King Tutankhamun at the Egyptian Museum",
      "story6": "Discover the Best New Hotels in Istanbul in 2025",
      "set-your-story": "Set your story",
      "display": "Display",
      "company": "Company",
      "about-your-plane": "About your plane",
      "massage": "Massage",
      "copyright": "Copyright © 2025 your plane, Inc. All rights reserved",
      "youtube": "YouTube"
  },
  ar: {
      "egypt": "مصر",
      "cairo": "القاهرة",
      "hurghada": "الغردقة",
      "istanbul": "إسطنبول",
      "turkey": "تركيا",

      "hotels": "الفنادق",
      "flights": "الرحلات",
      "home": "الرئيسية"
,
      "search": "بحث",
      "go": "اذهب",
      "egypt-link": "مصر",
      "cairo-link": "القاهرة",
      "hurghada-link": "الغردقة",
      "istanbul-link": "إسطنبول",
      "turkey-link": "تركيا",
      "latest-travel-stories": "أحدث قصص السفر",
      "story1": "دول بدون تأشيرة لجواز السفر المصري 2025...",
      "story2": "القائمة الخضراء لمصر: ما هي الدول الموجودة في القائمة الخضراء لمصر؟",
      "story3": "القائمة الخضراء لمصر: ما هي الدول الموجودة في القائمة الخضراء لمصر؟",
      "story4": "اكتشف أفضل الفنادق الجديدة في إسطنبول في 2025",
      "story5": "موعد مع الفراعنة: مقابلة مباشرة مع الملك توت عنخ آمون في المتحف المصري",
      "story6": "اكتشف أفضل الفنادق الجديدة في إسطنبول في 2025",
      "set-your-story": "حدد قصتك",
      "display": "عرض",
      "company": "الشركة",
      "about-your-plane": "عن طائرتك",
      "massage": "تدليك",
      "copyright": "حقوق النشر © 2025 طائرتك، جميع الحقوق محفوظة",
      "youtube": "يوتيوب",
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
    
const slides = [
    { image: 'url("img/pi.jpg")', text: ' Fly To Sky ✈' },
    { image: 'url("img/pexels2.webp")', text: ' With YOUR PLANE 🛬' },
    { image: 'url("img/pi2.jpeg")', text: 'Travel Blog🧳' }
    
  ];
  
  let currentIndex = 0;
  const backgroundContainer = document.querySelector('.background-container');
  const captionElement = document.querySelector('.caption');
  const dots = document.querySelectorAll('.dot');

  function updateSlide() {
    backgroundContainer.style.backgroundImage = slides[currentIndex].image;
    captionElement.textContent = slides[currentIndex].text;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index, 10);
      updateSlide();
    });
  });
  

  updateSlide();
  
  setInterval(nextSlide, 5000);

          const showInputsButton = document.getElementById('showInputsButton');
          const imageInput = document.getElementById('imageInput');
          const textInput = document.getElementById('textInput');
          const displayButton = document.getElementById('displayButton');
          const previewDiv = document.getElementById('preview');
          const story1 =document.getElementById('story');
          const footer=document.getElementById('footer');

          showInputsButton.addEventListener('click', () => {
              imageInput.style.display = 'block';
              textInput.style.display = 'block'; 
              displayButton.style.display = 'inline-block';
              showInputsButton.style.display = 'none';
              story1.style.height= '1698px';
              footer.style.marginTop='0PX';
          });
  
          displayButton.addEventListener('click', () => {
              const file = imageInput.files[0];
              const text = textInput.value;
  
              if (file) {
                  const imageUrl = URL.createObjectURL(file); 

                  previewDiv.innerHTML = `
                      <div class="content">
                          <img src="${imageUrl}" alt="Preview Image">
                          <p>${text || 'No text entered.'}</p>
                      </div>
                  `;
              } else {
                  previewDiv.innerHTML = `<p>Please select an image and enter some text.</p>`;
              }
          });
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