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
    {id: 1, name: "San Francisco", state: "CA", images: []}
  ],
  currentNeighborhood: {
    id: 3,
    region_id: 6,
    center_lat: 37.7599373,
    center_long: -122.4343564,
    walk_score: 92,
    transit_score: 86,
    cost_of_living: high,
    architecture_type: urban,
    images: {
      1: {
        id: 2,
        user_id: 4,
        caption: "Dolores Park is the best!",
        region_rep: true,
        neighborhood_rep: true
      }
    },
    reviews: {
      1: {
        id: 1,
        user_id: 3,
        title: "Hipsters abound",
        body: "Can't walk around the Mission without hitting a man with a full beard and cuffed raw denim.",
        good_for_families: false,
        good_for_singles: true,
        street_parking: false,
        good_for_pets: true,
        good_for_bikes: true
      }
    }
  }
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
