import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import axios from "axios";
// import { wait } from "@testing-library/user-event/dist/utils";

// const defaultCart = {
//   items: [],
//   totalAmount: 0
// };

const CartProvider = (props) => {

    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);



    useEffect(() => {
        let amount = 0;
        items.forEach((item) => {
            amount = item.price * item.quantity;
        });
        setTotalAmount(amount);
    }, [items]);


        const addItemHandler = (item, quantity) => {
        setItems((prevItems) => {
          const existingItem = prevItems.find(
            (prevItem) => prevItem.id === item.id
          );
          if (existingItem) {
            return prevItems.map((prevItem) =>
              prevItem.id === item.id
                ? { ...prevItem, quantity: prevItem.quantity + quantity }
                : prevItem
            );
          }
          try{
            const response = axios.post('https://crudcrud.com/api/fbd63b27f9b44122b2fc67926cdd8adf/Cart',[...prevItems, { ...item, quantity: quantity }]);
            if (response.status >= 200 && response.status < 300) {
              console.log('successful');
            } else {
              console.log('something went wrong');
            }
          } catch (error) {
            console.log(error);
          }
    
          return [...prevItems, { ...item, quantity: quantity }];
        });
    
      };


    // const addItemHandler = async (item, quantity) => {
    //     try {
    //       const existingItem = items.find((prevItem) => prevItem.id === item.id);
      
    //       if (existingItem) {
    //         const updatedItems = items.map((prevItem) =>prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + quantity }: prevItem
    //         );
    //         setItems(updatedItems);
    //       } else {
    //         const response = await axios.post('https://crudcrud.com/api/e770c27e3aed4e78a7c5036f28b868b7/Cart',[...prevItems, { ...item, quantity }]);
      
    //         if (response.status !== 200) {
    //           console.log('Something went wrong');
    //         } else {
    //           const newItem = response.data;
    //           setItems([...items, newItem]);
    //           console.log('Successful');
    //         }
    //       }
    //     } catch (error) {
    //       console.log('Error:', error.message);
    //     }
    //   };

    

const clearCartHandler = () => {
    setItems([])
};



const fetchPrducts = async ()=>{


    try {
      const response = await fetch.get('https://crudcrud.com/api/fbd63b27f9b44122b2fc67926cdd8adf/Cart')
      if(!response.ok){
        console.log('something went wrong')
      }
      const data = await response.json()

    } catch (error) {
      console.log(error.message)
    }

  }


const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    clearCart: clearCartHandler,
    getItems: fetchPrducts
}


return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
);
}

export default CartProvider;




    // const addItemHandler = async (item, quantity) => {
    //     setItems((prevItems) => {
    //       const existingItem = prevItems.find(
    //         (prevItem) => prevItem.id === item.id
    //       );
    //       if (existingItem) {
    //         return prevItems.map((prevItem) =>
    //           prevItem.id === item.id
    //             ? { ...prevItem, quantity: prevItem.quantity + quantity }
    //             : prevItem
    //         );
    //       }
    //       try{
    //         const response = await axios.post('https://crudcrud.com/api/413a233affe648aebca273f960993dd6/Cart',...prevItems, { ...item, quantity: quantity })
    //         if(!response.ok){
    //           console.log('something went wrong')
    //         }else{
    //           console.log('sucessful')
    //         }
    //       }catch(error){
    //         console.log(error)
    //       }
    
    //       return [...prevItems, { ...item, quantity: quantity }];
    //     });
    
    //   };