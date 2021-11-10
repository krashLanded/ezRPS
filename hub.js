const container = document.querySelector('.container');
const buttonStart = document.createElement('button');



buttonStart.classList.add('buttonStart');
buttonStart.textContent = 'Click to start!';
container.appendChild(buttonStart);


buttonStart.addEventListener('click', () => {
    buttonStart.remove();
    alert('Hello!');
});
