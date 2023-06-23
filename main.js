
let form = document.querySelector('.main__form');
let mail = document.querySelector('.main__form__email');
let errorImg = document.querySelectorAll('.main__form__errorImg');
let errorSpan = document.querySelectorAll('.main__form__errorSpan');
let Fname = document.querySelector(".main__form__name");
let Lname = document.querySelector(".main__form__lastName");
let password = document.querySelector(".main__form__password");




form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let mailValue = mail.value;
    let expReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    empty(Fname, 0);
    empty(Lname, 1);
    empty(password, 3);
    if(mailValue.match(expReg)){
            errorImg[2].style.display = 'none';
            errorSpan[2].style.display= 'none';
    }
    else{
            errorImg[2].style.display = 'flex';
            errorSpan[2].style.display= 'block';
        }
    form.reset(); 
})

function empty(field,i){
    let value = field.value;
    if(value.length==0){
        errorImg[i].style.display = 'flex';
        errorSpan[i].style.display= 'block';
    }
    else{
        for(var i=0;i<4;i++){
            errorImg[i].style.display = 'none';
            errorSpan[i].style.display= 'none';
        }
    }
}