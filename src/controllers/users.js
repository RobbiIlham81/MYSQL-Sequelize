import message from "../utils/message.js";
import { modelAllData, modelDetailData, modelCreateData, modelUpdateData, modelDeleteData } from "../models/users.js";
import { response } from "express";

/**
 *@typedef {import("express"). Request} ExpressRequest
 * @typedef {import("express"). Response} ExpressResponse
 */

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

// CRUD
export function allData(req, res) {
  modelAllData()
    .then((response) => {
      message(res, 200, "All Data", response);
    })

    .catch((error) => {
      message(res, 500, error.message || "server internal error");
    });
}

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

export async function detailData(req, res) {
  try {
    const id = req.params.id;
    const detail = await modelDetailData(id);

    message(res, 200, "Detail Data", detail);
  } catch (error) {
    message(res, 500, error.message || "server internal error");
  }
}

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

export async function createData(req, res) {
  try {
    const data = req.body;

    await modelCreateData(data);

    message(res, 201, "Create Data Success");
  } catch (error) {
    message(res, 500, error.message || "server internal error");
  }
}

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

export async function updateData(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;

    await modelUpdateData(id, data);

    message(res, 200, "Update Data Success");
  } catch (error) {
    message(res, 500, error.message || "server internal error");
  }
}

/**
 * Route handler for the root endpoint
 * @param {ExpressRequest} req - The Express request object.
 * @param {ExpressRequest} res - The Express response onject.
 */

export function deleteData(req, res) {
  const id = req.params.id;

  modelDeleteData(id)
    .then((response) => {
      message(res, 200, "Delete data success", response);
    })
    .catch((error) => {
      message(res, 500, error.message || "Server internal error");
    });
}
