let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
	let theme = document.getElementById("theme");

	if (theme.getAttribute("href") == "styles/style5.css") {
		theme.href = "styles/style5light.css";
	}
	else{
		theme.href = "styles/style5.css";
	}
}