json.array! @regions do |region|
  json.id region.id
  json.name region.name
  json.state region.state
end
