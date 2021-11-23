var elem = document.getElementById('pp');
var intViewportHeight = window.innerHeight;
var fullHeight = window.innerHeight - 20;
var itemsArray = document.querySelectorAll('.fullwidth');
var screenNumber = 1;

itemsArray[0].classList.add('visible');

window.addEventListener('scroll', function() {
    if ( this.scrollY > intViewportHeight * screenNumber) {
        screenNumber = screenNumber + 1;
    }
    if (this.scrollY < intViewportHeight * screenNumber) {
        screenNumber = screenNumber - 1;
    }
    elem.innerHTML = intViewportHeight + '--' + this.scrollY + '---' + screenNumber;

for (var k = 0; k < itemsArray.length; k++) {
    var coords = itemsArray[k].getBoundingClientRect();
    if (coords.y <= intViewportHeight / 4 && coords.y > (- intViewportHeight / 2)) {
        itemsArray[k].classList.add('visible')
    } else {
        itemsArray[k].classList.remove('visible')
    }
}
});

for (var i = 0; i < itemsArray.length; i++) {
    itemsArray[i].style.height = fullHeight + "px";
}


var imagesVert = ['v1', 'v2', 'v3', 'v4', 'v5'];
var imagesHoriz = ['h1', 'h2', 'h3', 'h4', 'h5'];

var horizontal = document.querySelectorAll(".horizontal");
for (var i = 0; i < horizontal.length; i++) {
    var imgHoriz = document.createElement('img');
    if(i % 2 === 0) {
    imgHoriz.classList.add('horizontalImageLeft')}
    if(i % 2 !== 0) {
        imgHoriz.classList.add('horizontalImageRight')}
    imgHoriz.style.height = fullHeight + 'px';
    imgHoriz.style.width = 'auto';
    imgHoriz.src = './img/' + imagesHoriz[i] + '.jpeg';
    horizontal[i].appendChild(imgHoriz);
}

var vertical = document.querySelectorAll(".vertical");
for (var i = 0; i < vertical.length; i++) {
    var imgVertical = document.createElement('img');

    if (i === 0) {
        for (var firstRow = 0; firstRow < 3; firstRow++) {
            var imgVertical = document.createElement('img');
            imgVertical.classList.add('threeInARow');
            imgVertical.src = './img/' + imagesVert[firstRow] + '.jpeg';
            vertical[i].appendChild(imgVertical);
        }
    }

    if (i === 1) {
        var imgVertical = document.createElement('img');
        for (var secondRow = 3; secondRow < 5; secondRow++) {
            var imgVertical = document.createElement('img');
            imgVertical.classList.add('twoInARow');
            imgVertical.src = './img/' + imagesVert[secondRow] + '.jpeg';
            vertical[i].appendChild(imgVertical);
        }
    }
}

var allImages = document.querySelectorAll('img');
console.log(allImages);
for (var d = 0; d < allImages.length; d++) {
    if(d === 1) {
        allImages[d].setAttribute('data-aos', 'fade-up');
    }

    if(d === 2) {
        allImages[d].setAttribute('data-aos', 'fade-right');
    }
    if(d % 3 == 0) {
        allImages[d].setAttribute('data-aos', 'fade-down');
    }


    // if(d % 5 == 1) {
    //     allImages[d].setAttribute('data-aos', 'fade-up');
    // }
    // allImages[d].setAttribute('data-aos', 'fade-up');
    allImages[d].setAttribute('data-aos-delay', '800');
}