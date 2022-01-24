CREATE TABLE IF NOT EXISTS regions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  title TEXT UNIQUE NOT NULL,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON regions(title);
CREATE INDEX ON regions(_created_at);
CREATE INDEX ON regions(_updated_at);

DROP TRIGGER IF EXISTS a_regions_timestamp_trigger ON regions;

CREATE TRIGGER a_regions_timestamp_trigger
  BEFORE UPDATE ON regions
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

INSERT INTO regions (title) VALUES ('Unsko-sanski kanton');
INSERT INTO regions (title) VALUES ('Posavski kanton');
INSERT INTO regions (title) VALUES ('Tuzlanski kanton');
INSERT INTO regions (title) VALUES ('Zenicko-dobojski kanton');
INSERT INTO regions (title) VALUES ('Bosansko-podrinjski kanton');
INSERT INTO regions (title) VALUES ('Srednjobosanski kanton');
INSERT INTO regions (title) VALUES ('Hercegovacko-neretvanski kanton');
INSERT INTO regions (title) VALUES ('Zapadnohercegovacki kanton');
INSERT INTO regions (title) VALUES ('Kanton Sarajevo');
INSERT INTO regions (title) VALUES ('Kanton 10');
INSERT INTO regions (title) VALUES ('Banjalucka regija');
INSERT INTO regions (title) VALUES ('Dobojsko-bijeljinska regija');
INSERT INTO regions (title) VALUES ('Sarajevsko-zvornicka regija');
INSERT INTO regions (title) VALUES ('Trebinjsko-focanska regija');
INSERT INTO regions (title) VALUES ('Brcko distrikt');