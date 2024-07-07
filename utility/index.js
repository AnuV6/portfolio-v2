export const trueManUtility = {
  preloader() {
    // Add 'is-animating' class to the 'html' element
    document.documentElement.classList.add("is-animating");

    // Select the element with the class 'trm-scroll-container'
    var scrollContainer = document.querySelector(".trm-scroll-container");

    // Set initial opacity to 0
    scrollContainer.style.opacity = "0";
    scrollContainer.style.transition = "opacity 0.6s";

    // Remove 'is-animating' class and set opacity back to 1 after 1 second
    setTimeout(function () {
      document.documentElement.classList.remove("is-animating");
      scrollContainer.style.opacity = "1";
    }, 1000);
  },
  scrollAnimation() {
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("#trm-scroll-container"),
        smooth: true,
        lerp: 0.1,
      });
    });
  },
};
