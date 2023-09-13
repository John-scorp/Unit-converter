const userInput = document.getElementById("user-input");
const outputJs = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");
const meterFeet = document.getElementById("container")

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let value ;
// meterFeet.innerText = "sdadasd"
// outputJs.innerText = "asdad"

convertBtn.addEventListener("click", getValue);

//Getting User Input
function getValue()
{
   value = Number(userInput.value)
   let mFeet = value * 3.280
   let fMeter = value * 0.3048
   let length =  `
            <div class="content" >
            <p class="label">Length (Meter/Feet)</p>
            <p class = "content-two"> ${value} meters = ${mFeet.toFixed(3)} feet | ${value} feet = ${fMeter.toFixed(3)} meters</p>
            </div>
            `
   let lGallons = value * 0.264
   let gLitres = value * 3.785

   let volume =  `<div class="content1" >
      <p class="label">Volume (Liters/Gallons)</p>
      <p  class = "content-two"> ${value} liters = ${lGallons.toFixed(3)} gallons | ${value} gallons = ${gLitres.toFixed(3)} liters</p>
      </div>
      `
   let kPounds = value * 2.204
   let pKilos = value * 0.4535

   let mass = `<div class="content1" >
            <p class="label">Mass (Kilograms/Pounds)</p>
            <p  class = "content-two"> ${value} kilos = ${kPounds.toFixed(3)} pounds | ${value} pounds = ${pKilos.toFixed(3)} kilos</p>
            </div>
            
            `

   meterFeet.innerHTML = ` ${length} ${volume} ${mass} `
   
};



