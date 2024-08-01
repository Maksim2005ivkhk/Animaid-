document.querySelectorAll('.block_site').forEach(block => {
    block.addEventListener('click', () => {
        block.classList.toggle('active');
    });
});

const searchBlock = document.getElementById("search-block");
let direction = 1; 
let pos = 0; 

function animateGradient() {
    const gradientWidth = 100; 
    const speed = 1; 

    pos += direction * speed;
    searchBlock.style.backgroundImage = `linear-gradient(to right, #BF5A18 ${pos - gradientWidth}%, #f29050 ${pos}%, #EF6206 ${pos + gradientWidth}%)`;

    if (pos >= 100) {
        direction = -1;
    } else if (pos <= 0) {
        direction = 1;
    }

    requestAnimationFrame(animateGradient);
}

window.onload = animateGradient;

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.anime-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            var moreText = this.parentElement.querySelector('.anime-more');
            if (moreText.classList.contains('active')) {
                moreText.classList.remove('active');
            } else {
                moreText.classList.add('active');
            }
        });
    });
});
window.addEventListener('scroll', () => {
    const element = document.getElementById('storeText');
    const position = element.getBoundingClientRect();

    
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.style.opacity = '1';
    }
});
const productDescription = document.getElementById('productDescription');


function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1; 
    } else {
      entry.target.style.opacity = 0; 
    }
  });
}


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.99 
};

const observer = new IntersectionObserver(handleIntersection, options);


observer.observe(productDescription);

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveSlide() {
  slides[currentIndex].style.opacity = 0; 
  currentIndex = (currentIndex + 1) % slides.length; 
  slides[currentIndex].style.opacity = 1; 
}

setInterval(moveSlide, 3000); 

document.getElementById('search-button').addEventListener('click', function() {
    
    var price = document.getElementById('price-range').value;
    
    
	var pageName = 'figure' + price + '.html';
    
    
    window.location.href = pageName;
});


document.getElementById('price-range').addEventListener('input', function() {
    document.getElementById('price-value').textContent = this.value;
});
$(document).ready(function() {
    
    $('.category').click(function() {
        var imageSrc = 'новый-путь-к-изображению.jpg'; 
        $(this).css('background-image', 'url(' + imageSrc + ')');
    });
});










