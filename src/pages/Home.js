import style from './Home.module.css';

import savings from '../imgs/savings.svg';
import Linkbutton from '../layout/Linkbutton';

function Home(){
    return(
        <section className={style.home_contaier}>
            <h1>Bem Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Linkbutton to="/newproject" text="Crie um projeto" />
            <img src={savings} alt="Costs" ></img>
        </section>
    )
}
export default Home;