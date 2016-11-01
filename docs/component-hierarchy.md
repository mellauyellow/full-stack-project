## Component Hierarchy

**AppContainer**
- Header
- LoginForm
- RegionSearchDropdown
- Footer


**HomeContainer**
- HomepageImage
- RegionIndex
  + RegionItem

**AuthFormContainer**
- SignupForm
  + Errors

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
| "/home" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/search-results" | "SearchResultsContainer" |
| "/neighborhood/:neighborhoodId" | "NeighborhoodContainer" |
| "/neighborhood/:neighborhoodId/new-review" | "ReviewFormContainer" |
| "/user/:userId" | "UserProfileContainer" |
