// SpaceX info API page


const rocketURL = 'https://api.spacexdata.com/v2/rockets';
const dragonsURL = 'https://api.spacexdata.com/v3/dragons';



// rocket info section
const searchForm = document.getElementById('rocketForm');
const rocketInfo = document.getElementById('rocketList');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();

    fetch(rocketURL)

    .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            displayRockets(json);

        })
        .catch(err => {
            console.log(err);
        })
};

function displayRockets(json) {

    while (rocketInfo.firstChild) { /// deletes form info when refreashing/resubmitting
        rocketInfo.removeChild(rocketInfo.firstChild);
    };


    let rockets = json.forEach(r => {
        let rocket = document.createElement('li'); // rocket name
        rocket.innerText = r.name;
        rocketInfo.appendChild(rocket);

        let cost = document.createElement('ul'); //cost per launch
        cost.innerText = ' Cost Per Launch: $' +
            r.cost_per_launch;

        rocketInfo.appendChild(cost);
        let mass = document.createElement('ul'); // mass
        mass.innerText = ' Mass: ' + r.mass.kg + ' kg, ' + r.mass.lb + ' lb';
        rocketInfo.appendChild(mass);

        let firstthrust = document.createElement('ul'); // first stage thrust
        firstthrust.innerText = 'First Stage Thrust: ' + r.first_stage.thrust_sea_level.kN + ' kN, ' + r.first_stage.thrust_sea_level.lbf + ' lb';
        rocketInfo.appendChild(firstthrust);

        let secondthrust = document.createElement('ul'); // second stage thrust
        secondthrust.innerText = 'Second Stage Thrust: ' + r.second_stage.thrust.kN + ' kN, ' + r.second_stage.thrust.lbf + ' lb';
        rocketInfo.appendChild(secondthrust);

        // let images = document.createElement('img');
        // images.src = r.flickr_images;
        // rocketInfo.appendChild(images);
        // preventDefault();


    });
}
//end of rocket info

//dragon info section

const searchForm1 = document.getElementById('dragonForm');
const dragonInfo = document.getElementById('dragonList');

searchForm1.addEventListener('submit', fetchSpace1);

function fetchSpace1(e) {
    e.preventDefault();

    fetch(dragonsURL)

    .then(response => {
            return response.json();
        })
        .then(json => {
            displayDragons(json);

        })
        .catch(err => {
            console.log(err);
        })
};

function displayDragons(json) {

    while (dragonInfo.firstChild) { /// deletes form info when refreashing/resubmitting
        dragonInfo.removeChild(dragonInfo.firstChild);
    };


    let dragons = json.forEach(r => {
        let dragon = document.createElement('li'); // dragon name
        dragon.innerText = r.name;
        dragonInfo.appendChild(dragon);

        let description = document.createElement('ul'); //cost per launch
        description.innerText = r.description;
        dragonInfo.appendChild(description);

        let mass = document.createElement('ul'); // mass
        mass.innerText = ' Mass: ' + r.dry_mass_kg + ' kg, ' + r.dry_mass_lb + ' lb';
        dragonInfo.appendChild(mass);

        // let firstthrust = document.createElement('ul'); // first stage thrust
        // firstthrust.innerText = 'First Stage Thrust: ' + r.first_stage.thrust_sea_level.kN + ' kN, ' + r.first_stage.thrust_sea_level.lbf + ' lb';
        // rocketInfo.appendChild(firstthrust);

        // let secondthrust = document.createElement('ul'); // second stage thrust
        // secondthrust.innerText = 'Second Stage Thrust: ' + r.second_stage.thrust.kN + ' kN, ' + r.second_stage.thrust.lbf + ' lb';
        // rocketInfo.appendChild(secondthrust);


        // let images = document.createElement('images');
        // images.innerHTML = r.flickr_images;
        // rocketInfo.appendChild(images);

    });
    //end of dragon info

}