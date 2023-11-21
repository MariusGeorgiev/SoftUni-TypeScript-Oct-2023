function cityTaxes(cityName: string, population: number, treasury: number) {
const cityInfo = {
    name: cityName,
    population: Math.floor(population),
    treasury: Math.floor(treasury),
    taxRate: Math.floor(10),
    collectTaxes: function() {

        this.treasury += (this.population * this.taxRate)
    },

    applyGrowth: function(percentage: number) {

        this.population += (this.population * (percentage / 100))


    },

    applyRecession: function (percentage: number) {

        this.treasury -= (this.treasury * (percentage / 100))
    },

}

return cityInfo

}

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

