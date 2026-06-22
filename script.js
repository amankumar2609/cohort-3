let bulb = document.querySelector('.bulb');
let btn = document.querySelector('button');

let flag = true;

btn.addEventListener('click', ()=>{
 if(flag){
  bulb.style.backgroundColor = 'yellow'
  btn.textContent = 'Off'
  flag = false
 }
 else{
  bulb.style.backgroundColor = 'transparent'
  btn.textContent = 'On'
  flag =true
 }
})