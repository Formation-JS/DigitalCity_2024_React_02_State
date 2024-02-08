import './App.css'
import FruitState from './components/fruit-state/fruit-state';
import PersonForm from './components/person-form/person-form';

function App() {

  return (
    <>
      <h2>Demo State</h2>
      <FruitState />
      <hr />
      <h2>Demo Formulaire</h2>
      <PersonForm />
      <hr />
      <PersonForm />
    </>
  )
}

export default App
