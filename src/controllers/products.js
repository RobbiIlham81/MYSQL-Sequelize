import Modelproducts from "../models/products.js";
import message from "../utils/message.js";

/**
 *@typedef {import("express"). Request} ExpressRequest
 * @typedef {import("express"). Response} ExpressResponse
 */

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

export async function createProduct(req, res) {
  try {
    const data = req.body;
    const result = await Modelproducts.create(data);

    message(res, 201, "Create Product Success", result);
  } catch (error) {
    message(res, 500, error.message || "Server Internal error");
  }
}
