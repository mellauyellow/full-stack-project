# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161111051942) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "images", force: :cascade do |t|
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.string   "caption"
    t.integer  "user_id",                               null: false
    t.integer  "review_id"
    t.boolean  "region_rep"
    t.boolean  "neighborhood_rep"
    t.integer  "neighborhood_id"
    t.string   "url",              default: "test.com", null: false
  end

  add_index "images", ["user_id"], name: "index_images_on_user_id", using: :btree

  create_table "neighborhoods", force: :cascade do |t|
    t.string   "name",              null: false
    t.float    "center_lat",        null: false
    t.float    "center_long",       null: false
    t.integer  "walk_score",        null: false
    t.integer  "transit_score",     null: false
    t.integer  "cost_of_living",    null: false
    t.string   "housing_type",      null: false
    t.string   "architecture_type"
    t.integer  "region_id",         null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "neighborhoods", ["region_id"], name: "index_neighborhoods_on_region_id", using: :btree

  create_table "regions", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "state",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.float    "center_lat"
    t.float    "center_long"
  end

  add_index "regions", ["name"], name: "index_regions_on_name", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "body",              null: false
    t.boolean  "good_for_pets"
    t.boolean  "good_for_bikes"
    t.boolean  "good_for_singles"
    t.boolean  "good_for_families"
    t.boolean  "street_parking"
    t.integer  "user_id",           null: false
    t.integer  "neighborhood_id",   null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "reviews", ["neighborhood_id"], name: "index_reviews_on_neighborhood_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.integer  "zip_code"
    t.string   "profile_pic_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
