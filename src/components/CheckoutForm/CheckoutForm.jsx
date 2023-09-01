import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();

  async function handleSubmitPay(evt) {
    evt.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      setMessage("Payment status:" + paymentIntent.status);
      navigate("/orders");
    } else {
      setMessage("Unexpected state");
    }

    setIsProcessing(false);
  }

  return (
    <>
      <div className="form-page">
        <img src="/images/app-name.png" alt="app logo" className="app-logo" />
        <div className="form-container">
          <form className="payment-form" onSubmit={handleSubmitPay}>
            <PaymentElement />
            <button disabled={isProcessing} id="submit">
              <span className="button-text">
                {isProcessing ? "Processing..." : "Pay Now"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
