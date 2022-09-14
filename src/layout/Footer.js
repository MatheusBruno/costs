import { DiReact, DiAngularSimple, DiHtml5, DiJavascript, DiCss3 } from 'react-icons/di';
import style from './Footer.module.css';

function Footer(){
    return(
        <div className={style.divblack}>
        <p>Desenvolvido por Matheus</p>
        <DiAngularSimple className={`${style.padrao} ${style.angular}`} />
        <DiReact className={`${style.padrao} ${style.react}`} />
        <DiHtml5 className={`${style.padrao} ${style.html}`} />
        <DiCss3 className={`${style.padrao} ${style.css}`}/>
        <DiJavascript className={`${style.padrao} ${style.javascript}`} />
        </div>
    )
}
export default Footer;