let navWrapper = document.querySelector('.nav-wrapper'),
    navToogler =  document.querySelector('.nav-toogler');

navToogler.addEventListener('click', function (event) {
    navWrapper.classList.toggle('active')
});

//nav items
let link = document.querySelectorAll('.link-move');

let scaleLink = () => {
    anime({
        targets: link,
        scale: 1.2,
        delay: 1000,
        easing: 'easeInOutQuad'
    });
};

scaleLink();

let hoverLink1 = document.querySelector('#l1');

hoverLink1.addEventListener('mouseover',function() {
    anime({
        targets: hoverLink1,
        translateY: 8,
    });
});

hoverLink1.addEventListener('mouseout',function() {
    anime({
        targets: hoverLink1,
        translateY: 0,
    });
});

let hoverLink2 = document.querySelector('#l2');

hoverLink2.addEventListener('mouseover',function() {
    anime({
        targets: hoverLink2,
        translateY: 8,
    });
});

hoverLink2.addEventListener('mouseout',function() {
    anime({
        targets: hoverLink2,
        translateY: 0,
    });
});


let hoverLink3 = document.querySelector('#l3');

hoverLink3.addEventListener('mouseover',function() {
    anime({
        targets: hoverLink3,
        translateY: 8,
    });
});

hoverLink3.addEventListener('mouseout',function() {
    anime({
        targets: hoverLink3,
        translateY: 0,
    });
});


let hoverLink4 = document.querySelector('#l4');

hoverLink4.addEventListener('mouseover',function() {
    anime({
        targets: hoverLink4,
        translateY: 8,
    });
});

hoverLink4.addEventListener('mouseout',function() {
    anime({
        targets: hoverLink4,
        translateY: 0,
    });
});

//nav items


//perfil
//card flip
let card = document.querySelector(".card");
let playing = false;

card.addEventListener('click',function() {
    if(playing)
        return;

    playing = true;
    anime({
        targets: card,
        scale: [{value: 1}, {value: 1.5}, {value: 1, delay: 250}],
        rotateY: {value: '+=180', delay: 200},
        easing: 'easeInOutSine',
        duration: 400,
        complete: function(anim){
            playing = false;
        }
    });
});

//Click me animation
const clickMe = () => {
    anime({
        targets: '.click-me',
        translateY: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
};

clickMe();

let click = document.querySelector('.click');

let clickScale = () => {
    anime({
        targets: click,
        scale: 2,
        color: '#eead0e',
        delay: 1000
    })
};

clickScale();

//perfil




//index
//banner animation
const banner = () => {
    anime({
        targets: '.envoltura',
        height: 120,
        backgroundColor: '#011d57',
        //easing: 'easeInOutQuart'
    });
};

banner();

const envoltura = document.querySelector('.envoltura');

envoltura.addEventListener('mouseover', function () {
    anime({
        targets: envoltura,
        scale: 1.3,
    })

});

envoltura.addEventListener('mouseout', function () {
    anime({
        targets: envoltura,
        scale: 1,
    })

});


//animacion flotante
const id = document.querySelector('.id');

const mouseOutId = () => {
    anime({
        targets: id,
        translateY: 0,
        loop: false
    });
};

const mouseHoverId = () => {
    anime({
        targets: id,
        translateY: 15,
    });
};


id.addEventListener('mouseover', mouseHoverId);
id.addEventListener('mouseout', mouseOutId);



const container = document.querySelector('.container');
for(let i = 0; i <=100; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    container.appendChild(block)
}

//floatin blocks
function blockAnimate(){
    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-700,700);
        },
        translateY: function () {
            return anime.random(-220,270);
        },
        //easing: 'easeInCubic',
        duration: 3000,
        rotate: 360,
        easing: 'spring(10, 100, 10, 0)',
        delay: anime.stagger(10),
        //complete: blockAnimate,
    })
}

blockAnimate();

let blocks = document.querySelectorAll('.block');

function hoverBlocks(el, scale, rotate){
    anime({
        targets: el,
        scale: scale,
        rotate: rotate
    });
}

function hoverB(el){
    hoverBlocks(el, 1.3, 360)
}

function outB(el){
    hoverBlocks(el, 1,0)
}

for (let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener('mouseover', function (e) {
        hoverB(e.target);
    },false);

    blocks[i].addEventListener('mouseout', function (e) {
        outB(e.target);
    },false);
}


//index




//contacto
let box1 = document.querySelector('#box1');

box1.addEventListener('mouseover',function() {
    anime({
        targets: box1,
        scale: 1.3
    });
});

box1.addEventListener('mouseout',function() {
    anime({
        targets: box1,
        scale: 1
    });
});


let box2 = document.querySelector('#box2');

box2.addEventListener('mouseover',function() {
    anime({
        targets: box2,
        scale: 1.3
    });
});

box2.addEventListener('mouseout',function() {
    anime({
        targets: box2,
        scale: 1
    });
});


let box3 = document.querySelector('#box3');

box3.addEventListener('mouseover',function() {
    anime({
        targets: box3,
        scale: 1.3
    });
});

box3.addEventListener('mouseout',function() {
    anime({
        targets: box3,
        scale: 1
    });
});


let box4 = document.querySelector('#box4');

box4.addEventListener('mouseover',function() {
    anime({
        targets: box4,
        scale: 1.3
    });
});

box4.addEventListener('mouseout',function() {
    anime({
        targets: box4,
        scale: 1
    });
});


let redesSociales = document.querySelector('.redes_sociales');

redesSociales.addEventListener('mouseover', function () {
    anime({
        targets: redesSociales,
        scale: 1.2
    });

});

redesSociales.addEventListener('mouseout', function () {
    anime({
        targets: redesSociales,
        scale: 1
    });

});

let contacto = document.querySelector('.contacto');

contacto.addEventListener('mouseover', function () {
    anime({
        targets: contacto,
        scale: 1.2
    });

});

contacto.addEventListener('mouseout', function () {
    anime({
        targets: contacto,
        scale: 1
    });

});


let imageDiv = document.querySelectorAll('.image-anim')

function imageAnimate(){
    anime({
        targets: imageDiv,
        translateX: function () {
            return anime.random(25,-310);
        },
        translateY: function () {
            return anime.random(150,-210);
        },
        rotate: 360,
        duration: 2000,
        delay: anime.stagger(10),
    })
}

imageAnimate();

//contacto












































