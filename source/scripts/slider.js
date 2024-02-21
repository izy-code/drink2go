const sliderNode = document.querySelector('.slider');
const slideNodes = sliderNode.querySelectorAll('.slide');
const buttonPrevNode = sliderNode.querySelector('.slider-button-prev');
const buttonNextNode = sliderNode.querySelector('.slider-button-next');
const paginationNode = sliderNode.querySelector('.slider-pagination');
const paginationButtonNodes = paginationNode.querySelectorAll('.slider__pagination-btn');

let currentSlideNumber = 0;

const handleSlideSwitch = (newShownSlideNumber) => {
  slideNodes[currentSlideNumber].classList.remove('slide--current');
  paginationButtonNodes[currentSlideNumber].classList.remove('slider__pagination-btn--current');
  paginationButtonNodes[currentSlideNumber].disabled = false;
  currentSlideNumber = newShownSlideNumber;
  slideNodes[currentSlideNumber].classList.add('slide--current');
  paginationButtonNodes[currentSlideNumber].classList.add('slider__pagination-btn--current');
  paginationButtonNodes[currentSlideNumber].disabled = true;

  buttonNextNode.disabled = false;
  buttonPrevNode.disabled = false;

  if (currentSlideNumber === 0) {
    buttonPrevNode.disabled = true;
  }

  if (currentSlideNumber === slideNodes.length - 1) {
    buttonNextNode.disabled = true;
  }
};

const onButtonNextClick = () => {
  handleSlideSwitch(currentSlideNumber + 1);
};

const onButtonPrevClick = () => {
  handleSlideSwitch(currentSlideNumber - 1);
};

const onPaginationClick = (evt) => {
  const paginationButtonNode = evt.target.closest('.slider__pagination-btn');

  if (paginationButtonNode) {
    const newShownSlideNumber = Array.from(paginationButtonNodes).indexOf(paginationButtonNode);

    handleSlideSwitch(newShownSlideNumber);
  }
};

const addSliderHandlers = () => {
  buttonPrevNode.addEventListener('click', onButtonPrevClick);
  buttonNextNode.addEventListener('click', onButtonNextClick);
  paginationNode.addEventListener('click', onPaginationClick);
};

export { addSliderHandlers };

