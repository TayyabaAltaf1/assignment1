//temp
async function getWeatherDetails(){

    const cityInputRef=document.getElementById("city");
    let cityName= cityInputRef.value;
console.log("City Name:", cityName);

const  res =  await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
 const weather = await res.json();
 let tempcelcius = weather["current"]["temp_c"]
console.log(tempcelcius);
}
//wind
async function getWeatherDetails(){
    
    const cityInputRef=document.getElementById("city");
    let cityName= cityInputRef.value;
console.log("City Name :", cityName);
const  res =  await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
const wind = await res.json();
let  winddegree = wind["current"]["wind_degree"]
console.log(winddegree);
}
//humidity
async function getWeatherDetails(){
    
    const cityInputRef=document.getElementById("city");
    let cityName= cityInputRef.value;
console.log("City Name :", cityName);
const  res =  await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
const humidy = await res.json();
let  humidity = humidy["current"]["humidity"]
console.log(humidity);
}
//fahrenhiet
async function getWeatherDetails(){
    
    const cityInputRef=document.getElementById("city");
    let cityName= cityInputRef.value;
console.log("City Name :", cityName);
const  res =  await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
const Fahrenhiet = await res.json();
let  tempfahrenhiet = Fahrenhiet["current"]["temp_f"]
console.log(tempfahrenhiet);
}

//issunny

async function getWeatherDetails(){
    
    const cityInputRef=document.getElementById("city");
    let cityName= cityInputRef.value;
console.log("City Name :", cityName);
const  res =  await fetch(
    "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
    );
const issunny = await res.json();
let  isday = issunny["current"]["is_day"]
console.log(isday);
}

//promise
let x=3
const pr =  new Promise((resolve, reject)=> {
    if(x==3){
        setTimeout(()=>{
            resolve("Yes resolved");
        }, 5000);
    }else{
        reject("Invalid value of x");
    }
    
});
pr.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


const userInput = new Promise(resolve => {
    const input = prompt('Enter something:');
    resolve(input);
  });
  
  userInput
    .then(input => console.log(`You entered: ${input}`))
    .catch(error => { 
      console.error('Error getting user input:', error);
    });


    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Promise rejected!"); 
        }, 1000);
      });
      
      myPromise
        .then(result => {
          console.log(result); 
        })
        .catch(error => {
          console.error("Promise rejected:", error); 
        });



        const newPromise = new Promise((resolve, reject) => {
            throw new Error("An error occurred"); 
          });
          
          myPromise
            .then(result => console.log(result))
            .catch(error => console.error(error));


            const mePromise = new Promise((resolve, reject) => {
                const isSuccess = true; 
                if (isSuccess) {
                  resolve("Success!"); 
                } else {
                  reject("Failure!");
                }
              });
              
              mePromise
                .then(result => console.log(result)) 
                .catch(error => console.log(err));