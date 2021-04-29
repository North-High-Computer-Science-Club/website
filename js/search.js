const searchField = document.getElementById('search');
const helpfulLinks = document.getElementById('helpful-links');
const modalTitle = document.getElementById('modal-title');
const resultCount = document.getElementById('result-count');

const links = () => ['Home', 'Contact', 'About'];

const noLinksFoundHandler = () => (helpfulLinks.textContent = 'Nothing Found!');

const filterResults = () => {
  helpfulLinks.innerHTML = null;

  const searchedValue = searchField.value.trim();

  if (!searchedValue) {
    modalTitle.textContent = `Helpful Links Found For ''`;
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
        helpfulLink.href = `./pages/${matchingLink.toLowerCase()}.htm`;

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
