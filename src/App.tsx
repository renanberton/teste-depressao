import './App.scss';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div>
      < Header />
      <div className='intro'>
        <h1>Bem-vindo ao nosso teste de depressão online</h1>
        <p>
          Sabemos que a saúde mental é fundamental para o bem-estar de todos, mas muitas vezes é negligenciada ou não discutida abertamente. 
          Nosso objetivo é ajudá-lo a avaliar sua saúde mental e fornecer informações úteis sobre como lidar com a depressão.
        </p>
        <p>
          Nossa equipe de especialistas em saúde mental desenvolveu este teste de depressão online para ajudá-lo a avaliar seus sintomas e fornecer 
          informações valiosas sobre a depressão. O teste é fácil de usar e leva apenas alguns minutos para ser concluído.
        </p>
      </div>
    </div>
  );
}

export default App;
