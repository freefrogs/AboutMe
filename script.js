document.addEventListener('DOMContentLoaded', function() {
    //PORTFOLIO

    //CONTACT
    const emailButton = document.querySelector('.emailButton');
    const email = document.querySelector('.email');

    emailButton.addEventListener('click', function() {
        const text = 'justyna.birenacka.1986'
        email.innerText = `${text}@gmail.com`;
    });
});