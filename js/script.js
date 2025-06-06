import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
    once: false,
});

window.addEventListener('load', () => {
    // Force AOS to detect all elements again
    AOS.refresh();
});