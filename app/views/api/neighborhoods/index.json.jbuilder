json.array! @neighborhoods do |neighborhood|
  json.id neighborhood.id
  json.name neighborhood.name
  json.center_lat neighborhood.center_lat
  json.center_long neighborhood.center_long
  json.walk_score neighborhood.walk_score
  json.transit_score neighborhood.transit_score
  json.cost_of_living neighborhood.cost_of_living
  json.housing_type neighborhood.housing_type
  json.architecture_type neighborhood.architecture_type
  json.region_id neighborhood.region_id
  json.images neighborhood.images do |image|
    json.id image.id
    json.url image.url
    json.region_rep image.neighborhood_rep
  end
end
