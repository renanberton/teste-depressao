import './style.scss'

export function Intro() {
   return (
      <div className='intro'>
        <h1>Bem-vindo ao nosso teste de depressão online</h1>
        <p>
          Sabemos que a saúde mental é fundamental para o bem-estar de todos, mas muitas vezes é negligenciada ou não discutida abertamente. 
          Nosso objetivo é ajudá-lo a avaliar sua saúde mental e fornecer informações úteis sobre como lidar com a depressão.
        </p>
        <p>
          Nossa equipe de especialistas em saúde mental desenvolveu este teste de depressão online para ajudá-lo a avaliar seus sintomas e fornecer 
          informações valiosas sobre a depressão. <br/><br/> O teste é fácil e leva apenas alguns minutos para ser concluído.
        </p>
        <div className="box-icons">
          <div className="icons">
            <img className='icon-1' src="/icons/talking-icon.png" alt="Icone de um boneco gesticulando/falando" />
            <span>Sem enrolação <br/> Teste rápido</span>
          </div>
          <div className="icons">
            <img className='icon-2' src="/icons/fast-icon.png" alt="Ícone de agilidade, rapidez" />
            <span>Visualize o resultado na hora</span>
          </div>
          <div className="icons">
            <img src="/icons/security-icon.png" alt="Ícone representando a segurança no teste" />
            <span>Segurança em 1º lugar (Nenhum dado é solicitado)</span>
          </div>
        </div>
        <p>
          A depressão é uma condição de saúde mental que pode afetar qualquer pessoa, independentemente da idade, gênero ou origem. É importante reconhecer os sintomas e 
          procurar ajuda profissional, se necessário. 
          Nosso teste de depressão online é uma ferramenta útil para avaliar seus sintomas e descobrir se você pode estar sofrendo de depressão.
        </p>
        <p>
          Lembre-se de que a depressão é tratável e a recuperação é possível. Nosso teste de depressão online é apenas o primeiro passo para avaliar sua saúde mental. 
          Se você acha que pode estar sofrendo de depressão ou tem dúvidas sobre sua saúde mental, recomendamos que procure ajuda profissional. 
          <br /> <br />A saúde mental é importante e deve ser levada a sério.
        </p>
        <button className='btn-teste'>
          Realizar Teste
        </button>
      </div>
   )
}