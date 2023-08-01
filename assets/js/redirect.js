
document.addEventListener("DOMContentLoaded", function () {
    const showcaseElements = document.querySelectorAll(".showcase , .wrapper");
    
    showcaseElements.forEach(function (element) {
      element.addEventListener("click", function () {
        const product = this.id;
        window.open("catagories.html?product=" + product, "_self");
      });
    });
  });

