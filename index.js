// My email template id: template_uqvjgoo
// Public Key: USsx3lKedIdSaEmK7
// Gmail services id: service_i11quoa
let isModalOpen = false; 
let contrastToggle = false;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * 0.02;
    const y = event.clientY * 0.02;

    for(let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
    document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "service_i11quoa",
            "template_uqvjgoo",
            event.target,
            "a9fGiyqY8ljCFtSfP"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly at dmdyer82@gmail.com");
        })
}

function toggleModal() {
    isModalOpen = !isModalOpen;
    if(isModalOpen) {
        isModalOpen = true;
        return document.body.classList.remove("modal__open")
    }
    isModalOpen = false;
    document.body.classList += " modal__open"
}

