import { cleanPage } from "./cleanpage";

export function createMenu(){
    cleanPage();
    const element = document.querySelector('#content');
    element.appendChild(createBeverage());
    element.appendChild(createSides());
    element.appendChild(createMainDish());
}

function createBeverage(){
    const menuTitleDiv = document.createElement('div');
    const menuTitleHeader = document.createElement('h1');
    menuTitleHeader.innerText = 'Beverages';
    menuTitleDiv.appendChild(menuTitleHeader);
    

    const beverage1 = new Food('Coke','fizzy liquid with a sweet smell','10');
    const beverage2 = new Food('MilkShake','a thick, creamy liquid with a rich scent','10');
    const beverage = [beverage1,beverage2];
    beverage.forEach(function (element){
        appendToMenuTitleDiv(element,menuTitleDiv)
    })


    return menuTitleDiv;

}

function createSides(){
    const menuTitleDiv = document.createElement('div');
    const menuTitleHeader = document.createElement('h1');
    menuTitleHeader.innerText = 'Sides';
    menuTitleDiv.appendChild(menuTitleHeader);

    const Sides = [new Food('CatNips','Meow Meow MeowMeow','999'),new Food('Tuna Sandwich','savory-smelling combination of tuna fish mixed with bread.','500'),new Food('Tuna','irresistible and delectable fish with a strong, enticing aroma that triggers their natural instincts and cravings','750')];
    Sides.forEach((element)=>{
        appendToMenuTitleDiv(element,menuTitleDiv);
    })

    return menuTitleDiv;
}

function createMainDish(){
    const menuTitleDiv = document.createElement('div');
    const menuTitleHeader = document.createElement('h1');
    menuTitleHeader.innerText = 'Main Dish';
    menuTitleDiv.appendChild(menuTitleHeader);

    const mainDish = new Food('Shark','novel and potentially intriguing protein source','800');
    appendToMenuTitleDiv(mainDish,menuTitleDiv);

    return menuTitleDiv;


}

function appendToMenuTitleDiv(element,menuTitleDiv){
    const itemsInDiv = [document.createElement('h2'),document.createElement('p'),document.createElement('p')];
    
    itemsInDiv[0].innerText = element.name;
    itemsInDiv[1].innerText = element.description;
    itemsInDiv[2].innerText = element.value;

    itemsInDiv.forEach((childToAppend)=>{
        menuTitleDiv.appendChild(childToAppend);
    })
}

class Food{
    constructor(name,description,value){
        this.name = name;
        this.description = description;
        this.value = `${value} Meow Tokens`;
    }
}