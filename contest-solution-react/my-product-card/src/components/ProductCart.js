// creating card component


import './ProductCart.css';
function ProductCart(){
    return(
        
        <div className="wrapper">
            <script src="https://kit.fontawesome.com/901c48346f.js" crossorigin="anonymous"></script>
            <h3>Products</h3>
            <div className="cart-item">
                <div id='img'>Image</div>
                <div id='discription'>Discription</div>
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
                    <span id='old-price'>59999/-</span>
                    <span id='new-price'>47999/-</span>
                </div>
                <button>ADD TO CART</button>
            </div>
             

        </div>
    )
}

export default ProductCart;