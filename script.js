let items = document.querySelectorAll('.pagination__item');

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        items.forEach((item) => {
            item.classList.remove('active');
        });
        items[index].classList.add('active');
    });
});