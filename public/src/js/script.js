const url = "https://pointh3.herokuapp.com/api/";
//const url = "http://localhost:3000/api/"


//LOG IN
const loginContainer = document.getElementById('loginContainer');
const loginMailInput = document.getElementById("loginMailInput")
const loginPasswordInput = document.getElementById("loginPasswordInput");
const loginBtnInput = document.getElementById("loginBtnInput");

const loginToRegister = document.getElementById('loginToRegister');

// REGISTER
const registerContainer = document.getElementById('registerContainer');
const registerNameInput = document.getElementById('registerNameInput')
const registerMailInput = document.getElementById("registerMailInput")
const registerPasswordInput = document.getElementById("registerPasswordInput");
const registerBtnInput = document.getElementById("registerBtnInput");

const registerToLogin = document.getElementById('registerToRegister');

// INFO
const userInfoContainer = document.getElementById('userInfoContainer');
const userInfo = document.getElementById('userInfo');

//
//
//


//CAMBIAR ENTRE REGISTER / LOGIN
const loginRegister = ()=>{
    registerContainer.classList.toggle('d-none');
    loginContainer.classList.toggle('d-none');
};

// Login System
const loginUser = async () => {
    const data = await fetch(url+'auth', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            mail: loginMailInput.value,
            password: loginPasswordInput.value
        })
    }).then(el=>el.json());
    if(data.errors)return alert(data.errors[0].msg);
    
    localStorage.setItem('token', data.token);
    console.log(data);
   
    userInfoContainer.classList.toggle('d-none')
    loginContainer.classList.toggle('d-none')
    userInfo.innerHTML=`
        <p class="text-danger">Informacion:<p>
        <h3>${data.user.name}</h3>
        <p>${data.user.mail}</p>
        <p class="text-danger">Sistema:</p>
        <h3>tu mamá</h3>
    `
};

// Register System (Incompleto)
const registerUser = async ()=>{
    const data = await fetch(url+'users', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: registerNameInput.value,
            mail: registerMailInput.value,
            password: registerPasswordInput.value
        })
    }).then(el=>el.json());
    if(data.errors)return alert(data.errors[0].msg);
    console.log(data);
    alert('Usuario registrado');
    loginRegister();
}



//clicks
loginBtnInput.addEventListener('click', loginUser);
registerBtnInput.addEventListener('click', registerUser);

loginToRegister.addEventListener('click', loginRegister);
registerToLogin.addEventListener('click', loginRegister);

window.onload = () => {
    const token = localStorage.getItem('token');
    if(token){loginRegister();}

    console.log('Ready!');
};