CREATE TABLE IF NOT EXISTS job_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  title TEXT UNIQUE NOT NULL,
  notes TEXT,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON job_tags(title);
CREATE INDEX ON job_tags(_created_at);
CREATE INDEX ON job_tags(_updated_at);

DROP TRIGGER IF EXISTS a_job_tags_timestamp_trigger ON job_tags;

CREATE TRIGGER a_job_tags_timestamp_trigger
  BEFORE UPDATE ON job_tags
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

---

CREATE TABLE IF NOT EXISTS job_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  title TEXT UNIQUE NOT NULL,
  notes TEXT,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON job_types(title);
CREATE INDEX ON job_types(_created_at);
CREATE INDEX ON job_types(_updated_at);

DROP TRIGGER IF EXISTS a_job_types_timestamp_trigger ON job_types;

CREATE TRIGGER a_job_types_timestamp_trigger
  BEFORE UPDATE ON job_types
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

---

CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id),
  job_type_id UUID REFERENCES job_types(id),

  title TEXT UNIQUE NOT NULL,
  region_id UUID REFERENCES regions(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,

  external_url TEXT,
  internal_url TEXT,

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON jobs(title);
CREATE INDEX ON jobs(_created_at);
CREATE INDEX ON jobs(_updated_at);

DROP TRIGGER IF EXISTS a_jobs_timestamp_trigger ON jobs;

CREATE TRIGGER a_jobs_timestamp_trigger
  BEFORE UPDATE ON jobs
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();

---

CREATE TABLE IF NOT EXISTS jobs_job_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

  job_id UUID REFERENCES jobs(id),
  job_tag_id UUID REFERENCES job_tags(id),

  _created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  _updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX ON jobs_job_tags(_created_at);
CREATE INDEX ON jobs_job_tags(_updated_at);

DROP TRIGGER IF EXISTS a_jobs_job_tags_timestamp_trigger ON jobs_job_tags;

CREATE TRIGGER a_jobs_job_tags_timestamp_trigger
  BEFORE UPDATE ON jobs_job_tags
  FOR EACH ROW EXECUTE PROCEDURE timestamp_trigger();