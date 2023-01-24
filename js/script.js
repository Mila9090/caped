window.addEventListener('DOMContentLoaded', () => {
    const like = document.querySelectorAll('.main__like'),
          links = document.querySelectorAll('.menu__link');

    links[0].classList.add('menu__link_active');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            links.forEach(link => {
                link.classList.remove('menu__link_active');
            });
            e.target.classList.add('menu__link_active');
        });
    });
    
   

    like.forEach(item => {
        if (item.getAttribute('data-value') === localStorage.getItem(item.getAttribute('data-value'))){
            item.classList.add('main__like_active');
        }
    });

    like.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('main__like_active');
            if (item.classList.contains('main__like_active')) {
                localStorage.setItem(e.target.getAttribute('data-value'), e.target.getAttribute('data-value'));
            } else {
                localStorage.removeItem(e.target.getAttribute('data-value'));
            }
        });
    });
});