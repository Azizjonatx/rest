// products 

const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        calory: 100,
        get sum(){
           return this.amount * this.price
        },
        get kcall(){
            return this.amount * this.calory
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        calory: 200,
        get sum(){
            return this.amount * this.price
         },
         get kcall(){
             return this.amount * this.calory
         }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        calory: 300,
        get sum(){
            return this.amount * this.price
         },
         get kcall(){
             return this.amount * this.calory
         }
    }
}
 const  btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
        delivery = document.querySelector('.addCart'),
        lvlNum = document.querySelector('.header__timer-extra')

for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click',function () {
        addOrSubtrict(this)
    })
}

function addOrSubtrict(element){
//closest() - obyektimizaga eng yaqin orab turgan elementni topib ulanadi
const parent = element.closest('.main__product'),
      parentId = parent.getAttribute('id'),
      elementSymbol = element.getAttribute('data-symbol'),
      outPut = parent.querySelector('.main__product-num'),
      price = parent.querySelector('.main__product-price span'),
      kcall = parent.querySelector('.main__product-kcall span')

      
      
      if (elementSymbol == '+') {
          product[parentId].amount++
        } else if (elementSymbol == '-' && product[parentId].amount > 0){
            product[parentId].amount--}
            
            outPut.innerHTML = product[parentId].amount
            price.innerHTML = product[parentId].sum
            kcall.innerHTML = product[parentId].kcall
}
/* home work 34 */
function lvlCount (){
    let lvlSpeed = 100
    if (lvlNum.innerHTML <= 50){lvlSpeed = 50}
    else if (lvlNum.innerHTML > 50 && lvlNum.innerHTML < 75){lvlSpeed = 100}
    else if (lvlNum.innerHTML > 75 && lvlNum.innerHTML < 99){lvlSpeed = 150}
    setTimeout(() => lvlCount(),lvlSpeed)
    if (lvlNum.innerHTML < 100) {lvlNum.innerHTML++}
}
lvlCount () 
/* 35 lesson */

const receipt = document.querySelector('.receipt'),
      receiptWindow = document.querySelector('.receipt__window '),
      receiptWindowOut = document.querySelector('.receipt__window-out '),
      receiptWindowBtn = document.querySelector('.receipt__window-btn')

delivery.addEventListener('click', function(){
    let menu = 'Purchased: \n\n'
    let totalPrice = 0;
    let calory = 0
    for (key in product){
        for(keyId in product[key]){
            if (product[key].amount > 0 && keyId == 'amount'){
                menu += `${product[key].amount} X ${product[key].name}\n`
                totalPrice += product[key].sum 
                calory +=product[key].calory
            }
        }
    }
 receipt.style.display = 'flex'
 setTimeout(()=>{
     receipt.style.opacity = '1'
     receiptWindow.style.top = '0%'
 },100)
 receiptWindowOut.innerHTML = `${menu} \n\n Total Price: ${totalPrice} \nCalory = ${calory}`
 document.body.style.overflow = 'hidden'
})

receiptWindowBtn.addEventListener('click', () => location.reload())

/* home work 36 */

const view = document.querySelector('.view'),
      regClose = document.querySelector('.view__close'),
      imgView = document.querySelector('#imgView'),
      viewProduct = document.querySelectorAll('.main__product-title')

for (let i = 0; i < viewProduct.length; i++) {
     viewProduct[i].addEventListener('dblclick', function() {
    let arr = viewProduct[i].innerText.split('\n')    
    if (arr[0] == 'GAMBURGER'){
        imgView.setAttribute('src','images/product2.jpg')  
    } else if (arr[0] == 'GAMBURGER FRESH'){
        imgView.setAttribute('src','images/product1.jpg')
    } else if (arr[0] == 'FRESH COMBO'){
       imgView.setAttribute('src','images/product3.jpg')
    }
    view.classList.add('active')});
}
regClose,view.addEventListener('click', function() {view.classList.remove('active')})