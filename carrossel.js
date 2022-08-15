/* definição do objeto carrossel*/
const swiper = new Swiper('.swiper',{
    spaceBetween: 10,
    slidesPerView:3,
    //  add pontinhos de indicacao
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});