let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.n');
let inputbox = document.querySelector('.input-box-a');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    inputbox.classList.toggle('open');
};

// image gallery 

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//   }
// }

// function AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("BtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("ac");
//     current[0].className = current[0].className.replace(" ac", "");
//     this.className += " ac";
//   });
// }

// $(document).ready(function(){
//   $('#openmodel').click(function(){
//     $('.model-con').css('transform','scale(1)');
//   });
// });
// $(document).ready(function(){
//   $('#closemodel').click(function(){
//     $('.model-con').css('transform','scale(0)');
//   });
// });

$(document).ready(function () {
  var $list = $(".row1 .column").hide(),
    $curr;

  $(".btn")
    .on("click", function () {
      var $this = $(this);
      $this.addClass("ac").siblings().removeClass("ac");
      $curr = $list.filter("." + this.id).hide();
      $curr.slice(0, 3).show(400);
      $list.not($curr).hide(300);
    })
    .filter(".ac")
    .click();

  $("#LoadMore").on("click", function () {
    $curr.filter(":hidden").slice(0, 4).slideDown("slow");
  });
});
