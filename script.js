// async function fetchData(){
//     try{
//         let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.jsonw")
//         return response.json()
//     } catch (error) {
//         console.log(error);
//     }
// }
// I can do this using fetch.then but using async/await causes CORS issues even with live server

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Loaded");    
    const container = document.getElementById("container")


    let data = fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then( ( response ) => {
        return response.json()
    })
    .then ( ( data ) => {

        for(astronaut of data) {
            let astronautString = 
            `
                <div class="astronaut">
                    <div class="bio">
                        <h3 id="name">${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                        <ul>
                    </div>
                <img class="avatar" src=${astronaut.picture}>
            </div>
            `
            container.innerHTML += astronautString 

        }
    });
    
    



});

// https://lc-json-data.s3.us-east-2.amazonaws.com/astronauts.json
// https://handlers.education.launchcode.org/static/astronauts.json