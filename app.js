setInterval(() => {
    let time = document.querySelector('#time')
let date = new Date()
let hours = date.getHours()
let menuts = date.getMinutes()
let secounds = date.getSeconds()
let day_Night = 'AM'
if(hours > 12){
    day_Night= 'PM'
    hours = hours - 12;
}
if(hours < 10){
    hours = '0'+ hours;
}
if(menuts < 10){
    menuts = '0'+ menuts;
}
if(secounds < 10){
    secounds = '0'+ secounds;
}

time.textContent = hours + ":" + menuts + ":" + secounds + " "+day_Night;
})
