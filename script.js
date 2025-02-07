
                                                               /*left side bar */
        
        
            function leftSidebar() {
            let sidebar = document.getElementById("sidebar");
            let filter1 = document.getElementById(".filter1");
            let filter2 = document.getElementById(".filter2");
    
            sidebar.classList.toggle("expanded");
    
            if (sidebar.classList.contains("expanded")) {
                    FadeOut(filter1, function () {
                    FadeIn(filter2);
                });
            } else {
                FadeOut(filter2, function () {
                  FadeIn  (filter1);
                });
            }
        }
    



        function FadeIn(element) {
            element.style.display = "block";
            element.style.opacity = 0;
            let opacity = 0;
            let fadeEffect = setInterval(function () {
                opacity += 0.2; 
                element.style.opacity = opacity;
                if (opacity >= 1) {
                    clearInterval(fadeEffect);
                }
            }, 30); 
        }
    
        function FadeOut(element, callback) {
            let opacity = 1;
            let fadeEffect = setInterval(function () {
                opacity -= 0.2; 
                element.style.opacity = opacity;
                if (opacity <= 0) {
                    clearInterval(fadeEffect);
                    element.style.display = "none";
                    if (callback) callback();
                }
            }, 30); 
        }



    
    document.getElementById("sidebar").addEventListener("click", leftSidebar);
    document.getElementById("sidebar").addEventListener("mouseleave", function () {
            let sidebar = document.getElementById("sidebar");
            let filter1 = document.querySelector(".filter1");
            let filter2 = document.querySelector(".filter2");
    
            sidebar.classList.remove("expanded");
            FadeOut(filter2, function () {
            FadeIn(filter1);
            });
        });

    
    

                                                                     /*product catagory*/

document.addEventListener("DOMContentLoaded", function () {
    const shirt = document.getElementById("shirt");
    const tshirt = document.getElementById("tshirt");
    const shorts = document.getElementById("shorts");
    const pants = document.getElementById("pants");
  
    function filteritems() {
      const products = document.querySelectorAll(".product-card");
  
      products.forEach((product) => {
        if (shirt.checked && product.dataset.category === "Shirts") {
          product.style.display = "block";
        } else if (tshirt.checked && product.dataset.category === "TShirts") {
          product.style.display = "block";
        } else if (shorts.checked && product.dataset.category === "Shorts") {
          product.style.display = "block";
        } else if (pants.checked && product.dataset.category === "Pants") {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }
  
    shirt.addEventListener("change", filteritems);
    tshirt.addEventListener("change", filteritems);
    shorts.addEventListener("change", filteritems);
    pants.addEventListener("change", filteritems);
  });


  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-category").forEach(function (button) {
            button.addEventListener("click", function () {
                let selectedCategory = this.getAttribute("set-category");
    
    
                document.querySelectorAll(".product-card").forEach(function (card) {
                    card.style.display = "none";
                });
    
                if (selectedCategory === "Shirt") {
                    document.querySelectorAll(".product-card#formal").forEach(card => card.style.display = "block");
                } else if (selectedCategory === "T-Shirts") {
                    document.querySelectorAll(".product-card#t-shirt").forEach(card => card.style.display = "block");
                }
            });
        });


    });