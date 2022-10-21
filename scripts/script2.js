let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
	let theme = document.getElementById("theme");

	if (theme.getAttribute("href") == "styles/style2.css") {
		theme.href = "styles/style2light.css";
	}
	else{
		theme.href = "styles/style2.css";
	}
}