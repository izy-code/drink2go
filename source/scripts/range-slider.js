const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 975;
const SLIDER_STEP = 1;
const SLIDER_MIN_THUMB_START = 0;
const SLIDER_MAX_THUMB_START = 900;
const SLIDER_INIT_UPDATES_COUNT_MAX = 2;

const sliderNode = document.querySelector('.form__range-slider');
const minPriceInputNode = document.querySelector('.form__input--min-price');
const maxPriceInputNode = document.querySelector('.form__input--max-price');

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

  sliderNode.noUiSlider.on('update', () => {
    const effectSliderValues = sliderNode.noUiSlider.get();

    if (sliderUpdatesCount > SLIDER_INIT_UPDATES_COUNT_MAX) {
      minPriceInputNode.value = effectSliderValues[0];
      maxPriceInputNode.value = effectSliderValues[1];
    } else {
      sliderUpdatesCount += 1;
    }
  });

  minPriceInputNode.addEventListener('change', onPriceInputValueChange);
  maxPriceInputNode.addEventListener('change', onPriceInputValueChange);
};

export { initRangeSlider };
