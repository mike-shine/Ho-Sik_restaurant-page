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
homeTab.addEventListener('click', () => {
  contentGoesHere.innerHTML = '';
  // switchActiveTab('Home');
  homePage();
});
allTabs.appendChild(homeTab);

const menuTab = document.createElement('button');
menuTab.classList.add('tab');
menuTab.textContent = 'Menu';
menuTab.addEventListener('click', () => {
  contentGoesHere.innerHTML = '';
  // switchActiveTab('Menu');
  menu();
});
allTabs.appendChild(menuTab);

const contactTab = document.createElement('button');
contactTab.classList.add('tab');
contactTab.textContent = 'Contact Us';
contactTab.addEventListener('click', () => {
  contentGoesHere.innerHTML = '';
  // console.log(document.getElementsByClassName('tab')[0].textContent);
  // switchActiveTab('Contact Us');
  contactUs();

});
allTabs.appendChild(contactTab);

const everythingBelowTabs = document.createElement('div');
everythingBelowTabs.setAttribute('id', 'contentGoesHere');
everythingBelowTabs.setAttribute('class', 'tabContent');
contentDiv.appendChild(everythingBelowTabs);





  // iterate through, set all style displays to none
  // if 'active' is found in classList
  // replace with empty string?

  // const switchActiveTab = function(newTab) {
  //   const tabs = [document.getElementsByClassName('tab')];
  //   tabs.forEach((tab) => {
  //     if ([tab.classList].includes('active')) {
  //       [tab.classList].replace('active', '');
  //     }
  //     if (tab.textContent === newTab) {
  //       [tab.classList].add('active');
  //     }
  //   });
  // }




/* Tab switching logic */

window.addEventListener('DOMContentLoaded', function() {
  // switchActiveTab('Home');
  homePage();
});



/*  Ideas to implement if time permits

 - *IMPORTANT* Add meat selection option below Entree heading
 - Menu soup section: Soup of the day on daily rotation for discount
 - For fried rice, etc, instead of separate items for adding meat, small text below states you can add given amount for a certain price
 - Better layout than straight top to bottom (see China House example on MustHaveMenus)
 - Item descriptions for Chef Specials
 - Undercooked food warning at the bottom of the page
 - Family style dinner combo section
*/