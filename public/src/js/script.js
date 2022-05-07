//const url = "https://pointh3.herokuapp.com/api/";
const url = "http://localhost:3000/api/"


//LOG IN
const loginContainer = document.getElementById('loginContainer');
const loginMailInput = document.getElementById("loginMailInput")
const loginPasswordInput = document.getElementById("loginPasswordInput");
const loginBtnInput = document.getElementById("loginBtnInput");

const loginToRegister = document.getElementById('loginToRegister');

// REGISTER
const registerContainer = document.getElementById('registerContainer');
const registerMailInput = document.getElementById("registerMailInput")
const registerPasswordInput = document.getElementById("registerPasswordInput");
const registerBtnInput = document.getElementById("registerBtnInput");

const registerToLogin = document.getElementById('registerToRegister');

// INFO
const userInfoContainer = document.getElementById('userInfoContainer');
const userInfo = document.getElementById('userInfo');

window.onload = () => {
    console.log('Ready!');
};

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
   
    userInfoContainer.classList.toggle('d-none')
    loginContainer.classList.toggle('d-none')
    userInfo.innerHTML=`
        <h3>${data.user.name}</h3>
        <p>${data.user.mail}</p>
    `
};

const loginRegister = ()=>{
    registerContainer.classList.toggle('d-none');
    loginContainer.classList.toggle('d-none');
};

//click
loginBtnInput.addEventListener('click', ()=>{loginUser()});
loginToRegister.addEventListener('click', loginRegister);
registerToLogin.addEventListener('click', loginRegister);
