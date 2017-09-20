//array
var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];


//lets you print anything in a separate paragraph.
function print(message) {
    document.write( '<p>' + message + '</p>');
}

//loop starts here, includes 4 scenarios.
do {var search = prompt("Search for a product in the store, type 'list' to see a list of all products, type 'stop' to stop searching");
    if (inStock.indexOf(search) >= 0) {
        var stocked = 'Yes we do have ' + search + ' in stock';
        print(stocked);
    } else if (search.toLowerCase() === 'list'){
        print(inStock.join(', '));
    } else if (search.toLowerCase() === 'stop'){
        break;
    } else {
        stocked = 'No we do not have ' + search + ' in stock';
        print(stocked);
    }
} while ( search.toLowerCase() !== 'stop')

//great success!


