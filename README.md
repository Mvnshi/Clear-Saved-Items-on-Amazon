# Clear-Saved-Items-on-Amazon

Have you ever struggled with deleting all the items from your saved item section in your Amazon cart? If so, this script is here to save the day! This file is a simple JavaScript code snippet that automates the process of removing all items from the saved item section in your Amazon cart.

## Usage

To use this script, follow these steps:

1. Open your web browser and navigate to the Amazon website.
2. Log in to your Amazon account.
3. Go to the shopping cart section.
4. Open the browser's developer console by pressing `Ctrl + Shift + J` or `F12` and clicking on the "Console" tab.
5. Copy and paste the provided script into the console.

```javascript
function deleteSavedItems() {
    var query = document.querySelectorAll("#sc-saved-cart input[value=Delete]");
    if (query.length) {
        query[0].click();
    }
    if (query.length > 1) {
        setTimeout(deleteSavedItems, 1000);
    } else {
        console.log('Finished :)');
    }
}
deleteSavedItems();```

6. Press the Enter key to execute the script.
7. Sit back and let the script do its work. It will automatically delete all the saved items from your Amazon cart.
8. Once the script finishes deleting all items, you will see a message in the console saying "Finished :)".

Please note that this script directly interacts with the Amazon website and performs actual deletions, so use it with caution. Once the items are deleted, they cannot be recovered.
