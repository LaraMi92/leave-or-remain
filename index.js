document.addEventListener('DOMContentLoaded', function(){
    const peggLogo = document.querySelector('.pegg-logo');
    peggLogo.classList.add('swing-in-top-bck');

    window.onscroll = function () {
        let lastScrollTop = 0;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const firstTitle = document.querySelector('.animate-first-section');
        const secondTitle = document.querySelector('.animate-second-section');

        const firstSection = document.querySelector('#books');
        const secondSection = document.querySelector('#about');
    

        //Scroll to bottom

        if (scrollTop > 0 && lastScrollTop <= scrollTop) {
            lastScrollTop = scrollTop;
        
            if (firstTitle.getBoundingClientRect().top >= 0) {
                firstSection.classList.add('flip-in-diag-2-tl');
            }
            else if(secondTitle.getBoundingClientRect().top >= 0){
                secondSection.classList.add('flip-in-diag-2-tl');
            }
            

        } else {
            //Scroll to top
            lastScrollTop = scrollTop;
            peggLogo.classList.remove('swing-in-top-bck');
            firstSection.classList.remove('flip-in-diag-2-tl');
            secondSection.classList.remove('flip-in-diag-2-tl');
        }
    }
})