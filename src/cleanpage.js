export function cleanPage(){
    const value = document.querySelector('#content');
    while(value.firstChild){
        value.removeChild(value.firstChild)
    }
}

