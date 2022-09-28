import style from "./Select.module.css";

function Select({ name, text, options, handleOnCharge, value}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}: </label>
            <select name={name} id={name} onChange={handleOnCharge} value={value || ''}>
                <option disabled>Selecione uma categoria</option>
                {options.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
export default Select;