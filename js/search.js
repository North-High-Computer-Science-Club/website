const searchField = document.getElementById('search');
const helpfulLinks = document.getElementById('helpful-links');
const modalTitle = document.getElementById('modal-title');
const resultCount = document.getElementById('result-count');

const links = () => ['Home', 'Contact', 'About', 'COVID-19 Tracker~/api/covid'];

const noLinksFoundHandler = () => (helpfulLinks.textContent = 'Nothing Found!');

const filterResults = (HTMLType = 'page') => {
  helpfulLinks.innerHTML = null;
  resultCount.textContent = null;

  const searchedValue = searchField.value.trim();

  if (!searchedValue || searchedValue === '~' || searchedValue === '/') {
    searchedValue === ''
      ? (modalTitle.textContent = `Helpful Links Found For ''`)
      : (modalTitle.textContent = `Helpful Links Found For '${searchedValue}'`);
    noLinksFoundHandler();
  } else {
    modalTitle.textContent = `Helpful Links Found For '${searchedValue}'`;

    links()
      .filter(
        (link) =>
          link.toUpperCase().includes(searchedValue.toUpperCase()) ||
          searchedValue.toUpperCase().includes(link.toUpperCase())
      )
      .forEach((matchingLink) => {
        const helpfulLink = document.createElement('a');
        const helpfulLinkWrapper = document.createElement('li');

        helpfulLink.className = 'helpful-link';
        helpfulLinkWrapper.className = 'helpful-link-wrapper';

        helpfulLink.textContent = matchingLink;

        if (matchingLink.includes('~')) {
          helpfulLink.href = `./pages${
            matchingLink.toLowerCase().split('~')[1]
          }.htm`;
          helpfulLink.textContent = matchingLink.split('~')[0];
        } else {
          helpfulLink.href = `./pages/${matchingLink.toLowerCase()}.htm`;
        }

        helpfulLinkWrapper.append(helpfulLink);
        helpfulLinks.appendChild(helpfulLinkWrapper);
      });

    helpfulLinks.childElementCount === 0 ? noLinksFoundHandler() : null;
  }

  helpfulLinks.childElementCount === 0
    ? null
    : (resultCount.textContent = `Result Count: ${helpfulLinks.childElementCount}`);

  searchField.value = null;
};
