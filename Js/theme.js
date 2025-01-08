
function toggleTheme() {
    //   Already Black we have to go to light
    const bodyColor = document.body.style.backgroundColor;
    const isDark = bodyColor === "black";
    if (isDark) {
      console.log("I am dark theme");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      console.log("I am light theme");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }
  
  const themeBtnRef = document.getElementById("theme-btn");
  themeBtnRef.addEventListener("click", () => {
    toggleTheme();
  });
       
  function saveToDB() {
    console.log(" The weather wind in lahore is  14km/h");
      
  }
    
 // set timeout
 // set interval
 // only 1 execution after interval

setTimeout(() => {
     console.log("Set Timeout called");
     //toggle theme();
},1000);

const intervalId = setInterval(() => {
       console.log("Set Interval called");
      // toggleTheme();
}, 1000);

 
// Automatic theme toggle every 15 seconds
setInterval(toggleTheme, 15000);


// localStorage


async function getWeatherDetails () {
   const cityInputRef = document.getElementById("city")
   let cityName = cityInputRef.Value;
   console.log("city Name:", cityName);



}




