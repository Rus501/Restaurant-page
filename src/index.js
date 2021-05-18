import './style.scss'
import { loadAboutUsContent } from './aboutus-module'
import { loadMenuContent } from './menu-module'
import { loadContactsContent } from './contacts-module'

// opening about us tab initially
loadAboutUsContent()

const main = document.querySelector('#container')

// tab switch logic
main.onclick = (e) => {
	if (!e.target.dataset.index) return

	const currentTabIndex = document.querySelector('.content').dataset.index
	
	if (e.target.dataset.index == 1) {
		if (currentTabIndex == 1) return
		main.innerHTML = ''
		loadAboutUsContent()
	} else if (e.target.dataset.index == 2) {
		if (currentTabIndex == 2) return
		main.innerHTML = ''
		loadMenuContent()
	} else if (e.target.dataset.index == 3) {
		if (currentTabIndex == 3) return
		main.innerHTML = ''
		loadContactsContent()
	}

}