const form = document.querySelector('form');
const inp1 = document.querySelector('#name');
const inp2 = document.querySelector('#email');
const users = document.querySelector('.users');
const url =document.querySelector('#url');
const create =document.querySelector('#create');





form.addEventListener("submit", (events)=>{
    events.preventDefault();

    let name = inp1.value;
    let email= inp2.value;
    let imgUrl = url.value;

    if(name.trim()=="" && email.trim()== '' && imgUrl.trim() ==''){return}

   users.innerHTML+=`
        <div class="user-card">
         
        <div class="img"> <img src="${imgUrl}" alt="">
        </div>
        <div class="texts">
            <h3>Name->${name}</h3>
            <p>Email->${email}</p>
        </div>`
    
     
    form.reset()
  
})
