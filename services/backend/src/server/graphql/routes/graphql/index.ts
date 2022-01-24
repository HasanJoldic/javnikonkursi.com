import { ErrorRequestHandler } from "express";

const graphiqlErrorHandler: ErrorRequestHandler = (err, _req, res) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    console.log(err);
    // We still want to log the error...
    // but we don't want to send back internal operation details
    // like a stack trace to the client!
    res.status(err.status).json({ errors: [{ message: err.message }] });
    res.end();
  }
};

export default {
  path: "/graphiql",
  routers: [graphiqlErrorHandler],
};
