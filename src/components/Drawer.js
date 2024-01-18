function Drawer() {
    return (
        
<div style={{display:'none'}} className='overlay'>
<div className='drawer '>
          <h2 className='d-flex justify-between mb-30 ' >Cart 
          <img className='cu-p' src="/img/btn-remove.svg" alt="Remove"/></h2>


        <div className="items">       <div className="cartItem d-flex align-center mb-20">
            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}}
            className="cartItemImg"></div>

          <div className='mr-20 flex'>
              <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
              <b>130$</b>
              </div>
            <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/></div>
            

            <div className="cartItem d-flex align-center mb-20">
            <div 
            style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
            className="cartItemImg"></div>

          <div className='mr-20 flex'>
              <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
              <b>130$</b></div>
            <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
            <div 
            style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
            className="cartItemImg"></div>

          <div className='mr-20 flex'>
              <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
              <b>130$</b></div>
            <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
            <div 
            style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
            className="cartItemImg"></div>

          <div className='mr-20 flex'>
              <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
              <b>130$</b></div>
            <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
            <div 
            style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}}
            className="cartItemImg"></div>

          <div className='mr-20 flex'>
              <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
              <b>130$</b></div>
            <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            </div>

       <div className="cartTotalBlock"> 
       <ul>
          <li>
            <span>Shipping:</span>
            <div></div>
            <b>3$</b>
          </li>
          <li>
            <span>Total:</span>
            <div></div>
            <b>263$</b>
          </li>
        </ul>
        <button className='checkoutButton'>Go to checkout <img src="/img/arrow.svg" alt="Arrow" /></button>
        </div>
        </div>
        </div>

    );
}

export default Drawer;