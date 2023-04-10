import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        name="Kelvin"
        email="kelvin@react.org"
        age={23}
        isMarried={true}
        friends={['nicholas', 'lucy', 'jack', 'joyce']}
      />
    </div>
  );
}

export default App;
