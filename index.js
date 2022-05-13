const d = document,
  $formVenta = d.getElementById('form-venta'),
  $inputs = d.querySelectorAll('#form-venta [required]');

  d.addEventListener('DOMContentLoaded', (e) => {
  $inputs.forEach( (el) => {
    const $span = d.createElement('span');
    $span.id = el.name;
    $span.textContent = el.title;
    $span.classList.add('contact-form-error','none');
    el.insertAdjacentElement('afterend', $span);
  })
  
  
  d.addEventListener('keyup' , (e) => {
    if(e.target.matches('#form-venta [required]')) {
    let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;
      // console.log($input, pattern);
    if(pattern && pattern.value !== ''){
      let regex = new RegExp(pattern)
      return !regex.exec($input.value)
        ?d.getElementById($input.name).classList.add('is-active')
        :d.getElementById($input.name).classList.remove('is-active')
      }
      if(!pattern){
        return ($input. value === '')
        ?d.getElementById($input.name).classList.add('is-active')
        :d.getElementById($input.name).classList.remove('is-active')
      }
    }
  })

  d.addEventListener('submit' , (e) => {
    e.preventDefault();
    const $category = d.querySelector('#category').value,
      $quantity = d.getElementById('inp-qunatity').value,
      $resumen = d.querySelector('#total p');

    let valorTotal = 0,
      desc = 0
    if($category === 'estudiante'){
      desc = 0.2;
    } else if ($category === 'trainee'){
      desc = 0.5;
    } else {
      desc = 0.75;
    }
    
    valorTotal = (200 * desc)*$quantity;
    $resumen.innerText = `Total a Pagar: $ ${valorTotal}`

  })


  d.addEventListener('click' , (e) => {
    if(e.target.matches('#btn-delete')){
      $formVenta.reset()
    }
  })

})