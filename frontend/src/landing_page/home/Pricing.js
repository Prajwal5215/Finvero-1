import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p> We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.</p>
            <a href="#products" className="mx-2 mx-md-5  btn-outline-primary" style={{textDecoration: 'none'}}>See pricing{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col border'>
                            <h2 className="display-5 mb-3">₹0</h2>
                            <p className="mb-0">Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                           <h2 className="display-5 mb-3">₹20</h2>
                            <p className="mb-0">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;