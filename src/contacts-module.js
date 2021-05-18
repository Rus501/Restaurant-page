const main = document.querySelector('#container')

const contacts = (() => {

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
	content.dataset.index = 3

	const contentH1 = document.createElement('h1')
	contentH1.textContent = 'Contact Us'

	const contentMap = document.createElement('iframe')
	contentMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108438.23628768584!2d13.357591607434463!3d38.15166906037408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13106268d05359b3%3A0x10b042967b67d50!2sSicily%2C%20Italy!5e0!3m2!1sen!2sru!4v1621267511001!5m2!1sen!2sru'
	contentMap.loading = 'lazy'

	const contentPara = document.createElement('p')
	contentPara.textContent = 'Please contact us!'

	const tel = document.createElement('a')
	tel.href = '#'
	tel.textContent = '+39 777 77 777'

	const email = document.createElement('a')
	email.href = '#'
	email.textContent = 'wholesomepizza@enjoy.com'

	content.appendChild(contentH1)
	content.appendChild(contentMap)
	content.appendChild(contentPara)
	content.appendChild(tel)
	content.appendChild(email)

	return { title, nav, content }

})()


const loadContactsContent = () => {
	main.appendChild(contacts.title)
	main.appendChild(contacts.nav)
	main.appendChild(contacts.content)
}


export { loadContactsContent }