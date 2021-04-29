/* Last edit made by Alex Khazzam on 4/15/21 
    ----------------------------------------
    Enabled club text to write across the screen 
*/

const clubName = document.getElementById('club-name');

let char = 0;
const text = "Great Neck North High's Computer Science Club";

const printClubName = () => {
  setTimeout(() => {
    clubName.innerHTML += text.charAt(char);
    char++;
    if (char !== text.length) {
      printClubName();
    }
  }, 50);
};

printClubName();
