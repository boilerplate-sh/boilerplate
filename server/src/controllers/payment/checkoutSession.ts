import { Request, Response } from "express";
import stripe from "../../services/stripe";

const FRONTEND_URL = "";

const createCheckoutSession = async (req: Request, res: Response) => {
  const { priceId } = req.body;
  try {
    const sessionId = await stripe.checkout.sessions.create({
      mode: "",
    });
  } catch (error: any) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
