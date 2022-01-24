-- GRANT SELECT ON ALL TABLES IN SCHEMA public TO default_role;
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;

CREATE ROLE default_role;

CREATE ROLE app_user;
GRANT USAGE ON SCHEMA public TO app_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO app_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT EXECUTE ON FUNCTIONS TO app_user;

CREATE ROLE admin;
GRANT USAGE ON SCHEMA public TO admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO admin;

--- Use the provided admin user on AWS RDS
--- https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.MasterAccounts.html
-- CREATE ROLE super_admin SUPERUSER;

-- https://www.graphile.org/postgraphile/security/
CREATE FUNCTION current_user_id() RETURNS UUID AS $$
  SELECT nullif(current_setting('jwt.claims.user_id', true), '')::UUID;
$$ LANGUAGE SQL stable;
COMMENT ON FUNCTION current_user_id IS E'@omit';