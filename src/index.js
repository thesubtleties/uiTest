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

const imageSlider = (() => {
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');
    const buttons = document.querySelectorAll('.controlDot');
    const imageDiv = document.querySelector('.imageSlider');
    let offset = 0;
    let imageNumber = 1;

    const getOffset = () => {
        switch (imageNumber) {
            case 1: 
                offset = 0
                break;
            case 2: 
                offset = 50
                break;
            case 3:
                offset = 100
                break;
            case 4:
                offset = 150
                break;
            case 5:
                offset = 200
                break;
            case 6:
                offset = 250
                break;
            default:
                offset = 0;
        }
    }

    const updateImageCircle = () => {
        buttons.forEach((button) => {
            const buttonId = button.getAttribute('id');
            const buttonNumber = buttonId.replace('pic', '');
            if (parseInt(buttonNumber) === imageNumber) {
                button.classList.add('controlDotOn');
            }
            else {
                button.classList.remove('controlDotOn');
            }

        })

    }
    const circleButtonActions = () => {
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const buttonId = button.getAttribute('id');
                const buttonNumber = buttonId.replace('pic', '');
                imageNumber = parseInt(buttonNumber);
                getOffset();
                imageDiv.style.transform = `translateX(-${offset}vw)`;
                updateImageCircle();
            })
        })
    }
    const moveLeft = () => {
        leftArrow.addEventListener('click', () => {
            imageNumber -= 1;
            if (imageNumber < 1) {
                imageNumber = 1;
            }
            getOffset();
            imageDiv.style.transform = `translateX(-${offset}vw)`;
            updateImageCircle();
        });
    }
    //We need to update this to make the numbers right to make it move.
    const moveRight = () => {
        rightArrow.addEventListener('click', () => {
            imageNumber += 1;
            if (imageNumber > 6) {
                imageNumber = 6;
            }
            getOffset();
            imageDiv.style.transform = `translateX(-${offset}vw)`;
            updateImageCircle();
        });
    }

    return { moveLeft,
            moveRight,
            circleButtonActions,
            updateImageCircle, }

})();

animations.dropDown('photosMenu', '.photosDropdown');
animations.dropDown('storiesMenu', '.storiesDropdown');
animations.dropDown('theGuysMenu', '.theGuysDropdown');
mobileAnimations.circlePopOut();
imageSlider.moveLeft();
imageSlider.moveRight();
imageSlider.circleButtonActions();
imageSlider.updateImageCircle();