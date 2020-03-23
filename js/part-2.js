cards.addEventListener('click', (event) => {
  let target = event.target;
  let form = event.target.parentNode.querySelector('.change-title');
  let title = event.target.parentNode.querySelector('.product-title');
  let changeButton = event.target.parentNode.querySelector('.change-btn');
  let input = event.target.parentNode.querySelector('.input-title');

  if (target.className === 'product-title') {
    form.style.cssText = 'display: block';
    title.style.cssText = 'display: block';
    input.value = title.textContent;
    input.focus();
    input.select();

    changeButton.onclick = () => {
      event.preventDefault();
      if (input.value.trim() === '') {
        form.style.cssText = 'display: none';
      } else {
        title.innerHTML = '';
        title.innerHTML = input.value;
        form.style.cssText = 'display: none';
      }
    }
  }
})



