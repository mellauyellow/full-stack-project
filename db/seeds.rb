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
region6 = Region.create(name: "Los Angeles", state: "CA")
region7 = Region.create(name: "Nashville", state: "TN")
region8 = Region.create(name: "Philadelphia", state: "PA")

neighborhood1 = Neighborhood.create(name: "Mission District", region_id: 1, center_lat: 37.7599033, center_long: -122.4343993, walk_score: 97, transit_score: 87, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood2 = Neighborhood.create(name: "Noe Valley", region_id: 1, center_lat: 37.7490722, center_long: -122.4432321, walk_score: 92, transit_score: 73, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood3 = Neighborhood.create(name: "Bernal Heights", region_id: 1, center_lat: 37.740437, center_long: -122.4283289, walk_score: 86, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood4 = Neighborhood.create(name: "Bayview", region_id: 1, center_lat: 37.7303492, center_long: -122.4000297, walk_score: 80, transit_score: 68, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood5 = Neighborhood.create(name: "Castro", region_id: 1, center_lat: 37.7625414, center_long: -122.4449224, walk_score: 98, transit_score: 97, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood6 = Neighborhood.create(name: "Dogpatch", region_id: 1, center_lat: 37.757241, center_long: -122.3983142, walk_score: 87, transit_score: 81, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood7 = Neighborhood.create(name: "Excelsior", region_id: 1, center_lat: 37.7241667, center_long: -122.438455, walk_score: 80, transit_score: 79, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood8 = Neighborhood.create(name: "Glen Park", region_id: 1, center_lat: 37.7379182, center_long: -122.4364812, walk_score: 76, transit_score: 80, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood9 = Neighborhood.create(name: "Hayes Valley", region_id: 1, center_lat: 37.7746155, center_long: -122.4304492, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood10 = Neighborhood.create(name: "Nob Hill", region_id: 1, center_lat: 37.7929521, center_long: -122.4204894, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood11 = Neighborhood.create(name: "NoPa", region_id: 1, center_lat: 37.7763252, center_long: -122.4467289, walk_score: 96, transit_score: 90, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood12 = Neighborhood.create(name: "North Beach", region_id: 1, center_lat: 37.8047288, center_long: -122.4169511, walk_score: 99, transit_score: 97, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood13 = Neighborhood.create(name: "Potrero Hill", region_id: 1, center_lat: 37.7582827, center_long: -122.4013887, walk_score: 86, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood14 = Neighborhood.create(name: "Richmond District", region_id: 1, center_lat: 37.7801934, center_long: -122.4966872, walk_score: 92, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood15 = Neighborhood.create(name: "Sunset District", region_id: 1, center_lat: 37.7500719, center_long: -122.5015752, walk_score: 84, transit_score: 65, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood16 = Neighborhood.create(name: "SoMa", region_id: 1, center_lat: 37.7808483, center_long: -122.4199278, walk_score: 96, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood17 = Neighborhood.create(name: "Tenderloin", region_id: 1, center_lat: 37.7839462, center_long: -122.4218072, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood18 = Neighborhood.create(name: "Battery Park City", region_id: 1, center_lat: 40.7116215, center_long: -74.0160889, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood19 = Neighborhood.create(name: "Boerum Hill", region_id: 1, center_lat: 40.685499, center_long: -73.9905113, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood20 = Neighborhood.create(name: "Brooklyn Heights", region_id: 1, center_lat: 40.6963691, center_long: -74.0040779, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood21 = Neighborhood.create(name: "Carroll Gardens", region_id: 1, center_lat: 40.6792275, center_long: -74.0050316, walk_score: 97, transit_score: 85, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood22 = Neighborhood.create(name: "Chelsea", region_id: 1, center_lat: 40.7472142, center_long: -74.007082, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood23 = Neighborhood.create(name: "Chinatown", region_id: 1, center_lat: 40.7160897, center_long: -74.0012583, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood24 = Neighborhood.create(name: "Cobble Hill", region_id: 1, center_lat: 40.687657, center_long: -74.0009049, walk_score: 97, transit_score: 98, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood25 = Neighborhood.create(name: "Dumbo", region_id: 1, center_lat: 40.7035132, center_long: -73.9939204, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood26 = Neighborhood.create(name: "East Harlem", region_id: 1, center_lat: 40.8004667, center_long: -73.9597582, walk_score: 96, transit_score: 99, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood27 = Neighborhood.create(name: "East Village", region_id: 1, center_lat: 40.7265994, center_long: -73.9909083, walk_score: 97, transit_score: 96, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood28 = Neighborhood.create(name: "Garment District", region_id: 1, center_lat: 40.7541165, center_long: -73.9950564, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood29 = Neighborhood.create(name: "Financial District", region_id: 1, center_lat: 40.708831, center_long: -74.0166889, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood30 = Neighborhood.create(name: "Flatiron", region_id: 1, center_lat: 40.7415872, center_long: -73.9931452, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
