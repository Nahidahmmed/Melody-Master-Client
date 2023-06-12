import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        axiosSecure.post('/create-payment-intent',{price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(JSON.stringify(res.data.clientSecret))
            console.log(clientSecret);
        })
    }, []);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error);
        } else {
            console.log(paymentMethod);
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous',
                    },
                },
            },
        );
            console.log(confirmError);
            console.log(paymentIntent);
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm   bg-gray-900 text-white w-14 font-semibold hover:bg-green-700 m-8" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;