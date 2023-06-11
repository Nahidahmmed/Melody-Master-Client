import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('price');
    console.log(price);
    return (
        <div>
            <h1 className="text-3xl font-bold my-12">Process payment Here</h1>
            <Elements stripe={stripePromise}>
            <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;