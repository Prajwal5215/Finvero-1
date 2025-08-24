import React from 'react';

function Awards() {
    return (
        <div className='container p-5 mb-5'>
          <div className='row'>
            <div className='col-6 p-5'>
              <img src='./media/largestBroker.svg'/>
              </div>
              <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in india</h1>
                <p className='mb-5'>2+million Finvero clients contribute to all over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row'>
                <div className='col-6'>
                  <ul>
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li>Currency derivatives</li>
                  </ul>
                </div>
                <div className='col-6'>
                   <ul>
                    <li>Stocks & IPOs</li>
                    <li>Direct mutual funds</li>
                    <li>Bonds and Govt. Securities</li>
                   </ul>
                   </div>
                   </div> 
                   <img src='media/pressLogos.png' style={{width: '90%'}}/>
            </div>
          </div>
        </div>
      );
}

export default Awards;