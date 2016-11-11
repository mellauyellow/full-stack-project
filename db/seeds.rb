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
                    profile_pic_url: Faker::Avatar.image("test2", "50x50"))

user3 = User.create(
                    username: "test3",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test3", "50x50"))

user4 = User.create(
                    username: "test4",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test4", "50x50"))

user5 = User.create(
                    username: "test5",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test5", "50x50"))

user6 = User.create(
                    username: "test6",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test6", "50x50"))

user7 = User.create(
                    username: "test7",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test7", "50x50"))

user8 = User.create(
                    username: "test8",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test8", "50x50"))

user9 = User.create(
                    username: "test9",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test9", "50x50"))

user10 = User.create(
                    username: "test10",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test10", "50x50"))

user11 = User.create(
                    username: "test11",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test11", "50x50"))

user12 = User.create(
                    username: "test12",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test12", "50x50"))

user13 = User.create(
                    username: "test13",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test13", "50x50"))

user14 = User.create(
                    username: "test14",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test14", "50x50"))

user15 = User.create(
                    username: "test15",
                    password: "password",
                    email: Faker::Internet.email,
                    first_name: Faker::Name.first_name,
                    last_name: Faker::Name.last_name,
                    zip_code: Faker::Address.zip,
                    profile_pic_url: Faker::Avatar.image("test15", "50x50"))

region1 = Region.create(name: "San Francisco", state: "CA", center_lat: 37.7575435, center_long: -122.4468722)
region2 = Region.create(name: "New York", state: "NY", center_lat: 40.741218, center_long: -73.984222)
region3 = Region.create(name: "Los Angeles", state: "CA", center_lat: 34.0366842, center_long: -118.3829355)
region4 = Region.create(name: "Chicago", state: "IL", center_lat: 41.896801, center_long: -87.659404)
# region3 = Region.create(name: "Austin", state: "TX", center_lat: 30.289084, center_long: -97.7726713)
# region4 = Region.create(name: "Seattle", state: "WA", center_lat: 47.6022637, center_long: -122.3434664)
# region7 = Region.create(name: "Nashville", state: "TN", center_lat: 36.176338, center_long: -86.7907742)
# region8 = Region.create(name: "Philadelphia", state: "PA", center_lat: 40.0015126, center_long: -75.1448206)

neighborhood1 = Neighborhood.create(name: "Mission District", region_id: 1, center_lat: 37.7591569, center_long: -122.416332, walk_score: 97, transit_score: 87, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood2 = Neighborhood.create(name: "Noe Valley", region_id: 1, center_lat: 37.7489874, center_long: -122.4341341, walk_score: 92, transit_score: 73, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood3 = Neighborhood.create(name: "Bernal Heights", region_id: 1, center_lat: 37.7398082, center_long: -122.4172568, walk_score: 86, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood4 = Neighborhood.create(name: "Bayview", region_id: 1, center_lat: 37.7284107, center_long: -122.3857822, walk_score: 80, transit_score: 68, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood5 = Neighborhood.create(name: "Castro", region_id: 1, center_lat: 37.7616423, center_long: -122.4356956, walk_score: 98, transit_score: 97, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood6 = Neighborhood.create(name: "Dogpatch", region_id: 1, center_lat: 37.7575294, center_long: -122.3891732, walk_score: 87, transit_score: 81, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood7 = Neighborhood.create(name: "Excelsior", region_id: 1, center_lat: 37.7238272, center_long: -122.427812, walk_score: 80, transit_score: 79, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood8 = Neighborhood.create(name: "Glen Park", region_id: 1, center_lat: 37.7377737, center_long: -122.4321039, walk_score: 76, transit_score: 80, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood9 = Neighborhood.create(name: "Hayes Valley", region_id: 1, center_lat: 37.7744544, center_long: -122.4259646, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood10 = Neighborhood.create(name: "Nob Hill", region_id: 1, center_lat: 37.7887112, center_long: -122.4134862, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood11 = Neighborhood.create(name: "NoPa", region_id: 1, center_lat: 37.7762828, center_long: -122.4421798, walk_score: 96, transit_score: 90, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood12 = Neighborhood.create(name: "North Beach", region_id: 1, center_lat: 37.8041005, center_long: -122.4069749, walk_score: 96, transit_score: 92, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood13 = Neighborhood.create(name: "Potrero Hill", region_id: 1, center_lat: 37.7583326, center_long: -122.4004447, walk_score: 86, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood14 = Neighborhood.create(name: "Richmond District", region_id: 1, center_lat: 37.7823264, center_long: -122.4795214, walk_score: 92, transit_score: 77, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood15 = Neighborhood.create(name: "Sunset District", region_id: 1, center_lat: 37.7541013, center_long: -122.4773327, walk_score: 84, transit_score: 65, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood16 = Neighborhood.create(name: "SoMa", region_id: 1, center_lat: 37.7797968, center_long: -122.4016887, walk_score: 96, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood17 = Neighborhood.create(name: "Tenderloin", region_id: 1, center_lat: 37.7835901, center_long: -122.4136747, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood18 = Neighborhood.create(name: "Battery Park City", region_id: 2, center_lat: 40.7116212, center_long: -74.0175696, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood19 = Neighborhood.create(name: "Boerum Hill", region_id: 2, center_lat: 40.6854255, center_long: -73.9852971, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood20 = Neighborhood.create(name: "Brooklyn Heights", region_id: 2, center_lat: 40.6962227, center_long: -73.9937568, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood21 = Neighborhood.create(name: "Carroll Gardens", region_id: 2, center_lat: 40.678993, center_long: -73.9990574, walk_score: 97, transit_score: 85, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood22 = Neighborhood.create(name: "Chelsea", region_id: 2, center_lat: 40.74606, center_long: -74.0004516, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood23 = Neighborhood.create(name: "Chinatown", region_id: 2, center_lat: 40.715691, center_long: -73.9977178, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood24 = Neighborhood.create(name: "Cobble Hill", region_id: 2, center_lat: 40.6874698, center_long: -73.9974395, walk_score: 97, transit_score: 98, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood25 = Neighborhood.create(name: "Dumbo", region_id: 2, center_lat: 40.7032123, center_long: -73.9889529, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood26 = Neighborhood.create(name: "East Harlem", region_id: 2, center_lat: 40.798485, center_long: -73.9407467, walk_score: 96, transit_score: 99, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood27 = Neighborhood.create(name: "East Village", region_id: 2, center_lat: 40.7246975, center_long: -73.9821171, walk_score: 97, transit_score: 96, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood28 = Neighborhood.create(name: "Garment District", region_id: 2, center_lat: 40.7534095, center_long: -73.9907112, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood29 = Neighborhood.create(name: "Financial District", region_id: 2, center_lat: 40.7073624, center_long: -74.0120826, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood30 = Neighborhood.create(name: "Flatiron", region_id: 2, center_lat: 40.740945, center_long: -73.9890361, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood31 = Neighborhood.create(name: "Fort Greene", region_id: 2, center_lat: 40.6892264, center_long: -73.9744028, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood32 = Neighborhood.create(name: "Gramercy", region_id: 2, center_lat: 40.7354961, center_long: -73.9848746, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood33 = Neighborhood.create(name: "Greenpoint", region_id: 2, center_lat: 40.7292059, center_long: -73.9502365, walk_score: 97, transit_score: 68, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood34 = Neighborhood.create(name: "Greenwich Village", region_id: 2, center_lat: 40.733193, center_long: -74.0027154, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood35 = Neighborhood.create(name: "Harlem", region_id: 2, center_lat: 40.8143645, center_long: -73.9502774, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood36 = Neighborhood.create(name: "Hell's Kitchen", region_id: 2, center_lat: 40.7623636, center_long: -73.9950965, walk_score: 98, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood37 = Neighborhood.create(name: "Little Italy", region_id: 2, center_lat: 40.7190824, center_long: -73.9980744, walk_score: 100, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood38 = Neighborhood.create(name: "Long Island City", region_id: 2, center_lat: 40.7453173, center_long: -73.9484447, walk_score: 95, transit_score: 86, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood39 = Neighborhood.create(name: "Lower East Side", region_id: 2, center_lat: 40.71526, center_long: -73.9843381, walk_score: 95, transit_score: 92, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood40 = Neighborhood.create(name: "Midtown East", region_id: 2, center_lat: 40.7552577, center_long: -73.9715993, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood41 = Neighborhood.create(name: "Murray Hill", region_id: 2, center_lat: 40.7478582, center_long: -73.9767517, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood42 = Neighborhood.create(name: "Park Slope", region_id: 2, center_lat: 40.6703893, center_long: -73.9833076, walk_score: 97, transit_score: 96, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood43 = Neighborhood.create(name: "Prospect Heights", region_id: 2, center_lat: 40.6760493, center_long: -73.9673423, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood44 = Neighborhood.create(name: "Soho", region_id: 2, center_lat: 40.7233845, center_long: -74.0016342, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood45 = Neighborhood.create(name: "Tribeca", region_id: 2, center_lat: 40.7183508, center_long: -74.0095644, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood46 = Neighborhood.create(name: "Upper East Side", region_id: 2, center_lat: 40.7721532, center_long: -73.9601803, walk_score: 98, transit_score: 99, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood47 = Neighborhood.create(name: "Upper West Side", region_id: 2, center_lat: 40.7859319, center_long: -73.9768315, walk_score: 96, transit_score: 99, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood48 = Neighborhood.create(name: "West Village", region_id: 2, center_lat: 40.7341891, center_long: -74.0061137, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood49 = Neighborhood.create(name: "Williamsburg", region_id: 2, center_lat: 40.7099273, center_long: -73.9556178, walk_score: 96, transit_score: 92, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood50 = Neighborhood.create(name: "Bel Air", region_id: 3, center_lat: 34.0959419, center_long: -118.4449408, walk_score: 7, transit_score: 0, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood51 = Neighborhood.create(name: "Beverly Hills", region_id: 3, center_lat: 34.0739054, center_long: -118.4018538, walk_score: 77, transit_score: 60, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood52 = Neighborhood.create(name: "Brentwood", region_id: 3, center_lat: 34.061682, center_long: -118.4810156, walk_score: 52, transit_score: 44, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood53 = Neighborhood.create(name: "Downtown Los Angeles", region_id: 3, center_lat: 34.041575, center_long: -118.2456191, walk_score: 94, transit_score: 98, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood54 = Neighborhood.create(name: "Echo Park", region_id: 3, center_lat: 34.0818711, center_long: -118.2493022, walk_score: 38, transit_score: 47, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood55 = Neighborhood.create(name: "Hancock Park-Wilshire", region_id: 3, center_lat: 34.0703458, center_long: -118.3303058, walk_score: 27, transit_score: 55, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood56 = Neighborhood.create(name: "Silver Lake", region_id: 3, center_lat: 34.0879721, center_long: -118.2709071, walk_score: 76, transit_score: 54, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood57 = Neighborhood.create(name: "Pacific Palisades", region_id: 3, center_lat: 34.0388212, center_long: -118.5287892, walk_score: 34, transit_score: 33, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood58 = Neighborhood.create(name: "Santa Monica", region_id: 3, center_lat: 34.0190121, center_long: -118.4868586, walk_score: 82, transit_score: 60, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood59 = Neighborhood.create(name: "Venice", region_id: 3, center_lat: 33.9863756, center_long: -118.462359, walk_score: 81, transit_score: 50, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood60 = Neighborhood.create(name: "West Hollywood", region_id: 3, center_lat: 34.0910676, center_long: -118.3689684, walk_score: 91, transit_score: 61, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood61 = Neighborhood.create(name: "Albany Park", region_id: 4, center_lat: 41.9673674, center_long: -87.7195797, walk_score: 87, transit_score: 62, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood62 = Neighborhood.create(name: "Avondale", region_id: 4, center_lat: 41.9396363, center_long: -87.7052193, walk_score: 83, transit_score: 68, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood63 = Neighborhood.create(name: "Beverly", region_id: 4, center_lat: 41.715556, center_long: -87.6752813, walk_score: 65, transit_score: 50, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood64 = Neighborhood.create(name: "Bridgeport", region_id: 4, center_lat: 41.8360244, center_long: -87.6483937, walk_score: 82, transit_score: 60, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood65 = Neighborhood.create(name: "Edgewater", region_id: 4, center_lat: 41.9867218, center_long: -87.6637694, walk_score: 89, transit_score: 72, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood66 = Neighborhood.create(name: "Chinatown", region_id: 4, center_lat: 41.8506626, center_long: -87.6355027, walk_score: 96, transit_score: 79, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood67 = Neighborhood.create(name: "Gold Coast", region_id: 4, center_lat: 41.9058853, center_long: -87.6277673, walk_score: 96, transit_score: 88, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood68 = Neighborhood.create(name: "Humboldt Park", region_id: 4, center_lat: 41.8987633, center_long: -87.7215143, walk_score: 83, transit_score: 66, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood69 = Neighborhood.create(name: "Irving Park", region_id: 4, center_lat: 41.9552966, center_long: -87.7198867, walk_score: 85, transit_score: 66, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood70 = Neighborhood.create(name: "Jefferson Park", region_id: 4, center_lat: 41.9830771, center_long: -87.7703439, walk_score: 71, transit_score: 64, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood71 = Neighborhood.create(name: "Kenwood", region_id: 4, center_lat: 41.8087468, center_long: -87.5953676, walk_score: 78, transit_score: 66, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood72 = Neighborhood.create(name: "Hyde Park", region_id: 4, center_lat: 41.7943606, center_long: -87.592288, walk_score: 85, transit_score: 67, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood73 = Neighborhood.create(name: "Lincoln Park", region_id: 4, center_lat: 41.9210002, center_long: -87.6486313, walk_score: 94, transit_score: 80, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood74 = Neighborhood.create(name: "Little Italy & University Village", region_id: 4, center_lat: 41.8672749, center_long: -87.6560069, walk_score: 91, transit_score: 71, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood75 = Neighborhood.create(name: "Little Village", region_id: 4, center_lat: 41.8438193, center_long: -87.7136695, walk_score: 81, transit_score: 61, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood76 = Neighborhood.create(name: "Loop", region_id: 4, center_lat: 41.8834874, center_long: -87.6294532, walk_score: 99, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood77 = Neighborhood.create(name: "North Center", region_id: 4, center_lat: 41.9454828, center_long: -87.6851417, walk_score: 87, transit_score: 66, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood78 = Neighborhood.create(name: "North Park", region_id: 4, center_lat: 41.9819242, center_long: -87.7267927, walk_score: 74, transit_score: 54, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood79 = Neighborhood.create(name: "Portage Park", region_id: 4, center_lat: 41.9524937, center_long: -87.7629045, walk_score: 74, transit_score: 59, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood80 = Neighborhood.create(name: "River North", region_id: 4, center_lat: 41.8913357, center_long: -87.6332509, walk_score: 97, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood81 = Neighborhood.create(name: "Rogers Park", region_id: 4, center_lat: 42.0096685, center_long: -87.6694759, walk_score: 83, transit_score: 73, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood82 = Neighborhood.create(name: "South Shore", region_id: 4, center_lat: 41.7622388, center_long: -87.5708736, walk_score: 76, transit_score: 66, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood83 = Neighborhood.create(name: "Uptown", region_id: 4, center_lat: 41.9659147, center_long: -87.6556846, walk_score: 91, transit_score: 79, housing_type: "blank", architecture_type: "blank", cost_of_living: 2)
neighborhood84 = Neighborhood.create(name: "West Loop", region_id: 4, center_lat: 41.8835588, center_long: -87.651533, walk_score: 96, transit_score: 100, housing_type: "blank", architecture_type: "blank", cost_of_living: 4)
neighborhood85 = Neighborhood.create(name: "West Ridge", region_id: 4, center_lat: 42.0010525, center_long: -87.6945613, walk_score: 82, transit_score: 55, housing_type: "blank", architecture_type: "blank", cost_of_living: 1)
neighborhood86 = Neighborhood.create(name: "West Town", region_id: 4, center_lat: 41.9014388, center_long: -87.6746597, walk_score: 91, transit_score: 74, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)
neighborhood87 = Neighborhood.create(name: "Wicker Park", region_id: 4, center_lat: 41.9082509, center_long: -87.677647, walk_score: 94, transit_score: 74, housing_type: "blank", architecture_type: "blank", cost_of_living: 3)

image1 = Image.create(caption: "Dolores Park on a warm weekend day", user_id: 5, review_id: 1, region_rep: false, neighborhood_rep: true, neighborhood_id: 1, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213159/dolores_park_torbakhopper.0_g0jkey.jpg")
image2 = Image.create(caption: "South Van Ness", user_id: 5, review_id: 1, region_rep: false, neighborhood_rep: false, neighborhood_id: 1, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213189/mission-district-san-francisco-hipster_gbk8jb.jpg")
image3 = Image.create(caption: "Cute shops on 24th!", user_id: 8, review_id: 2, region_rep: false, neighborhood_rep: true, neighborhood_id: 2, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213357/post-65229_uhbwl0.png")
image4 = Image.create(caption: "My friends call this the Green Palace of Noe", user_id: 1, region_rep: false, neighborhood_rep: false, neighborhood_id: 2, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213357/post-65164_was7em.png")
image5 = Image.create(caption: "Literally.", user_id: 8, review_id: 2, region_rep: false, neighborhood_rep: false, neighborhood_id: 2, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213356/Noe_Valley_San_Francisco_2_ovboeo.jpg")
image6 = Image.create(caption: "<3", user_id: 9, review_id: 3, region_rep: false, neighborhood_rep: true, neighborhood_id: 1, url: "http://res.cloudinary.com/mellauyellow/image/upload/c_scale,w_1000/v1478213360/100_2186_ykqnlt.jpg")
image7 = Image.create(caption: "The murals are one of my fave things about the Mission", user_id: 9, review_id: 3, region_rep: false, neighborhood_rep: false, neighborhood_id: 1, url: "http://res.cloudinary.com/mellauyellow/image/upload/v1478213353/14hours600_wum1ua.jpg")

review1 = Review.create(body: "I've lived in the Mission for 2 years and I can honestly say it's one of the best places I've lived in my life. So convenient to everything - bars, restaurants, BART, etc. Highly recommended for foodies as well.",
                        good_for_pets: true,
                        good_for_bikes: true,
                        good_for_singles: true,
                        good_for_families: false,
                        street_parking: false,
                        user_id: 5,
                        neighborhood_id: 1,
                        created_at: Faker::Date.between(2.years.ago, Date.today))
review2 = Review.create(body: "Noe is the nice compromise for people who are looking to still be walking distance to stores/bars/restaurants, but want a little peace and quiet on their street. It's so dead at night that I can hear my footsteps echo in the streets when I walk. I love that, but you may not.",
                        good_for_pets: true,
                        good_for_bikes: false,
                        good_for_singles: false,
                        good_for_families: true,
                        street_parking: true,
                        user_id: 8,
                        neighborhood_id: 2,
                        created_at: Faker::Date.between(2.years.ago, Date.today))
review3 = Review.create(body: "The Mission used to be full of culture, but over the last few years it's become overrun by rich techies who live their lives through mobile apps. It's gotten so expensive that my family can no longer afford to live here. Good riddance!",
                        good_for_pets: true,
                        good_for_bikes: true,
                        good_for_singles: true,
                        good_for_families: false,
                        street_parking: false,
                        user_id: 9,
                        neighborhood_id: 1,
                        created_at: Faker::Date.between(2.years.ago, Date.today))
