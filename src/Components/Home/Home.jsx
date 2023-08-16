import React from 'react';
import './Home.css';
import Product from "../Products/Product.jsx"


function Home() {
  return (
    <div className="Home">
        <div className='HomeContainer'>
            <img className="banner" src="https://m.media-amazon.com/images/I/71MvpdNxAIL._SX3000_.jpg" alt="" />
        </div>
        
        <div className="row">
         <Product
        //https://www.mercadolibre.com.uy/apple-iphone-14-pro-max-256-gb-morado-oscuro/p/MLU19615354?pdp_filters=category:MLU1055#searchVariation=MLU19615354&position=1&search_layout=stack&type=product&tracking_id=f21f85b1-398e-426d-9269-6d63ae5a295f
          id="1"
          title= "Apple iPhone 14 Pro Max (256 GB) - Morado oscuro"
          image = "https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp"
          price = "1769"
          rating = {5}
        />
        <Product
        id="2"
          title= "Iphone"
          image = "https://http2.mlstatic.com/D_NQ_NP_904401-MLU52268341244_112022-V.webp"
          price = "50"
          rating = {4}
        />
        <Product
        id="3"
          title= "Iphone"
          image = "https://http2.mlstatic.com/D_NQ_NP_634389-MLU53987456669_022023-V.webp"
          price = "50"
          rating = {4}
        />
        <Product
        id="4"
          title= "Iphone"
          image = "https://http2.mlstatic.com/D_NQ_NP_146815-MLU25329737507_022017-O.webp"
          price = "50"
          rating = {4}
        />

        </div>

        <h2>Smarts TV</h2>

        <div className="row">
        <Product
        id="5"
        //https://www.mercadolibre.com.uy/smart-tv-sony-x90k-series-xr-65x90k-lcd-android-tv-4k-65-110v240v/p/MLU21611125?pdp_filters=item_id:MLU628606324#is_advertising=true&searchVariation=MLU21611125&position=2&search_layout=grid&type=pad&tracking_id=be98ae5f-fcab-4eef-b76b-1a6c4dfb8a77&is_advertising=true&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=NDIxZGIwNTYtYWMxYS00ZmQyLThkNjktMzM2NWU2NmU0OTc0
          title= "Smart Sony X90K Series LCD Android TV4K65"
          image = "https://http2.mlstatic.com/D_NQ_NP_925406-MLA53584811125_022023-W.webp"
          price = "1699"
          rating = {5}
        />
        <Product
        id="6"
        //https://www.mercadolibre.com.uy/smart-tv-asano-smart-tv-32-led-hd-32-100v240v/p/MLU19475850?pdp_filters=category:MLU1002#searchVariation=MLU19475850&position=3&search_layout=grid&type=product&tracking_id=95ab9c8d-beb2-4f5d-a884-52a4a6bb6ab0
          title= "Smart TV Asano SMART TV 32 LED HD 32 100V/240V"
          image = "https://http2.mlstatic.com/D_NQ_NP_691255-MLA50952643610_082022-O.webp"
          price = "154"
          rating = {4}
        />


        </div>

          <h2>Celulares Destacados</h2>
        <div className="row">
        <Product
        id="1"
        //https://www.mercadolibre.com.uy/apple-iphone-14-pro-max-256-gb-morado-oscuro/p/MLU19615354?pdp_filters=category:MLU1055#searchVariation=MLU19615354&position=1&search_layout=stack&type=product&tracking_id=f21f85b1-398e-426d-9269-6d63ae5a295f
          title= "Apple iPhone 14 Pro Max (256 GB) - Morado oscuro"
          image = "https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp"
          price = "1769"
          rating = {5}
        />
         <Product
         id="7"
        //https://www.mercadolibre.com.uy/apple-iphone-14-512-gb-blanco-estelar/p/MLU19615363?pdp_filters=category:MLU1055#searchVariation=MLU19615363&position=4&search_layout=stack&type=product&tracking_id=457d6357-67ce-408b-8771-ffecf783440d
          title= "Apple iPhone 14 (512 GB) - Blanco estela"
          image = "https://http2.mlstatic.com/D_NQ_NP_918579-MLM51559384401_092022-O.webp"
          price = "2169"
          rating = {4}
          />
         <Product
         id="8"
        //https://www.mercadolibre.com.uy/apple-iphone-14-pro-max-1-tb-color-oro/p/MLU19615333?pdp_filters=category:MLU1055#searchVariation=MLU19615333&position=6&search_layout=stack&type=product&tracking_id=f5c528f5-3d63-4d21-9d0c-9efd70d98af4
          title= "Apple iPhone 14 Pro Max (1 TB) - Color oro"
          image = "https://http2.mlstatic.com/D_NQ_NP_873385-MLM51559384419_092022-O.webp"
          price = "2475"
          rating = {4}
        />


        </div>
    </div>
  );
}

export default Home;
