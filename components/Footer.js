import styles from './Footer.module.css';

import IconMail from '../public/icon-mail.svg';
import IconHeadSet from '../public/icon-headset.svg';
import IconVtex from '../public/icon-vtex.svg';
import IconCorebiz from '../public/icon-corebiz.svg'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper__column}>
                    <p className={styles.titles}>Localização</p>
                    <hr className={styles.line}/>
                    <p className={styles.infos}><a  className={styles.links} href="https://www.google.com/maps/place/Av.+Andr%C3%B4meda,+2000+-+Bloco+6+e+8+-+Alphaville+Empresarial,+Barueri+-+SP,+06473-000/data=!4m2!3m1!1s0x94cf03b26b71e089:0x79b5b1233a905e43?sa=X&ved=2ahUKEwjVhqLjusHrAhUXF7kGHfpyD4gQ8gEwAHoECAsQAQ">
                    Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
                    Alphavile SP<br/></a>
                    <a className={styles.links} href="mailto:brasil@corebiz.ag">brasil@corebiz.ag</a>
                    <br/><a className={styles.links} href="tel:+551130901039">+55 11 3090 1039</a> </p>
                </div>
                <div  className={styles.wrapper__column}>
                        <a className={styles.button}><img src={IconMail} className={styles.button__icon}/> <span className={styles.button__text}>ENTRE EM CONTATO</span></a>
                        <a className={styles.button}><img src={IconHeadSet} className={styles.button__icon}/> <span className={styles.button__text}>FALE COM O NOSSO CONSULTOR ONLINE</span></a>
                </div>
                <div className={styles.wrapper__column}>
                    <ul className={styles.creators}>
                        <li>
                            <a className={styles.links} href="https://www.corebiz.ag/">
                                <p>Created by</p>
                                <img src={IconCorebiz}/>
                            </a>
                        </li>
                        <li>
                            <a className={styles.links} href="https://vtex.io/">
                                <p>Powered by</p>
                                <img src={IconVtex}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;