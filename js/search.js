const searchField = document.getElementById('search');
const helpfulLinks = document.getElementById('helpful-links');
const modalTitle = document.getElementById('modal-title');
const resultCount = document.getElementById('result-count');

const links = () => [
  { name: 'Home', file: 'index.htm' },
  { name: 'Contact', file: 'contact.htm' },
  { name: 'About', file: 'about.htm' },
  { name: 'COVID-19 Tracker', file: 'covid.htm' },
];

const noLinksFoundHandler = () => (helpfulLinks.textContent = 'Nothing Found!');

const filterResults = (HTMLPath = 'page') => {
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
          link.name.toUpperCase().includes(searchedValue.toUpperCase()) ||
          searchedValue.toUpperCase().includes(link.name.toUpperCase())
      )
      .forEach((matchingLink) => {
        const helpfulLink = document.createElement('a');
        const helpfulLinkWrapper = document.createElement('li');

        helpfulLink.className = 'helpful-link';
        helpfulLinkWrapper.className = 'helpful-link-wrapper';

        if (HTMLPath === 'index') {
          helpfulLink.href = `./pages/${matchingLink.file}`;
        } else {
          if (matchingLink.name === 'Home') {
            helpfulLink.href = `../${matchingLink.file}`;
          } else {
            helpfulLink.href = `./${matchingLink.file}`;
          }
        }

        helpfulLink.textContent = matchingLink.name;

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
