$(function(){
    $('select#cities').on('change', function() {
        $('input[name="check__form-input--room"]').val(this.value);
      });
      $('.customers-slider__inner').slick({
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
      });
      $('.blog-slider__inner').slick({
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
      });
});