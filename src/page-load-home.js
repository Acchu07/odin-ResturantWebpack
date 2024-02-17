import { cleanPage } from "./cleanpage";
import './styles/home.css';
import catImage from './images/brow_tabby_cat.jpg';

export default function createFrontPage()
{
    cleanPage();
    const content1 = document.querySelector('#content');
    const content = document.createElement('div');
    content.classList.add('content1');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = catImage
    
    console.log(img);

    content.appendChild(img);
    content.appendChild(createTitle());
    content.appendChild(createReview());
    content.appendChild(createTiming());
    content1.appendChild(content);
}


function createTitle()
{
    const element = document.createElement('div');
    const element1 = document.createElement('h1');
    element1.innerText = "Cat Cat Cafe";
    element.classList.add('title','changeFont');
    element.appendChild(element1);
    return element;
}

function createReview()
{
    const element = document.createElement('div');
    const element1 = document.createElement('p');
    element1.innerText = "The Purrfect Cup is a five-paw extravaganza for any feline (and feline-friendly human) on the prowl for a good time. From the pawsome atmosphere to the purr-ocious company, it's a guaranteed tail-wagger of a good time. Just remember, humans: respect the floof, and you'll be feline fine!"
    const element2 = document.createElement('p');
    element2.innerText = "Meowth Rating: ⭐⭐⭐⭐⭐ (with extra tuna-can bonus points!)";
    element2.classList.add('changeFont')

    element.appendChild(element1);
    element.appendChild(element2);
    return element;
}

function createTiming()
{
    const element = document.createElement('div');
    const paraArray = [];
    for (let i = 0; i < 4; i++)
    {
        const element1 = document.createElement('p');
        paraArray.push(element1);
    }
    paraArray[0].textContent = "Human-Friendly Hours:";
    paraArray[0].classList.add('changeFont');
    paraArray[1].textContent = "Classic Cafe: 10am to 7pm, offering a relaxing afternoon escape with feline company.";
    paraArray[2].textContent = "Extended Weekends: Open until 9pm on Fridays and Saturdays for socializing and late-night cat therapy.";
    paraArray[3].textContent = "Early Bird Purrs: Open from 8am to 12pm for those who want to start their day with a dose of cuteness.";

    paraArray.forEach((paraElement) =>
    {
        element.appendChild(paraElement);
    })
    return element;
}

