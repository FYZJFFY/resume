! function () {
    var view = document.getElementById("mySlides");
    var controller = {
        view: null,
        swiper: null,
        swiperConfig: {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
        init: function (view) {
            this.view = view;
            this.initSwiper();
        },
        initSwiper: function () {
            this.mySwiper = new Swiper(this.view.querySelector(".swiper-container"), this.swiperConfig)
        }
    }
    controller.init(view);
}();