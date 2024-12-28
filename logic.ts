let click = document.getElementById ("button") as HTMLButtonElement
let skills = document.getElementById ("skills") as HTMLElement

click.addEventListener ('click', ()=> {
    if(skills.style.display === 'none') {
        skills.style.display ='block'
     } else {
        skills.style.display = 'none'
     }
});