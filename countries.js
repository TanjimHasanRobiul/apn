const lodeCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
lodeCountries();

const displayCountries =Countries => {
    // for( const country of Countries){
    // console.log(country);
    // };
    const countriesDiv = document.getElementById('Countries')
    Countries.forEach(country => {
        console.log(country);
        const div =document.createElement ('div');
        div.classList.add('country')
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p =document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesDiv.appendChild(div);
  
    });
}