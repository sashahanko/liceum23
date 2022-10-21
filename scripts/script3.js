let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
	let theme = document.getElementById("theme");

	if (theme.getAttribute("href") == "styles/style3.css") {
		theme.href = "styles/style3light.css";
	}
	else{
		theme.href = "styles/style3.css";
	}
}