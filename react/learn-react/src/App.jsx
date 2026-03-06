import { useState } from "react";

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);

  function changeBody() {
    setActive(!active); // alterna entre true e false
    document.body.style.backgroundColor = !active ? 'gray' : 'white';
  }

  function whileText(event) {
    setText(event.target.value);
  }

  function saveName() {
    setName(text);
  }

  function title() {
    if (name !== '') {
      return <h1>Olá, seja bem vindo {name}!</h1>;
    }
    return <h1>Olá, seja bem vindo!</h1>;
  }

  return (
    <div className="teste">
      {title()}
      <input
        type="text"
        onChange={whileText}
        value={text}
        placeholder="Diga seu Nome"
      />
      <button onClick={saveName}>Salvar</button>

      <button onClick={changeBody}>
        {active ? 'Voltar para branco' : 'Mudar para cinza'}
      </button>
    </div>
  );    
}

export default App;