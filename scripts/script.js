let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
	let theme = document.getElementById("theme");

	if (theme.getAttribute("href") == "styles/style.css") {
		theme.href = "styles/stylelight.css";
	}
	else{
		theme.href = "styles/style.css";
	}
}