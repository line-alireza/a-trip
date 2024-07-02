let usernameElem = $.getElementById('username')
let usernameMSG = $.getElementById('username-msg')
let numberElem = $.getElementById('number')
let numberMSG = $.getElementById('number-msg')
let emailElem = $.getElementById('email')
let emailMSG = $.getElementById('email-msg')
let passwordElem = $.getElementById('password')
let passwordMSG = $.getElementById('password-msg')


usernameElem.addEventListener("keyup", () => {
    if (usernameElem.value.length < 5) {
      usernameMSG.style.display = "block";
      usernameMSG.innerHTML = "نام کاربری باید حداقل 5 حرف باشد";
      usernameMSG.style.color = "crimson"; 
      usernameMSG.style.fontSize = "10px";
      usernameMSG.style.marginLeft = "39%";
      usernameMSG.style.marginRight = "-11%";
    } else {
      usernameMSG.style.display = "block";
      usernameMSG.innerHTML = "نام کاربری صحیح است";
      usernameMSG.style.color = "#14dc57";
      usernameMSG.style.fontSize = "10px";
      usernameMSG.style.marginLeft = "52%";
    }
  });

  numberElem.addEventListener("keyup", () => {
    let validRegex = /^[0-9]*$/;
    if (numberElem.value.match(validRegex) && numberElem.value.length > 10) {
      numberMSG.style.display = "block";
      numberMSG.innerHTML = "شماره تلفن صحیح است";
      numberMSG.style.color = "#14dc57";
      numberMSG.style.fontSize = "10px";
      numberMSG.style.marginLeft = "50%";
    } else {
        numberMSG.style.display = "block";
        numberMSG.innerHTML = "شماره تلفن صحیح نمی باشد";
        numberMSG.style.color = "crimson";
        numberMSG.style.fontSize = "10px";
        numberMSG.style.marginLeft = "45%";
        numberMSG.style.marginRight = "-6%";
    }
  });

  emailElem.addEventListener("keyup", () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailElem.value.match(validRegex)) {
      emailMSG.style.display = "block";
      emailMSG.innerHTML = "آدرس ایمیل صحبح است";
      emailMSG.style.color = "#14dc57";
      emailMSG.style.fontSize = "10px";
      emailMSG.style.marginLeft = "50%";
    } else {
      emailMSG.style.display = "block";
      emailMSG.innerHTML = "آدرس ایمیل صحیح نمی باشد";
      emailMSG.style.color = "crimson";
      emailMSG.style.fontSize = "10px";
      emailMSG.style.marginLeft = "45%";
      emailMSG.style.marginRight = "-14%";
    }
  });

  passwordElem.addEventListener("keyup", () => {
    if (passwordElem.value.length < 8) {
      passwordMSG.style.display = "block";
      passwordMSG.innerHTML = " رمز باید حداقل 8 کاراکتر داشته باشد";
      passwordMSG.style.color = "crimson";
      passwordMSG.style.fontSize = "10px";
      passwordMSG.style.marginLeft = "37%";
      passwordMSG.style.marginRight = "-13%";
    } else {
        passwordMSG.style.display = "block";
        passwordMSG.innerHTML = "رمز صحیح است";
        passwordMSG.style.color = "#14dc57";
        passwordMSG.style.fontSize = "10px";
        passwordMSG.style.marginLeft = "60%";
    }
  });


const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

openBtn.addEventListener('click', () => {
    sidebar.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show')
}) 


