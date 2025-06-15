
    function Search() {
      const input = document.getElementById("searchInput").value.trim().toLowerCase();
      
      // خريطة القيم إلى الصفحات المطلوبة
      const pages = {
        "shop":"shop.html",
        "ASUS": "index1.html",
        "5070": "index1.html",
        "asus": "index1.html",
        "nvidia": "index2.html",
        "Nvidia": "index2.html",
        "MSI": "index3.html",
        "msi": "index3.html",
        "GTX": "index4.html",
        "gtx": "index4.html",
        "GIGA": "index5.html",
        "giga": "index5.html",
        "GIGABYTE": "index5.html",
        "power": "index6.html",
        "Power": "index6.html",
        "POWERCOLOR": "index6.html",
        "PowerColor": "index6.html",
        "Powercolor": "index6.html",
        "powercolor": "index6.html",
        "9070": "index6.html",
        "AMD": "index7.html",
        "amd": "index7.html",
        "Ryzen": "index7.html",
        "ryzen": "index7.html",
        "5500": "index7.html",
        "5600": "index7.html",
        "5700": "index7.html",
        "5700X": "index7.html",
        "9800": "index7.html",
        "9800X3D": "index7.html",
        "7600": "index7.html",
        "7600X": "index7.html",
        "7700": "index7.html",
        "7700X": "index7.html",
        "CPU": "index8.html",
       "cpu":"index8.html",
        "intel":"index8.html",
        "Intel":"index8.html",
        "7":"index8.html",
        "i7":"index8.html",
        "i9":"index8.html",
        "11":"index8.html",
        "12":"index8.html",
        "13":"index8.html",
        "core":"index8.html",
        "Core":"index8.html",
        "NZXT":"index9.html",
        "nzxt":"index9.html",
        "Cooler":"index9.html",
        "cooler":"index9.html",
        "case":"shop2.html",
        "Case":"shop2.html",
        "cases":"shop2.html",
        "Cases":"shop2.html",
        "corsair":"index10.html",
        "Corsair":"index10.html",
        "RM100X":"index10.html",
      };

      if (pages[input]) {
        window.location.href = pages[input]; // الانتقال إلى الصفحة
      } else {
        alert("Page not found !!!");
      }
    }
  


     // إظهار زر الرجوع للأعلى
    const topBtn = document.getElementById("topBtn");
    window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

 function check() {
  // الحصول على العنصر الذي يحمل الكلاس "mail"
  let y = document.getElementsByClassName("mail");
  
  let iv = y[0].value;
  if (iv == null || iv.trim() === "") {
    alert("Fill the form first");
  } else {
    let x = confirm("Do you want to send this report to the site support?");

    if (x === true) {
      alert("Thank you for sending your report to us. We will fix your problem soon");
    } else if (x === false) {
      alert("Error Try Again");
    }
  }
}

  