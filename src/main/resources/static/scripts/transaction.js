
document.addEventListener("DOMContentLoaded", function(event) {
	var isEmpty = false;
	document.getElementById("searchBtn").addEventListener("click", validateForm);
	if(!isEmpty){
		document.getElementById("searchBtn").addEventListener("click", searchActionClick);
	}
});

function validateForm() {
    var lookupCode = document.forms["Search"]["lookupCode"].value;
    	
	if (lookupCode == "") {
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
						console.log(callbackResponse.data[i]);
					}							
							
					
				}
			}
		});
	}
};


function createProductList(returnLookupCode) {
	const ulElement = document.getElementById("createProductList");
	const nextEntryId = (ulElement.childElementCount + 1).toString();
	const liElement = document.createElement("li");
	const lookupCodeDisplayElement = document.createElement("Span");
//	var elementCount = ulElement.childElementCount;
//	console.log(elementCount);
//	liElement.deleteChild(lookupCodeDisplayElement);


	if (returnLookupCode != "") {
		lookupCodeDisplayElement.innerHTML = ("Searched Results :" + returnLookupCode);
		lookupCodeDisplayElement.classList.add("productLookupCodeDisplay");
		liElement.appendChild(lookupCodeDisplayElement);
		liElement.appendChild(document.createElement("br"));
		ulElement.appendChild(liElement);	
	}
	// else {
	// 	//lookupCodeDisplayElement.innerHTML = ("Result not found");
	// 	document.getElementById("msg").innerHTML = "Result not found";
	// }

};

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