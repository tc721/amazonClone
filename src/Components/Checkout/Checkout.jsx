import React from 'react'
import "./Checkout.css"
import Header from "../Header/Header.jsx";
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from "./CheckoutProduct.jsx"

const Checkout = () => {
const [{ basket }, dispatch] = useStateValue();
 
  return (
    <div>
        <Header></Header>
        <div className='checkout'>

          <div className="checkoutleft">
            <div className='thing'></div>
            <div>
              <h2 className='checkoutTittle'>Cart</h2>

            {basket.map(item =>(
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

            </div>
          </div>

          <div className='checkoutright'>
            <Subtotal></Subtotal>
          </div>


        </div>
    </div>
  )
}

export default Checkout