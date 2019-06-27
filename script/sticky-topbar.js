! function () {
    var view = document.querySelector("#topNavBar");
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            window.onscroll = (e) => {
                if (window.scrollY > 0) {
                    this.active();
                } else {
                    this.deactive();
                }
                yyy();
            }
        },
        active: function () {
            this.view.classList.add("sticky");
        },
        deactive: function () {
            this.view.classList.remove("sticky");
        }
    }

    controller.init(view);

}();