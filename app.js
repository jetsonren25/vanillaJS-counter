let count = 0
let countHolder = document.createElement('div')
countHolder.textContent = count

let body = document.querySelector('body')

let container = document.createElement('div')

let h1Ctr = document.createElement('h1')
h1Ctr.textContent = 'Counter'

let inc = document.createElement('button')
inc.setAttribute('id','inc')
inc.textContent = 'increase'

let reset = document.createElement('button')
reset.setAttribute('id','reset')
reset.textContent = 'reset'

let dec = document.createElement('button')
dec.setAttribute('id','dec')
dec.textContent = 'decrease'

body.append(container)
container.appendChild(h1Ctr)
container.appendChild(countHolder)
container.appendChild(inc)
container.appendChild(reset)
container.appendChild(dec)

// -------- CODE HERE



