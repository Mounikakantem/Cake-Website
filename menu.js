let cardData={};
let price = {};

let cardContainersReference = document.querySelectorAll('.card-container');
for(let i=0;i<cardContainersReference.length;i++) {
    let card = cardContainersReference[i];
    let cardContainer1 = card.querySelector('.card-container1');
    let addToCartButton = cardContainer1.querySelector('.button');
    addToCartButton.addEventListener('click',()=>{
        let cakeName = cardContainer1.querySelector('#name').innerHTML;
        let cakePrice = cardContainer1.querySelector('.price').innerHTML; 
        if(cakeName in cardData){
            cardData[cakeName]+=1; 
            price[cakeName]= cakePrice
        }
        else{
            cardData[cakeName]=1;
            price[cakeName]= cakePrice 
        }
        alert('Item added successfully');

    })
}

let cartElement = document.getElementById("cartResults");

let cartButton = document.querySelector('#cartbutton');
cartButton.addEventListener('click',()=>{
    if(Object.entries(cardData).length===0){
        alert('No items at present');
        return;
    }
    console.log(price)
    let message = '';
    let cardDataArray = Object.entries(cardData);
    console.log(cardDataArray)
    for(let i=0;i<cardDataArray.length;i++) {
        let pizzaName=cardDataArray[i][0];
        let value=cardDataArray[i][1];
        message +=`${cakeName}:${value}\n`;

        let _cakeName=cardDataArray[i][0]
        let resultsContainerElement = document.createElement('div')
        let _cakeNameElement = document.createElement('h1')
        _cakeNameElement.textContent = _cakeName;
        resultsContainerElement.appendChild(_cakeNameElement);
        let _cakePrice = cardDataArray[i][1] 
        let _cakePriceElement = document.createElement('p')
        _cakePriceElement.textContent = `Quantity:`+_cakePrice
        resultsContainerElement.appendChild(_cakePriceElement)
        let _cakeCost = price[_cakeName]
        let _costElement = document.createElement('p')
        _costElement.textContent = _cakeCost
        resultsContainerElement.appendChild(_costElement)
        cartElement.appendChild(resultsContainerElement);
        var button = document.createElement("button");
        button.setAttribute('id','btn-cart')
        resultsContainerElement.appendChild(button);
        
        button.style.backgroundColor="blue";

        let a = document.createElement('a');
        let linkText = document.createTextNode("Buy Now");
        document.getElementById('btn-cart').className = 'btn_Cart';
        a.appendChild(linkText);
        a.title = "Buy Now";
        a.href = "./feedback.html";
        a.style.backgroundColor="blue";
        button.appendChild(a);
        resultsContainerElement.appendChild(a);
        // console.log(a);        


    }
    alert(message);
})


let button_1 = document.createElement("button");
        button_1.innerHTML = "Buy Now";
       console.log(button_1);
    



