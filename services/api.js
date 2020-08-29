export const API_NEWSLETTER = 'https://corebiz-test.herokuapp.com/api/v1/newsletter';
export const API_PRODUCTS = 'https://corebiz-test.herokuapp.com/api/v1/products';

export function PRODUCTS_GET(){
    return {
        url:API_PRODUCTS,
        options:{
            method:'GET',
            redirect:'follow'
        }
    }
}

export function NEWSLETTER_POST(data){
    return{
        url:API_NEWSLETTER,
        options:{
            method:'POST',
            headers:{
                'Content-Type': "application/json",
            },
            body:JSON.stringify(data),
        }
    }
}