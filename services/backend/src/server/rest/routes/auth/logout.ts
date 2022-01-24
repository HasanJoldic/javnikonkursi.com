import express, { Router } from "express";
import { json } from "body-parser";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
import { body, validationResult } from "express-validator";

import { ILogoutRequestBody } from "@javnikonkursi/shared";

import { getUserWithAccessToken } from "./getUserWithAccessToken";

const router = Router();
const jsonParser = json();

router.post(
  "/logout",

  jsonParser,

  body("accessToken").isJWT(),
  body("shouldInvalidateAllJWTs").isBoolean(),

  async (req: express.Request<{}, any, ILogoutRequestBody>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }

    const { accessToken } = req.body;
    const user = await getUserWithAccessToken(accessToken);

    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send(getReasonPhrase(StatusCodes.UNAUTHORIZED));
    }

    res.status(StatusCodes.OK).send(getReasonPhrase(StatusCodes.OK));
  }
);

export default router;
