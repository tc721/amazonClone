import React from 'react';
import "F:/Cosas/ecommerce/ver1/src/Components/Products/Product.css";
import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
  return (
    <div className='Product'>
      <div className="info">
        <h2>{title}</h2>
        <p className='price'
        >$<b className='num_price'>{price}</b>
        </p>
        <div className="rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            )
            )}
        </div>
      </div>
      <img src={image} alt="" />

      {/*<a className='buttonContainer'>
          <span className='add'>Add</span>
      </a>*/}

      <button className='add'
      onClick={addToBasket}
      > Add</button>

    </div>
  )
}

export default Product
