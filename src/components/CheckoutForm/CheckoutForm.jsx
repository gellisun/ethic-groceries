import { useState } from "react";
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    async function handleSubmitPay(evt) {
        evt.preventDefault();
        if(!stripe || !elements) {
            return;
        }
        setIsProcessing(true);

        const {error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`
            },
            redirect: 'if_required',
        });

        if (error) {

            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded' ) {

            setMessage('Payment status:' + paymentIntent.status);
        } else {
            setMessage('Unexpected state');
        }

        setIsProcessing(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmitPay}>
            <PaymentElement />
            <button disabled={isProcessing} id="submit">
                <span id="button-text">{isProcessing ? "Processing..." : "Pay Now"}</span>
            </button>
        </form>
    )
}