const dropback = document.createElement("div");
dropback.className = "close-trigger";
document.body.appendChild( dropback);
const modaloverlay = document.createElement("div");
modaloverlay.className = "modal-overlay";
document.body.appendChild( modaloverlay);
(function(document){
  var as_selector_dropdown = document.querySelectorAll("[data-as-toggle]");
  var as_selector_menu_trigger = document.querySelectorAll("[data-as-mobile-menu]");
  var as_selector_offcanvas_trigger = document.querySelectorAll("[data-as-offcanvas]");
  var as_selector_offcanvas_menu_trigger = document.querySelectorAll("[data-as-offcanvas-menu]");
  var toast_close = document.querySelectorAll(".toast-close");

  for (var item of as_selector_dropdown) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      var selector = this.getAttribute("data-as-toggle");
      if (selector.length == 0) {
        console.warn(
          "Error. The data-as-toggle attribute is empty, please add the ID of the dropdown you want to open."
        );
        return false;
      }
      document.getElementById(selector).classList.toggle("d-block");
    });
  }

  for (var item of as_selector_menu_trigger) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      var selector = this.getAttribute("data-as-mobile-menu");
      if (selector.length == 0) {
        console.warn(
          "Error. The data-as-mobile-menu attribute is empty, please add the ID of the navbar you want to open."
        );
        return false;
      }
      document.getElementById(selector).classList.toggle("d-flex");
    });
  }

  for (var item of as_selector_offcanvas_trigger) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      var selector = this.getAttribute("data-as-offcanvas");
      if (selector.length == 0) {
        console.warn(
          "Error. The data-as-offcanvas attribute is empty, please add the ID of the offcanva you want to open."
        );
        return false;
      }

      document.getElementById(selector).classList.toggle("show");
      document.querySelector('.close-trigger').classList.toggle("show");
    });
  }

  for (var item of as_selector_offcanvas_menu_trigger) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      var selector = this.getAttribute("data-as-offcanvas-menu");
      if (selector.length == 0) {
        console.warn(
          "Error. The data-as-offcanvas-menu attribute is empty, please add the ID of the offcanva you want to open."
        );
        return false;
      }
      document.getElementById(selector).classList.toggle("show");
      document.querySelector('.close-trigger').classList.toggle("show");
    });
  }


  for(let i=0; i<toast_close.length;i++){
    toast_close[i].addEventListener('click',function(event){
      event.preventDefault()
 if(toast_close[i].classList.contains('toast-close')){
toast_close[i].parentElement.parentElement.remove()
 }
  
    })
   }




})(document)