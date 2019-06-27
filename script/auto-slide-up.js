! function () {
    window.yyy = function () {
        var dataScrollList = document.querySelectorAll("[data-scroll]");
        let currentTop = window.scrollY;
        let nearestIndex = 0;
        for (let i = 0; i < dataScrollList.length; i++) {
            if (Math.abs(dataScrollList[i].offsetTop - window.scrollY) < Math.abs(dataScrollList[
                    nearestIndex].offsetTop - window.scrollY)) {
                nearestIndex = i;
            }
        }

        var id = dataScrollList[nearestIndex].id;
        dataScrollList[nearestIndex].classList.add("active");
        var brothers = document.querySelector("a[href = '#" + id + "']").parentNode.parentNode.children;
        for (let i = 0; i < brothers.length; i++) {
            brothers[i].classList.remove("highlight");
        }
        document.querySelector("a[href = '#" + id + "']").parentNode.classList.add("highlight");
    }
    var liTags = document.getElementsByClassName("menuTrigger");
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            let li = e.currentTarget;
            let ul = li.getElementsByTagName("ul")[0];
            li.classList.add("active");
        }

        liTags[i].onmouseleave = function (e) {
            let li = e.currentTarget;
            let ul = li.getElementsByTagName("ul")[0];
            li.classList.remove("active");
        }
    }
}();