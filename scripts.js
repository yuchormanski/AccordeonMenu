function reveal() {
    let view = document.querySelector('#rowTwo');
    if (view.style.display === 'none') {
        view.style.display = 'block';
    } else{
        view.style.display = 'none';
    }

}