const password = document.getElementById('password')
const msg = document.getElementById('message')
const strength = document.getElementById('strength')

password.addEventListener('input', function () {
    if (password.value.length > 0) {
        message.style.visibility = 'visible'
        message.style.margin = '4px'
    } else {
        message.style.visibility = 'hidden'
        password.style.border = 'none'
        password.style.outline = 'none'
    }
    if (password.value.length <= 4) {
        strength.innerText = `Weak`
        password.style.borderColor = "red"
        strength.style.color = 'red'
    } else if (password.value.length > 4 && password.value.length < 8) {
        strength.innerText = `Medium`
        password.style.borderColor = "yellow"
        strength.style.color = 'yellow'
    } else if (password.value.length >= 8) {
        strength.innerText = `Strong`
        password.style.borderColor = "#11f011"
        strength.style.color = '#11f011'
    }
});