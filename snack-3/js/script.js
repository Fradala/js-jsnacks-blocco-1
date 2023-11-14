
const wrapperElement = document.querySelector('div.wrapper')



for (let i = 0; i <= 20; i = i + 2){
    console.log(i)
    wrapperElement.innerHTML += '<p> ' + i + ' </p>'

   
}