import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    if (email === '' || message === '') {
        alert('Все поля должны быть заполнены!');
    }
    const formData = new FormData(feedbackForm);

    formData.forEach((value, name) => console.log(value, name));
    localStorage.removeItem('feedback-form-state');
    feedbackForm.reset();
});

feedbackForm.addEventListener(
    'input',
    throttle(event => {
        let parsedFilter = localStorage.getItem('feedback-form-state');
        parsedFilter = parsedFilter ? JSON.parce(parsedFilter) : {};
        parsedFilter[event.target.name] = event.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(parsedFilter));
    }, 500)
);