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

animations.dropDown('photosMenu', '.photosDropdown');
animations.dropDown('storiesMenu', '.storiesDropdown');
animations.dropDown('theGuysMenu', '.theGuysDropdown');