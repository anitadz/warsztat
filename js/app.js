document.addEventListener('DOMContentLoaded', function () {
  var opacityElement = document.querySelectorAll('.image-gallery');
  for (var i = 0; i < opacityElement.length; i++) {

    opacityElement[i].addEventListener('mouseover', function () {

      this.querySelector('.opacity-bar').style.display = "none";

    })

    opacityElement[i].addEventListener('mouseout', function () {

      this.querySelector('.opacity-bar').style.display = "block";

    })
  }
})
//zadanie 3
document.addEventListener('DOMContentLoaded', function () {

  var currentElementIndex = 0;
  var elements = document.querySelectorAll('.slide');
  var leftArrow = document.querySelector('.left-arrow');
  var rightArrow = document.querySelector('.right-arrow');

  leftArrow.addEventListener('click', function () {

    elements[currentElementIndex].className = "slide";

    if (currentElementIndex == 0 ) {

      currentElementIndex= elements.length - 1;

    } else {

      currentElementIndex -= 1;

    }
    console.log(elements[currentElementIndex]);

    elements[currentElementIndex].className = "slide slide-visible";


  });

  rightArrow.addEventListener('click', function () {

    elements[currentElementIndex].className = "slide";

    if (currentElementIndex == elements.length-1) {

      currentElementIndex= 0;

    } else {

      currentElementIndex += 1;

    }
    console.log(elements[currentElementIndex]);

    elements[currentElementIndex].className = "slide slide-visible";


  });

});
