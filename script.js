// selection
// operation


const loginBtn=document.querySelector('.log-in')
const homeBtn=document.querySelector('svg')


loginBtn.addEventListener('click',()=>{
    // loginBtn.style.backgroundColor='red';
    document.location.reload();
})

homeBtn.addEventListener('click',function(){
    document.location.reload();
})