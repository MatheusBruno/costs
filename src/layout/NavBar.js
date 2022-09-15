import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import logo from '../imgs/costs_logo.png';

function NavBar(){
    return(
        <nav className={style.main}>

            <Link to="/" className={style.linkimg}>
                <img src={logo} className={style.logo}></img>
            </Link>

            <ul className={style.alinhamento}>
                <Link to="/" className={style.links}>Home</Link>
                <Link to="/empresa" className={style.links}>Empresa</Link>
                <Link to="/newproject" className={style.links}>Novo Projeto</Link>
                <Link to="/Contato" className={style.links}>Contato</Link>
            </ul>
        </nav>
    )
}
export default NavBar;