const inputs = document.querySelectorAll('input')

const patterns = {
  visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
  mastercard: /^5[1-5]\d{14}$/,
  discover: /^(?:6011\d{12})|(?:65\d{14})$/,
  amex: /^3[47]\d{13,14}$/
}

function validate(field, regex) {
  if(regex.test(field.value)) {
    field.className = 'correct'
    console.log('cool')

  } else {
    field.className = 'incorrect'
  }
}
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.name.value])
  })
})
