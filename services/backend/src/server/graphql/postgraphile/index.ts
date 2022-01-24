import postgraphile from "postgraphile";
// import { makePgSmartTagsFromFilePlugin } from "postgraphile/plugins";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgManyToManyPlugin from "@graphile-contrib/pg-many-to-many";
import { NodePlugin } from "graphile-build";

// import extendSchemaPlugins from "./extend";
// import simplifyManyToManyPlugin from "./simplifyManyToManyPlugin";

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

export default postgraphile(
  {
    host: POSTGRES_HOST,
    port: Number.parseInt(POSTGRES_PORT || "5432"),
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
  },
  ["public"],
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    subscriptions: true,
    dynamicJson: true,
    setofFunctionsContainNulls: false,
    ignoreRBAC: false,
    showErrorStack: true,
    extendedErrors: [
      "severity",
      "code",
      "detail",
      "hint",
      "position",
      "internalPosition",
      "internalQuery",
      "where",
      "schema",
      "table",
      "column",
      "dataType",
      "constraint",
      "file",
      "line",
      "routine",
    ],
    allowExplain: true,
    legacyRelations: "omit",
    sortExport: true,
    jwtSecret: process.env.JWT_SECRET,
    jwtAudiences: process.env.JWT_AUDIENCE ? [process.env.JWT_AUDIENCE] : ["undefined"],
    pgDefaultRole: "app_user",
    jwtVerifyOptions: {},
    appendPlugins: [
      PgSimplifyInflectorPlugin,
      ConnectionFilterPlugin,
      // makePgSmartTagsFromFilePlugin(),
      // simplifyManyToManyPlugin,
      PgManyToManyPlugin,
    ],
    skipPlugins: [NodePlugin],
    graphileBuildOptions: {
      connectionFilterAllowNullInput: true,
    },
    enableCors: process.env.NODE_ENV === "development" ? true : false,
  }
);
