const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, 
    yValue = 0;

    let zValue = 100;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth /2;
    yValue = e.clientY - window.innerHeight /2;

    
    rotateDegree = (xValue / (window.innerWidth /2)) * 20;

    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        
        
        let  zValue = (e.clientX - parseFloat(getComputedStyle(el).left))  * 0.1 ;

        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx
        }px)) rotateY(${rotateDegree}deg) translateY(calc(-50% + ${ 
                yValue * speedy
        }px)) perspective(2300px) translateZ(${zValue}px)`;
    });
});


//GSAP ANIMATION 

let timeline = gsap.timeline();


timeline.from(".bg-img",
 {
    top: `${+document.querySelector(".bg-img").offsetHeight / 2}px`,
    duration:3.5,
},
3.5,
);