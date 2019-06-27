! function () {
    var view = document.querySelector("#topNavBar");
    var controller = {
        view: null,
        initAnimation: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function (node) {
            var top = node.offsetTop;

            var targetTop = top - 80;
            var currentTop = window.scrollY;
            var scrollLength = targetTop - currentTop;
            var scrollNum = 80;

            var t = Math.abs(((targetTop - currentTop) / 100) * 300);
            if (t > 500) {
                t = 500;
            }

            var coords = {
                y: currentTop
            };
            var tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, 500)
                .easing(TWEEN.Easing.Quadratic.In)
                .onUpdate(function () {
                    console.log("y:" + coords.y);
                    window.scrollTo(0, coords.y);
                })
                .start();
        },
        bindEvent: function () {
            let aTags = this.view.querySelectorAll("li a");
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (e) => {
                    e.preventDefault();
                    console.log(e.target.getAttribute("href"));
                    let href = e.target.getAttribute("href");
                    let node = document.querySelector(href);
                    this.scrollToElement(node);
                }
            }
        },
        init: function (view) {
            this.view = view;
            this.initAnimation();
            this.bindEvent();
        },

    };
    controller.init(view);
}();