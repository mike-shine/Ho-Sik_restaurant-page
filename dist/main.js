(()=>{"use strict";const e=()=>{const e=document.getElementById("contentGoesHere"),t=(document.createElement("br"),document.createElement("div"));t.classList.add("headerParent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("bodyParent"),e.appendChild(n);const d=document.createElement("h1");d.classList.add("headerItem"),d.textContent="好好食 中国餐厅 (Ho Ho Sik Chinese Restaurant)",t.appendChild(d);const a=document.createElement("div");a.classList.add("pictureParent","bodyItem"),n.appendChild(a);const s=document.createElement("img");s.src="../public/dimSumPic.jpg",s.classList.add("pictureItem"),s.style.width="300px",s.style.height="auto",a.appendChild(s);const c=document.createElement("img");c.src="../public/shrimpPic.jpg",c.classList.add("pictureItem"),c.style.width="300px",c.style.height="auto",a.appendChild(c);const o=document.createElement("img");o.src="../public/baoPic.jpg",o.classList.add("pictureItem"),o.style.width="200px",o.style.height="auto",a.appendChild(o);const i=document.createElement("div");i.classList.add("bodyItem","introTextParent"),n.appendChild(i);const r=document.createElement("h2");r.classList.add("introTextItem"),r.textContent="Welcome to the website of Ho Ho Sik Chinese Restaurant!",r.style.fontStyle="italic",i.appendChild(r);const l=document.createElement("p");l.classList.add("introTextItem"),l.setAttribute("style","white-space: pre;"),l.textContent="We offer our customers delicious, authentically prepared southern Chinese cuisine at a reasonable price. \r\n",l.textContent+="Available for delivery on UberEats, GrubHub, PostMates, and Fantuan. For in-store pickup, please give us a call to place your order. \r\n",l.textContent+="Dim Sum: 8:00 A.M. - 1:30 P.M \r\n Lunch: 11:00 A.M. - 4:30 P.M. \r\n Dinner: 4:30 P.M. - 10:00 P.M.",i.appendChild(l)},t=document.getElementById("content"),n=document.createElement("div");n.classList.add("allTabs"),t.appendChild(n);const d=document.createElement("button");d.classList.add("tab"),d.textContent="Home",d.addEventListener("click",(()=>{contentGoesHere.innerHTML="",e()})),n.appendChild(d);const a=document.createElement("button");a.classList.add("tab"),a.textContent="Menu",a.addEventListener("click",(()=>{contentGoesHere.innerHTML="",(()=>{const e=document.getElementById("contentGoesHere"),t=document.createElement("div");t.classList.add("headerParent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("bodyParent"),e.appendChild(n);const d=document.createElement("h1");d.classList.add("headerItem"),d.textContent="菜单 (Menu)",t.appendChild(d);const a=document.createElement("div");a.classList.add("bodyItem","sectionParent"),n.appendChild(a);const s=document.createElement("h2");s.classList.add("sectionItem"),s.textContent="Appetizers",a.appendChild(s);const c=document.createElement("p");c.classList.add("sectionItem"),c.setAttribute("style","white-space: pre;"),c.textContent="House Egg Roll - $1.79 \nPan-Fried Pork Dumplings (8) - $7.99 \nBeef on Sticks (4) - $9.99 \nEdamame - $3.99 \nSweet and Sour Ribs - $7.99",a.appendChild(c);const o=document.createElement("div");o.classList.add("bodyItem","sectionParent"),n.appendChild(o);const i=document.createElement("h2");i.classList.add("sectionItem"),i.textContent="Soups",o.appendChild(i);const r=document.createElement("p");r.classList.add("sectionItem"),r.setAttribute("style","white-space: pre;"),r.textContent="Hot and Sour Soup - $4.49 \nWon Ton Soup - $4.49 \nSeafood Bean Curd Soup - $4.49 \nVegetable Soup - $4.49",o.appendChild(r);const l=document.createElement("div");l.classList.add("bodyItem","sectionParent"),n.appendChild(l);const p=document.createElement("h2");p.classList.add("sectionItem"),p.textContent="Noodles & Rice",l.appendChild(p);const m=document.createElement("p");m.classList.add("sectionItem"),m.setAttribute("style","white-space: pre;"),m.textContent="Vegetarian Chow Mein - $8.99 \nBBQ Pork or Chicken Chow Mein - $10.99 \nShrimp Chow Mein - $11.49 \nHouse Special Lo Mein - $8.99 \nCurry Beef Noodle - $8.99 \nVegetarian Fried Rice (entrée size) - $7.99 \nChicken or Pork Fried Rice (entrée size) - $9.99",l.appendChild(m);const u=document.createElement("div");u.classList.add("bodyItem","sectionParent"),n.appendChild(u);const h=document.createElement("h2");h.classList.add("sectionItem"),h.textContent="Chef Specials",u.appendChild(h);const C=document.createElement("p");C.classList.add("sectionItem"),C.setAttribute("style","white-space: pre;"),C.textContent="Ma Po Tofu - $10.99 \nJalapeño Chicken - $11.99 \nOrange Sesame Beef - $12.99 \nShrimp with Lobster Sauce - $11.99 \nSeafood Delight - $15.99 \nSalt & Black Pepper Squid - $15.99  ",u.appendChild(C);const y=document.createElement("div");y.classList.add("bodyItem","sectionParent"),n.appendChild(y);const E=document.createElement("h2");E.classList.add("sectionItem"),E.textContent="Classic Entrees",y.appendChild(E);const L=document.createElement("p");L.classList.add("sectionItem"),L.setAttribute("style","white-space: pre;"),L.textContent="Chow Mein - $11.99 \nMoo Shu - $11.99 \nHunan - $11.99 \nSzechuan - $11.99 \nGarlic Sauce - $10.99 \nBlack Bean Sauce - $10.99 \nPeanut Kung Pao - $11.99 \nCashew - $11.99 \nMongolian - $10.99 \nPepper Steak Style - $11.99 \nGeneral Tso's Style - $10.99 \nOrange Chicken Style - $11.99 ",y.appendChild(L);const b=document.createElement("div");b.classList.add("bodyItem","sectionParent"),n.appendChild(b);const P=document.createElement("h2");P.classList.add("sectionItem"),P.textContent="Side Orders",b.appendChild(P);const S=document.createElement("p");S.classList.add("sectionItem"),S.setAttribute("style","white-space: pre;"),S.textContent="White or Brown Rice - $0.99 \nFried Rice (vegetarian) - $1.99 \nFried Rice (choice of chicken or pork) - $2.49 \nChinese Pickled Cucumber - $2.99 \nVegetable of the Day - $4.99  ",b.appendChild(S)})()})),n.appendChild(a);const s=document.createElement("button");s.classList.add("tab"),s.textContent="Contact Us",s.addEventListener("click",(()=>{contentGoesHere.innerHTML="",(()=>{const e=document.getElementById("contentGoesHere"),t=document.createElement("div");t.classList.add("headerParent"),e.appendChild(t);const n=document.createElement("div");n.classList.add("bodyParent"),e.appendChild(n);const d=document.createElement("h1");d.classList.add("headerItem"),d.textContent="联系我们 (Contact Us)",t.appendChild(d);const a=document.createElement("h2");a.classList.add("bodyItem"),a.textContent="Hours of Operation",n.appendChild(a);const s=document.createElement("p");s.classList.add("bodyItem"),s.setAttribute("style","white-space: pre;"),s.textContent="Monday: CLOSED \r\nTuesday: 11:00 A.M. - 10:00 P.M. \r\nWednesday: 11:00 A.M. - 10:00 P.M. \r\nThursday: 11:00 A.M. - 10:00 P.M. \r\nFriday: 8:00 A.M. - 10:00 P.M. \r\nSaturday: 8:00 A.M. - 10:00 P.M. \r\nSunday: 8:00 A.M. - 10:00 P.M. \r\n",n.appendChild(s);const c=document.createElement("p");c.classList.add("bodyItem"),c.setAttribute("style","white-space: pre;"),c.textContent="Dim Sum: 8:00 A.M. - 1:30 P.M. (only on Friday, Saturday, and Sunday)\r\n Lunch: 11:00 A.M. - 4:30 P.M. \r\n Dinner: 4:30 P.M. - 10:00 P.M.",c.style.textDecoration="underline",n.appendChild(c);const o=document.createElement("h2");o.classList.add("bodyItem"),o.textContent="Location/Contact",n.appendChild(o);const i=document.createElement("p");i.classList.add("bodyItem"),i.setAttribute("style","white-space: pre;"),i.textContent="Street Address: 418 Maynard Ave S, Seattle, WA 98104 \r\nPhone Number: 206-000-0000 \r\nWe are located in the heart of the International District (ID) of Seattle, \r\nwalking distance to King Station, Hing Hay Park, Pioneer Square, \r\nLumen Field, and more.",n.appendChild(i)})()})),n.appendChild(s);const c=document.createElement("div");c.setAttribute("id","contentGoesHere"),c.setAttribute("class","tabContent"),t.appendChild(c),window.addEventListener("DOMContentLoaded",(function(){e()}))})();