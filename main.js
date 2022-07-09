const button = document.querySelector('button');
const textValue = document.querySelector('input');
const displayName = document.querySelector('.displayName');
const displayTempInF = document.querySelector('.displayTempInF');
const displayTempInC = document.querySelector('.displayTempInC');

async function weather(){
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textValue.value}&appid=be3c57305115e0214dc9e6bbcdcfd602`, {mode:'cors'})
    response.json().then((data)=>{
      displayName.innerHTML = data['name'];
      displayTempInF.innerHTML = data['main']['temp']+' F';
      displayTempInC.innerHTML = ((parseInt(displayTempInF.innerHTML) - 32)*5)/9;
    })
    .catch((err)=>{alert(err);})
}
