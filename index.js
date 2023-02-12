var carousel = $('#carouselExampleIndicators');
var captionHeader = $('#caption-header');
var captionText = $('#caption-text');
var descriptionText = $('#description-text');
var Starreview = $('#star-review');

$(document).ready(function () {
    var activeSlide = carousel.find('.carousel-item.active');
    captionHeader.text(slide.find('.reviewName').text());
    descriptionText.text(slide.find('.description').text());
    Starreview.text(slide.find('.starReview').text());
});

// Update the caption and description whenever a new slide is shown
carousel.on('slide.bs.carousel', function (e) {
    var slide = $(e.relatedTarget);
    captionHeader.text(slide.find('.reviewName').text());
    descriptionText.text(slide.find('.description').text());
    Starreview.text(slide.find('.starReview').text());

});


$('.carousel').carousel({
    interval: 3000


})


