const main = document.querySelector('#container')

const aboutUs = (() => {

	const title = document.createElement('h1')
	title.classList.add('title')
	title.textContent = 'Pizza Restaurant'

	const nav = document.createElement('nav')
	for (let i = 1; i <= 3; i++) {
		const btn = document.createElement('button')
		btn.dataset.index = i
		switch(i) {
			case 1:
			btn.textContent = 'About Us'
			break
			case 2:
			btn.textContent = 'Menu'
			break
			case 3:
			btn.textContent = 'Contacts'
			break
		}
		nav.appendChild(btn)
	}

	const content = document.createElement('div')
	content.classList.add('content')
	content.dataset.index = 1

	const contentH1 = document.createElement('h1')
	contentH1.textContent = 'Welcome to the pizza restaurant'

	const contentImg = document.createElement('img')
	contentImg.src = '../images/content1.jpg'
	contentImg.alt = 'Freshly baked pizza'
	contentImg.title = 'Pizza time'

	const contentPara = document.createElement('p')
	contentPara.textContent = "Our pizzas are a combination of many top quality ingredients balanced with all the right spice in just the right proportions carefully baked in extremely hot ovens. All done under the watchful eye of our workers. We demand that every pizza that comes out is baked the same as the previous one and the one before that. The intriguingly tangy and spicy flavors that seem to always taste a little different but always exceptional."

	const contentSpan = document.createElement('span')
	contentSpan.textContent = 'Welcome!'

	content.appendChild(contentH1)
	content.appendChild(contentImg)
	content.appendChild(contentSpan)
	content.appendChild(contentPara)

	return { title, nav, content }

})()


const loadAboutUsContent = () => {
	main.appendChild(aboutUs.title)
	main.appendChild(aboutUs.nav)
	main.appendChild(aboutUs.content)
}


export { loadAboutUsContent }