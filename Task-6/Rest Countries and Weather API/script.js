//Fetching data from the Rest Countries API code Starts here
fetch("https://restcountries.com/v2/all")
.then((response) => response.json())
.then((data) => {
  const overAllData = data;
  let card = "";
  
  //Creating elements code starts here
  var overAllContainer = document.createElement('div');
  overAllContainer.classList.add("container");
  overAllContainer.style.backgroundColor = "#212F3D";

  var containerTitle = document.createElement('h1');
  containerTitle.setAttribute('id','title');
  containerTitle.setAttribute('class','text-center');
  containerTitle.setAttribute('style','color:white');
  containerTitle.innerText = "Restcountries & Weather using fetch API"
  overAllContainer.appendChild(containerTitle);
  
  var rowdiv = document.createElement('div');
  var rowdivClass = ["row"];
  rowdiv.classList.add(...rowdivClass);

  for (var i=0; i<overAllData.length;i++){    
    card += `
    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center p-3">
      <div class="card h-100 text-center" style="width: 18rem;">
        <div class="card-header" style="background-color:black; color:white">
          ${overAllData[i].name}
        </div>                    
        <div class="card-body" style="background:-webkit-linear-gradient(right,gray,whitesmoke)">
          <img src="${overAllData[i].flag}" class="card-img-top mb-2" alt="" width="200" height="200">
          <div class="card-text">
            <p>Capital: ${overAllData[i].capital}</p>
            <p>Region: ${overAllData[i].region}</p>
            <p>Country Code: ${overAllData[i].alpha3Code}</p>
          </div>          
          <button onclick='weather("${overAllData[i].name}","${i}")' class="btn btn-primary button" id="button">Click for Weather</button>
          <p class="card-text">
            <img src="" class="icon${i}" alt=""> 
            <div class="description${i}"></div>
            <div class="temperature${i}"></div>
            <div class="lat${i}"></div>
            <div class="lon${i}"></div>
          <p>
        </div>
      </div>
    </div>
  `;

  rowdiv.innerHTML = card;
  overAllContainer.appendChild(rowdiv);
  document.body.appendChild(overAllContainer);
  }
})
//Creating elements code Ends here

.catch((Error) => {
  console.log(Error);
});
//Fetching data from the Rest Countries API code Ends here


//Fetching data from the OpenWearther API code starts here
function weather(a,i) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+a+'&units=metric&appid=91d783baa555ba7a91e5cfd1d5c70a46')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    var {icon} = data.weather[0];
    var {description} = data.weather[0];
    var {temp} = data.main;
    var {lat,lon} = data.coord;
    console.log(icon,description,temp,lat,lon);

    document.querySelector(`.icon${i}`).src =  "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    document.querySelector(`.description${i}`).innerText = description;
    document.querySelector(`.temperature${i}`).innerText = temp + "°C";
    document.querySelector(`.lat${i}`).innerText = "lat: " + lat + "°";
    document.querySelector(`.lon${i}`).innerText = "lon: " + lon + "°";

  })
  .catch((error) => {
    console.log(error);
  });
}
//Fetching data from the OpenWearther API code Ends here