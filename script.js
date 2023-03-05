const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const content = document.querySelector('.contents');
const thank = document.querySelector('.thank');
const text = document.querySelector('#text');

submit.addEventListener('click', (even)=>{
    even.preventDefault();
    const feedback = form.feed.value;
    content.style.display = 'none';

    content.classList.add('hiden');
    thank.classList.remove('hiden');

    text.innerHTML = `You selected ${feedback} out of 5`;

});
