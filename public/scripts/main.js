var swiperDays = new Swiper('.swiper-days', {
  slidesPerView: 3,
  spaceBetween: 10,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-days-control .swiper-next',
    prevEl: '.swiper-days-control .swiper-prev'
  }
});

var swiper = new Swiper('.swiper-media', {
  slidesPerView: 'auto',
  spaceBetween: 12,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-media .swiper-button-next',
    prevEl: '.swiper-media .swiper-button-prev'
  }
});

$(document).ready(function () {
  $('.input-group > input').focus(function (e) {
    $('.input-group-focus').removeClass('input-group-focus');
    $(this).parent().addClass('input-group-focus');
  });
  // Hide dropdown menu on click outside
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.input-group, .input-group-dropdown').length) {
      $('.input-group-focus').removeClass('input-group-focus');
    }
  });
});

$(document).ready(function () {
  $('.count').prop('disabled', true);
  $(document).on('click', '.plus', function () {
    var curentInput = $(this).closest('.counter').find('.count');
    curentInput.val(parseInt(curentInput.val()) + 1);
  });
  $(document).on('click', '.minus', function () {
    var curentInput = $(this).closest('.counter').find('.count');
    curentInput.val(parseInt(curentInput.val()) - 1);
    if (curentInput.val() == -1) {
      curentInput.val(0);
    }
  });
});

$(document).ready(function () {
  $('.upload-wrap input[type=file]').change(function () {
    var id = $(this).attr('id');
    var newimage = new FileReader();
    newimage.readAsDataURL(this.files[0]);
    newimage.onload = function (e) {
      $('.uploadpreview.' + id).css('background-image', 'url(' + e.target.result + ')');
    };
  });
});

$(document).ready(function () {
  $('.btn-card-toggle').click(function () {
    console.log($(this).parents('.card-toggle'));
    $(this).parents('.card-toggle').find('.card-collapse').collapse('toggle');
  });
});