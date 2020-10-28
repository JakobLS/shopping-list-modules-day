'use strict';
/* global shoppingList, cuid */



import store from "./store.js";
import item from "./item.js";
import shoppingList from "./shopping-list.js";



function main() {
  shoppingList.bindEventListeners();
  shoppingList.render();
}

$(main);





