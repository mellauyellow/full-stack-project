json.id @neighborhood.id
json.name @neighborhood.name
json.center_lat @neighborhood.center_lat
json.center_long @neighborhood.center_long
json.walk_score @neighborhood.walk_score
json.transit_score @neighborhood.transit_score
json.cost_of_living @neighborhood.cost_of_living
json.housing_type @neighborhood.housing_type
json.architecture_type @neighborhood.architecture_type
json.region_id @neighborhood.region_id

json.images @neighborhood.images do |image|
  json.set! image.id do
    json.extract! image, :id, :user_id, :caption, :region_rep, :neighborhood_rep
  end
end

json.reviews @neighborhood.reviews do |review|
  json.set! review.id do
    json.extract! review, :id, :user_id, :body, :good_for_pets, :good_for_bikes, :good_for_singles, :good_for_families, :street_parking
  end
end
