$(document).ready(function () {
    const $carousel = $("#myCarousel");
    const $items = $(".carousel-item");
    const totalItems = $items.length;
    let currentIndex = 0;
    let scrollInterval;

    function moveToIndex(index) {
        currentIndex = index;
        const translateValue = -index * 100 + "%";
        $carousel.css("transform", "translateX(" + translateValue + ")");
    }

    function autoScroll() {
        scrollInterval = setInterval(function () {
            currentIndex = (currentIndex + 1) % totalItems;
            moveToIndex(currentIndex);
        }, 4000);
    }

    function startAutoScroll() {
        if (!scrollInterval) {
            autoScroll();
        }
    }

    function stopAutoScroll() {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }

    function restartAutoScroll() {
        stopAutoScroll();
        startAutoScroll();
    }

    /*
    $(".carousel-control-left").click(function () {
        stopAutoScroll();
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        moveToIndex(currentIndex);
        restartAutoScroll();
        console.log("Left Clicked - New Index: ", currentIndex);
    });

    $(".carousel-control-right").click(function () {
        stopAutoScroll();
        currentIndex = (currentIndex + 1) % totalItems;
        moveToIndex(currentIndex);
        console.log("Right Clicked - New Index: ", currentIndex);
        restartAutoScroll();
    });
    */

    $(".carousel-container").hover(
        function () {
            stopAutoScroll();
        },
        function () {
            restartAutoScroll();
        }
    );

    // Arrêtez le défilement automatique lorsqu'on survole une flèche
    $(".carousel-control-left, .carousel-control-right").hover(
        function () {
            stopAutoScroll();
        },
        function () {
            restartAutoScroll();
        }
    );

    startAutoScroll();
});
