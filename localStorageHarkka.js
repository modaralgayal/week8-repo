// Tehtävä 1
localStorage.setItem("message", "Hello, LocalStorage!");
console.log(localStorage.getItem("message"));

// Tehtävä 2
const userSettings = {
  theme: "dark",
  language: "English",
};
localStorage.setItem("userSettings", JSON.stringify(userSettings));
const retrievedSettings = JSON.parse(localStorage.getItem("userSettings"));
console.log(retrievedSettings.theme);

// Tehtävä 3
const favoriteBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
const books = JSON.parse(localStorage.getItem("favoriteBooks"));
books.forEach((book) => console.log(book.title));

// Tehtävä 4
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
const testObject = { name: "Test", value: 123 };
saveToLocalStorage("testKey", testObject);
console.log(JSON.parse(localStorage.getItem("testKey")));

// Tehtävä 5
function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  try {
    console.log(JSON.parse(value));
  } catch {
    console.log(value);
  }
}
getFromLocalStorage("testKey");

// Tehtävä 6
let userProfile = {
  username: "john_doe",
  email: "john@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
userProfile = JSON.parse(localStorage.getItem("userProfile"));
userProfile.preferences.theme = "dark mode";
localStorage.setItem("userProfile", JSON.stringify(userProfile));
console.log(userProfile);

// Tehtävä 7
const shoppingList = {
  items: ["Milk", "Bread", "Eggs"],
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const list = JSON.parse(localStorage.getItem("shoppingList"));
  list.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(list));
  console.log(list);
}
addItemToList("Cheese");

// Tehtävä 8
let counter = { count: 0 };
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  let counter = JSON.parse(localStorage.getItem("counter"));
  counter.count += 1;
  localStorage.setItem("counter", JSON.stringify(counter));
  console.log(counter.count);
}
incrementCounter();

// Tehtävä 9
const tasks = [
  { id: 1, description: "Do laundry", completed: false },
  { id: 2, description: "Buy groceries", completed: false },
  { id: 3, description: "Pay bills", completed: false },
];
localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}
markTaskComplete(2);

// Tehtävä 10
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
console.log("LocalStorage after clear:", localStorage.length);
