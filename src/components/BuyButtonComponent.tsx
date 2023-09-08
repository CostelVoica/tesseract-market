declare global {
    interface Window {
        StripeCheckout: any
    }
}

function BuyButtonComponent() {
    // Paste the stripe-buy-button snippet in your React component
    return (
        <stripe-buy-button
            buy-button-id="{{BUY_BUTTON_ID}}"
            publishable-key="pk_test_51NAa7GJortvofF72ORmoFw3Qi78yijK3Hsnr5Qje6zAiKAexycZrcq5s8PXM10zAX0Wx8YWra5f8NVp2vAqUosNy003DPR0Wh0"
        ></stripe-buy-button>
    )
}

export default BuyButtonComponent
