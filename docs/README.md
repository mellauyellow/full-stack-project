# Onward

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://fsp-onward.herokuapp.com/
[trello]: https://trello.com/b/Frc8vDhO/onward

## Minimum Viable Product

Onward is a web application inspired by Yelp and Airbnb, targeted at folks
who are relocating to a new city and need help finding a neighborhood to
live in.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data
and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A new production README, replacing this README
- [ ] Neighborhood Page
- [ ] Search/filters
- [ ] Reviews
- [ ] Map
- [ ] **Bonus:** Trending Words on Neighborhood Pages, User Profile, User
Favorites (neighborhoods), Marking Reviews as 'useful/funny/cool'

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Notes Model, API, and components (2 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API.

### Phase 3: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 4: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 5: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

### Phase 6: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
