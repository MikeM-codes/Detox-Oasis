// Main Lodge Picture Carousel

const mainLodgeSlides = document.querySelector('.main-lodge-slides');
const mainLodgeImages = document.querySelectorAll('.main-lodge-slides img');

const mainLodgePrevButton = document.querySelector('.mainLodgePrevButton');
const mainLodgeNextButton = document.querySelector('.mainLodgeNextButton');

let mainLodgeCounter = 1;
const mainSize = mainLodgeImages[0].clientWidth;
mainLodgeSlides.style.transform = 'translateX(' + (-mainSize * mainLodgeCounter ) + 'px)';

mainLodgeNextButton.addEventListener('click', () => {
    if (mainLodgeCounter >= mainLodgeImages.length - 1) return;
    mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
    mainLodgeCounter++;
    mainLodgeSlides.style.transform = 'translateX(' + (-mainSize * mainLodgeCounter ) + 'px)';
});

mainLodgePrevButton.addEventListener('click', () => {
    if (mainLodgeCounter <= 0) return;
    mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
    mainLodgeCounter--;
    mainLodgeSlides.style.transform = 'translateX(' + (-mainSize * mainLodgeCounter ) + 'px)';
});

mainLodgeSlides.addEventListener('transitionend', () => {
    if (mainLodgeImages[mainLodgeCounter].id === 'lastClone') {
        mainLodgeSlides.style.transition = "none";
        mainLodgeCounter = mainLodgeImages.length - 2;
        //mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
        mainLodgeSlides.style.transform = 'translateX(' + (-mainSize * mainLodgeCounter ) + 'px)';
    }
    if (mainLodgeImages[mainLodgeCounter].id === 'firstClone') {
        mainLodgeSlides.style.transition = "none";
        blancheCounter = mainLodgeImages.length - mainLodgeCounter;
        //mainLodgeSlides.style.transition = "transform 0.4s ease-in-out";
        mainLodgeSlides.style.transform = 'translateX(' + (-mainSize * mainLodgeCounter ) + 'px)';
    }
});

// Grand Lodge Picture Carousel

const grandLodgeSlides = document.querySelector('.grand-lodge-slides');
const grandLodgeImages = document.querySelectorAll('.grand-lodge-slides img');

const grandLodgePrevButton = document.querySelector('.grandLodgePrevButton');
const grandLodgeNextButton = document.querySelector('.grandLodgeNextButton');

let grandCounter = 1;
const grandSize = grandLodgeImages[0].clientWidth;
grandLodgeSlides.style.transform = 'translateX(' + (-grandSize * grandCounter ) + 'px)';

grandLodgeNextButton.addEventListener('click', () => {
    if (grandCounter >= grandLodgeImages.length - 1) return;
    grandLodgeSlides.style.transition = "transform 0.4s ease-in-out";
    grandCounter++;
    grandLodgeSlides.style.transform = 'translateX(' + (-grandSize * grandCounter ) + 'px)';
});

grandLodgePrevButton.addEventListener('click', () => {
    if (grandCounter <= 0) return;
    grandLodgeSlides.style.transition = "transform 0.4s ease-in-out";
    grandCounter--;
    grandLodgeSlides.style.transform = 'translateX(' + (-grandSize * grandCounter ) + 'px)';
});

grandLodgeSlides.addEventListener('transitionend', () => {
    if (grandLodgeImages[grandCounter].id === 'grandLastClone') {
        grandLodgeSlides.style.transition = "none";
        grandCounter = grandLodgeImages.length - 2;
        //grandLodgeSlides.style.transition = "transform 0.4s ease-in-out";
        grandLodgeSlides.style.transform = 'translateX(' + (-grandSize * grandCounter ) + 'px)';
    }
    if (grandLodgeImages[grandCounter].id === 'grandFirstClone') {
        grandLodgeSlides.style.transition = "none";
        grandCounter = grandLodgeImages.length - grandCounter;
        //grandLodgeSlides.style.transition = "transform 0.4s ease-in-out";
        grandLodgeSlides.style.transform = 'translateX(' + (-grandSize * grandCounter ) + 'px)';
    }
});

// Blanche House Picture Carousel

const blancheHouseSlides = document.querySelector('.blanche-house-slides');
const blancheHouseImages = document.querySelectorAll('.blanche-house-slides img');

const blanchePrevButton = document.querySelector('.blanchePrevButton');
const blancheNextButton = document.querySelector('.blancheNextButton');

let blancheCounter = 1;
const blancheSize = blancheHouseImages[0].clientWidth;
blancheHouseSlides.style.transform = 'translateX(' + (-blancheSize * blancheCounter ) + 'px)';

blancheNextButton.addEventListener('click', () => {
    if (blancheCounter >= blancheHouseImages.length - 1) return;
    blancheHouseSlides.style.transition = "transform 0.4s ease-in-out";
    blancheCounter++;
    blancheHouseSlides.style.transform = 'translateX(' + (-blancheSize * blancheCounter ) + 'px)';
});

blanchePrevButton.addEventListener('click', () => {
    if (blancheCounter <= 0) return;
    blancheHouseSlides.style.transition = "transform 0.4s ease-in-out";
    blancheCounter--;
    blancheHouseSlides.style.transform = 'translateX(' + (-blancheSize * blancheCounter ) + 'px)';
});

blancheHouseSlides.addEventListener('transitionend', () => {
    if (blancheHouseImages[blancheCounter].id === 'blancheLastClone') {
        blancheHouseSlides.style.transition = "none";
        blancheCounter = blancheHouseImages.length - 2;
        //blancheHouseSlides.style.transition = "transform 0.4s ease-in-out";
        blancheHouseSlides.style.transform = 'translateX(' + (-blancheSize * blancheCounter ) + 'px)';
    }
    if (blancheHouseImages[blancheCounter].id === 'blancheFirstClone') {
        blancheHouseSlides.style.transition = "none";
        blancheCounter = blancheHouseImages.length - blancheCounter;
        //blancheHouseSlides.style.transition = "transform 0.4s ease-in-out";
        blancheHouseSlides.style.transform = 'translateX(' + (-blancheSize * blancheCounter ) + 'px)';
    }
});

// Microcabin Picture Carousel

const microcabinSlides = document.querySelector('.microcabin-slides');
const microcabinImages = document.querySelectorAll('.microcabin-slides img');

const microcabinPrevButton = document.querySelector('.microcabinPrevButton');
const microcabinNextButton = document.querySelector('.microcabinNextButton');

let microcabinCounter = 1;
const microcabinSize = microcabinImages[0].clientWidth;
microcabinSlides.style.transform = 'translateX(' + (-microcabinSize * microcabinCounter ) + 'px)';

microcabinNextButton.addEventListener('click', () => {
    if (microcabinCounter >= microcabinImages.length - 1) return;
    microcabinSlides.style.transition = "transform 0.4s ease-in-out";
    microcabinCounter++;
    microcabinSlides.style.transform = 'translateX(' + (-microcabinSize * microcabinCounter ) + 'px)';
});

microcabinPrevButton.addEventListener('click', () => {
    if (microcabinCounter <= 0) return;
    microcabinSlides.style.transition = "transform 0.4s ease-in-out";
    microcabinCounter--;
    microcabinSlides.style.transform = 'translateX(' + (-microcabinSize * microcabinCounter ) + 'px)';
});

microcabinSlides.addEventListener('transitionend', () => {
    if (microcabinImages[microcabinCounter].id === 'microLastClone') {
        microcabinSlides.style.transition = "none";
        microcabinCounter = microcabinImages.length - 2;
        //microcabinSlides.style.transition = "transform 0.4s ease-in-out";
        microcabinSlides.style.transform = 'translateX(' + (-microcabinSize * microcabinCounter ) + 'px)';
    }
    if (microcabinImages[microcabinCounter].id === 'microFirstClone') {
        microcabinSlides.style.transition = "none";
        microcabinCounter = microcabinImages.length - microcabinCounter;
        //microcabinSlides.style.transition = "transform 0.4s ease-in-out";
        microcabinSlides.style.transform = 'translateX(' + (-microcabinSize * microcabinCounter ) + 'px)';
    }
});