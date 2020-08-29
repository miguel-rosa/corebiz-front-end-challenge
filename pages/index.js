import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import { CartStorage } from '../services/CartContext';
import { PRODUCTS_GET } from '../services/api';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export async function getStaticProps() {
  
  const { url, options } = PRODUCTS_GET();
  const res = await fetch(url, options);
  const products = await res.json()
  
  return {
    props: {
      products,
    },
  }
}

const Home = ({products}) => {  

    return (
      <CartStorage>
          <Head> 
              <title>Corebiz - Front-end Challenge</title>
              <link rel="icon" href="/favicon.ico" />
              <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&family=Lato:wght@400,500;700&display=swap" rel="stylesheet" />              
          </Head>
          <Header/>
          <main>
            <Banner />
            <Products products={products} />
            <Newsletter />
          </main>
          <Footer />
          <style jsx global>
            {`
              *{
                margin:0;
                padding:0;
                box-sizing:border-box;
              }
              body,input, button, textarea,select{
                font-family: Nunito;
              }
              h2{
                font-weight: 900;
                font-size: 20px;
                line-height: 27px;
              }
              h2:after{
                content:" ";
                display:block;
                height:4.29723px;
                width:50px;
                background: #C0C0C0;
              }
            `}
          </style>
      </CartStorage>            
  )
}
  
export default Home;