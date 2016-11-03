json.array! @regions do |region|
  json.id region.id
  json.name region.name
  json.state region.state
  json.images region.images do |image|
    json.id image.id
    json.url image.url
    json.region_rep image.region_rep
  end
end
