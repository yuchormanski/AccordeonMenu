function reveal() {

    const menu = document.getElementById('menu');
    const view = document.querySelector('#rowTwo');
    menu.addEventListener('mousedown', displayBloc);
    menu.addEventListener('mouseup', openMenu);

    function displayBloc(event) {
        if (view.style.display === 'block') {
            view.style.display = 'none';
        } else {
            view.style.display = 'block';
        }

    }
    function openMenu(event) {
        view.style.color = 'black'

    }

}