let body = document.querySelector('body')

let container = document.createElement('div')

let h1Ctr = document.createElement('h1')
h1Ctr.textContent = 'Counter'

let inc = document.createElement('button')
inc.setAttribute('class','btn')
inc.textContent = 'increase'

let reset = document.createElement('button')
reset.setAttribute('class','btn')
reset.textContent = 'reset'

let dec = document.createElement('button')
dec.setAttribute('class','btn')
dec.textContent = 'decrease'

let count = 0
let countHolder = document.createElement('div')
countHolder.setAttribute('id','count')
countHolder.textContent = count

body.append(container)
container.appendChild(h1Ctr)
container.appendChild(countHolder)
container.appendChild(inc)
container.appendChild(reset)
container.appendChild(dec)

// -------- CODE HERE
let btns = document.querySelectorAll('.btn')
btns.forEach(btn => {btn.addEventListener('click', (e) => update(e))})

const update = (e) => {{
    switch (e.target.textContent) {
        case 'increase':
            count++
            countHolder.textContent = count
            break;
        case 'decrease':
            count--
            countHolder.textContent = count
            break;
        default:
            count = 0
            countHolder.textContent = count
            break;
    }
}}








