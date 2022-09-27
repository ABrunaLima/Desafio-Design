import './styles.css'

export function Menu(){
    return(
    <div className='container'>
        <div className="menu">
            <img src="/images/Logo.svg"/>
            <button className="menuButton">Home</button>
            <button className="menuButton">Candidaturas</button>
            <button className="menuButton">Aprendizes</button>
            <button className="menuButton">Empregabilidade</button>
        </div>
    </div>
    )
}

