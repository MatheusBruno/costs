import style from "./Select.module.css";

function Select({ name, text}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name}>
                <option>Secione uma opção</option>
            </select>
        </div>
    )
}
export default Select;