import jsonwebtoken, { JwtPayload } from "jsonwebtoken";

import { EUserRole } from "@javnikonkursi/shared";

import { client } from "db";

import { dbUserReturnColumns, IDBUser } from "./types";

interface IAccessTokenPaylad extends JwtPayload {
  user_id: string;
  role: EUserRole;
}

export async function getUserWithAccessToken(accessToken: string) {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET env variable not set!");
    process.exit(1);
  }

  const decoded = jsonwebtoken.verify(accessToken, process.env.JWT_SECRET) as IAccessTokenPaylad;

  const userId = decoded?.user_id;

  const userQuery = await client.query<IDBUser>(
    `
    SELECT ${dbUserReturnColumns.join(", ")}
    FROM users
    WHERE id = $1;
  `,
    [userId]
  );

  return userQuery.rows[0];
}
