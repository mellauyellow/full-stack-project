json.extract! @review, :id, :body, :good_for_pets, :good_for_bikes, :good_for_singles, :good_for_families, :street_parking, :created_at, :neighborhood_id
json.user do @review.user
  json.id @review.user.id
  json.first_name @review.user.first_name
  json.last_name @review.user.last_name
  json.profile_pic_url @review.user.profile_pic_url
  json.zip_code @review.user.zip_code
end
