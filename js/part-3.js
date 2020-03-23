let counter = 1;
card.forEach(crd => {
  crd.id = `card-${counter}`;
  counter++;
  crd.draggable = true;
  crd.ondragstart = event => {
    event.dataTransfer.setData("id", event.target.id);
    event.target.classList.add('hide');
  }

  crd.ondragover = event => {
    event.preventDefault();
    if (event.target.classList.contains('card')) {
      let old = document.querySelector('.over');
      old && old.classList.remove('over')
      event.target.classList.add('over');
      event.target.classList.add('drag-enter');
    }
  };

  crd.ondragenter = event => {
    if (event.target.classList.contains('card')) {
      event.target.classList.add('drag-enter');
    } else {
      crd.classList.add('drag-enter__danger')
    }
  }

  crd.ondragleave = event => {
    event.target.classList.remove('drag-enter')
    event.target.classList.remove('drag-enter__danger')
  }

  crd.ondragend = event => {
    event.target.classList.remove('drag-enter');
    event.target.classList.remove('hide');
  }

  crd.ondrop = event => {
    event.preventDefault();
    crd.classList.remove('over');
    crd.classList.remove('drag-enter');
    if (event.target.classList.contains('card')) {
      let v = event.target.innerHTML;
      let fromEl = document.querySelector('#' + event.dataTransfer.getData('id'));
      event.target.innerHTML = fromEl.innerHTML;
      fromEl.innerHTML = v;
    }
  };
})