import { Menu } from '/menuBar'
const arr = [
                    {nome: 'Susana', estado: 'Empregado'},
                    {nome: 'Renato', estado: 'Desempregado'},
                    {nome: 'Joaquim', estado: 'Empregado'},
                    {nome: 'Fernanda', estado: 'Empregado'},
                    {nome: 'Roberto', estado: 'Desempregado'},
                    {nome: 'Renato', estado: 'Desempregado'},
                    {nome: 'Renato', estado: 'Empregado'},
                    {nome: 'Renato', estado: 'Desempregado'},

                ]

export function Listas(){
    return (
    
        <div className='container'>
            
            <div>             
                {arr.map((e) => (
                    <div key={`${e.nome} ${e.estado}`}>
                    <span>{e.nome}</span>
                    <span>{e.estado}</span>
                </div>)
                )
                }
            </div>
        </div>
    )
}