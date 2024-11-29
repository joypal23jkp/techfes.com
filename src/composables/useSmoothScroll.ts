export function useSmoothScroll(scrollSpeedFactor = 1) {

    onMounted(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        function smoothScroll() {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY;

            // Adjust the scroll speed factor as needed
            window.scrollTo(0, lastScrollY + delta * scrollSpeedFactor);
            lastScrollY = currentScrollY;

            ticking = false;
        }
       window.addEventListener('scroll', (e) => {
           if (!ticking) {
               window.requestAnimationFrame(smoothScroll);
               ticking = true;
           }
       });
    });
}