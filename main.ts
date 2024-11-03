// const Btn_uslugi = document.getElementById('uslugi') as HTMLElement

// Btn_uslugi.addEventListener('click',()=>{
    
//     let p = document.createElement('p')

    
    
// })

// const Bars = document.querySelector("#bars") as HTMLElement;
// const navbar = document.querySelector(".ul") as HTMLElement;

// Bars.addEventListener("click", () => {navbar.classList.toggle('active')})
    
// union bitta veriable ga bir nechta turdagi malumot kirita olamiz

let num : string | number = '1234aaaaa'

console.log(num.toLocaleUpperCase());

let arr : (number | string | Boolean)[] = [12,34,'asda','qweqwe',true]

type sum = { id: string };
interface sum1 {
    id:number
}

interface sum1 {
  id: number;
}

type Base = {
    id:number,
    value:string,
}

