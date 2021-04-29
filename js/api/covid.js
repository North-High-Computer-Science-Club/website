const fetchCovidStatistics = async () => {
  const searchedCountry = document.getElementById('country');

  const response = await fetch('https://api.covid19api.com/summary');
  const results = await response.json();

  for (let i = 0; i < results['Countries'].length; i++) {
    if (
      results['Countries'][i]['Country'].toUpperCase() ===
      searchedCountry.value.trim().toUpperCase()
    ) {
      generateData(Object.entries(results['Countries'][i]));
      break;
    }
  }
};

const generateData = (countryArr) => {
  countryArr.forEach(([key, value]) => {
    if (key === 'ID' || key === 'Premium' || key === 'Slug') {
      return;
    }

    const countryDataItems = document.getElementById('country-data-items');

    const dataItemWrapper = document.createElement('li');
    const dataKey = document.createElement('p');
    const dataValue = document.createElement('p');

    dataKey.textContent = `${key}: `;
    dataValue.textContent = value;

    dataItemWrapper.className = 'country-data-wrapper';
    dataKey.className = 'country-data-key';
    dataValue.className = 'country-data-value';

    dataItemWrapper.append(dataKey);
    dataItemWrapper.append(dataValue);

    countryDataItems.appendChild(dataItemWrapper);

    countryDataItems.style.display = 'block';
  });
};
