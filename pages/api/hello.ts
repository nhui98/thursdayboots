// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnection from "../../lib/dbConnection";
import Product from "../../models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnection();

  try {
    const newProduct = new Product(req.body);
    const addedProduct = await newProduct.save();
    res.status(201).json(addedProduct);
    return;
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ name: "John Doe" });
}
