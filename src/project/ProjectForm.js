import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import style from './ProjectForm.module.css';
import { useState, useEffect } from 'react';

function ProjectForm({btnText, handleSubmit, projectDados}){

    const [categoria, setCategoria] = useState([]);
    const [project, setProject] = useState(projectDados || {});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setCategoria(data)
          })
      }, []);

      const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
      }

      function handleCharge(e){
        setProject({ ...project, [e.target.name]: e.target.value})
      }

      function handleCategoria(e){
        setProject({ ...project, categoria: {
          id: e.target.value,
          name: e.target.options[e.target.selectedIndex].text,
        }})
      }

    
    return(
        <form onSubmit={submit} className={style.form}>
            <div>
                <Input type="text" name="name" placeholder="Insira nome do projeto" text="Nome do Projeto" handleOnCharge={handleCharge} value={project.name ? project.name : ''}/>
            </div>
            <div>
                <Input type="number" name="budget" placeholder="Insira o orçamento total" text="Defina um valor inicial" handleOnCharge={handleCharge} value={project.budget ? project.budget : ''}/>
            </div>
            
            <Select name="category_id" text="Selecione a categoria" options={categoria} handleOnCharge={handleCategoria} value={project.categoria ? project.categoria.id : ''}/>
            
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;