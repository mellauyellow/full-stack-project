json.extract! @region, :name, :state, :id, :center_lat, :center_long

json.neighborhoods @neighborhoods do |neighborhood|
  json.id neighborhood.id
  json.name neighborhood.name
  json.center_lat neighborhood.center_lat
  json.center_long neighborhood.center_long
  json.walk_score neighborhood.walk_score
  json.transit_score neighborhood.transit_score
  json.cost_of_living neighborhood.cost_of_living
  json.housing_type neighborhood.housing_type
end

json.images @images do |image|
  json.url image.url
  json.neighborhood_id image.neighborhood_id
end
