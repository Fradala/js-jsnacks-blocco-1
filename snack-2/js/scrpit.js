const wrapperElement = document.querySelector('div.wrapper')

for (let i =1; i<=6; i++){
    wrapperElement.innerHTML += `<p> $(i) </p>`;
}
