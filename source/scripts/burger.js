const headerNode = document.querySelector('.header');
const navNode = document.querySelector('.header__nav');
const burgerButtonNode = headerNode.querySelector('.js-toggle-button');
const burgerButtonTextNode = burgerButtonNode.querySelector('.visually-hidden');

const onBurgerButtonClick = () => {
  if (headerNode.classList.contains('header--js-menu-opened')) {
    burgerButtonTextNode.textContent = 'Открыть меню';
  } else {
    burgerButtonTextNode.textContent = 'Закрыть меню';
  }

  headerNode.classList.toggle('header--js-menu-opened');
  navNode.classList.toggle('nav--js-menu-opened');
};

const addBurgerHandler = () => {
  burgerButtonNode.addEventListener('click', onBurgerButtonClick);
};

export { addBurgerHandler };
