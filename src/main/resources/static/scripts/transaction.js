
document.addEventListener("DOMContentLoaded", function(event) {

	var isEmpty = false;
	// Validation for empty input in lookupcode search section
	document.getElementById("searchBtn").addEventListener("click", validateForm);

	// Search button action
	if(!isEmpty){
		document.getElementById("searchBtn").addEventListener("click", searchActionClick);
	}

	// Search results click action
	const listItemElements = document.getElementById("createProductList").querySelectorAll("li");
	for(let i = 0; i < listItemElements.length; i++) {
		listItemElements[i].addEventListener("click", onListItemClicked);
	}
});

function validateForm() {
    var lookupCode = document.forms["Search"]["lookupCode"].value;
    	
	if (lookupCode == "") {
		document.getElementById("createProductList").innerHTML="";
		document.getElementById("msg").innerHTML = "The lookup code field must not be empty.";
		isEmpty = true;
		return false;
	}
	document.getElementById("msg").innerHTML = "";

	isEmpty = false;
	return true;
}

function searchActionClick(event) {
	const searchActionElement = event.target;
	searchActionElement.disabled = true;
	const searchActionUrl = ("/api/transaction/?lookupCode=" + getLookupCode());

	if (getLookupCode() != null){

		var searchResults = ajaxGet(searchActionUrl, (callbackResponse) => {
			searchActionElement.disabled = false;
			if (isSuccessResponse(callbackResponse)) {
				if (!callbackResponse.data.isEmpty) { 
					if (callbackResponse.data.length == 0){
						document.getElementById("msg").innerHTML = "Result not found";
					}

					document.getElementById("createProductList").innerHTML="";
					for(var i=0; i < callbackResponse.data.length; i++){						   
						createProductList(callbackResponse.data[i]);
					}							
				}
			}
		});
	}
};

function createProductList(returnLookupCode) {
	const ulElement = document.getElementById("createProductList");
	const liElement = document.createElement("li");
	liElement.addEventListener("click", onListItemClicked);
	const lookupCodeDisplayElement = document.createElement("Span");
	const priseDisplayElement = document.createElement("Span");
	var priceText = document.createTextNode("Price: ")
	if (returnLookupCode != "") {
		lookupCodeDisplayElement.innerHTML = returnLookupCode.lookupCode;
		priseDisplayElement.innerHTML = returnLookupCode.price;
		lookupCodeDisplayElement.classList.add("productLookupCodeDisplay");
		priseDisplayElement.classList.add("productPriceDisplay");
		liElement.appendChild(lookupCodeDisplayElement);
		liElement.appendChild(document.createElement("br"));
		liElement.appendChild(priceText);
		liElement.appendChild(priseDisplayElement);
		liElement.appendChild(document.createElement("br"));
		ulElement.appendChild(liElement);	
	}
};

function getCLickedListItemElement(target) {
	let clickedElement = target;

	while(clickedElement.tagName !== "LI") {
		clickedElement = clickedElement.parentElement;
	}

	return clickedElement;
}

function onListItemClicked(event) {
	const unorderedListElement = document.getElementById("createProductList");
	addProductToCart(getCLickedListItemElement(event.target));
	unorderedListElement.removeChild(getCLickedListItemElement(event.target));
	document.getElementById("cart").addEventListener("click",deleteProductFromCart);

}

function addProductToCart(clickedListItem) {
	const lookupCode = clickedListItem.querySelector("span.productLookupCodeDisplay").innerHTML;
	const price = clickedListItem.querySelector("span.productPriceDisplay").innerHTML;
	const tableElement = document.getElementById("cart");
	const trElement = document.createElement("li");
	const cartDisplayElement = document.createElement("span");
	const priceDisplayElement = document.createElement("span");
	const deleteBtnElement = document.createElement("input");
	const nextDeleteBtnId = (tableElement.childElementCount +1).toString();
	var priceText = document.createTextNode("Price: ");
	var counrText = document.createTextNode("Count: ");
	var count = document.createTextNode(1);
	
	deleteBtnElement.setAttribute('id','deleteBtn'+ nextDeleteBtnId);
	deleteBtnElement.setAttribute('type','button');
	deleteBtnElement.setAttribute('value','Delete');
	deleteBtnElement.setAttribute('style', 'float:right');
	cartDisplayElement.innerHTML = lookupCode;
	priceDisplayElement.innerHTML = price;
	cartDisplayElement.classList.add("cart");
	trElement.appendChild(cartDisplayElement);
	trElement.appendChild(document.createElement("br"));
	trElement.appendChild(priceText);
	trElement.appendChild(priceDisplayElement);
	trElement.appendChild(document.createElement("br"));
	trElement.appendChild(counrText);
	trElement.appendChild(count);	
	trElement.appendChild(deleteBtnElement);
	trElement.appendChild(document.createElement("br"));
	tableElement.appendChild(trElement);
}

// function removeProductList() {
// 	var list = document.getElementById("createProductList");

// 	let i = 0;
// 	while(list.hasChildNodes) {
// 		list.removeChild(list.childNodes[i]);
// 		i++;
// 	}
// }

function deleteProductFromCart(event){
	const deleteActionElement = event.target;
	const closestElement = deleteActionElement.closest('li');
	document.getElementById("cart").removeChild(closestElement);	

}


// Getters and setters
function getLookupCode() {
	return getLookupCodeElement().value;
}
function setLookupCode(lookupCode) {
	getLookupCodeElement().value = lookupCode;
}
function getLookupCodeElement() {
	return document.getElementById("lookupCode");
}
