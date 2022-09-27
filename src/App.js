import logo from './logo.svg';
import './App.css';
import { Menu } from './menuBar'


function App() {
/*
  const [pagina, setPagina] = useState(0)
  const [nome, setNome] = useState("")
  const [discussoes, setDiscussoes] = useState([])
  const [indiceDiscussao, setIndiceDiscussao] = useState()

  const handleLogin = (numeroDaPagina, nome) => {
    setPagina(numeroDaPagina)
    setNome(nome)
  }
  const handleSelection = (idx) => {
    setPagina('paginaPrincipal')
    setIndiceDiscussao(idx)
  }
  const handleAnswer = (conteudo) => {
    fetch(`/api/discussoes/${indiceDiscussao}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, conteudo })
    })
  }
  */

  return (
    <div className="App">
      <Menu />
    </div>
  );
}



export default App;
