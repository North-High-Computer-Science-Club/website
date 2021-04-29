/*
    Edit made by Alex Khazzam on 3/5/2021
    -------------------------------------
    - Making nav links write across the page
    - DO NOT WORRY ABOUT UNDERSTANDING THE CODE ON THIS PAGE! THIS IS JUST FOR SHOW, AND PROVIDES NO FUNCTIONALITY TO THE WEBSITE EXCEPT MAKING IT MORE DYNAMIC. 
*/

const aboutLink = document.getElementById('about');
const membersLink = document.getElementById('members');
const contactLink = document.getElementById('contact');
const websiteLink = document.getElementById('website');
const chatLiveLink = document.getElementById('chat-live');

const printLink = (linkId, link, iteration, printNextLink) => {
  setTimeout(() => {
    linkId.textContent += link.charAt(iteration);
    iteration++;
    if (iteration !== link.length) {
      printLink(linkId, link, iteration, printNextLink);
    } else {
      printNextLink(); // Callback function
    }
  }, 50);
};

printLink(aboutLink, '</About>', 0, () => {
  printLink(membersLink, '</Members>', 0, () => {
    printLink(contactLink, '</Contact>', 0, () => {
      printLink(websiteLink, '</Website>', 0, () => {
        printLink(chatLiveLink, '</Chat Live>', 0, () => {
          console.log('Callback hell complete...');
        });
      });
    });
  });
});
