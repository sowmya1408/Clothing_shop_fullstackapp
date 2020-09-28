import React from 'react'

function OrderPage() {
    return (
        <div className='orderPage-container'>
            <h2>Order Number: {Math.random().toString(20).substr(2, 6)}</h2>
            <p>Your Order has be successfully placed</p>
        </div>
    )
}

export default OrderPage
