const navSlider = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.link');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav_active');
        burger.classList.toggle('toggle');
    });

    
}

navSlider();


let title = document.querySelector('.myName');
let name = 'Om Patel | The Jr. Developer';
let index = 1;

const typeWriter = ()=>{
    let new_name = name.slice(0, index);
    title.innerText = new_name;

    index > name.length ? index = 1 : index++;
    // index++;

    setTimeout(()=>{
        typeWriter()
    }, 200);
}

typeWriter();