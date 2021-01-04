document.addEventListener('DOMContentLoaded', function() {
    //PORTFOLIO
    const fillterButtons = document.querySelectorAll('.fillter_button');

    const filterPortfolio = (e) => {
        const category = ['.landingPage', '.complexWebsite', '.javaScript', '.react', '.redux', '.express', '.bootstrap', '.rwd'];
        const filtrCategory = e.target.dataset.filter;

        [...fillterButtons].forEach(button => {
            button.classList.remove('current');
        })
        e.target.classList.add('current');

        if (filtrCategory === '*') {
            console.log('all');
            category.forEach(project => {
                const elements = document.querySelectorAll(project);
                [...elements].forEach(element => {
                element.style.display = 'block';
                });
            });
        } else {
            console.log('other');
            category.forEach(project => {
                const elements = document.querySelectorAll(project);
                [...elements].forEach(element => {
                    element.style.display = 'none';
                });
            })
            const choosenElements = document.querySelectorAll(filtrCategory);
            [...choosenElements].forEach(element => {
                element.style.display = 'block';
            });
        }
    }

    [...fillterButtons].forEach(button => {
        button.addEventListener('click', filterPortfolio);
    });

    //CONTACT
    const emailButton = document.querySelector('.emailButton');
    const email = document.querySelector('.email');

    emailButton.addEventListener('click', function() {
        const text = 'j.z.biernacka'
        email.innerText = `${text}@gmail.com`;
    });
});