document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("lookupCode").addEventListener("keypress", validateForm);
});

function validateForm() {
    var lookupCode = document.forms["Search"]["lookupCode"].value;
    	
	if (lookupCode == "") {
		document.getElementById("msg").innerHTML = "The lookup code field must not be empty.";
		return false;

	}

	return true;
}

// Getters and setters
function getlookupCode() {
	return document.getElementById("lookupCode");
}
function setlookupCode(lookupCode) {
	getElementById().value = lookupCode;
}
function getlookupCode() {
	return getElementById().value;
}
// End getters and setters