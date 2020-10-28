
// Import statements
import item from "./item.js";



// Initial Shopping list constants
const items = [];
const hideCheckedItems = false;



// Shopping list functions
function findById(id) {
    return this.items.find(item => item.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {
        console.log(`Cannot create new item: ${error.message}`);
    };
}

function findAndToggleChecked(id) {
    const product = this.findById(id);
    product.checked = !product.checked;
}


function findAndUpdateName(id, newName) {
    try {
        item.validateName(newName);
        const product = this.findById(id);
        product.name = newName;
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    };
}


function findAndDelete(id) {
    this.items = this.items.filter(prod => prod.id !== id);
}


function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems;
}




export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};


