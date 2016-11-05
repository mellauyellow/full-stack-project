```js
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy",
      first_name: "Melissa",
      last_name: "Lau",
      zip_code: 94110,
      profile_pic_url: 'assets/pic.jpg'
    },
    errors: {
      signUp: [],
      login: []
    }
  },
  regions: [
    {id: 1, name: "San Francisco", state: "CA", images: [
      {id: 2, url: "blah", region_rep: true},
      {id: 4, url: "test", region_rep: false}
    ]}
  ],
  neighborhoods: [
    {id: 21, name: "Pacific Heights", center_lat: 12.2353, center_long: 144.2334, cost_of_living: 4, region_id: 3, images: [], etc.},
    {id: 2, name: "Bayview", center_lat: 14.2373, center_long: 140.3334, cost_of_living: 1 region_id: 3, images: [], etc.},
  ],
  neighborhood: {
    id: 3,
    region_id: 6,
    center_lat: 37.7599373,
    center_long: -122.4343564,
    walk_score: 92,
    transit_score: 86,
    cost_of_living: high,
    architecture_type: urban
  },  
  images: {
    1: {
      id: 2,
      url: "www.test.com",
      user: {id: 2, first_name: "Jane", last_name: "Kim"},
      caption: "Dolores Park is the best!",
      region_rep: true,
      neighborhood_rep: true,
      created_at: Thu, 03 Nov 2016 23:26:53 UTC +00:00
    }
  },
  reviews: [
    {
      id: 1,
      user: {id: 4, first_name: "Greg", last_name: "Jones", profile_pic_url: "www.test.com", zip_code: 94024},
      body: "Love shopping at all the cute boutiques on Valencia Street.",
      good_for_families: false,
      good_for_singles: true,
      street_parking: false,
      good_for_pets: true,
      good_for_bikes: true,
      created_at: Thu, 03 Nov 2016 23:26:53 UTC +00:00
    }
  ],
  searchFilters: {
    good_for_bikes: true,
    good_for_pets: false,
    good_for_singles: true,
    good_for_families: true,
    street_parking: false,
    walk_score: high,
    transit_score: med,
    cost_of_living: null,
    architecture_type: urban,
    sf_neighborhood_match_id: 9
  }
}
```
