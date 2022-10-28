const inputNameTag = document.getElementById('name')
const inputNumTag = document.getElementById('number')


// const inputExpMMYYTag = document.querySelectorAll('#exp_num')
const inputExpMMTag = document.getElementById('exp_mm')
const inputExpYYTag = document.getElementById('exp_yy')


const inputCvcNumTag = document.getElementById('cvc_num')
const btnTag = document.getElementById('main-button')

let adviceName = document.getElementById('start-hidden-name')
let adviceNumber = document.getElementById('start-hidden-number')
let adviceMonthYear = document.getElementById('start-hidden-month-year')
let adviceCvc = document.getElementById('start-hidden-cvcnumber')

let allChecked = 0


btnTag.addEventListener("click", (event) => {
    event.preventDefault()

    const form = document.getElementById('form')

    const inputName = form.name.value.toUpperCase()
    const inputNum = form.number.value
    const inputExpMM = form.exp_mm.value
    const inputExpYY = form.exp_yy.value
    const cvcNum = form.cvc_num.value


    if(allChecked >= 5) {
        console.log('Tudo registrado com sucesso!')
        changeInterface()
        changeCard(inputName, inputNum, inputExpMM, inputExpYY, cvcNum)
    } else {
        console.log('Registre-se!')
    }

})

inputNameTag.addEventListener('blur', () => {
    var formInitial = document.getElementById('form')
    var inputNameValueInitial = formInitial.name.value
    nameValidation(inputNameValueInitial)
})

inputNumTag.addEventListener('blur', () => {
    var formInitial = document.getElementById('form')
    var inputNumberValueInitial = formInitial.number.value
    numberValidation(inputNumberValueInitial)
})

inputExpYYTag.addEventListener('blur', () => {
    var formInitial = document.getElementById('form')
    var inputExpYyValueInitial = formInitial.exp_yy.value
    expYyValidation(inputExpYyValueInitial)
})

inputExpMMTag.addEventListener('blur', () => {
    var formInitial = document.getElementById('form')
    var inputExpMmValueInitial = formInitial.exp_mm.value
    expMmValidation(inputExpMmValueInitial)
})

inputCvcNumTag.addEventListener('blur', () => {
    var formInitial = document.getElementById('form')
    var inputCvcValueInitial = formInitial.cvc_num.value
    cvcValidation(inputCvcValueInitial)
})



function nameValidation(name) {
    if(name === '') {
        adviceForName("Field can't be blank")
    } else {
        if(name.includes('0') || name.includes('1') || name.includes('2') || name.includes('3') || name.includes('4') || name.includes('5') || name.includes('6') || name.includes('7') || name.includes('8') || name.includes('9')) {
            adviceForName('Wrong format, letters only')
        } else {
            if(!name.includes(' ')) {
                adviceForName('field must contain first and last name')
            } else {
                if(name.split(' ').length >= 3) {
                    adviceForName('field must only first and last name')
                } else {
                    inputNameTag.style.border = "2px solid rgb(35, 156, 35)"
                    allChecked += 1 
                }
            }
        }
    }
}


function numberValidation(number) {
    if(number === '') {
        adviceForNumber("Field can't be blank")
    } else {

        if(isNaN(number)) {
            adviceForNumber('Wrong format, numbers only')
            console.log(number, typeof(number))
        } else {
            var arrayNum = number.split('')
            console.log(arrayNum.length)
            if(arrayNum.length <= 15 || arrayNum.length >= 17) {
                adviceForNumber('Field needs to have 16 numbers')
            } else if(arrayNum.length == 16) {
                inputNumTag.style.border = "2px solid rgb(35, 156, 35)"
                allChecked += 1 
            }
        }
    }
}


function expYyValidation(yy) {
    if(yy == '') {
        adviceForYear("Field can't be blank")
    } else {
        if(isNaN(yy)) {
            adviceForYear("Wrong format, numbers only")
        } else {
            if(yy.split('').length < 2 || yy.split('').length >= 3) {
                adviceForYear("Field needs to have 2 numbers")
            } else {
                if(yy < 22) {
                    adviceForYear("Put a valid year")
                } else {
                    inputExpYYTag.style.border = "2px solid rgb(35, 156, 35)"
                    allChecked += 1 
                }
            }
        }
        }
}

function expMmValidation(mm) {
    if(mm == '') {
        adviceForMonth("Field can't be blank")
    } else {
        if(isNaN(mm)) {
            adviceForMonth("Wrong format, numbers only")
        } else {
            if(mm.split('').length < 2 || mm.split('').length >= 3) {
                adviceForMonth("Field needs to have 2 numbers")
            } else {
                if(mm < 1 || mm > 12) {
                    adviceForMonth('Put a valid month')
                } else {
                    inputExpMMTag.style.border = "2px solid rgb(35, 156, 35)"
                    allChecked += 1 
                }
            }
        }
    }
}

function cvcValidation(cvc) {
    if(cvc == '') {
        adviceForCvc("Field can't be blank")
    } else {
        if(isNaN(cvc)) {
            adviceForCvc("Wrong format, numbers only")
        } else {
            if(cvc.split('').length < 3 || cvc.split('').length >= 4) {
                adviceForCvc("Field needs to have 3 numbers")
            } else {
                inputCvcNumTag.style.border = "2px solid rgb(35, 156, 35)"
                allChecked += 1 
            }
        }
    }
}





function adviceForName(message) {
    adviceName.innerHTML = message
    adviceName.style.display = "block"
    inputNameTag.style.border = "1px solid red"
    setTimeout(() => {
        adviceName.style.display = "none"
        inputNameTag.style.border = "2px solid hsla(278, 68%, 11%, 0.288)"
    }, 2500)
}

function adviceForNumber(message) {
    adviceNumber.innerHTML = message
    adviceNumber.style.display = "block"
    inputNumTag.style.border = "1px solid red"
    setTimeout(() => {
        adviceNumber.style.display = "none"
        inputNumTag.style.border = "2px solid hsla(278, 68%, 11%, 0.288)"
    }, 2500)
}

function adviceForMonth(message) {
    adviceMonthYear.innerHTML = message
    adviceMonthYear.style.display = "block"
    inputExpMMTag.style.border = "1px solid red"
    setTimeout(() => {
        adviceMonthYear.style.display = "none"
        inputExpMMTag.style.border = "2px solid hsla(278, 68%, 11%, 0.288)"
    }, 2500)
}

function adviceForYear(message) {
    adviceMonthYear.innerHTML = message
    adviceMonthYear.style.display = "block"
    inputExpYYTag.style.border = "1px solid red"
    setTimeout(() => {
        adviceMonthYear.style.display = "none"
        inputExpYYTag.style.border = "2px solid hsla(278, 68%, 11%, 0.288)"
    }, 2500)
}

function adviceForCvc(message) {
    adviceCvc.innerHTML = message
    adviceCvc.style.display = "block"
    inputCvcNumTag.style.border = "1px solid red"
    setTimeout(() => {
        adviceCvc.style.display = "none"
        inputCvcNumTag.style.border = "2px solid hsla(278, 68%, 11%, 0.288)"
    }, 2500)
}


function changeInterface() {
    var formEl = document.getElementById('form')
    formEl.style.display = "none"

    var divContent = document.querySelector('.form')

    var imgCheck = document.createElement("img")
    imgCheck.src = './images/icon-complete.svg'
    imgCheck.style.marginBottom = "2rem"

    var title = document.createElement('h3')
    title.innerHTML = 'THANK YOU!'
    title.style.marginBottom = ".5rem"
    title.style.fontSize = "2rem"

    var subtitle = document.createElement('div')
    subtitle.innerHTML = "We've added your card details"
    subtitle.style.opacity = "0.7"

    var btnContinue = document.createElement('button')
    btnContinue.innerText = 'Continue'
    btnContinue.id = "main-button"

    divContent.id = 'divContent'

    divContent.appendChild(imgCheck)
    divContent.appendChild(title)
    divContent.appendChild(subtitle)
    divContent.appendChild(btnContinue)

    btnContinue.addEventListener('click', () => {
        window.location.reload()
    })
    
}

function changeCard(name, number, month, year, cvc) {
    var nameDisplay = document.getElementById('card-name')
    // var numberDisplay = document.getElementById('front-number')

    var numDisplay1 =  document.getElementById('part1')
    var numDisplay2 =  document.getElementById('part2')
    var numDisplay3 =  document.getElementById('part3')
    var numDisplay4 =  document.getElementById('part4')

    var monthDisplay = document.getElementById('mm')
    var yearDisplay = document.getElementById('yy')
    var cvcDispay = document.getElementById('back-number')

    var part1 = number.slice(0, 4)
    var part2 = number.slice(4, 8)
    var part3 = number.slice(8, 12)
    var part4 = number.slice(12, 16)

    nameDisplay.innerHTML = name

    numDisplay1.innerHTML = part1
    numDisplay2.innerHTML = part2
    numDisplay3.innerHTML = part3
    numDisplay4.innerHTML = part4

    monthDisplay.innerHTML = month
    yearDisplay.innerHTML = year
    cvcDispay.innerHTML = cvc

}






