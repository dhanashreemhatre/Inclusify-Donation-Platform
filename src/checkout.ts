import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: { lineItems: any[] }): Promise<void> {
    let stripePromise = null;

    const getStripe = async () => {
        if (!stripePromise) {
            stripePromise = loadStripe('pk_test_51P1sjFSDHj85Zltt1fw1yMOZy6o6o0fd3KVlgmsbeE57VLmMPjWl4tZRniMNII4f3m0OoZ7ZbrwTHC5zpRebloBG00t5VFBqn9');
        }
        return stripePromise;
    };

    const stripe = await getStripe();

    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION}`,
        cancelUrl: window.location.origin
    });
}
