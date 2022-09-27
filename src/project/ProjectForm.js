import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import style from './ProjectForm.module.css';
import { useState, useEffect } from 'react';

function ProjectForm({btnText}){

    const [categoria, setCategoria] = useState([]);

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
    
    return(
        <form className={style.form}>
            <div>
                <Input type="text" name="name" placeholder="Insira nome do projeto" text="Nome do Projeto"/>
            </div>
            <div>
                <Input type="number" name="budget" placeholder="Insira o orçamento total" text="Defina um valor inicial"/>
            </div>
            
            <Select name="category_id" text="Selecione a categoria" options={categoria} />
            
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;