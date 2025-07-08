const translations = [
            
    "A better journey with us", // English
    "Un voyage meilleur avec nous", // French
    "Una mejor travesía con nosotros", // Spanish
    "Eine bessere Reise mit uns", // German
    "Una migliore esperienza di viaggio con noi", // Italian
    "Uma viagem melhor conosco", // Portuguese
    "Un viatge millor amb nosaltres", // Catalan
];

const text = document.getElementById('text');
const plane = document.getElementById('plane');

let Long = 0;
let Index1 = 0;

function displayTextWithPlane() {
    const textContent = translations[Long];
    text.innerHTML = '';
    Index1 = 0;

    const containerWidth = 600;
    const stepSize = containerWidth / textContent.length; 

    plane.style.left = '0px';

    function showNextCharAndMovePlane() {
        if (Index1 < textContent.length) {
          
            text.textContent += textContent[Index1];

       
            const planePosition = Index1 * stepSize;
            plane.style.left = `${planePosition}px`;

           Index1++;
            setTimeout(showNextCharAndMovePlane, 200);
        } else {
           
            setTimeout(() => {
                Long = (Long + 1) % translations.length;
                displayTextWithPlane();
            }, 1000);
        }
    }

    showNextCharAndMovePlane();
}

displayTextWithPlane();
    window.onscroll = function() {
        const scrollButton = document.getElementById("scrollButton");
        
        if (window.scrollY > 100) {
          scrollButton.style.display = "inline-block";
        } else {
          scrollButton.style.display = "none";
        }
      };
      function save() {
        const Name1 = document.getElementById('Name1').value;
        const Name2 = document.getElementById('Name2').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
    
        localStorage.setItem('Name13', Name1);
        localStorage.setItem('Name23', Name2);
        localStorage.setItem('startDate3', startDate);
        localStorage.setItem('endDate3', endDate);
    
        window.location.href = 'flight.html'; 
    }
    const translations2 = {
        en: {
            flights: "Flights",
            hotels: "Hotels",
            blog: "blog",
            sign_up: "Sign Up",
            sign_in: "Sign In",
            learn_more: "LEARN MORE",
            one_way: "One-way",
            round_trip: "Round-trip",
            from: "From",
            to: "To",
            "Departure Date": "Departure Date",
            "Return Date": "Return Date",
            go: "Go",
            best_country: "The best country",
            egypt: "Egypt",
            egypt_desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum odio quia vel?",
            cairo: "Cairo",
            cairo_desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum odio quia vel?",
            hurghada: "Hurghada",
            hurghada_desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum odio quia vel?",
            istanbul: "Istanbul",
            istanbul_desc: "Lorem ipsum dolor, sit amet consect",
            turkey: "Turkey",
            turkey_desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum odio quia vel?",
            company: "Company",
            about_plane: "About your plane",
            message: "Message",
            copyright: "Copyright © 2025 your plane, Inc. All rights reserved",
        },
        ar: {
            flights: "رحلات",
            hotels: "فنادق",
            vlog: "مدونة فيديو",
            sign_up: "تسجيل",
            sign_in: "تسجيل الدخول",
            learn_more: "تعرف على المزيد",
            one_way: "رحلة ذهاب",
            round_trip: "ذهاب وعودة",
            from: "من",
            to: "إلى",
            "Departure Date": "تاريخ المغادرة",
            "Return Date": "تاريخ العودة",
            go: "انطلق",
            best_country: "أفضل البلدان",
            egypt: "مصر",
            egypt_desc: "لوريم إيبسوم دولور، سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. إيروم أوديو كيا فيل؟",
            cairo: "القاهرة",
            cairo_desc: "لوريم إيبسوم دولور، سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. إيروم أوديو كيا فيل؟",
            hurghada: "الغردقة",
            hurghada_desc: "لوريم إيبسوم دولور، سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. إيروم أوديو كيا فيل؟",
            istanbul: "إسطنبول",
            istanbul_desc: "لوريم إيبسوم دولور، سيت أميت كونسيكتيتور",
            turkey: "تركيا",
            turkey_desc: "لوريم إيبسوم دولور، سيت أميت كونسيكتيتور أديبيسيسينغ إيليت. إيروم أوديو كيا فيل؟",
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
    
    
    function switchLanguage(language) {
        document.documentElement.lang = language;
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations2[language][key];
        });
        
        if (language === 'ar') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
    }
    window.onload = function() {
        var isLoggedIn = localStorage.getItem("isLoggedIn");
    
        if (isLoggedIn === "true") {
    
            var loginSection = document.getElementById("so1");
            var loginSection2 = document.getElementById("so2");
            var loginSection3 = document.getElementById("so3");
            var loginSection4 = document.getElementById("so4");
            
            if (loginSection) {
                loginSection.style.display = "none";
                loginSection2.style.display = "none";
                loginSection3.style.display = "none";
                loginSection4.style.display = "none";
                document.getElementById('pryo').style.display="inline"
                                document.getElementById('bn').style.display="inline"
            }
    
          
            var name = localStorage.getItem("name");
            var number = localStorage.getItem("number");
            var email = localStorage.getItem("email");
    
  
            document.getElementById("user-name").innerText = name ? name : "Not Available";
            document.getElementById("user-number").innerText = number ? number : "Not Available";
            document.getElementById("user-email").innerText = email ? email : "Not Available";
            document.getElementById("user-name2").innerText = name ? name : "Not Available";
            document.getElementById("user-number2").innerText = number ? number : "Not Available";
            document.getElementById("user-email2").innerText = email ? email : "Not Available";
        }
    };
    

    function logout() {
        localStorage.removeItem("isLoggedIn"); 
        localStorage.removeItem("name"); 
        localStorage.removeItem("email"); 
        localStorage.removeItem("number"); 
  
        location.reload();

    }
    function logout2() {
        localStorage.removeItem("isLoggedIn"); 
        localStorage.removeItem("name"); 
        localStorage.removeItem("email"); 
        localStorage.removeItem("number"); 
                      document.getElementById('pryo2').style.display="none"
                         document.getElementById('bn2').style.display="none"
                                                 document.getElementById('sin').style.display="block"


    }
 
    function nav(){
        var ornav=document.getElementById('ornav');
        ornav.style.display="flex"
    }
    function up(){
        var ornav=document.getElementById('ornav');
        ornav.style.display="none"
    }
