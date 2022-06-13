const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const form = document.getElementById('form');
const nik = document.getElementById('nik');
const nama = document.getElementById('nama');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const nikValue = nik.value.trim();
    const namaValue = nama.value.trim();

    if(nikValue === ''){
        setErrorFor(nik, 'NIK must be 16 characters');

    }else if(nikValue.length != 16){ // harus 12 character
        setErrorFor(nik, 'NIK must be 16 characters');

    }else{
        setSuccessFor(nik);
    }

    if(namaValue === ''){
        setErrorFor(nama, 'Name cannot be blank');

    }else{
        setSuccessFor(nama);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
