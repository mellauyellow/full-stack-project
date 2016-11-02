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

ActiveRecord::Schema.define(version: 20161102211459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "neighborhoods", force: :cascade do |t|
    t.string   "name",              null: false
    t.float    "center_lat",        null: false
    t.float    "center_long",       null: false
    t.integer  "walk_score",        null: false
    t.integer  "transit_score",     null: false
    t.integer  "cost_of_living",    null: false
    t.string   "housing_type",      null: false
    t.string   "architecture_type"
    t.integer  "region_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "neighborhoods", ["region_id"], name: "index_neighborhoods_on_region_id", using: :btree

  create_table "regions", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "state",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "regions", ["name"], name: "index_regions_on_name", unique: true, using: :btree

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
