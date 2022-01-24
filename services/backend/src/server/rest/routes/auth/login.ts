import express, { Router } from "express";
import { json } from "body-parser";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { body, validationResult } from "express-validator";

import { ILoginRequestBody } from "@javnikonkursi/shared";

import { compareHash } from "utils";
import { client } from "db";

import { createJWTs } from "./createJWTs";
import { dbUserReturnColumns, IDBUser } from "./types";

const router = Router();
const jsonParser = json();

router.post(
  "/api/v1/login",
  jsonParser,

  body("email").isEmail(),
  body("password").isLength({ min: 10 }),

  async (req: express.Request<{}, any, ILoginRequestBody>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const loginQuery = await client.query<IDBUser>(
      `
      SELECT ${dbUserReturnColumns.join(", ")}
      FROM users
      WHERE email = $1;
    `,
      [email]
    );
    const user = loginQuery.rows[0];

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET env variable not set!");
      process.exit(1);
    }

    const isValidPassword = await compareHash(password, user?.password);

    if (!user || !isValidPassword) {
      res.status(StatusCodes.BAD_REQUEST).send(getReasonPhrase(StatusCodes.BAD_REQUEST));

      return;
    }

    await createJWTs({
      user,
      res,
    });
  }
);

export default router;
