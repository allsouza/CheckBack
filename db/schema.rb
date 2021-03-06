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

ActiveRecord::Schema.define(version: 2020_12_28_160823) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "address"
    t.string "coordinates"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location"
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "business_id"
    t.string "position", null: false
    t.string "employment_type"
    t.float "wage", null: false
    t.string "gender"
    t.string "orientation"
    t.string "race"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "start_date"
    t.string "end_date"
    t.text "notes"
    t.string "pay_frequency", null: false
    t.boolean "tips"
    t.float "avg_tips"
    t.integer "satisfaction"
    t.index ["position"], name: "index_reviews_on_position"
    t.index ["wage"], name: "index_reviews_on_wage"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.boolean "admin", null: false
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
