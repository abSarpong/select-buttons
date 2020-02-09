let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    let checked = document.createElement('i');
    checked.classList.add('fa', 'fa-check');

    button.addEventListener('click', function() {
        if (!button.classList.contains('selected')) {
            button.classList.add('selected');
            button.appendChild(checked);

            // let option = button.value;
            // console.log(option);
        } else {
            button.classList.remove('selected');
            button.removeChild(checked);
        }
    })
}