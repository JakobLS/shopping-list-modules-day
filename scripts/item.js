// Code for dealing with items in a shopping list

// Item functions
function validateName(name) {
    if (!name) {
        throw new TypeError('Name must not be blank');
    }
}

function create(name) {
    return {id: cuid(),
            name,
            checked: false};
}


// Make following functions available for global import
export default {
    validateName,
    create
 };




