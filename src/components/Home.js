import React from 'react'


function Home(props) {
    
    return (
        <div>
           
            <div className="cart-wrapper">



                <div className="img-wrapper item">
                    <img src="lap.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Lenove lap
                    </span>
                    <p>
                        Price: 40000
                    </p>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () =>
                            
                                { props.addTocartHandler({ price: 40000, Name: 'Lenovo' }) }
                        
                        }>

                        Add To Cart</button>
                      
                </div>
                <button className="button-remove"
                        onClick={
                            () =>
                            
                                { props.removefromcartHandler() }
                        
                        }>

                        Remove from Cart</button>
            </div>
        </div>
    )
}

export default Home