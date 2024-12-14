document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio is ready!");

    const scrollElements = document.querySelectorAll(".project");

    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    scrollElements.forEach((el) => {
        el.classList.add("hidden");
    });

    window.addEventListener("scroll", () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 75)) {
                displayScrollElement(el);
            }
        });
    });
});
