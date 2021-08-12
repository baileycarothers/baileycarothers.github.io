function toggleTheme() {
	var theme = document.getElementsByTagName('link')[0];
	if (theme.getAttribute('href') == 'light-theme.css') {
		theme.setAttribute('href', 'dark-theme.css');
	} else {
		theme.setAttribute('href', 'light-theme.css')
	}
}