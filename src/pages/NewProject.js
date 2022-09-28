import ProjectForm from '../project/ProjectForm';
import style from './NewProject.module.css';

import { useNavigate } from 'react-router-dom';

function NewProject(){

    const redirecionamento = useNavigate();

    function createPost(project){
        // initialize cost and serives
        project.cost = 0;
        project.service = [];

        fetch("http://localhost:5000/project", {
            method: "POST", // informa o metodo de envio.
            headers: {
                'Content-Type': 'application/json', // interpreta o dados esta sendo manipulado.
            },
            body: JSON.stringify(project), //envia os dados para JSON.
        })
        .then((resposta) => resposta.json)
        .then((dados) => { 
            console.log(dados)
            redirecionamento("/projects", {message: "Projeto criado com sucesso!"})
        })
        .catch((err) => console.log(err));
    }

    return(
        <div className={style.newproject_container}>
            <h1> Criar Projeto </h1>
            <p>Crie seu projeto para depois adicionar os serviçoes</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Novo Projeto"/>
        </div>
    )
}
export default NewProject;