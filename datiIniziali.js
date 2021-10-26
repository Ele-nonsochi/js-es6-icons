const iconArray = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Coloriamo le icone per tipo
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */

//Stampo in pagina le card e do il colore

const boxContainer = document.querySelector('.box-container');
console.log(boxContainer)

const typeColor = {
	"user": "#800080",
	"animal": "blue",
	"vegetable": "#ffa500",
}

for (let i = 0; i < iconArray.length; i++) {
	const { name, prefix, family, type } = iconArray[i]

	boxContainer.innerHTML += `<div class="card-container">
	                            <div class="card-img">
	                            <i style="color:${typeColor[type]}" class="${family} ${prefix}${name}"></i>
	                            </div>
	                            <div class="card-name">
	                         	<div class="card-title text-center">${name}</div>
                             	</div>
                                </div>`
	console.log(boxContainer)
}


//Scelto la categoria e mostro le icone

const cardContainer = document.querySelector(".card-container");
const cardSelect = document.querySelector(".form-select");
console.log(cardSelect)
console.log(cardContainer)

const arrayAnimal = []
const arrayVegetable = []
const arrayUser = []

//cardContainer(iconArray)
cardSelect.addEventListener("change", function () {

	if (cardSelect.value === "all") {
		typeColor(iconArray)
	}
	if (cardSelect.value === "animal") {
		stampScreen(arrayAnimal)
	}
	if (cardSelect.value === "vegetable") {
		stampScreen(arrayVegetable)
	}
	if (cardSelect.value === "user") {
		stampScreen(arrayUser)
	}

});
