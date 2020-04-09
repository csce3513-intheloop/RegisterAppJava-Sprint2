document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("searchBtn").addEventListener("click", validateForm);
	document.getElementById("searchBtn").addEventListener("click", searchActionClick);
});

function validateForm() {
    var lookupCode = document.forms["Search"]["lookupCode"].value;
    	
	if (lookupCode == "") {
		document.getElementById("msg").innerHTML = "The lookup code field must not be empty.";
		return false;

	}

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

				window.location.replace("/transaction");
			}
		});
	}
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