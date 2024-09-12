let inputElement = document.querySelector('.add-element-js');
let buttonAddEl = document.querySelector('.add-element-btn-js');
let shoppingList = document.querySelector('.shopping-list-js');
let shoppingBasket = JSON.parse(localStorage.getItem('list')) || 
[];

renderShoppingBasket();

function renderShoppingBasket(){
  let basket =  '';

  shoppingBasket.forEach((need, index) => {
  
    let html = `
    <div class="list-line"> 
    <div class="js-check-box css-check-box"></div>
    <p> ${need},  </p>
    <button class="button-reset js-reset-button">
    usuń</button>
    </div>
    `
    basket += html;
    localStorage.setItem('list', JSON.stringify(shoppingBasket));
  })

  shoppingList.innerHTML = basket;
  document.querySelectorAll('.js-reset-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', () => {
        shoppingBasket.splice(index, 1);
        renderShoppingBasket();
      });
    });

    document.querySelectorAll('.js-check-box')
      .forEach(( value, index ) => {
        value.addEventListener('click', ()=>{
          checked(value);
        })
      })  
}

function checked(element){
  if(element.className === 'js-check-box css-check-box'){
    element.classList.add('ccs-chekmark');
  }else{
    element.classList.remove('ccs-chekmark');
  }
}

function addElement(){
  if(!inputElement.value){
    alert('Wpisz potrzebny produkt we właściwe pole');
    return
  }

  shoppingBasket.push(inputElement.value);
  localStorage.setItem('list', JSON.stringify(shoppingBasket));
  renderShoppingBasket();
  inputElement.value = '';
}

buttonAddEl.addEventListener('click', addElement);

function addThing(event){
  if(event.key === 'Enter'){
    addElement()
  }
};

document.querySelector('.input-container').addEventListener('keydown', ()=>{
  addThing();
});

const input_container = document.querySelector('.js-input-container');

input_container.addEventListener('keydown', (event)=>{
  addThing(event)
})



