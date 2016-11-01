# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
first_name      | string    | not null
last_name       | string    | not null
zip_code        | integer   |
profile_pic_url | string    |
session_token   | string    | not null, indexed, unique

## regions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
state           | string    | not null

## neighborhoods
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
name               | string    | not null
center_lat         | float     | not null
center_long        | float     | not null
walk_score         | integer   | not null
transit_score      | integer   | not null
cost_of_living     | integer   | not null
housing_type       | string    | not null
architecture_type  | string   |
region_id          | integer   | not null, foreign_key (references regions), indexed

## images
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
url              | string    | not null, indexed, unique
review_id        | integer   | not null, foreign_key (references reviews), indexed
region_rep       | boolean   | not null
neighborhood_rep | boolean   | not null

## reviews
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    | not null
body             | text      | not null
good_for_families| boolean   |
good_for_singles | boolean   |
street_parking   | boolean   |
good_for_pets    | boolean   |
good_for_bikes   | boolean   |
user_id          | integer   | not null, foreign_key (references users), indexed
neighborhood_id  | integer   | not null, foreign_key (references neighborhoods), indexed
