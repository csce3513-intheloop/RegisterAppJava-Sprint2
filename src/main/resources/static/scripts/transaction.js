document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("searchBtn").addEventListener("click", validateForm);
	
});

function validateForm() {
    var lookupCode = document.forms["Search"]["lookupCode"].value;
    	
	if (lookupCode == "") {
		document.getElementById("msg").innerHTML = "The lookup code field must not be empty.";
		return false;

	}

	return true;
}

