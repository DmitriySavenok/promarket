function openCataloge(catalogeBtnId, siteClass) {
	const header = document.querySelector('header')

	let button
	let site

	if(catalogeBtnId[0] != '#') {
		button = document.querySelector(`#${catalogeBtnId}`)
	} else {
		button = document.querySelector(catalogeBtnId)
	}

	if(siteClass[0] != '.') {
		site = document.querySelector(`.${siteClass}`)
	} else {
		button = document.querySelector(siteClass)
	}

	button.addEventListener('click', (e) => {
		site.classList.toggle('navigation-opened')
	})

	document.addEventListener('keydown', (e) => {
		if(e.key === "Escape") {
			if(site.classList.contains('navigation-opened')) {
				site.classList.remove('navigation-opened')
			}
		}
	})

	document.addEventListener( 'click', (e) => {
		const withinBoundaries = e.composedPath().includes(header);
			if ( ! withinBoundaries && site.classList.contains('navigation-opened')) {
				site.classList.remove('navigation-opened')
			}
	})
}

openCataloge('cataloge-btn', 'site')
