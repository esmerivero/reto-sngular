const inputToChange = document.getElementById('input-to-change');
const newText = document.getElementById('text-to-change');
const changeStyle = document.getElementById('change-style');

const changeInput = () => {
    newText.innerHTML = `${inputToChange.value}`
}

changeStyle.addEventListener('click', () => {
    newText.setAttribute('class', 'style-changed');
});