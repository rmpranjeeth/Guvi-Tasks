// Solving problems using array functions on rest countries data:

async function getData() {
    let url = 'https://restcountries.com/v3.1/all';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

getData().then ((data) => {
    
    console.log(data);

    //a. Get all the countries from Asia continents/region using filter function:
    const overallCountries = data;
    let region = overallCountries.filter(function (value){
        return value.region == "Asia";
    })
    console.log("a. Get all the countries from Asia continents/region using filter function");
    console.log(region);


    //b. The countries with a population of less than 2 lakhs using Filter function:
    let population = overallCountries.filter(function (value){
        return value.population < 200000;
      })
      console.log("b. The countries with a population of less than 2 lakhs using Filter function");
      console.log(population);


    //c. Print the following details name, capital, flag using forEach function:
    console.log("c. The Details of name, capital, flag using forEach function");
    var v=[];
    overallCountries.forEach((value)=>{
      v={
        name:value.name,
        capital:value.capital,
        flag:value.flag
        };
      console.log(v);
    });


    //d. Print the total population of countries using reduce function:
    let Totalpopulation =  overallCountries.reduce(function (accumulator, Cvalue){
        return accumulator + Cvalue.population;
      },0)
      console.log("d. The total population of countries using reduce function is", Totalpopulation);


    //e. Print the country which uses US Dollars as currency
    console.log("e. The country which uses US Dollars as currency");
      for(let i=0; i<overallCountries.length; i++){
       let isCurrency = overallCountries[i].currencies;
       if(isCurrency){
          let currencyObj = overallCountries[i].currencies;
          let isUSD = currencyObj.USD !== undefined;
          if(isUSD){
              console.log(overallCountries[i].name.common);
            }
        }
    }  
});