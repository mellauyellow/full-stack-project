# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(
                    username: "guest",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478124471/stock-photo-46145816-beauty-in-profile_njmoxw.jpg")

user2 = User.create(
                    username: "test2",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test2", "35x35"))

user3 = User.create(
                    username: "test3",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test3", "35x35"))

user4 = User.create(
                    username: "test4",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test4", "35x35"))

user5 = User.create(
                    username: "test5",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test5", "35x35"))

user6 = User.create(
                    username: "test6",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test6", "35x35"))

user7 = User.create(
                    username: "test7",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test7", "35x35"))

user8 = User.create(
                    username: "test8",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test8", "35x35"))

user9 = User.create(
                    username: "test9",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test9", "35x35"))

user10 = User.create(
                    username: "test10",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test10", "35x35"))

user11 = User.create(
                    username: "test11",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test11", "35x35"))

user12 = User.create(
                    username: "test12",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test12", "35x35"))

user13 = User.create(
                    username: "test13",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test13", "35x35"))

user14 = User.create(
                    username: "test14",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test14", "35x35"))

user15 = User.create(
                    username: "test15",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test15", "35x35"))

region1 = Region.create(name: "San Francisco", state: "CA")
region2 = Region.create(name: "New York", state: "NY")
region3 = Region.create(name: "Austin", state: "TX")
region4 = Region.create(name: "Seattle", state: "WA")
region5 = Region.create(name: "Chicago", state: "IL")
