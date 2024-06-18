
function myFunction () {
    document.getElementById("demo").innerHTML = "value is " + Math.PI;
}

const lightOnBtn = document.getElementById('light_on')
const lightOffBtn = document.getElementById('light_off')

const bulbImage = document.getElementById('bulb_img')

const onPic = 'https://www.w3schools.com/html/pic_bulbon.gif'
const offPic = 'https://www.w3schools.com/html/pic_bulboff.gif'

function turnOnLight() {
    if(bulbImage) {
        bulbImage.setAttribute('src', onPic)
    }
}

function turnOffLight() {
    if(bulbImage) {
        bulbImage.setAttribute('src', offPic)
    }
}

lightOnBtn.addEventListener('click', turnOnLight)
lightOffBtn.addEventListener('click', turnOffLight)