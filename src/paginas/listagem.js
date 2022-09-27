import '../styles.css'

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
            <div>             
                {arr.map((e) => (
                    <div className="listas" key={`${e.nome} ${e.estado}`}>
                    <span className="nomesListas">{e.nome}</span>
                    <span className="nomesEstados">{e.estado}</span>
                    </div>
                ))
                }
            </div>
    )
}