/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

/**
 * Define Global Variables
 * 
*/
const s1 = document.getElementById("section1");
const s2 = document.getElementById("section2");
const s3 = document.getElementById("section3");
const s4 = document.getElementById("section4");
const s5 = document.getElementById("section5");
const parent= document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let counter = sections.length;


/**
 * End Global Variables
 
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", function(){

for(let i = 0; i<counter; i++){
    const data = sections[i].getAttribute("data-nav");
    const list = document.createElement('li');
    const child = document.createElement('a');
    const title = document.createTextNode(data);
    child.appendChild(title);
    child.href = "#section"+(i+1);
    list.appendChild(child);
    parent.appendChild(list);
}  
    });

// Scroll to section on link click
document.addEventListener("DOMContentLoaded", function(){
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
    });
// Set sections as active

document.addEventListener("scroll", function(e){
    const viewport = window.scrollY;
    switch(viewport){
        case 471:{
            s1.classList.add("your-active-class");
            s2.classList.remove("your-active-class");
            s3.classList.remove("your-active-class");
            s4.classList.remove("your-active-class");
            s5.classList.remove("your-active-class");
            break;
        }
        case 1041:{
            s1.classList.remove("your-active-class");
            s2.classList.add("your-active-class");
            s3.classList.remove("your-active-class");
            s4.classList.remove("your-active-class");
            s5.classList.remove("your-active-class");
            break;
        }
        case 1612:{
            s1.classList.remove("your-active-class");
            s2.classList.remove("your-active-class");
            s3.classList.add("your-active-class");
            s4.classList.remove("your-active-class");
            s5.classList.remove("your-active-class");
            break;
        }
        case 2182:{
            s1.classList.remove("your-active-class");
            s2.classList.remove("your-active-class");
            s3.classList.remove("your-active-class");
            s4.classList.add("your-active-class");
            s5.classList.remove("your-active-class");
            break;
        }
        case 2753:{
            s1.classList.remove("your-active-class");
            s2.classList.remove("your-active-class");
            s3.classList.remove("your-active-class");
            s4.classList.remove("your-active-class");
            s5.classList.add("your-active-class");
            break; 
        }
            
    }
});
    










