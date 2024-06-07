


const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left_button');
const rightArrow = document.querySelector('.right_button');

var sectionIndex = 0;

leftArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex > 0)? sectionIndex - 1 : 0;
  slider.style.transform ='translate(' + (sectionIndex) * -33.33 + '%)';
})

rightArrow.addEventListener('click', function(){
  sectionIndex = (sectionIndex < 2)? sectionIndex + 1 : 2;
  slider.style.transform ='translate(' + (sectionIndex) * -33.33 + '%)';
})