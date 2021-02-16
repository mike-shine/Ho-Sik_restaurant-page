import homePage from './homePage.js';
import contactUs from './contactUs.js';
import menu from './menu.js';

/* Tab content */

const contentDiv = document.getElementById('content');

const allTabs = document.createElement('div');
allTabs.classList.add('allTabs');
contentDiv.appendChild(allTabs);

const homeTab = document.createElement('button');
homeTab.classList.add('tab');
homeTab.textContent = 'Home';
// event listener goes here
allTabs.appendChild(homeTab);

const menuTab = document.createElement('button');
menuTab.classList.add('tab');
menuTab.textContent = 'Menu';
//event listener here
allTabs.appendChild(menuTab);

const contactTab = document.createElement('button');
contactTab.classList.add('tab');
contactTab.textContent = 'Contact Us';
//event listener here
allTabs.appendChild(contactTab);



/* Tab switching logic */

window.addEventListener('DOMContentLoaded', function() {
  homePage();
})

// homePage();

// contactUs();

// menu();


/*  Ideas to implement if time permits

 - *IMPORTANT* Add meat selection option below Entree heading
 - Menu soup section: Soup of the day on daily rotation for discount
 - For fried rice, etc, instead of separate items for adding meat, small text below states you can add given amount for a certain price
 - Better layout than straight top to bottom (see China House example on MustHaveMenus)
 - Item descriptions for Chef Specials
 - Undercooked food warning at the bottom of the page
 - Family style dinner combo section
*/