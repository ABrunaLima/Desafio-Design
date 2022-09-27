import '../styles.css'
import { Filtro } from '../filtros'

const arr = [
                    {nome: 'Susana', estado: 'Empregado'},
                    {nome: 'Renato', estado: 'Desempregado'},
                    {nome: 'Joaquim', estado: 'Empregado'},
                    {nome: 'Fernanda', estado: 'Empregado'},
                    {nome: 'Roberto', estado: 'Desempregado'},
                    {nome: 'Renato', estado: 'Desempregado'},
                    {nome: 'Rita', estado: 'Empregado'},
                    {nome: 'Gabriel', estado: 'Desempregado'},

                ]

export function Listas(){
    return (                  
            <div className='listaContainer' >
                <div><Filtro/></div>
                <div>             
                {arr.map((e) => (
                    <div className="listas" key={`${e.nome} ${e.estado}`}>
                    <span className="nomesListas">{e.nome}</span>
                    <span className="nomesEstados">{e.estado}</span>
                    </div>
                ))
                }
                </div>
            </div>
    )
}