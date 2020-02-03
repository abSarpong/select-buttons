let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (!button.classList.contains('selected')) {
            button.classList.add('selected');
            let option = button.value;
            console.log(option);
        } else {
            button.classList.remove('selected');

        }
    })
}