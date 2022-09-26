import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import style from './ProjectForm.module.css';

function ProjectForm({btnText}){
    return(
        <form className={style.form}>
            <div>
                <Input type="text" name="name" placeholder="Insira nome do projeto" text="Nome do Projeto"/>
            </div>
            <div>
                <Input type="number" name="budget" placeholder="Insira o orçamento total" text="Defina um valor inicial"/>
            </div>
            <div>
                <Select name="category_id" text="Selecione a categoria" />
            </div>

            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;