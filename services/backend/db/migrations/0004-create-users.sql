CREATE TABLE IF NOT EXISTS whitelisted_emails (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  email VARCHAR(255) UNIQUE NOT NULL,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON whitelisted_emails(email);
CREATE INDEX ON whitelisted_emails(_created_at);
CREATE INDEX ON whitelisted_emails(_updated_at);

DROP TRIGGER IF EXISTS a_whitelisted_emails_timestamp_trigger ON whitelisted_emails;

CREATE TRIGGER a_whitelisted_emails_timestamp_trigger
  BEFORE UPDATE ON whitelisted_emails
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

CREATE TYPE user_roles AS ENUM ('app_user', 'admin', 'super_admin');

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  role user_roles NOT NULL DEFAULT 'app_user',
  email VARCHAR(255) UNIQUE NOT NULL,
  is_email_verified BOOLEAN DEFAULT false,
  password TEXT,

  full_name TEXT NOT NULL,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON users(role);
CREATE INDEX ON users(full_name);
CREATE INDEX ON users(_created_at);
CREATE INDEX ON users(_updated_at);

DROP TRIGGER IF EXISTS a_users_timestamp_trigger ON users;

CREATE TRIGGER a_users_timestamp_trigger
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY show_all_users
  ON users
  FOR SELECT
  TO PUBLIC
  USING (TRUE);

CREATE POLICY update_users_if_author
  ON users
  FOR UPDATE
  USING (id = current_user_id())
  WITH CHECK (id = current_user_id());


CREATE TABLE refresh_tokens (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),

  token TEXT NOT NULL,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON refresh_tokens(user_id);
CREATE INDEX ON refresh_tokens(_created_at);
CREATE INDEX ON refresh_tokens(_updated_at);

DROP TRIGGER IF EXISTS a_refresh_tokens_timestamp_trigger ON refresh_tokens;

CREATE TRIGGER a_refresh_tokens_timestamp_trigger
  BEFORE UPDATE ON refresh_tokens
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

COMMENT ON TABLE refresh_tokens IS E'@omit';

-- TODO
-- don't allow all users to be able to see all the other users

-- CREATE TYPE jwt_token AS (
--   role user_roles,
--   exp INT,
--   user_id UUID,
--   email VARCHAR(255),
--   full_name TEXT
-- );

-- CREATE OR REPLACE FUNCTION signup(
--   email VARCHAR(255),
--   password TEXT,
--   full_name TEXT,
-- ) RETURNS jwt_token as $$
-- DECLARE
--   app_user users;
-- BEGIN
--   INSERT INTO users (email, password, full_name) 
--     VALUES (signup.email, crypt(signup.password, gen_salt('bf', 9)), signup.full_name)
--     RETURNING * into app_user;

--   IF app_user THEN
--     RETURN (
--       app_user.role,
--       extract(epoch FROM now() + interval '30 days'),
--       app_user.id,
--       app_user.email,
--       app_user.full_name
--     )::jwt_token;
--   ELSE
--     RETURN NULL;
--   END IF;
-- END;
-- $$ LANGUAGE plpgsql strict SECURITY DEFINER;
-- COMMENT ON FUNCTION signup(VARCHAR(255), TEXT, TEXT) IS 'Registers a single user and creates an account.';

-- CREATE FUNCTION login(
--   email VARCHAR(255),
--   password TEXT
-- ) RETURNS jwt_token AS $$
-- DECLARE
--   app_user users;
-- BEGIN
--   SELECT * INTO app_user
--     FROM users
--     WHERE users.email = authenticate.email;

--   IF crypt(authenticate.password, app_user.password) THEN
--     RETURN (
--       app_user.role,
--       extract(epoch FROM now() + interval '30 days'),
--       app_user.id,
--       app_user.email,
--       app_user.full_name
--     )::jwt_token;
--   ELSE
--     RETURN NULL;
--   END IF;
-- END;
-- $$ LANGUAGE plpgsql strict SECURITY definer;
-- COMMENT ON FUNCTION login(VARCHAR(255), TEXT) IS 'Default login function.';