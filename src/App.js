import './App.css';
import Country from './Country';
import Planets from './Planets';

function App() {
  const countries = [
    { name: 'Kenya', capital: 'Nairobi' },
    { name: 'Rwanda', capital: 'Kigali' },
    { name: 'Uganda', capital: 'Kamapala' },
    { name: 'Tanzania', capital: 'Dareslam' },
  ];

  const planets = [
    { name: 'Earth', isGasPlanet: false },
    { name: 'Mars', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ];
  return (
    <div className="App">
      {/* <User name="Mike" ahe={23} email="mike@m.com" profession="DC Engineer"/> */}
      {countries.map((country, key) => {
        return <Country name={country.name} capital={country.capital} />;
      })}
      <hr />
      <h4>Planets</h4>
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <Planets name={planet.name} />;
      })}
    </div>
  );
}

// const User = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.email}</h2>
//       <h2>{props.age}</h2>
//       <h2>{props.profession}</h2>
//     </div>
//   );
// };

export default App;
