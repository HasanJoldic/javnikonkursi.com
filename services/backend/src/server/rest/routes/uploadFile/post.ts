import express, { Router } from "express";
import { json } from "body-parser";
import { StatusCodes } from "http-status-codes";
import { body, validationResult } from "express-validator";
import multer from "multer";
import AWS from "aws-sdk";

const router = Router();
const jsonParser = json();
const upload = multer();
const s3 = new AWS.S3();

router.post(
  "/api/v1/upload_file",
  jsonParser,

  upload.single("file"),

  body("fileName").isString(),

  async (req: express.Request<{ id: string }, any, { fileName: string }>, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty() || !req.file) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
    }

    const ext = req.file.originalname.split(".").reverse()[0];
    const s3FileName = `${req.body.fileName}.${ext}`;
    const upload = await s3
      .putObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: s3FileName,
        Body: req.file.buffer,
        ACL: "public-read",
        ContentType: req.file.mimetype,
      })
      .promise();
    if (upload.$response.error) {
      console.error(upload.$response.error);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    } else {
      const s3PublicPath = `${process.env.AWS_S3_PUBLIC_URL}/${s3FileName}`;
      res.status(StatusCodes.OK).send(s3PublicPath);
    }
  }
);

export default router;
