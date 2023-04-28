import './style.scss';

export function Header() {
   return (
      <div className="container-header">
         <header className="header">
            <img className='logo' src="/icons/mental-care-icon-1.png" alt="Logo do site (ícone de saúde mental)" />
            <span>Teste de Depressão</span>
         </header>
      </div>
   )
}
