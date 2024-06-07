const slider_Review = document.querySelector('.slider_div_review');

const leftArrowReview = document.querySelector('.left_button_review');
const rightArrowReview = document.querySelector('.right_button_review');

var sectionIndexReview = 0;

leftArrowReview.addEventListener('click', function(){
  sectionIndexReview = (sectionIndexReview > 0)? sectionIndexReview - 1 : 0;
  slider_Review.style.transform ='translate(' + (sectionIndexReview) * -33.33 + '%)';
})

rightArrowReview.addEventListener('click', function(){
  sectionIndexReview = (sectionIndexReview < 2)? sectionIndexReview + 1 : 2;
  slider_Review.style.transform ='translate(' + (sectionIndexReview) * -33.33 + '%)';
})
