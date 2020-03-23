let rightHeaderBlock = document.querySelector('.right');

// Элементы из карточек
let productInfo = document.querySelector('.product-info')
let cards = document.querySelector('.cards');
let card = document.querySelectorAll('.card');
let productCode = document.querySelectorAll('.product-code');
let productTitle = document.querySelectorAll('.product-title')
let productDescription = document.querySelectorAll('.product-description');
let productDivImg = document.querySelectorAll('.product-img');
let productImg = document.querySelectorAll('.product-img img');
let specifications = document.querySelectorAll('.visible');
let productPrice = document.querySelectorAll('.product-price');
let productPriceWithBtn = document.querySelectorAll('.product-price button');
let allText = document.querySelectorAll('p');


rightHeaderBlock.addEventListener("mouseover", rightHeaderBlockHover = () => {
  productInfo.style.cssText = 'display: flex';
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove('card-hover')
    productCode[i].style.cssText = 'display: none';
    // Стили карточки
    card[i].style.cssText = `
      width: 100%;
      height: 100px;
      border: none;
      border-radius: 0;
      border-bottom: 2px solid #E2E2E2;
      flex-direction: row;
      margin-left: 0px;
    `;
    productTitle[i].style.cssText = `
      font-size: 20px;
    `
    // Описание карточки
    productDescription[i].style.cssText = 'display: none';
    // Стили для обертки изображения
    productDivImg[i].style.cssText = `
      border: 2px solid #e2e2e2;
      min-width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center
    `
    productImg[i].style.cssText = `
      width: 60px;
      text-align: center;
    `
    productPrice[i].style.cssText = `
      margin-top: 0;
      display: block
    `;
  }
  for (let k = 0; k < productPriceWithBtn.length; k++) {
    productPriceWithBtn[k].classList.remove('btn-hover');
    productPriceWithBtn[k].style.cssText = `
      background: transparent;
      height: inherit;
      font-size: 14px;
      font-weight: 700;
    `
  }
  for (let c = 0; c < specifications.length; c++) {
    specifications[c].style.display = 'block';
  }
  cards.style.flexDirection = 'column';
});

rightHeaderBlock.addEventListener("mouseout", rightHeaderBlockOut = () => {
  cards.removeAttribute('style');
  for (let j = 0; j < card.length; j++) {
    card[j].removeAttribute('style');
    card[j].classList.add('card-hover')
    productCode[j].removeAttribute('style');
    productTitle[j].removeAttribute('style');
    productDescription[j].style.display = 'block';
    productDivImg[j].removeAttribute('style');
    productImg[j].removeAttribute('style');
    productPrice[j].style.display = 'flex';
    productInfo.removeAttribute('style');
  }

  for (let k = 0; k < productPriceWithBtn.length; k++) {
    productPriceWithBtn[k].removeAttribute('style');
    productPriceWithBtn[k].classList.add('btn-hover');
  }

  for (let i = 0; i < specifications.length; i++) {
    specifications[i].removeAttribute('style');
  }
});
