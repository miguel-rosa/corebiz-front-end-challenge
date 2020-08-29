import styles from './Header.module.css';

import IconLogo from '../public/logo.svg';
import IconUser from '../public/icon-user.svg';
import IconSearch from '../public/icon-search.svg';
import IconCart from '../public/icon-cart.svg';

import { CartContext } from '../services/CartContext';

const Header = () => {

    const { cartItems } = React.useContext(CartContext);

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={IconLogo}/>
                <form className={styles.form}>
                    <input 
                        placeholder="O que está procurando?"
                        type="text"
                        className={styles.input}
                    />
                <button className={styles.button}>
                    <img src={IconSearch} />
                </button></form>
                <a className={styles.account}>
                    <img className={styles.account__icon} src={IconUser} />
                    <span className={styles.account__text}>Minha conta</span>
                </a>
                <a className={styles.cart}>
                    <img src={IconCart}/>
                    <span className={styles.cart__quantity}>
                        <span className={styles.cart__quantity__text}>{cartItems}</span>
                    </span> 
                </a>
                
            </div>
        </header>
    )
}
export default Header;