const bar=document.getElementById('toggle');
const nav=document.getElementById('right');

if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');

    })
}
const close=document.getElementById('close');

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
