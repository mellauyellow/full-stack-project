## Component Hierarchy

**AppContainer**
- Auth
  + SessionForm
  + SignupForm
    - Errors
- RegionSearchDropdown (TBD)
- Footer (TBD)

**SplashContainer**
- SplashImage
- RegionIndex (TBD)
  + RegionItem (TBD)

**SearchResultsContainer**
- SearchForm
- SearchResultsIndex
  + SearchResultsItem
- Map

**NeighborhoodContainer**
- NeighborhoodImage
- NeighborhoodHeader
- TrendingWords
- NeighborhoodMap
- NeighborhoodReviewsIndex
  + NeighborhoodReviewItem

**ReviewFormContainer**
- ReviewFormHeader
- ReviewForm
- UploadPhotoForm

**UserProfileContainer**
- UserProfileHeader
- UserReviewIndex
  + UserReviewItem

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "AppContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/neighborhood/:neighborhoodId" | "NeighborhoodContainer" |
| "/neighborhood/:neighborhoodId/new-review" | "ReviewFormContainer" |
| "/user/:userId" | "UserProfileContainer" |
