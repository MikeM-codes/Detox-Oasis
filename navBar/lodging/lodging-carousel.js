const mainLodgeSlides = document.querySelector('.main-lodge-slides');
        const mainLodgeImages = document.querySelectorAll('.main-lodge-slides img');

        const mainLodgePrevButton = document.querySelector('.mainLodgePrevButton');
        const mainLodgeNextButton = document.querySelector('.mainLodgeNextButton');

        let counter = 1;
        const size = mainLodgeImages[0].clientWidth;
        mainLodgeSlides.style.transform = 'translateX(' + (-size * counter ) + 'px)';

        mainLodgeNextButton.addEventListener('click', () => {
            if (counter >= mainLodgeImages.length - 1) return;
            mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
            counter++;
            mainLodgeSlides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        });

        mainLodgePrevButton.addEventListener('click', () => {
            if (counter <= 0) return;
            mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
            counter--;
            mainLodgeSlides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
        });

        mainLodgeSlides.addEventListener('transitionend', () => {
            if (mainLodgeImages[counter].id === 'lastClone') {
                mainLodgeSlides.style.transition = "none";
                counter = mainLodgeImages.length - 2;
                mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
            }
            if (mainLodgeImages[counter].id === 'firstClone') {
                mainLodgeSlides.style.transition = "none";
                counter = mainLodgeImages.length - counter;
                mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
            }
        });