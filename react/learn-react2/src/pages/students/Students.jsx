import { useState } from "react";

function Students() {
    const [student, setStudent] = useState([])
    const [name, setName] = useState("")

    function addStudent() {
        if (name === "") return
        setStudent ([...student, name])
    }

    return (
        <div>
            <h2>Cadastro de Alunos</h2>
            <input type="text" placeholder="Nome do Aluno: " value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={addStudent}>Adicionar Aluno</button>
            <ul>
                {student.map((student, index) => (<li key={index}>{student}</li>))}
            </ul>
        </div>
    )
}

export default Students