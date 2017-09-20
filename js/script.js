/* Important note
The behavior of most browsers has changed since this video was shot, so you won't see the same thing as I demonstrate in the video. In the video, you'll see that my script is able to print out to the browser using document.write( ) while inside a loop.

Most browsers no longer do that: they wait until the loop finishes and then they print to the window. So, you'll see a blank page until you type quit in the prompt window — then you'll see all the output printed to the screen.

Sorry for the confusion, and we'll update the video soon. */

var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
//teacher created the var outside the loop, I did it inside.
var search;

//lets you print anything in a separate paragraph.
function print(message) {
    document.write( '<p>' + message + '</p>');
}

//infinite while loop, I used a do while loop for this. Teacher has 3 scenarios, when one of them includes 2 paths, 4 total just as mine, but in a different way.
while (true) {
    search = prompt("Search for a product in the store, type 'list' to see a list of all products, type 'quit' to stop searching");
    if ( search.toLowerCase() === 'quit' ){
        break;
    } else if ( search.toLowerCase === 'list'){
        print(inStock.join(', '));
    } else {
        if ( inStock.indexOf(inStock) > -1) {
            print('Yes, we do have ' + search + ' in stock.');
        } else {
            print('No, we do not have ' + search + ' in stock.');
        }
    }
}