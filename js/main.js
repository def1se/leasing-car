const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item")

tabItem.forEach((element) => {
  element.addEventListener('click', open)
})
function open(event){
  const tabTarget = event.currentTarget;
  const button = tabTarget.dataset.button;
  
  tabItem.forEach((item) => {
    item.classList.remove("tabs__btn-item--active") /* когда написан classlist - точка перед классом не нужна */
  })
  tabTarget.classList.add("tabs__btn-item--active")
  
  tabContent.forEach((el) => {
    el.classList.remove('tabs__content-item--active')
  })
  
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

const nameInput = document.querySelector('#name');

nameInput.addEventListener('input', validName);

function validName(){
  if (nameInput.value !== ''){
    nameInput.classList.remove('unvalid');
    nameInput.classList.add('valid');
  } else{
    nameInput.classList.remove('valid');
    nameInput.classList.add('unvalid');
  }
}


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailInput = document.querySelector('#email')

emailInput.addEventListener('input', onInput);

function onInput(){
  if (emailValid(emailInput.value)) {
    emailInput.style.borderColor = 'green';
  } else {
    emailInput.style.borderColor = 'red';
  }
}

function emailValid(value) {
  return EMAIL_REGEXP.test(value);
}