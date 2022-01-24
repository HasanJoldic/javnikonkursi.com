export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** A connection to a list of `Company` values. */
export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  /** A list of edges which contains the `Company` and cursor to aid in pagination. */
  edges: Array<CompaniesEdge>;
  /** A list of `Company` objects. */
  nodes: Array<Company>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Company` edge in the connection. */
export type CompaniesEdge = {
  __typename?: 'CompaniesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Company` at the end of the edge. */
  node: Company;
};

/** Methods to use when ordering `Company`. */
export enum CompaniesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

export type Company = {
  __typename?: 'Company';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `JobType`. */
  jobTypesByJobCompanyIdAndJobTypeId: CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** Reads a single `Region` that is related to this `Company`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `Region`. */
  regionsByJobCompanyIdAndRegionId: CompanyRegionsByJobCompanyIdAndRegionIdManyToManyConnection;
  title: Scalars['String'];
  url: Scalars['String'];
};


export type CompanyJobTypesByJobCompanyIdAndJobTypeIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobTypeCondition>;
  filter?: InputMaybe<JobTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};


export type CompanyJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};


export type CompanyRegionsByJobCompanyIdAndRegionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RegionCondition>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** A condition to be used against `Company` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CompanyCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `url` field. */
  url?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Company` object types. All fields are combined with a logical ‘and.’ */
export type CompanyFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CompanyFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CompanyFilter>>;
  /** Filter by the object’s `regionId` field. */
  regionId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
  /** Filter by the object’s `url` field. */
  url?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Company` */
export type CompanyInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

/** A connection to a list of `JobType` values, with data from `Job`. */
export type CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyConnection = {
  __typename?: 'CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyConnection';
  /** A list of edges which contains the `JobType`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyEdge>;
  /** A list of `JobType` objects. */
  nodes: Array<JobType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobType` edge in the connection, with data from `Job`. */
export type CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyEdge = {
  __typename?: 'CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `JobType` at the end of the edge. */
  node: JobType;
};


/** A `JobType` edge in the connection, with data from `Job`. */
export type CompanyJobTypesByJobCompanyIdAndJobTypeIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** Represents an update to a `Company`. Fields that are set will be updated. */
export type CompanyPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Region` values, with data from `Job`. */
export type CompanyRegionsByJobCompanyIdAndRegionIdManyToManyConnection = {
  __typename?: 'CompanyRegionsByJobCompanyIdAndRegionIdManyToManyConnection';
  /** A list of edges which contains the `Region`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<CompanyRegionsByJobCompanyIdAndRegionIdManyToManyEdge>;
  /** A list of `Region` objects. */
  nodes: Array<Region>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Region` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Region` edge in the connection, with data from `Job`. */
export type CompanyRegionsByJobCompanyIdAndRegionIdManyToManyEdge = {
  __typename?: 'CompanyRegionsByJobCompanyIdAndRegionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `Region` at the end of the edge. */
  node: Region;
};


/** A `Region` edge in the connection, with data from `Job`. */
export type CompanyRegionsByJobCompanyIdAndRegionIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the create `Company` mutation. */
export type CreateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Company` to be created by this mutation. */
  company: CompanyInput;
};

/** The output of our create `Company` mutation. */
export type CreateCompanyPayload = {
  __typename?: 'CreateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Company` that was created by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Company`. */
  region?: Maybe<Region>;
};


/** The output of our create `Company` mutation. */
export type CreateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the create `Job` mutation. */
export type CreateJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Job` to be created by this mutation. */
  job: JobInput;
};

/** The output of our create `Job` mutation. */
export type CreateJobPayload = {
  __typename?: 'CreateJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Company` that is related to this `Job`. */
  company?: Maybe<Company>;
  /** The `Job` that was created by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Reads a single `JobType` that is related to this `Job`. */
  jobType?: Maybe<JobType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Job`. */
  region?: Maybe<Region>;
};


/** The output of our create `Job` mutation. */
export type CreateJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the create `JobTag` mutation. */
export type CreateJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `JobTag` to be created by this mutation. */
  jobTag: JobTagInput;
};

/** The output of our create `JobTag` mutation. */
export type CreateJobTagPayload = {
  __typename?: 'CreateJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JobTag` that was created by this mutation. */
  jobTag?: Maybe<JobTag>;
  /** An edge for our `JobTag`. May be used by Relay 1. */
  jobTagEdge?: Maybe<JobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `JobTag` mutation. */
export type CreateJobTagPayloadJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTagsOrderBy>>;
};

/** All input for the create `JobType` mutation. */
export type CreateJobTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `JobType` to be created by this mutation. */
  jobType: JobTypeInput;
};

/** The output of our create `JobType` mutation. */
export type CreateJobTypePayload = {
  __typename?: 'CreateJobTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JobType` that was created by this mutation. */
  jobType?: Maybe<JobType>;
  /** An edge for our `JobType`. May be used by Relay 1. */
  jobTypeEdge?: Maybe<JobTypesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `JobType` mutation. */
export type CreateJobTypePayloadJobTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};

/** All input for the create `JobsJobTag` mutation. */
export type CreateJobsJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `JobsJobTag` to be created by this mutation. */
  jobsJobTag: JobsJobTagInput;
};

/** The output of our create `JobsJobTag` mutation. */
export type CreateJobsJobTagPayload = {
  __typename?: 'CreateJobsJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Job` that is related to this `JobsJobTag`. */
  job?: Maybe<Job>;
  /** Reads a single `JobTag` that is related to this `JobsJobTag`. */
  jobTag?: Maybe<JobTag>;
  /** The `JobsJobTag` that was created by this mutation. */
  jobsJobTag?: Maybe<JobsJobTag>;
  /** An edge for our `JobsJobTag`. May be used by Relay 1. */
  jobsJobTagEdge?: Maybe<JobsJobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `JobsJobTag` mutation. */
export type CreateJobsJobTagPayloadJobsJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** All input for the create `Migration` mutation. */
export type CreateMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Migration` to be created by this mutation. */
  migration: MigrationInput;
};

/** The output of our create `Migration` mutation. */
export type CreateMigrationPayload = {
  __typename?: 'CreateMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` that was created by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Migration` mutation. */
export type CreateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

/** All input for the create `Region` mutation. */
export type CreateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Region` to be created by this mutation. */
  region: RegionInput;
};

/** The output of our create `Region` mutation. */
export type CreateRegionPayload = {
  __typename?: 'CreateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was created by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our create `Region` mutation. */
export type CreateRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the create `WhitelistedEmail` mutation. */
export type CreateWhitelistedEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `WhitelistedEmail` to be created by this mutation. */
  whitelistedEmail: WhitelistedEmailInput;
};

/** The output of our create `WhitelistedEmail` mutation. */
export type CreateWhitelistedEmailPayload = {
  __typename?: 'CreateWhitelistedEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WhitelistedEmail` that was created by this mutation. */
  whitelistedEmail?: Maybe<WhitelistedEmail>;
  /** An edge for our `WhitelistedEmail`. May be used by Relay 1. */
  whitelistedEmailEdge?: Maybe<WhitelistedEmailsEdge>;
};


/** The output of our create `WhitelistedEmail` mutation. */
export type CreateWhitelistedEmailPayloadWhitelistedEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<WhitelistedEmailsOrderBy>>;
};

/** A filter to be used against Date fields. All fields are combined with a logical ‘and.’ */
export type DateFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Date']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Date']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Date']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Date']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Date']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Date']>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** All input for the `deleteCompanyByTitle` mutation. */
export type DeleteCompanyByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteCompanyByUrl` mutation. */
export type DeleteCompanyByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

/** All input for the `deleteCompany` mutation. */
export type DeleteCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayload = {
  __typename?: 'DeleteCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Company` that was deleted by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  deletedCompanyNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Company`. */
  region?: Maybe<Region>;
};


/** The output of our delete `Company` mutation. */
export type DeleteCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `deleteJobByTitle` mutation. */
export type DeleteJobByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteJob` mutation. */
export type DeleteJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Job` mutation. */
export type DeleteJobPayload = {
  __typename?: 'DeleteJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Company` that is related to this `Job`. */
  company?: Maybe<Company>;
  deletedJobNodeId?: Maybe<Scalars['ID']>;
  /** The `Job` that was deleted by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Reads a single `JobType` that is related to this `Job`. */
  jobType?: Maybe<JobType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Job`. */
  region?: Maybe<Region>;
};


/** The output of our delete `Job` mutation. */
export type DeleteJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the `deleteJobTagByTitle` mutation. */
export type DeleteJobTagByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteJobTag` mutation. */
export type DeleteJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `JobTag` mutation. */
export type DeleteJobTagPayload = {
  __typename?: 'DeleteJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedJobTagNodeId?: Maybe<Scalars['ID']>;
  /** The `JobTag` that was deleted by this mutation. */
  jobTag?: Maybe<JobTag>;
  /** An edge for our `JobTag`. May be used by Relay 1. */
  jobTagEdge?: Maybe<JobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `JobTag` mutation. */
export type DeleteJobTagPayloadJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTagsOrderBy>>;
};

/** All input for the `deleteJobTypeByTitle` mutation. */
export type DeleteJobTypeByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteJobType` mutation. */
export type DeleteJobTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `JobType` mutation. */
export type DeleteJobTypePayload = {
  __typename?: 'DeleteJobTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedJobTypeNodeId?: Maybe<Scalars['ID']>;
  /** The `JobType` that was deleted by this mutation. */
  jobType?: Maybe<JobType>;
  /** An edge for our `JobType`. May be used by Relay 1. */
  jobTypeEdge?: Maybe<JobTypesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `JobType` mutation. */
export type DeleteJobTypePayloadJobTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};

/** All input for the `deleteJobsJobTag` mutation. */
export type DeleteJobsJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `JobsJobTag` mutation. */
export type DeleteJobsJobTagPayload = {
  __typename?: 'DeleteJobsJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedJobsJobTagNodeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Job` that is related to this `JobsJobTag`. */
  job?: Maybe<Job>;
  /** Reads a single `JobTag` that is related to this `JobsJobTag`. */
  jobTag?: Maybe<JobTag>;
  /** The `JobsJobTag` that was deleted by this mutation. */
  jobsJobTag?: Maybe<JobsJobTag>;
  /** An edge for our `JobsJobTag`. May be used by Relay 1. */
  jobsJobTagEdge?: Maybe<JobsJobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `JobsJobTag` mutation. */
export type DeleteJobsJobTagPayloadJobsJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** All input for the `deleteMigrationByName` mutation. */
export type DeleteMigrationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

/** All input for the `deleteMigration` mutation. */
export type DeleteMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayload = {
  __typename?: 'DeleteMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedMigrationNodeId?: Maybe<Scalars['ID']>;
  /** The `Migration` that was deleted by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Migration` mutation. */
export type DeleteMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

/** All input for the `deleteRegionByTitle` mutation. */
export type DeleteRegionByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** All input for the `deleteRegion` mutation. */
export type DeleteRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `Region` mutation. */
export type DeleteRegionPayload = {
  __typename?: 'DeleteRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRegionNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was deleted by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our delete `Region` mutation. */
export type DeleteRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteWhitelistedEmailByEmail` mutation. */
export type DeleteWhitelistedEmailByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteWhitelistedEmail` mutation. */
export type DeleteWhitelistedEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** The output of our delete `WhitelistedEmail` mutation. */
export type DeleteWhitelistedEmailPayload = {
  __typename?: 'DeleteWhitelistedEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedWhitelistedEmailNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WhitelistedEmail` that was deleted by this mutation. */
  whitelistedEmail?: Maybe<WhitelistedEmail>;
  /** An edge for our `WhitelistedEmail`. May be used by Relay 1. */
  whitelistedEmailEdge?: Maybe<WhitelistedEmailsEdge>;
};


/** The output of our delete `WhitelistedEmail` mutation. */
export type DeleteWhitelistedEmailPayloadWhitelistedEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<WhitelistedEmailsOrderBy>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Job = {
  __typename?: 'Job';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  /** Reads a single `Company` that is related to this `Job`. */
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['UUID']>;
  endDate: Scalars['Date'];
  externalUrl?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  internalUrl?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `JobTag`. */
  jobTagsByJobsJobTagJobIdAndJobTagId: JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyConnection;
  /** Reads a single `JobType` that is related to this `Job`. */
  jobType?: Maybe<JobType>;
  jobTypeId?: Maybe<Scalars['UUID']>;
  /** Reads and enables pagination through a set of `JobsJobTag`. */
  jobsJobTags: JobsJobTagsConnection;
  /** Reads a single `Region` that is related to this `Job`. */
  region?: Maybe<Region>;
  regionId?: Maybe<Scalars['UUID']>;
  startDate: Scalars['Date'];
  title: Scalars['String'];
};


export type JobJobTagsByJobsJobTagJobIdAndJobTagIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobTagCondition>;
  filter?: InputMaybe<JobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobTagsOrderBy>>;
};


export type JobJobsJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobsJobTagCondition>;
  filter?: InputMaybe<JobsJobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** A condition to be used against `Job` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JobCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `companyId` field. */
  companyId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `endDate` field. */
  endDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `externalUrl` field. */
  externalUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `internalUrl` field. */
  internalUrl?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `jobTypeId` field. */
  jobTypeId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `regionId` field. */
  regionId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `startDate` field. */
  startDate?: InputMaybe<Scalars['Date']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Job` object types. All fields are combined with a logical ‘and.’ */
export type JobFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobFilter>>;
  /** Filter by the object’s `companyId` field. */
  companyId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `endDate` field. */
  endDate?: InputMaybe<DateFilter>;
  /** Filter by the object’s `externalUrl` field. */
  externalUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `internalUrl` field. */
  internalUrl?: InputMaybe<StringFilter>;
  /** Filter by the object’s `jobTypeId` field. */
  jobTypeId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobFilter>>;
  /** Filter by the object’s `regionId` field. */
  regionId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `startDate` field. */
  startDate?: InputMaybe<DateFilter>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Job` */
export type JobInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  companyId?: InputMaybe<Scalars['UUID']>;
  endDate: Scalars['Date'];
  externalUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  internalUrl?: InputMaybe<Scalars['String']>;
  jobTypeId?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
  startDate: Scalars['Date'];
  title: Scalars['String'];
};

/** A connection to a list of `JobTag` values, with data from `JobsJobTag`. */
export type JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyConnection = {
  __typename?: 'JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyConnection';
  /** A list of edges which contains the `JobTag`, info from the `JobsJobTag`, and the cursor to aid in pagination. */
  edges: Array<JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyEdge>;
  /** A list of `JobTag` objects. */
  nodes: Array<JobTag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobTag` edge in the connection, with data from `JobsJobTag`. */
export type JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyEdge = {
  __typename?: 'JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `JobsJobTag`. */
  jobsJobTags: JobsJobTagsConnection;
  /** The `JobTag` at the end of the edge. */
  node: JobTag;
};


/** A `JobTag` edge in the connection, with data from `JobsJobTag`. */
export type JobJobTagsByJobsJobTagJobIdAndJobTagIdManyToManyEdgeJobsJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobsJobTagCondition>;
  filter?: InputMaybe<JobsJobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** Represents an update to a `Job`. Fields that are set will be updated. */
export type JobPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  companyId?: InputMaybe<Scalars['UUID']>;
  endDate?: InputMaybe<Scalars['Date']>;
  externalUrl?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  internalUrl?: InputMaybe<Scalars['String']>;
  jobTypeId?: InputMaybe<Scalars['UUID']>;
  regionId?: InputMaybe<Scalars['UUID']>;
  startDate?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
};

export type JobTag = {
  __typename?: 'JobTag';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Job`. */
  jobsByJobsJobTagJobTagIdAndJobId: JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyConnection;
  /** Reads and enables pagination through a set of `JobsJobTag`. */
  jobsJobTags: JobsJobTagsConnection;
  notes?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type JobTagJobsByJobsJobTagJobTagIdAndJobIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};


export type JobTagJobsJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobsJobTagCondition>;
  filter?: InputMaybe<JobsJobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** A condition to be used against `JobTag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JobTagCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `JobTag` object types. All fields are combined with a logical ‘and.’ */
export type JobTagFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobTagFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobTagFilter>;
  /** Filter by the object’s `notes` field. */
  notes?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobTagFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `JobTag` */
export type JobTagInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  notes?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** A connection to a list of `Job` values, with data from `JobsJobTag`. */
export type JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyConnection = {
  __typename?: 'JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyConnection';
  /** A list of edges which contains the `Job`, info from the `JobsJobTag`, and the cursor to aid in pagination. */
  edges: Array<JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyEdge>;
  /** A list of `Job` objects. */
  nodes: Array<Job>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Job` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Job` edge in the connection, with data from `JobsJobTag`. */
export type JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyEdge = {
  __typename?: 'JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `JobsJobTag`. */
  jobsJobTags: JobsJobTagsConnection;
  /** The `Job` at the end of the edge. */
  node: Job;
};


/** A `Job` edge in the connection, with data from `JobsJobTag`. */
export type JobTagJobsByJobsJobTagJobTagIdAndJobIdManyToManyEdgeJobsJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobsJobTagCondition>;
  filter?: InputMaybe<JobsJobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** Represents an update to a `JobTag`. Fields that are set will be updated. */
export type JobTagPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  notes?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `JobTag` values. */
export type JobTagsConnection = {
  __typename?: 'JobTagsConnection';
  /** A list of edges which contains the `JobTag` and cursor to aid in pagination. */
  edges: Array<JobTagsEdge>;
  /** A list of `JobTag` objects. */
  nodes: Array<JobTag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobTag` edge in the connection. */
export type JobTagsEdge = {
  __typename?: 'JobTagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `JobTag` at the end of the edge. */
  node: JobTag;
};

/** Methods to use when ordering `JobTag`. */
export enum JobTagsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

export type JobType = {
  __typename?: 'JobType';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Company`. */
  companiesByJobJobTypeIdAndCompanyId: JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyConnection;
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  notes?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `Region`. */
  regionsByJobJobTypeIdAndRegionId: JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyConnection;
  title: Scalars['String'];
};


export type JobTypeCompaniesByJobJobTypeIdAndCompanyIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};


export type JobTypeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};


export type JobTypeRegionsByJobJobTypeIdAndRegionIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RegionCondition>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** A connection to a list of `Company` values, with data from `Job`. */
export type JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyConnection = {
  __typename?: 'JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyConnection';
  /** A list of edges which contains the `Company`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyEdge>;
  /** A list of `Company` objects. */
  nodes: Array<Company>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Company` edge in the connection, with data from `Job`. */
export type JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyEdge = {
  __typename?: 'JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `Company` at the end of the edge. */
  node: Company;
};


/** A `Company` edge in the connection, with data from `Job`. */
export type JobTypeCompaniesByJobJobTypeIdAndCompanyIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** A condition to be used against `JobType` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type JobTypeCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `JobType` object types. All fields are combined with a logical ‘and.’ */
export type JobTypeFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobTypeFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobTypeFilter>;
  /** Filter by the object’s `notes` field. */
  notes?: InputMaybe<StringFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobTypeFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `JobType` */
export type JobTypeInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  notes?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

/** Represents an update to a `JobType`. Fields that are set will be updated. */
export type JobTypePatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  notes?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Region` values, with data from `Job`. */
export type JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyConnection = {
  __typename?: 'JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyConnection';
  /** A list of edges which contains the `Region`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyEdge>;
  /** A list of `Region` objects. */
  nodes: Array<Region>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Region` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Region` edge in the connection, with data from `Job`. */
export type JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyEdge = {
  __typename?: 'JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `Region` at the end of the edge. */
  node: Region;
};


/** A `Region` edge in the connection, with data from `Job`. */
export type JobTypeRegionsByJobJobTypeIdAndRegionIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** A connection to a list of `JobType` values. */
export type JobTypesConnection = {
  __typename?: 'JobTypesConnection';
  /** A list of edges which contains the `JobType` and cursor to aid in pagination. */
  edges: Array<JobTypesEdge>;
  /** A list of `JobType` objects. */
  nodes: Array<JobType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobType` edge in the connection. */
export type JobTypesEdge = {
  __typename?: 'JobTypesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `JobType` at the end of the edge. */
  node: JobType;
};

/** Methods to use when ordering `JobType`. */
export enum JobTypesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

/** A connection to a list of `Job` values. */
export type JobsConnection = {
  __typename?: 'JobsConnection';
  /** A list of edges which contains the `Job` and cursor to aid in pagination. */
  edges: Array<JobsEdge>;
  /** A list of `Job` objects. */
  nodes: Array<Job>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Job` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Job` edge in the connection. */
export type JobsEdge = {
  __typename?: 'JobsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Job` at the end of the edge. */
  node: Job;
};

export type JobsJobTag = {
  __typename?: 'JobsJobTag';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  id: Scalars['UUID'];
  /** Reads a single `Job` that is related to this `JobsJobTag`. */
  job?: Maybe<Job>;
  jobId?: Maybe<Scalars['UUID']>;
  /** Reads a single `JobTag` that is related to this `JobsJobTag`. */
  jobTag?: Maybe<JobTag>;
  jobTagId?: Maybe<Scalars['UUID']>;
};

/**
 * A condition to be used against `JobsJobTag` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type JobsJobTagCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `jobId` field. */
  jobId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `jobTagId` field. */
  jobTagId?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `JobsJobTag` object types. All fields are combined with a logical ‘and.’ */
export type JobsJobTagFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<JobsJobTagFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `jobId` field. */
  jobId?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `jobTagId` field. */
  jobTagId?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<JobsJobTagFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<JobsJobTagFilter>>;
};

/** An input for mutations affecting `JobsJobTag` */
export type JobsJobTagInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  jobId?: InputMaybe<Scalars['UUID']>;
  jobTagId?: InputMaybe<Scalars['UUID']>;
};

/** Represents an update to a `JobsJobTag`. Fields that are set will be updated. */
export type JobsJobTagPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  jobId?: InputMaybe<Scalars['UUID']>;
  jobTagId?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `JobsJobTag` values. */
export type JobsJobTagsConnection = {
  __typename?: 'JobsJobTagsConnection';
  /** A list of edges which contains the `JobsJobTag` and cursor to aid in pagination. */
  edges: Array<JobsJobTagsEdge>;
  /** A list of `JobsJobTag` objects. */
  nodes: Array<JobsJobTag>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobsJobTag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobsJobTag` edge in the connection. */
export type JobsJobTagsEdge = {
  __typename?: 'JobsJobTagsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `JobsJobTag` at the end of the edge. */
  node: JobsJobTag;
};

/** Methods to use when ordering `JobsJobTag`. */
export enum JobsJobTagsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  JobIdAsc = 'JOB_ID_ASC',
  JobIdDesc = 'JOB_ID_DESC',
  JobTagIdAsc = 'JOB_TAG_ID_ASC',
  JobTagIdDesc = 'JOB_TAG_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

/** Methods to use when ordering `Job`. */
export enum JobsOrderBy {
  CompanyIdAsc = 'COMPANY_ID_ASC',
  CompanyIdDesc = 'COMPANY_ID_DESC',
  EndDateAsc = 'END_DATE_ASC',
  EndDateDesc = 'END_DATE_DESC',
  ExternalUrlAsc = 'EXTERNAL_URL_ASC',
  ExternalUrlDesc = 'EXTERNAL_URL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  InternalUrlAsc = 'INTERNAL_URL_ASC',
  InternalUrlDesc = 'INTERNAL_URL_DESC',
  JobTypeIdAsc = 'JOB_TYPE_ID_ASC',
  JobTypeIdDesc = 'JOB_TYPE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RegionIdAsc = 'REGION_ID_ASC',
  RegionIdDesc = 'REGION_ID_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

export type Migration = {
  __typename?: 'Migration';
  executedAt?: Maybe<Scalars['Datetime']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/**
 * A condition to be used against `Migration` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type MigrationCondition = {
  /** Checks for equality with the object’s `executedAt` field. */
  executedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `hash` field. */
  hash?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Migration` object types. All fields are combined with a logical ‘and.’ */
export type MigrationFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<MigrationFilter>>;
  /** Filter by the object’s `executedAt` field. */
  executedAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `hash` field. */
  hash?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<MigrationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<MigrationFilter>>;
};

/** An input for mutations affecting `Migration` */
export type MigrationInput = {
  executedAt?: InputMaybe<Scalars['Datetime']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** Represents an update to a `Migration`. Fields that are set will be updated. */
export type MigrationPatch = {
  executedAt?: InputMaybe<Scalars['Datetime']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Migration` values. */
export type MigrationsConnection = {
  __typename?: 'MigrationsConnection';
  /** A list of edges which contains the `Migration` and cursor to aid in pagination. */
  edges: Array<MigrationsEdge>;
  /** A list of `Migration` objects. */
  nodes: Array<Migration>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Migration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Migration` edge in the connection. */
export type MigrationsEdge = {
  __typename?: 'MigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Migration` at the end of the edge. */
  node: Migration;
};

/** Methods to use when ordering `Migration`. */
export enum MigrationsOrderBy {
  ExecutedAtAsc = 'EXECUTED_AT_ASC',
  ExecutedAtDesc = 'EXECUTED_AT_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Company`. */
  createCompany?: Maybe<CreateCompanyPayload>;
  /** Creates a single `Job`. */
  createJob?: Maybe<CreateJobPayload>;
  /** Creates a single `JobTag`. */
  createJobTag?: Maybe<CreateJobTagPayload>;
  /** Creates a single `JobType`. */
  createJobType?: Maybe<CreateJobTypePayload>;
  /** Creates a single `JobsJobTag`. */
  createJobsJobTag?: Maybe<CreateJobsJobTagPayload>;
  /** Creates a single `Migration`. */
  createMigration?: Maybe<CreateMigrationPayload>;
  /** Creates a single `Region`. */
  createRegion?: Maybe<CreateRegionPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Creates a single `WhitelistedEmail`. */
  createWhitelistedEmail?: Maybe<CreateWhitelistedEmailPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompany?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompanyByTitle?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Company` using a unique key. */
  deleteCompanyByUrl?: Maybe<DeleteCompanyPayload>;
  /** Deletes a single `Job` using a unique key. */
  deleteJob?: Maybe<DeleteJobPayload>;
  /** Deletes a single `Job` using a unique key. */
  deleteJobByTitle?: Maybe<DeleteJobPayload>;
  /** Deletes a single `JobTag` using a unique key. */
  deleteJobTag?: Maybe<DeleteJobTagPayload>;
  /** Deletes a single `JobTag` using a unique key. */
  deleteJobTagByTitle?: Maybe<DeleteJobTagPayload>;
  /** Deletes a single `JobType` using a unique key. */
  deleteJobType?: Maybe<DeleteJobTypePayload>;
  /** Deletes a single `JobType` using a unique key. */
  deleteJobTypeByTitle?: Maybe<DeleteJobTypePayload>;
  /** Deletes a single `JobsJobTag` using a unique key. */
  deleteJobsJobTag?: Maybe<DeleteJobsJobTagPayload>;
  /** Deletes a single `Migration` using a unique key. */
  deleteMigration?: Maybe<DeleteMigrationPayload>;
  /** Deletes a single `Migration` using a unique key. */
  deleteMigrationByName?: Maybe<DeleteMigrationPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegion?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `Region` using a unique key. */
  deleteRegionByTitle?: Maybe<DeleteRegionPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `WhitelistedEmail` using a unique key. */
  deleteWhitelistedEmail?: Maybe<DeleteWhitelistedEmailPayload>;
  /** Deletes a single `WhitelistedEmail` using a unique key. */
  deleteWhitelistedEmailByEmail?: Maybe<DeleteWhitelistedEmailPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompany?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompanyByTitle?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Company` using a unique key and a patch. */
  updateCompanyByUrl?: Maybe<UpdateCompanyPayload>;
  /** Updates a single `Job` using a unique key and a patch. */
  updateJob?: Maybe<UpdateJobPayload>;
  /** Updates a single `Job` using a unique key and a patch. */
  updateJobByTitle?: Maybe<UpdateJobPayload>;
  /** Updates a single `JobTag` using a unique key and a patch. */
  updateJobTag?: Maybe<UpdateJobTagPayload>;
  /** Updates a single `JobTag` using a unique key and a patch. */
  updateJobTagByTitle?: Maybe<UpdateJobTagPayload>;
  /** Updates a single `JobType` using a unique key and a patch. */
  updateJobType?: Maybe<UpdateJobTypePayload>;
  /** Updates a single `JobType` using a unique key and a patch. */
  updateJobTypeByTitle?: Maybe<UpdateJobTypePayload>;
  /** Updates a single `JobsJobTag` using a unique key and a patch. */
  updateJobsJobTag?: Maybe<UpdateJobsJobTagPayload>;
  /** Updates a single `Migration` using a unique key and a patch. */
  updateMigration?: Maybe<UpdateMigrationPayload>;
  /** Updates a single `Migration` using a unique key and a patch. */
  updateMigrationByName?: Maybe<UpdateMigrationPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegion?: Maybe<UpdateRegionPayload>;
  /** Updates a single `Region` using a unique key and a patch. */
  updateRegionByTitle?: Maybe<UpdateRegionPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `WhitelistedEmail` using a unique key and a patch. */
  updateWhitelistedEmail?: Maybe<UpdateWhitelistedEmailPayload>;
  /** Updates a single `WhitelistedEmail` using a unique key and a patch. */
  updateWhitelistedEmailByEmail?: Maybe<UpdateWhitelistedEmailPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJobArgs = {
  input: CreateJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJobTagArgs = {
  input: CreateJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJobTypeArgs = {
  input: CreateJobTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateJobsJobTagArgs = {
  input: CreateJobsJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMigrationArgs = {
  input: CreateMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRegionArgs = {
  input: CreateRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateWhitelistedEmailArgs = {
  input: CreateWhitelistedEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyByTitleArgs = {
  input: DeleteCompanyByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCompanyByUrlArgs = {
  input: DeleteCompanyByUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobArgs = {
  input: DeleteJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobByTitleArgs = {
  input: DeleteJobByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobTagArgs = {
  input: DeleteJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobTagByTitleArgs = {
  input: DeleteJobTagByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobTypeArgs = {
  input: DeleteJobTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobTypeByTitleArgs = {
  input: DeleteJobTypeByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteJobsJobTagArgs = {
  input: DeleteJobsJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationArgs = {
  input: DeleteMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMigrationByNameArgs = {
  input: DeleteMigrationByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionArgs = {
  input: DeleteRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRegionByTitleArgs = {
  input: DeleteRegionByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWhitelistedEmailArgs = {
  input: DeleteWhitelistedEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteWhitelistedEmailByEmailArgs = {
  input: DeleteWhitelistedEmailByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyByTitleArgs = {
  input: UpdateCompanyByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCompanyByUrlArgs = {
  input: UpdateCompanyByUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobArgs = {
  input: UpdateJobInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobByTitleArgs = {
  input: UpdateJobByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobTagArgs = {
  input: UpdateJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobTagByTitleArgs = {
  input: UpdateJobTagByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobTypeArgs = {
  input: UpdateJobTypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobTypeByTitleArgs = {
  input: UpdateJobTypeByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateJobsJobTagArgs = {
  input: UpdateJobsJobTagInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationArgs = {
  input: UpdateMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMigrationByNameArgs = {
  input: UpdateMigrationByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionArgs = {
  input: UpdateRegionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRegionByTitleArgs = {
  input: UpdateRegionByTitleInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWhitelistedEmailArgs = {
  input: UpdateWhitelistedEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateWhitelistedEmailByEmailArgs = {
  input: UpdateWhitelistedEmailByEmailInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Company`. */
  companies?: Maybe<CompaniesConnection>;
  company?: Maybe<Company>;
  companyByTitle?: Maybe<Company>;
  companyByUrl?: Maybe<Company>;
  job?: Maybe<Job>;
  jobByTitle?: Maybe<Job>;
  jobTag?: Maybe<JobTag>;
  jobTagByTitle?: Maybe<JobTag>;
  /** Reads and enables pagination through a set of `JobTag`. */
  jobTags?: Maybe<JobTagsConnection>;
  jobType?: Maybe<JobType>;
  jobTypeByTitle?: Maybe<JobType>;
  /** Reads and enables pagination through a set of `JobType`. */
  jobTypes?: Maybe<JobTypesConnection>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs?: Maybe<JobsConnection>;
  jobsJobTag?: Maybe<JobsJobTag>;
  /** Reads and enables pagination through a set of `JobsJobTag`. */
  jobsJobTags?: Maybe<JobsJobTagsConnection>;
  migration?: Maybe<Migration>;
  migrationByName?: Maybe<Migration>;
  /** Reads and enables pagination through a set of `Migration`. */
  migrations?: Maybe<MigrationsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  region?: Maybe<Region>;
  regionByTitle?: Maybe<Region>;
  /** Reads and enables pagination through a set of `Region`. */
  regions?: Maybe<RegionsConnection>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  whitelistedEmail?: Maybe<WhitelistedEmail>;
  whitelistedEmailByEmail?: Maybe<WhitelistedEmail>;
  /** Reads and enables pagination through a set of `WhitelistedEmail`. */
  whitelistedEmails?: Maybe<WhitelistedEmailsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCompanyArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCompanyByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCompanyByUrlArgs = {
  url: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTagArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTagByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobTagCondition>;
  filter?: InputMaybe<JobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobTagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTypeArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTypeByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobTypesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobTypeCondition>;
  filter?: InputMaybe<JobTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryJobsJobTagArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryJobsJobTagsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobsJobTagCondition>;
  filter?: InputMaybe<JobsJobTagFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<MigrationCondition>;
  filter?: InputMaybe<MigrationFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionByTitleArgs = {
  title: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RegionCondition>;
  filter?: InputMaybe<RegionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryWhitelistedEmailArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWhitelistedEmailByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryWhitelistedEmailsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<WhitelistedEmailCondition>;
  filter?: InputMaybe<WhitelistedEmailFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<WhitelistedEmailsOrderBy>>;
};

export type Region = {
  __typename?: 'Region';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Company`. */
  companies: CompaniesConnection;
  /** Reads and enables pagination through a set of `Company`. */
  companiesByJobRegionIdAndCompanyId: RegionCompaniesByJobRegionIdAndCompanyIdManyToManyConnection;
  id: Scalars['UUID'];
  /** Reads and enables pagination through a set of `JobType`. */
  jobTypesByJobRegionIdAndJobTypeId: RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyConnection;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  title: Scalars['String'];
};


export type RegionCompaniesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};


export type RegionCompaniesByJobRegionIdAndCompanyIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CompanyCondition>;
  filter?: InputMaybe<CompanyFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};


export type RegionJobTypesByJobRegionIdAndJobTypeIdArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobTypeCondition>;
  filter?: InputMaybe<JobTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};


export type RegionJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** A connection to a list of `Company` values, with data from `Job`. */
export type RegionCompaniesByJobRegionIdAndCompanyIdManyToManyConnection = {
  __typename?: 'RegionCompaniesByJobRegionIdAndCompanyIdManyToManyConnection';
  /** A list of edges which contains the `Company`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<RegionCompaniesByJobRegionIdAndCompanyIdManyToManyEdge>;
  /** A list of `Company` objects. */
  nodes: Array<Company>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Company` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Company` edge in the connection, with data from `Job`. */
export type RegionCompaniesByJobRegionIdAndCompanyIdManyToManyEdge = {
  __typename?: 'RegionCompaniesByJobRegionIdAndCompanyIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `Company` at the end of the edge. */
  node: Company;
};


/** A `Company` edge in the connection, with data from `Job`. */
export type RegionCompaniesByJobRegionIdAndCompanyIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** A condition to be used against `Region` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RegionCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against `Region` object types. All fields are combined with a logical ‘and.’ */
export type RegionFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RegionFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RegionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RegionFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
};

/** An input for mutations affecting `Region` */
export type RegionInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  title: Scalars['String'];
};

/** A connection to a list of `JobType` values, with data from `Job`. */
export type RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyConnection = {
  __typename?: 'RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyConnection';
  /** A list of edges which contains the `JobType`, info from the `Job`, and the cursor to aid in pagination. */
  edges: Array<RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyEdge>;
  /** A list of `JobType` objects. */
  nodes: Array<JobType>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `JobType` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `JobType` edge in the connection, with data from `Job`. */
export type RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyEdge = {
  __typename?: 'RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** Reads and enables pagination through a set of `Job`. */
  jobs: JobsConnection;
  /** The `JobType` at the end of the edge. */
  node: JobType;
};


/** A `JobType` edge in the connection, with data from `Job`. */
export type RegionJobTypesByJobRegionIdAndJobTypeIdManyToManyEdgeJobsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<JobCondition>;
  filter?: InputMaybe<JobFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** Represents an update to a `Region`. Fields that are set will be updated. */
export type RegionPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['UUID']>;
  title?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Region` values. */
export type RegionsConnection = {
  __typename?: 'RegionsConnection';
  /** A list of edges which contains the `Region` and cursor to aid in pagination. */
  edges: Array<RegionsEdge>;
  /** A list of `Region` objects. */
  nodes: Array<Region>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Region` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Region` edge in the connection. */
export type RegionsEdge = {
  __typename?: 'RegionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Region` at the end of the edge. */
  node: Region;
};

/** Methods to use when ordering `Region`. */
export enum RegionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-sensitive). An underscore (_) matches any
   * single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  like?: InputMaybe<Scalars['String']>;
  /**
   * Matches the specified pattern (case-insensitive). An underscore (_) matches
   * any single character; a percent sign (%) matches any sequence of zero or more characters.
   */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-sensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLike?: InputMaybe<Scalars['String']>;
  /**
   * Does not match the specified pattern (case-insensitive). An underscore (_)
   * matches any single character; a percent sign (%) matches any sequence of zero
   * or more characters.
   */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

/** A filter to be used against UUID fields. All fields are combined with a logical ‘and.’ */
export type UuidFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['UUID']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['UUID']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['UUID']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['UUID']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['UUID']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['UUID']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['UUID']>>;
};

/** All input for the `updateCompanyByTitle` mutation. */
export type UpdateCompanyByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
  title: Scalars['String'];
};

/** All input for the `updateCompanyByUrl` mutation. */
export type UpdateCompanyByUrlInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
  url: Scalars['String'];
};

/** All input for the `updateCompany` mutation. */
export type UpdateCompanyInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Company` being updated. */
  patch: CompanyPatch;
};

/** The output of our update `Company` mutation. */
export type UpdateCompanyPayload = {
  __typename?: 'UpdateCompanyPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Company` that was updated by this mutation. */
  company?: Maybe<Company>;
  /** An edge for our `Company`. May be used by Relay 1. */
  companyEdge?: Maybe<CompaniesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Company`. */
  region?: Maybe<Region>;
};


/** The output of our update `Company` mutation. */
export type UpdateCompanyPayloadCompanyEdgeArgs = {
  orderBy?: InputMaybe<Array<CompaniesOrderBy>>;
};

/** All input for the `updateJobByTitle` mutation. */
export type UpdateJobByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Job` being updated. */
  patch: JobPatch;
  title: Scalars['String'];
};

/** All input for the `updateJob` mutation. */
export type UpdateJobInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Job` being updated. */
  patch: JobPatch;
};

/** The output of our update `Job` mutation. */
export type UpdateJobPayload = {
  __typename?: 'UpdateJobPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Company` that is related to this `Job`. */
  company?: Maybe<Company>;
  /** The `Job` that was updated by this mutation. */
  job?: Maybe<Job>;
  /** An edge for our `Job`. May be used by Relay 1. */
  jobEdge?: Maybe<JobsEdge>;
  /** Reads a single `JobType` that is related to this `Job`. */
  jobType?: Maybe<JobType>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Region` that is related to this `Job`. */
  region?: Maybe<Region>;
};


/** The output of our update `Job` mutation. */
export type UpdateJobPayloadJobEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsOrderBy>>;
};

/** All input for the `updateJobTagByTitle` mutation. */
export type UpdateJobTagByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `JobTag` being updated. */
  patch: JobTagPatch;
  title: Scalars['String'];
};

/** All input for the `updateJobTag` mutation. */
export type UpdateJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `JobTag` being updated. */
  patch: JobTagPatch;
};

/** The output of our update `JobTag` mutation. */
export type UpdateJobTagPayload = {
  __typename?: 'UpdateJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JobTag` that was updated by this mutation. */
  jobTag?: Maybe<JobTag>;
  /** An edge for our `JobTag`. May be used by Relay 1. */
  jobTagEdge?: Maybe<JobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `JobTag` mutation. */
export type UpdateJobTagPayloadJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTagsOrderBy>>;
};

/** All input for the `updateJobTypeByTitle` mutation. */
export type UpdateJobTypeByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `JobType` being updated. */
  patch: JobTypePatch;
  title: Scalars['String'];
};

/** All input for the `updateJobType` mutation. */
export type UpdateJobTypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `JobType` being updated. */
  patch: JobTypePatch;
};

/** The output of our update `JobType` mutation. */
export type UpdateJobTypePayload = {
  __typename?: 'UpdateJobTypePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `JobType` that was updated by this mutation. */
  jobType?: Maybe<JobType>;
  /** An edge for our `JobType`. May be used by Relay 1. */
  jobTypeEdge?: Maybe<JobTypesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `JobType` mutation. */
export type UpdateJobTypePayloadJobTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<JobTypesOrderBy>>;
};

/** All input for the `updateJobsJobTag` mutation. */
export type UpdateJobsJobTagInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `JobsJobTag` being updated. */
  patch: JobsJobTagPatch;
};

/** The output of our update `JobsJobTag` mutation. */
export type UpdateJobsJobTagPayload = {
  __typename?: 'UpdateJobsJobTagPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Job` that is related to this `JobsJobTag`. */
  job?: Maybe<Job>;
  /** Reads a single `JobTag` that is related to this `JobsJobTag`. */
  jobTag?: Maybe<JobTag>;
  /** The `JobsJobTag` that was updated by this mutation. */
  jobsJobTag?: Maybe<JobsJobTag>;
  /** An edge for our `JobsJobTag`. May be used by Relay 1. */
  jobsJobTagEdge?: Maybe<JobsJobTagsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `JobsJobTag` mutation. */
export type UpdateJobsJobTagPayloadJobsJobTagEdgeArgs = {
  orderBy?: InputMaybe<Array<JobsJobTagsOrderBy>>;
};

/** All input for the `updateMigrationByName` mutation. */
export type UpdateMigrationByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Migration` being updated. */
  patch: MigrationPatch;
};

/** All input for the `updateMigration` mutation. */
export type UpdateMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Migration` being updated. */
  patch: MigrationPatch;
};

/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayload = {
  __typename?: 'UpdateMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Migration` that was updated by this mutation. */
  migration?: Maybe<Migration>;
  /** An edge for our `Migration`. May be used by Relay 1. */
  migrationEdge?: Maybe<MigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Migration` mutation. */
export type UpdateMigrationPayloadMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<MigrationsOrderBy>>;
};

/** All input for the `updateRegionByTitle` mutation. */
export type UpdateRegionByTitleInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
  title: Scalars['String'];
};

/** All input for the `updateRegion` mutation. */
export type UpdateRegionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Region` being updated. */
  patch: RegionPatch;
};

/** The output of our update `Region` mutation. */
export type UpdateRegionPayload = {
  __typename?: 'UpdateRegionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Region` that was updated by this mutation. */
  region?: Maybe<Region>;
  /** An edge for our `Region`. May be used by Relay 1. */
  regionEdge?: Maybe<RegionsEdge>;
};


/** The output of our update `Region` mutation. */
export type UpdateRegionPayloadRegionEdgeArgs = {
  orderBy?: InputMaybe<Array<RegionsOrderBy>>;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `updateWhitelistedEmailByEmail` mutation. */
export type UpdateWhitelistedEmailByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** An object where the defined keys will be set on the `WhitelistedEmail` being updated. */
  patch: WhitelistedEmailPatch;
};

/** All input for the `updateWhitelistedEmail` mutation. */
export type UpdateWhitelistedEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `WhitelistedEmail` being updated. */
  patch: WhitelistedEmailPatch;
};

/** The output of our update `WhitelistedEmail` mutation. */
export type UpdateWhitelistedEmailPayload = {
  __typename?: 'UpdateWhitelistedEmailPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `WhitelistedEmail` that was updated by this mutation. */
  whitelistedEmail?: Maybe<WhitelistedEmail>;
  /** An edge for our `WhitelistedEmail`. May be used by Relay 1. */
  whitelistedEmailEdge?: Maybe<WhitelistedEmailsEdge>;
};


/** The output of our update `WhitelistedEmail` mutation. */
export type UpdateWhitelistedEmailPayloadWhitelistedEmailEdgeArgs = {
  orderBy?: InputMaybe<Array<WhitelistedEmailsOrderBy>>;
};

export type User = {
  __typename?: 'User';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['UUID'];
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  role: UserRoles;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `fullName` field. */
  fullName?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `isEmailVerified` field. */
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<UserRoles>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `fullName` field. */
  fullName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Filter by the object’s `isEmailVerified` field. */
  isEmailVerified?: InputMaybe<BooleanFilter>;
  /** Negates the expression. */
  not?: InputMaybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Filter by the object’s `password` field. */
  password?: InputMaybe<StringFilter>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<UserRolesFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoles>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoles>;
};

export enum UserRoles {
  Admin = 'ADMIN',
  AppUser = 'APP_USER',
  SuperAdmin = 'SUPER_ADMIN'
}

/** A filter to be used against UserRoles fields. All fields are combined with a logical ‘and.’ */
export type UserRolesFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<UserRoles>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<UserRoles>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<UserRoles>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<UserRoles>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<UserRoles>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<UserRoles>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<UserRoles>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<UserRoles>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<UserRoles>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<UserRoles>>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FullNameAsc = 'FULL_NAME_ASC',
  FullNameDesc = 'FULL_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsEmailVerifiedAsc = 'IS_EMAIL_VERIFIED_ASC',
  IsEmailVerifiedDesc = 'IS_EMAIL_VERIFIED_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

export type WhitelistedEmail = {
  __typename?: 'WhitelistedEmail';
  _createdAt: Scalars['Datetime'];
  _updatedAt: Scalars['Datetime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
};

/**
 * A condition to be used against `WhitelistedEmail` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type WhitelistedEmailCondition = {
  /** Checks for equality with the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
};

/** A filter to be used against `WhitelistedEmail` object types. All fields are combined with a logical ‘and.’ */
export type WhitelistedEmailFilter = {
  /** Filter by the object’s `_createdAt` field. */
  _createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `_updatedAt` field. */
  _updatedAt?: InputMaybe<DatetimeFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<WhitelistedEmailFilter>>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<UuidFilter>;
  /** Negates the expression. */
  not?: InputMaybe<WhitelistedEmailFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<WhitelistedEmailFilter>>;
};

/** An input for mutations affecting `WhitelistedEmail` */
export type WhitelistedEmailInput = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['UUID']>;
};

/** Represents an update to a `WhitelistedEmail`. Fields that are set will be updated. */
export type WhitelistedEmailPatch = {
  _createdAt?: InputMaybe<Scalars['Datetime']>;
  _updatedAt?: InputMaybe<Scalars['Datetime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['UUID']>;
};

/** A connection to a list of `WhitelistedEmail` values. */
export type WhitelistedEmailsConnection = {
  __typename?: 'WhitelistedEmailsConnection';
  /** A list of edges which contains the `WhitelistedEmail` and cursor to aid in pagination. */
  edges: Array<WhitelistedEmailsEdge>;
  /** A list of `WhitelistedEmail` objects. */
  nodes: Array<WhitelistedEmail>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `WhitelistedEmail` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `WhitelistedEmail` edge in the connection. */
export type WhitelistedEmailsEdge = {
  __typename?: 'WhitelistedEmailsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `WhitelistedEmail` at the end of the edge. */
  node: WhitelistedEmail;
};

/** Methods to use when ordering `WhitelistedEmail`. */
export enum WhitelistedEmailsOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  CreatedAtAsc = '_CREATED_AT_ASC',
  CreatedAtDesc = '_CREATED_AT_DESC',
  UpdatedAtAsc = '_UPDATED_AT_ASC',
  UpdatedAtDesc = '_UPDATED_AT_DESC'
}

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany?: { __typename?: 'CreateCompanyPayload', company?: { __typename?: 'Company', id: any } | null | undefined } | null | undefined };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany?: { __typename?: 'UpdateCompanyPayload', company?: { __typename?: 'Company', id: any } | null | undefined } | null | undefined };

export type CreateJobTagMutationVariables = Exact<{
  input: CreateJobTagInput;
}>;


export type CreateJobTagMutation = { __typename?: 'Mutation', createJobTag?: { __typename?: 'CreateJobTagPayload', jobTag?: { __typename?: 'JobTag', id: any } | null | undefined } | null | undefined };

export type UpdateJobTagMutationVariables = Exact<{
  input: UpdateJobTagInput;
}>;


export type UpdateJobTagMutation = { __typename?: 'Mutation', updateJobTag?: { __typename?: 'UpdateJobTagPayload', jobTag?: { __typename?: 'JobTag', id: any } | null | undefined } | null | undefined };

export type CreateJobTypeMutationVariables = Exact<{
  input: CreateJobTypeInput;
}>;


export type CreateJobTypeMutation = { __typename?: 'Mutation', createJobType?: { __typename?: 'CreateJobTypePayload', jobType?: { __typename?: 'JobType', id: any } | null | undefined } | null | undefined };

export type UpdateJobTypeMutationVariables = Exact<{
  input: UpdateJobTypeInput;
}>;


export type UpdateJobTypeMutation = { __typename?: 'Mutation', updateJobType?: { __typename?: 'UpdateJobTypePayload', jobType?: { __typename?: 'JobType', id: any } | null | undefined } | null | undefined };

export type CreateJobMutationVariables = Exact<{
  input: CreateJobInput;
}>;


export type CreateJobMutation = { __typename?: 'Mutation', createJob?: { __typename?: 'CreateJobPayload', job?: { __typename?: 'Job', id: any } | null | undefined } | null | undefined };

export type UpdateJobMutationVariables = Exact<{
  input: UpdateJobInput;
}>;


export type UpdateJobMutation = { __typename?: 'Mutation', updateJob?: { __typename?: 'UpdateJobPayload', job?: { __typename?: 'Job', id: any } | null | undefined } | null | undefined };

export type GetCompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompaniesQuery = { __typename?: 'Query', companies?: { __typename?: 'CompaniesConnection', nodes: Array<{ __typename?: 'Company', id: any, url: string, title: string, _createdAt: any, _updatedAt: any, region?: { __typename?: 'Region', id: any, title: string } | null | undefined }> } | null | undefined };

export type GetJobTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobTagsQuery = { __typename?: 'Query', jobTags?: { __typename?: 'JobTagsConnection', nodes: Array<{ __typename?: 'JobTag', id: any, title: string, notes?: string | null | undefined }> } | null | undefined };

export type GetJobTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobTypesQuery = { __typename?: 'Query', jobTypes?: { __typename?: 'JobTypesConnection', nodes: Array<{ __typename?: 'JobType', id: any, title: string, notes?: string | null | undefined }> } | null | undefined };

export type GetJobsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetJobsQuery = { __typename?: 'Query', jobs?: { __typename?: 'JobsConnection', nodes: Array<{ __typename?: 'Job', id: any, title: string, startDate: any, endDate: any, externalUrl?: string | null | undefined, internalUrl?: string | null | undefined, _createdAt: any, _updatedAt: any, jobType?: { __typename?: 'JobType', id: any, title: string } | null | undefined, region?: { __typename?: 'Region', id: any, title: string } | null | undefined, company?: { __typename?: 'Company', id: any, title: string } | null | undefined }> } | null | undefined };

export type GetRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRegionsQuery = { __typename?: 'Query', regions?: { __typename?: 'RegionsConnection', nodes: Array<{ __typename?: 'Region', id: any, title: string }> } | null | undefined };
