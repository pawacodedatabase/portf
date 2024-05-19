
/////////// hamburger ///////////////////




const nav = document.querySelector('ul');
const menu = document.querySelector('span.ham');


menu.addEventListener('click', ()=> {
    if (!nav.classList.contains('ulVisible')){
        nav.classList.add('ulVisible')
        menu.innerHTML = 'close'
    }
else{
    nav.classList.remove('ulVisible')
    menu.innerHTML = 'menu'
}}) 

/////////////// footer nav ////////////////////


const fnlist = document.querySelectorAll('.list');
function activeLink(){
    fnlist.forEach((item) => 
        item.classList.remove('active'));
        this.classList.add('active')   
    }
    fnlist.forEach((item) => 
item.addEventListener('click', activeLink))


    ///////button event//////////


    let hire = document.getElementById('hirebtn')

    hire.addEventListener ('click', ()=> {
        hire.innerText = 'THANK YOU!';
    })

    let con = document.getElementById('conbutton')

    con.addEventListener ('click', ()=> {
        con.innerText = 'THANK YOU!';
    })
    let contact = document.getElementById('hired')

    contact.addEventListener ('click', ()=> {
        contact.innerText = 'THANK YOU!';
    })


    // $(document).ready(function(){
    //     $('.button').click(){
    //         $('.button').css({
    //                     'background': 'black', 'color':'white'})  
    //         })

    // })