
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"admin" BOOLEAN,
"username" VARCHAR(255) UNIQUE NOT NULL,
"email" VARCHAR(255),
"password" VARCHAR(255) NOT NULL,
"address" VARCHAR(255)
);

CREATE TABLE "merch"(
"id" SERIAL PRIMARY KEY,
"img_url" VARCHAR,
"product_name" VARCHAR,
"product_type" VARCHAR,
"size" VARCHAR,
"price" INTEGER
);

CREATE TABLE "orders" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"product_id" INT REFERENCES "merch",
"quantity" INTEGER
);
