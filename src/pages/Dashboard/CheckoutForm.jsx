import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
         const {error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
         })
         if(error){
            console.log(error);
         }else{
            console.log(paymentMethod);
         }
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
      <button className="btn btn-sm   bg-gray-900 text-white w-14 font-semibold hover:bg-green-700 m-8" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    );
};

export default CheckoutForm;