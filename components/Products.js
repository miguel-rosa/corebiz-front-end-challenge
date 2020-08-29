import styles from './Products.module.css';
import { CartContext } from '../services/CartContext';

import IconStar from '../public/icon-star.svg';
import IconStarEmpty from '../public/icon-star-empty.svg';


const Products = ({products}) => {

    const { cartItems, setCartItems } = React.useContext(CartContext);
    
    const valueToPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    })

    function transformPrice(value){
        return valueToPrice.format(Number(value/100));
    }
    
    function renderStar(icon, count){
        const stars =[]
        for(let i=0; i<count ;i++){
            stars.push(<span key={i}><img src={icon}/></span>)
        }
        return (<span>{stars}</span>)
    }

    function renderStars(count){
        const fullStars = renderStar(IconStar, count)
        const emptyStars = renderStar(IconStarEmpty, 5-count)
        
        return (<span>{fullStars}{emptyStars}</span>);
    }

    function handleProductBuy(){
        const updatedItems = cartItems + 1
        setCartItems( updatedItems );
        window.localStorage.setItem('items', updatedItems)
    }

    return(
        <section className={styles.showcase}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Mais Vendidos</h2>
                <ul className={styles.products}>
                    {
                        products.map( product => (
                            <li key={product.productId} className={styles.product} >
                                {product.listPrice && <div className={styles.offer}/>}
                                <img className={styles.image} src={product.imageUrl} alt={product.productName}/>
                                <div className={styles.infos}>
                                    <h3 className={styles.name}>{product.productName}</h3>
                                    {renderStars(product.stars)}
                                    <p className={styles.list_price}>{product.listPrice && transformPrice(product.listPrice)}</p>
                                    <p className={styles.price}>por {transformPrice(product.price)}</p>
                                    <p className={styles.installments}>{product.installments.length >0 &&
                                        ` ou em ${product.installments[0].quantity}x de ${transformPrice(product.installments[0].value)}`
                                    }
                                    </p>
                                    <button onClick={handleProductBuy} className={styles.button}>Comprar</button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Products;