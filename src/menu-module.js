import Pepperoni from '../images/Pepperoni-Beef.png';
import Alfredo from '../images/Alfredo.png';
import Veggie from '../images/Veggie.png';
import Hawaiian from '../images/Hawaiian.png';
import MacAndCheese from '../images/MacAndCheese.png';
import Meateater from '../images/Meat-eater.png';


const main = document.querySelector('#container')

const menu = (() => {

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
	content.dataset.index = 2

	const contentH1 = document.createElement('h1')
	contentH1.textContent = 'Choose the one you like'
	
	const pizzaContainer = document.createElement('div')
	pizzaContainer.classList.add('pizza-container')

	const createPizza = (name, src, alt, description) => {

		const pizza = document.createElement('div')
		pizza.classList.add('pizza')

		const pizzaName = document.createElement('p')
		pizzaName.classList.add('pizza-name')
		pizzaName.textContent = name

		const pizzaImg = document.createElement('img')
		pizzaImg.src = src
		pizzaImg.alt = alt

		const pizzaDescription = document.createElement('p')
		pizzaDescription.textContent = description

		pizza.appendChild(pizzaName)
		pizza.appendChild(pizzaImg)
		pizza.appendChild(pizzaDescription)

		return pizza

	}

	const pepperoni = createPizza('Pepperoni-Beef', Pepperoni, 'Pepperoni-Beef pizza', 'American classic with spicy pepperoni, Mozzarella and signature tomato sauce')
	const alfredo = createPizza('Alfredo', Alfredo, 'Alfredo pizza', 'Traditional crust brushed with garlic butter and topped with creamy Alfredo sauce and 100% real cheese.')
	const veggie = createPizza('Veggie', Veggie, 'Veggie pizza', 'Traditional crust brushed with garlic butter and topped with Zesty Parmesan Ranch sauce, 100% real cheddar cheese, mushrooms, red onions, green peppers, tomatoes and Parmesan oregano seasoning.')
	const hawaiian = createPizza('Hawaiian', Hawaiian, 'Hawaiian pizza', 'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, ham and pineapple.')
	const macAndCheese = createPizza('Mac & Cheese', MacAndCheese, 'Mac And Cheese pizza', 'Traditional crust brushed with garlic butter and topped with 100% real cheese and Cicis signature macaroni & cheese.')
	const meatEater = createPizza('Meat Eater', Meateater, 'Meat Eater pizza', 'Traditional crust brushed with garlic butter and topped with tomato sauce, 100% real cheese, pepperoni, ham, beef and sausage')

	pizzaContainer.appendChild(pepperoni)
	pizzaContainer.appendChild(alfredo)
	pizzaContainer.appendChild(veggie)
	pizzaContainer.appendChild(hawaiian)
	pizzaContainer.appendChild(macAndCheese)
	pizzaContainer.appendChild(meatEater)

	content.appendChild(contentH1)
	content.appendChild(pizzaContainer)

	return { title, nav, content }

})()


const loadMenuContent = () => {
	main.appendChild(menu.title)
	main.appendChild(menu.nav)
	main.appendChild(menu.content)
}


export { loadMenuContent }