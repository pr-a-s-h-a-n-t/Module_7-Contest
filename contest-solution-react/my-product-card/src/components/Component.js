// import ProductCart from "./ProductCart";
import React,{useState,useEffect} from 'react';
import './ProductCart.css';



function Component() {

    const [fake, setFake]=useState([]);
    console.log(fake);
    useEffect(()=>{
        fakestore();
    },[])


    const fakestore = async()=>{
        const response=await fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json");
        console.log(response);
        const jsonData=await response.json();
        console.log(jsonData);
        setFake(jsonData);
    }
    // fakestore();
    return  (
         
          <>
          <div>
             
             
             <h3>Products</h3>

             <div className="wrapper">
                
               {fake.map((value)=>{
                  return(
                    <>
                           <div className="cart-item">
                            <div id='img'> <img src={value.productImage} alt=''></img> </div>
                            <div id='discription'>{value.productName}</div>
                            <div >
                                <span id='rating'>
             
                                  <div class="rate">
                                       <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                    <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                    <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                    <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
                                  </div>
             
            
             
                                
                                 </span>
                                <span id='old-price'>{value.oldPrice}</span>
                                <span id='new-price'>{value.newPrice}</span>
                            </div>
                            <button>ADD TO CART</button>
                           </div>
                    
                    </>
                  )


               })}

             
             


             
                        
                         

             </div>
              

         </div>
          
          
          </>
         
    );
}

export default Component;