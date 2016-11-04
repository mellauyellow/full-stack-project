@images.each do |image|
  json.set! image.id do
    json.extract! image, :id, :url, :caption, :region_rep, :neighborhood_rep, :created_at
    json.user do image.user
      json.id image.user.id
      json.first_name image.user.first_name
      json.last_name image.user.last_name
    end
  end
end
