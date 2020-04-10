
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
		ajaxGet(searchActionUrl, (callbackResponse) => {
			searchActionElement.disabled = false;

			if (isSuccessResponse(callbackResponse)) {

				if (!callbackResponse.data.isEmpty) { 
					//&& callbackResponse.data.length != 0) {
					
					//console.log(callbackResponse.data);			
					createProductList(callbackResponse);		
					
				}
			}
		});
	}
};


function createProductList(callbackResponse) {
	
	const ulElement = document.getElementById("createProductList");
	const nextEntryId = (ulElement.childElementCount + 1).toString();
	const liElement = document.createElement("li");
	const lookupCodeDisplayElement = document.createElement("Span");

	if (callbackResponse.data.length != 0) {
		lookupCodeDisplayElement.innerHTML = ("Searched Results :" + callbackResponse.data);
	}
	else {
		lookupCodeDisplayElement.innerHTML = ("Result not found");
		//document.getElementById("msg").innerHTML = "Result not found";
	}
	lookupCodeDisplayElement.classList.add("productLookupCodeDisplay");
	liElement.appendChild(lookupCodeDisplayElement);
	liElement.appendChild(document.createElement("br"));
	ulElement.appendChild(liElement);

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