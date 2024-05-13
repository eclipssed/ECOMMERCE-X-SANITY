import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export async function POST(req) {
    try {
        const params = {
            submit_type: "pay",
            mode: "payment",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [
                { shipping_rate: "shr_1P4EaxIwKFIW2ojNiq8crWLr" },
                { shipping_rate: "shr_1P4EdIIwKFIW2ojNoDl4pRSJ" },
            ],
            line_items: req.body.map((item) => {
                const img = item.image[0].asset._ref;
                const newImage = img
                .replace(
                    "image-",
                    "https://cdn.sanity.io/images/8ho26dj3/production/"
                )
                .replace("-webp", ".webp");
                
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/canceled`,
        };
        console.log("first")
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);


    return NextResponse.json({ status: 400, session });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong please try again later.",
    });
  }
}
