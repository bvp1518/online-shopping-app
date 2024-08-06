import { createContext } from 'react';

export const CartContext = createContext({
    items:[],
    addItemToCart: () => {},
    updateItemQuantity: () => {}
});


// export default function CartContextProvider({ children }) {
//     const [items, setItems] = useState([]);

//     const addItemToCart = (item) => {
//         setItems((prevItems) => [...prevItems, item]);
//     };

//     const updateItemQuantity = (itemId, quantity) => {
//         setItems((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === itemId ? { ...item, quantity } : item
//             )
//         );
//     };

//     return (
//         <CartContext.Provider value={{ items, addItemToCart, updateItemQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// }
