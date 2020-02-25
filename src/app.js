import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () =>{
  new Vue({
    el: "#app",
    data: {
      countries: [],
      countryToFindIndex: null,
      dogImgURL: null
    },
    mounted(){
      this.fetchCountries();
    },
    computed: {
      totalPopulation: function(){
        return this.countries.reduce((total, country) => {
          return total += country.population
        }, 0)
      },
      foundCountry: function(){
        if (this.countries && this.countryToFindIndex) {
          this.fetchDog()
          return this.countries[this.countryToFindIndex]
        }
      }
    },
    methods: {
      fetchCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      },
      fetchDog: function(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => this.dogImgURL = data.message)
      }
    }
  });
});
