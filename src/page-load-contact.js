function createContactPage(){
    const element = document.querySelector('#content');
    element.appendChild(createContactUs());
    createContactPerson().forEach((val)=>{
        element.appendChild(val);       

    })

}

function createContactUs(){
    const element = document.createElement('div');
    const element1 = document.createElement('h1');
    element1.textContent = "Contact Us";
    element.appendChild(element1);
    return element;
}

function createContactPerson(){
    const divArray = [];
    const personArray = [];
    const manager = new PersonDetails('Meowser','Manager','Meowser911','9876')
    const chef = new PersonDetails('Meowhef','Chef','Meowhefgoodfood','7777')
    const serviceStaff = new PersonDetails('Meowvice','Service Staff','Meowstaff','7985')
    personArray.push(manager,chef,serviceStaff)
    
    while(divArray.length<3){
        const element = document.createElement('div');
        divArray.push(element);
    }

    divArray.forEach((div)=>{
        // go with the shift for now post on odin for iteration
        const value = personArray.shift();
        const header2 = document.createElement('h2');
        header2.textContent = value.name;
        div.appendChild(header2);
        for(let toInsert in value){
            if(toInsert === 'name'){
                continue;
            }
            const elementParagraph = document.createElement('p')
            elementParagraph.textContent = value[toInsert];
            div.appendChild(elementParagraph);
        } 
    })
    return divArray;    

}

class PersonDetails{
    constructor(name,profession,email,number){
        this.name = name;
        this.profession = profession;
        this.email = `${email}@meowmail.com`
        this.mobileNumber = `9999-8888-7777-${number}`
    }
}

const test1 = () => console.log("PageLoad-contact");

export {test1 , createContactPage}