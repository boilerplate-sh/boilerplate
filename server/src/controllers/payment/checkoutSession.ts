import { Request, Response } from "express";
import stripe from "../../services/stripe";
import {
  assert,
  object,
  string,
  number,
  optional,
  enums,
  refine,
} from "superstruct";

const Product = object({
  productTitle: string(),
  productDescription: string(),
  pricePerItem: number(),
  quantity: refine(number(), "positive", (value) => value >= 0),
  type: enums(["payment", "subscription"]),
  priceId: optional(string()), // This field is required for subscriptions
});

const createCheckoutSession = async (req: Request, res: Response) => {
  let product;
  try {
    assert(req.body, Product);
    product = req.body;
  } catch (error) {
    return res.status(400).json({ message: "Invalid product data." });
  }

  const {
    productTitle,
    productDescription,
    pricePerItem,
    quantity,
    type,
    priceId,
  } = product;

  try {
    let session;

    if (type === "payment") {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: productTitle,
                description: productDescription,
              },
              unit_amount: pricePerItem * 100,
            },
            quantity: quantity,
          },
        ],
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/success`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      });
    } else if (type === "subscription") {
      if (!priceId) {
        throw new Error("Price ID is required for subscriptions.");
      }

      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: quantity,
          },
        ],
        mode: "subscription",
        success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      });
    }

    res.status(201).json({ message: "Success", url: session?.url });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export default createCheckoutSession;
