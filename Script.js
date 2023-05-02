function deleteSavedItems() 
{
	var query = document.querySelectorAll("#sc-saved-cart input[value=Delete]")
	if (query.length) 
	{
		query[0].click();
	}
	
	if (query.length > 1) 
	{
		setTimeout(deleteSavedItems,1000);
	}
	else 
	{
		console.log('Finished :)');
	}
}
deleteSavedItems();
