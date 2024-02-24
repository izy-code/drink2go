const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 975;
const SLIDER_STEP = 1;
const SLIDER_MIN_THUMB_START = 0;
const SLIDER_MAX_THUMB_START = 900;
const SLIDER_INIT_UPDATES_COUNT_MAX = 2;

const formNode = document.querySelector('.catalog__form');
const sliderNode = formNode.querySelector('.form__range-slider');
const minPriceInputNode = formNode.querySelector('.form__input--min-price');
const maxPriceInputNode = formNode.querySelector('.form__input--max-price');

let sliderUpdatesCount = 0;

const onPriceInputValueChange = () => {
  sliderNode.noUiSlider.set([minPriceInputNode.value, maxPriceInputNode.value]);
};

const initRangeSlider = () => {
  noUiSlider.create(sliderNode, {
    range: {
      min: SLIDER_MIN_VALUE,
      max: SLIDER_MAX_VALUE,
    },
    start: [SLIDER_MIN_THUMB_START, SLIDER_MAX_THUMB_START],
    step: SLIDER_STEP,
    connect: true,
    format: {
      to: (value) => Math.round(value).toString(),
      from: (value) => parseFloat(value)
    },
  });

  const minPriceHandle = sliderNode.querySelector('[data-handle="0"]');
  const maxPriceHandle = sliderNode.querySelector('[data-handle="1"]');

  minPriceHandle.setAttribute('aria-label', 'Ползунок минимальной цены');
  maxPriceHandle.setAttribute('aria-label', 'Ползунок максимальной цены');

  sliderNode.noUiSlider.on('update', () => {
    const effectSliderValues = sliderNode.noUiSlider.get();

    if (sliderUpdatesCount > SLIDER_INIT_UPDATES_COUNT_MAX) {
      minPriceInputNode.value = effectSliderValues[0];
      maxPriceInputNode.value = effectSliderValues[1];
    } else {
      sliderUpdatesCount += 1;
    }
  });

  formNode.addEventListener('reset', () => {
    sliderNode.noUiSlider.set([SLIDER_MIN_THUMB_START, SLIDER_MAX_THUMB_START]);
  });

  minPriceInputNode.addEventListener('change', onPriceInputValueChange);
  maxPriceInputNode.addEventListener('change', onPriceInputValueChange);
};

export { initRangeSlider };
