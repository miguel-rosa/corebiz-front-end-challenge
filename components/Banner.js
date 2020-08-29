import styles from './Banner.module.css';

import React from 'react';
import ImageBackground from '../public/background-image.jpg';

const Banner = () => {
    return(
        <section className={styles.banner} style={{backgroundImage:`url('${ImageBackground}')`}}>
            <div className={styles.wrapper}>
                <p className={styles.subtitle}>Olá, o que você está buscando?</p>
                <h1 className={styles.title}>Criar ou migrar seu ecommerce?</h1>
            </div>
        </section>
    )
}

export default Banner;