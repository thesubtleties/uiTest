const animations = (() => {
    const dropDown = (navId, divClass) => {
        const choice = document.getElementById(navId);
        const div = document.querySelector(divClass);
        choice.addEventListener('mouseenter', () => {
            div.classList.add('selected');  
        })
        choice.addEventListener('mouseleave', () => {
            div.classList.remove('selected');
        })
        div.addEventListener('mouseleave', () => {
            div.classList.remove('selected');
  
        })
        div.addEventListener('mouseenter', () => {
            div.classList.add('selected');  
        })
    };

    return { dropDown, }
})();

const mobileAnimations = (() => {
    const mainNavCircle = document.querySelector('.navCircle');
    const secondaryNavCircles = document.querySelectorAll('.secondaryNavCircle');
    const circlePopOut = (div, itemNumber) => {
        mainNavCircle.addEventListener('click', () => {
            for (i = 0; i < secondaryNavCircles.length; i++) {
                secondaryNavCircles[i].classList.toggle(`circleOn${i}`);
            }

        })

    }
    return {
        circlePopOut,
    }

})();

animations.dropDown('photosMenu', '.photosDropdown');
animations.dropDown('storiesMenu', '.storiesDropdown');
animations.dropDown('theGuysMenu', '.theGuysDropdown');
mobileAnimations.circlePopOut();