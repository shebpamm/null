
function setColors(bg, fg, accent) {

	let root = document.body;

	root.style.setProperty('--background', null);
	root.style.setProperty('--foreground', null);
	root.style.setProperty('--accent', null);

	root.style.cssText = `
	--background: ${bg};
	--foreground: ${fg};
	--accent: ${accent};
	`;

}