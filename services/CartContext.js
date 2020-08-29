export const CartContext = React.createContext();

export const CartStorage = (props) =>{

    const [cartItems, setCartItems] = React.useState(0);

    React.useEffect(() => {
        const items = window.localStorage.getItem('items');
        if(items){
            setCartItems(Number(items));
        }
    }) 
    
   return(
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {props.children}
        </CartContext.Provider>
    )

};