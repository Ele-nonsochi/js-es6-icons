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
const cardContainer = document.querySelector(".card-container");
const cardSelect = document.getElementById("form-select").value;
console.log(cardSelect)
console.log(cardContainer)

const arrayAnimal = []
const arrayVegetable = []
const arrayUser = []

const typeColor = {
	"user": "#800080",
	"animal": "blue",
	"vegetable": "#ffa500",
}

function stampInHTML(array) {
	boxContainer.innerHTML = ""
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
}


//Scelto la categoria e mostro le icone

for (let i = 0; i < iconArray.length; i++) {
	const { type } = iconArray[i];
	if (type === "animal") {
		arrayAnimal.push(iconArray[i])
	}
	if (type === "vegetable") {
		arrayVegetable.push(iconArray[i])
	}
	if (type === "user") {
		arrayUser.push(iconArray[i])
	}
}

//cardContainer(iconArray)

stampInHTML(iconArray)
select.addEventListener("change", function () {

	if (select.value === "all") {
		stampInHTML(iconArray)
	}
	if (select.value === "animal") {
		stampInHTML(arrayAnimal)
	}
	if (select.value === "vegetable") {
		stampInHTML(arrayVegetable)
	}
	if (select.value === "user") {
		stampInHTML(arrayUser)
	}

})