import style from './Input.module.css';

function Input({type, name, text, placeholder, handleOnCharge, value}){
    return(
        <div className={style.form_control}>
            <label htmlFor={name}>{text}: </label>
            <input type={type} name={name} placeholder={placeholder} onChange={handleOnCharge} value={value}></input>
        </div>
    )
}
export default Input;