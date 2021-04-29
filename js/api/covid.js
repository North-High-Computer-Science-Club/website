const countryDataItems = document.getElementById('country-data-items');
const loadingSpinner = document.getElementById('loading-spinner');
const searchedCountry = document.getElementById('country');
const covidImgWrapper = document.getElementById('covid-img-wrapper');
const noResultsFound = document.getElementById('no-results-found');

const hideSpinner = () => (loadingSpinner.style.display = 'none');
const deleteInput = () => (searchedCountry.value = null);
const makeBlock = (element) => (element.style.display = 'block');
const hideElement = (element) => (element.style.display = 'none');
const deleteChildren = (element) => (element.innerHTML = null);
const createElement = (element) => document.createElement(element);
const setText = (element, text) => (element.textContent = text);

const fetchCovidStatistics = async () => {
  deleteChildren(countryDataItems);
  hideElement(countryDataItems);
  makeBlock(loadingSpinner);

  const response = await fetch('https://api.covid19api.com/summary');
  const results = await response.json();

  for (let i = 0; i < results['Countries'].length; i++) {
    if (i === results['Countries'].length - 1) {
      setText(
        noResultsFound,
        `No Results Found For '${searchedCountry.value.trim()}'`
      );

      hideSpinner();
      deleteInput();

      makeBlock(covidImgWrapper);
      makeBlock(noResultsFound);

      return;
    }
    if (
      results['Countries'][i]['Country'].toUpperCase() ===
      searchedCountry.value.trim().toUpperCase()
    ) {
      generateData(Object.entries(results['Countries'][i]));
      hideElement(noResultsFound);

      break;
    }
  }
};

const generateData = (countryArr) => {
  countryArr.forEach(([key, value]) => {
    if (key === 'ID' || key === 'Premium' || key === 'Slug') {
      return;
    }

    const dataItemWrapper = createElement('li');
    const dataKey = createElement('p');
    const dataValue = createElement('p');

    dataKey.textContent = `${key}: `;
    dataValue.textContent = value;

    dataItemWrapper.className = 'country-data-wrapper';
    dataKey.className = 'country-data-key';
    dataValue.className = 'country-data-value';

    dataItemWrapper.append(dataKey);
    dataItemWrapper.append(dataValue);

    countryDataItems.appendChild(dataItemWrapper);
  });

  makeBlock(countryDataItems);
  deleteInput();
  hideSpinner();
  hideElement(covidImgWrapper);
};
