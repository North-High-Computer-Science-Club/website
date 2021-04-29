const searchField = document.getElementById('search');
const helpfulLinks = document.getElementById('helpful-links');
const modalTitle = document.querySelector('.modal-title');

const links = ['Home', 'Contact', 'About'];

const filterResults = () => {
  const searchedValue = searchField.value.trim();

  if (!searchedValue) {
    modalTitle.textContent = `Helpful Links Found For ''`;
  } else {
    modalTitle.textContent = `Helpful Links Found For '${searchedValue}'`;
  }

  links
    .filter(
      (link) =>
        link.toUpperCase().includes(searchedValue.toUpperCase()) ||
        searchedValue.toUpperCase().includes(link.toUpperCase())
    )
    .forEach((matchingLink) => {
      const a = document.createElement('a');
      const li = document.createElement('li');

      a.textContent = matchingLink;
      a.href = `./pages/${matchingLink.toLowerCase()}.htm`;

      li.append(a);
      helpfulLinks.appendChild(li);
    });

  searchField.value = '';
};
