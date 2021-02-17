(()=>{"use strict";const e=()=>{const e=document.getElementById("contentGoesHere"),t=(document.createElement("br"),document.createElement("div"));t.classList.add("headerParent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("bodyParent"),e.appendChild(n);const a=document.createElement("h1");a.classList.add("headerItem"),a.textContent="好好食 中国餐厅 (Ho Ho Sik Chinese Restaurant)",t.appendChild(a);const s=document.createElement("div");s.classList.add("pictureParent","bodyItem"),n.appendChild(s);const d=document.createElement("img");d.src="../public/dimSumPic.jpg",d.classList.add("pictureItem"),d.style.width="300px",d.style.height="auto",s.appendChild(d);const o=document.createElement("img");o.src="../public/shrimpPic.jpg",o.classList.add("pictureItem"),o.style.width="300px",o.style.height="auto",s.appendChild(o);const i=document.createElement("img");i.src="../public/baoPic.jpg",i.classList.add("pictureItem"),i.style.width="200px",i.style.height="auto",s.appendChild(i);const c=document.createElement("div");c.classList.add("bodyItem","introTextParent"),n.appendChild(c);const m=document.createElement("h2");m.classList.add("introTextItem"),m.textContent="Welcome to the website of Ho Ho Sik Chinese Restaurant!",m.style.fontStyle="italic",c.appendChild(m);const r=document.createElement("p");r.classList.add("introTextItem"),r.setAttribute("style","white-space: pre;"),r.textContent="We offer our customers delicious, authentically prepared southern Chinese cuisine at a reasonable price. \r\n",r.textContent+="Available for delivery on UberEats, GrubHub, PostMates, and Fantuan. For in-store pickup, please give us a call to place your order. \r\n",r.textContent+="Dim Sum: 8:00 A.M. - 1:30 P.M. \n    *(only on Friday, Saturday, and Sunday)*\nLunch: 11:00 A.M. - 4:30 P.M. \nDinner: 4:30 P.M. - 10:00 P.M.",c.appendChild(r)},t=()=>{const e=document.getElementById("contentGoesHere"),t=document.createElement("div");t.classList.add("mainContainer"),e.appendChild(t);const n=document.createElement("div");n.classList.add("headerParent"),t.appendChild(n);const a=document.createElement("div");a.classList.add("bodyParent"),t.appendChild(a);const s=document.createElement("h1");s.classList.add("headerItem"),s.textContent="联系我们 (Contact Us)",n.appendChild(s);const d=document.createElement("div");d.classList.add("bodyItem"),a.appendChild(d);const o=document.createElement("div");o.classList.add("headingContainer"),d.appendChild(o);const i=document.createElement("h2");i.classList.add("headingItem"),i.textContent="Hours of Operation",o.appendChild(i);const c=document.createElement("div");c.classList.add("textContainer"),d.appendChild(c);const m=document.createElement("p");m.classList.add("textItem"),m.setAttribute("style","white-space: pre;"),m.textContent="Monday: CLOSED \r\nTuesday: 11:00 A.M. - 10:00 P.M. \r\nWednesday: 11:00 A.M. - 10:00 P.M. \r\nThursday: 11:00 A.M. - 10:00 P.M. \r\nFriday: 8:00 A.M. - 10:00 P.M. \r\nSaturday: 8:00 A.M. - 10:00 P.M. \r\nSunday: 8:00 A.M. - 10:00 P.M. \r\n",c.appendChild(m);const r=document.createElement("p");r.classList.add("textItem"),r.setAttribute("style","white-space: pre;"),r.textContent="Dim Sum: 8:00 A.M. - 1:30 P.M. \n    *(only on Friday, Saturday, and Sunday)*\nLunch: 11:00 A.M. - 4:30 P.M. \nDinner: 4:30 P.M. - 10:00 P.M.",r.style.textDecoration="underline",c.appendChild(r);const l=document.createElement("div");l.classList.add("bodyItem"),a.appendChild(l);const u=document.createElement("div");u.classList.add("headingContainer"),l.appendChild(u);const p=document.createElement("h2");p.classList.add("headingItem"),p.textContent="Location/Contact",u.appendChild(p);const h=document.createElement("div");h.classList.add("textContainer"),l.appendChild(h);const I=document.createElement("p");I.classList.add("textItem"),I.setAttribute("style","white-space: pre;"),I.textContent="Street Address: 418 Maynard Ave S, Seattle, WA 98104 \r\nPhone Number: 206-000-0000 \r\nWe are located in the heart of the International District (ID) of Seattle, \r\nwalking distance to King Station, Hing Hay Park, Pioneer Square, \r\nLumen Field, and more.",h.appendChild(I)},n=()=>{const e=document.getElementById("contentGoesHere");class t{constructor(e,t,n){this.name=e,this.price=t,this.description=n}}const n=document.createElement("div");n.classList.add("headerParent"),e.appendChild(n);const a=document.createElement("div");a.classList.add("bodyParent"),e.appendChild(a);const s=document.createElement("h1");s.classList.add("headerItem"),s.textContent="菜单 (Menu)",n.appendChild(s);const d=document.createElement("div");d.classList.add("bodyItem","sectionParent"),a.appendChild(d);const o=document.createElement("h2");o.classList.add("sectionItem"),o.textContent="Appetizers",d.appendChild(o);const i=document.createElement("div");i.classList.add("sectionItem"),d.appendChild(i),P(new t("House Egg Roll","1.79"),i,"menuItem","menuItemName"),P(new t("Pan-Fried Pork Dumplings (8)","7.99"),i,"menuItem","menuItemName"),P(new t("Beef on Sticks (4)","9.99"),i,"menuItem","menuItemName"),P(new t("Edamame","3.99"),i,"menuItem","menuItemName"),P(new t("Sweet and Sour Ribs","7.99"),i,"menuItem","menuItemName");const c=document.createElement("div");c.classList.add("bodyItem","sectionParent"),a.appendChild(c);const m=document.createElement("h2");m.classList.add("sectionItem"),m.textContent="Soups",c.appendChild(m);const r=document.createElement("div");r.classList.add("sectionItem"),c.appendChild(r),P(new t("Hot and Sour Soup","4.49"),r,"menuItem","menuItemName"),P(new t("Won Ton Soup","4.49"),r,"menuItem","menuItemName"),P(new t("Seafood Bean Curd Soup","4.49"),r,"menuItem","menuItemName"),P(new t("Vegetable Soup","3.99"),r,"menuItem","menuItemName");const l=document.createElement("div");l.classList.add("bodyItem","sectionParent"),a.appendChild(l);const u=document.createElement("h2");u.classList.add("sectionItem"),u.textContent="Noodles & Rice",l.appendChild(u);const p=document.createElement("div");p.classList.add("sectionItem"),l.appendChild(p),P(new t("Vegetarian Chow Mein","8.99","add chicken - $2 \nadd BBQ pork - $2 \nadd shrimp - $2.50"),p,"menuItem","menuItemName","menuItemDescription"),P(new t("Vegetarian Fried Rice","7.99","add chicken - $2 \nadd BBQ pork - $2 \nadd shrimp - $2.50"),p,"menuItem","menuItemName","menuItemDescription"),P(new t("House Special Lo Mein","7.99"),p,"menuItem","menuItemName"),P(new t("Curry Beef Noodle","8.99"),p,"menuItem","menuItemName");const h=document.createElement("div");h.classList.add("bodyItem","sectionParent"),a.appendChild(h);const I=document.createElement("h2");I.classList.add("sectionItem"),I.textContent="Chef Specials",h.appendChild(I);const C=document.createElement("div");C.classList.add("sectionItem"),h.appendChild(C),P(new t("Ma Po Tofu","10.99","Spicy home-style sauce slow cooked with soft tofu, \npeas, and carrots"),C,"menuItem","menuItemName","menuItemDescription"),P(new t("Jalepeno Chicken","11.99","Jalepeno home-style sauce, thigh meat, green bell peppers, \nred bell peppers, and white onion"),C,"menuItem","menuItemName","menuItemDescription"),P(new t("Orange Sesame Beef","12.99","Sweet chili red-brown glaze, broccoli topped with  \norange peel"),C,"menuItem","menuItemName","menuItemDescription"),P(new t("Shrimp with Lobster Sauce","11.99","Creamy egg sauce, shrimp, water chestnuts, peas, \nand carrots"),C,"menuItem","menuItemName","menuItemDescription"),P(new t("Seafood Delight","15.99","White sauce, scallop, shrimp, imitation crab meat, \nbroccoli, snow peas, green bell peppers, mushroom, \nwater chestnuts, bamboo shoots, Chinese cabbage, \nbaby corn and carrots"),C,"menuItem","menuItemName","menuItemDescription"),P(new t("Salt and Black Pepper Squid","15.99","Sauteed squid with green bell peppers, red bell \npeppers, and white onion"),C,"menuItem","menuItemName","menuItemDescription");const b=document.createElement("div");b.classList.add("bodyItem","sectionParent"),a.appendChild(b);const w=document.createElement("div");w.classList.add("sectionItem"),b.appendChild(w);const L=document.createElement("h2");L.classList.add("headingItem","mainHeading"),L.textContent="Classic Entrees",w.appendChild(L);const y=document.createElement("h5");y.classList.add("headingItem","subHeading"),y.setAttribute("style","white-space: pre;"),y.textContent="Choice of Veggie, Pork, Chicken, \nTofu, Shrimp (+$1), or Steak (+$2)",y.style.fontStyle="italic",w.appendChild(y);const E=document.createElement("div");E.classList.add("sectionItem"),b.appendChild(E),P(new t("Chow Mein","11.99","White sauce, bean sprouts, cabbages, celery, \ngreen and white onions, and bamboo shoots"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Moo Shu","11.99","Sweet brown sauce, broccoli, red bell \npeppers, snow peas, green bell peppers, white \nonion, mushroom, water chestnuts, bamboo shoots, \ncabbage, and baby corn"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Hunan","11.99","Chili brown sauce, broccoli, red bell \npeppers, snow peas, green bell peppers, \nwhite onion, mushroom, water chestnut, \nbamboo shoots, and Chinese cabbage"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Szechuan","11.99","Chili brown sauce, carrot, green onion, \ncelery, and bamboo shoots"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Garlic Sauce","10.99","Sweet chili brown sauce, red and \n green bell peppers, white onions, bamboo \nshoots, and carrots"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Black Bean Sauce","10.99","Spicy black bean sauce, red and \n green bell peppers, white onions, and bamboo shoots"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Peanut Kung Pao","11.99","Chili brown sauce, carrots, celery, water chestnuts, and \ngreen bell pepper, topped with peanuts"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Cashew","11.99","Brown sauce with mushrooms, carrots, celery, water \nchestnuts, and green bell pepper, topped with cashews"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Mongolian Style","10.99","Sweet Mongolian sauce with white and \ngreen onions"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Pepper Steak style","11.99","Brown sauce with white and green onion"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("General Tso's style","10.99","Sweet chili with red-brown glaze"),E,"menuItem","menuItemName","menuItemDescription"),P(new t("Orange Chicken style","11.99","Sweet chili with red-brown glaze orange drizzle"),E,"menuItem","menuItemName","menuItemDescription");const g=document.createElement("div");g.classList.add("bodyItem","sectionParent"),a.appendChild(g);const S=document.createElement("h2");S.classList.add("sectionItem"),S.textContent="Side Orders",g.appendChild(S);const v=document.createElement("p");function P(e,t,n,a,s){const d=e.name,o=e.price,i=e.description;let c=document.createElement("div");c.classList.add(n),t.appendChild(c);let m=document.createElement("p");m.classList.add(a),m.textContent=`${d} - $${o}`,c.appendChild(m);let r=document.createElement("p");r.classList.add(s),r.setAttribute("style","white-space: pre;"),r.textContent=i?`${i}`:"",c.appendChild(r)}v.classList.add("sectionItem"),v.setAttribute("style","white-space: pre;"),v.textContent="White or Brown Rice - $0.99 \nFried Rice (vegetarian) - $1.99 \nFried Rice (choice of chicken or pork) - $2.49 \nChinese Pickled Cucumber - $2.99 \nVegetable of the Day - $4.99  ",g.appendChild(v)},a=document.getElementById("content"),s=document.createElement("div");s.classList.add("allTabs"),a.appendChild(s);const d=document.createElement("button");d.classList.add("tab"),d.textContent="Home",d.addEventListener("click",(t=>{contentGoesHere.innerHTML="",t.preventDefault(),m(d,e)})),s.appendChild(d);const o=document.createElement("button");o.classList.add("tab"),o.textContent="Menu",o.addEventListener("click",(e=>{contentGoesHere.innerHTML="",e.preventDefault(),m(o,n)}),!1),s.appendChild(o);const i=document.createElement("button");i.classList.add("tab"),i.textContent="Contact Us",i.addEventListener("click",(e=>{contentGoesHere.innerHTML="",e.preventDefault(),m(i,t)}),!1),s.appendChild(i);const c=document.createElement("div");function m(e,t){c.classList.remove("runAnimation"),[document.getElementsByClassName("tab")].forEach((e=>{e[0].classList.remove("active"),e[1].classList.remove("active"),e[2].classList.remove("active")})),c.offsetHeight,c.classList.add("runAnimation"),e.classList.add("active"),t()}c.setAttribute("id","contentGoesHere"),c.setAttribute("class","tabContent"),a.appendChild(c),window.addEventListener("DOMContentLoaded",(function(){m(d,e)}))})();