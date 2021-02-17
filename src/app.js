import homePage from './homePage.js';
import contactUs from './contactUs.js';
import menu from './menu.js';



/* Tab elements and event listeners */

const contentDiv = document.getElementById('content');

const allTabs = document.createElement('div');
allTabs.classList.add('allTabs');
contentDiv.appendChild(allTabs);

const homeTab = document.createElement('button');
homeTab.classList.add('tab');
homeTab.textContent = 'Home';
homeTab.addEventListener('click', (e) => {
  contentGoesHere.innerHTML = '';
  e.preventDefault();
  fadeInContentandActivateTab(homeTab, homePage);
});
allTabs.appendChild(homeTab);

const menuTab = document.createElement('button');
menuTab.classList.add('tab');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', (e) => {
  contentGoesHere.innerHTML = '';
  e.preventDefault();
  fadeInContentandActivateTab(menuTab, menu);
}, false);
allTabs.appendChild(menuTab);

const contactTab = document.createElement('button');
contactTab.classList.add('tab');
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', (e) => {
  contentGoesHere.innerHTML = '';
  e.preventDefault();
  fadeInContentandActivateTab(contactTab, contactUs);
}, false);
allTabs.appendChild(contactTab);




/* Tab content structural elements and tab switching function  */

const everythingBelowTabs = document.createElement('div');
everythingBelowTabs.setAttribute('id', 'contentGoesHere');
everythingBelowTabs.setAttribute('class', 'tabContent');
contentDiv.appendChild(everythingBelowTabs);

function fadeInContentandActivateTab(tabName, pageName) {
  everythingBelowTabs.classList.remove('runAnimation');
  const tabs = [document.getElementsByClassName('tab')];
  tabs.forEach((tab) => {
    tab[0].classList.remove('active');
    tab[1].classList.remove('active');
    tab[2].classList.remove('active');
  })
  void everythingBelowTabs.offsetHeight;
  everythingBelowTabs.classList.add('runAnimation');
  tabName.classList.add('active');
  pageName();
}

/* Tab switching logic */

window.addEventListener('DOMContentLoaded', function() {
  fadeInContentandActivateTab(homeTab, homePage);
});



/*  Ideas to implement if time permits

 - *IMPORTANT* Add meat selection option below Entree heading

 - Item descriptions for Chef Specials

 - For fried rice, etc, instead of separate items for adding meat, small text below states you can add given amount for a certain price

 - Image carousel on homepage

 - Family style dinner combo section

 - Menu soup section: Soup of the day on daily rotation for discount

 - Better layout than straight top to bottom (see China House example on MustHaveMenus)

 - Undercooked food warning at the bottom of the page

*/