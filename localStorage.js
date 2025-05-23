"use strict";
/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/


const API = "/api"
const MAX_VALUE = 850;

localStorage.setItem("message", "Hello, LocalStorage!");
console.log(localStorage.getItem("message"));

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/

// JSON.stringify()
// JSON.parse()
const userSettings = {
  theme: "dark",
  language: "Spanish",
};

localStorage.setItem("userSettings", JSON.stringify(userSettings));
// Get userSettings
console.log(JSON.parse(localStorage.getItem("userSettings")).theme);

/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/

let favoriteBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

localStorage.setItem("books", JSON.stringify(favoriteBooks));
favoriteBooks.push({ title: "Harry Potter", author: "J.K. Rowling" });
localStorage.setItem("books", JSON.stringify(favoriteBooks));

const books = JSON.parse(localStorage.getItem("books"));
books.forEach((book) => {
  console.log(book.title);
});


const saveToLocalStorage = (key, object) => {
  // Tallentaa localStorageen key arvolla value
  localStorage.setItem(key, JSON.stringify(object));
};

// Kutsu täällä Funktio nimi, (EI JS Funktio)
saveToLocalStorage("books", favoriteBooks);

// console.log(JSON.parse(localStorage.getItem("books")));

/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    // SE yrittää ajaa tätä.
    console.log(JSON.parse(value));
    return JSON.parse(value);
  } catch {
    // Se siirtyy catch metodiin
    console.log(value);
    return value;
  }
};

getFromLocalStorage("books");
getFromLocalStorage("message");

/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

let userProfile = {
  username: "John Doe",
  email: "email@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

userProfile.preferences.theme = "dark";

saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

const shoppingList = {
  items: ["Milk", "Bread", "Eggs"],
};

saveToLocalStorage("shoppingList", shoppingList);

const addItemToList = (item) => {
  const list = getFromLocalStorage("shoppingList");
  console.log(list);
  list.items.push(item);
  saveToLocalStorage("shoppingList", list);
  console.log(list);
};

addItemToList("Cheese");

/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

let counter = {
  count: 0,
};
saveToLocalStorage("counter", counter);

const incrementCounter = () => {
  let inc = getFromLocalStorage("counter"); // Hakee olion 'counter'
  inc.count += 1; // Kasvattaa sen count arvo yhdellä
  saveToLocalStorage("counter", inc); // Tallentaa sen
  console.log(inc.count); // Logaa se
};

incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/

const tasks = [
  { id: 1, description: "Do laundry", completed: false },
  { id: 2, description: "Buy groceries", completed: false },
  { id: 3, description: "Pay bills", completed: false },
];
saveToLocalStorage("tasks", tasks);

const markTaskComplete = (taskId) => {
  const tasks = getFromLocalStorage("tasks");
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
  saveToLocalStorage("tasks", tasks);
  console.log(tasks);
};

markTaskComplete(2);

/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken 
LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

const clearLocalStorage = () => {
  localStorage.clear();
};

clearLocalStorage();
