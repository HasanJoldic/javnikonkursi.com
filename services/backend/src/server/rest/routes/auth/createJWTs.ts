import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import jsonwebtoken from "jsonwebtoken";

import { IAuthResponseBody } from "@javnikonkursi/shared";

import { IDBUser } from "./types";

export async function createJWTs({ user, res }: { user: IDBUser; res: Response }) {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET env variable not set!");
    process.exit(1);
  }

  const newAccessToken = jsonwebtoken.sign({ user_id: user.id, role: user.role }, process.env.JWT_SECRET, {
    // audience: process.env.JWT_AUDIENCE,
    expiresIn: "10m",
  });

  const body: IAuthResponseBody = {
    user: {
      id: user.id,
      email: user.email,
      fullName: user.full_name,
      role: user.role,
    },
    accessToken: newAccessToken,
  };

  res.status(StatusCodes.OK).json(body);
}
