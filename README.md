## API Overview

This API offers comprehensive and up-to-date information on movies, TV shows, and actors. It includes details such as YouTube trailer URLs, awards, full biographies, and more. The database covers over 9 million titles (movies, series, episodes) and 11 million actors, crew, and cast members.

Support the developers: https://www.buymeacoffee.com/SAdrian13


## Version

v1.0


## Available Endpoints

- `/titles`  
  Retrieve multiple titles with optional filters and sorting.

- `/titles/{id}`  
  Get detailed information about a specific title by IMDb ID.

- `/titles/{id}/ratings`  
  Fetch rating and vote count for a given title.

- `/titles/series/{id}`  
  List all episodes for a series by IMDb ID.

- `/titles/seasons/{id}`  
  Get the number of seasons in a series.

- `/titles/series/{id}/{season}`  
  Retrieve episodes of a specific season in a series.

- `/titles/episode/{id}`  
  Get details about a specific episode.

- `/titles/x/upcoming`  
  List upcoming titles with optional filters.

- `/titles/search/keyword/{keyword}`  
  Search titles by keyword.

- `/titles/search/title/{title}`  
  Search titles by exact or partial title match.

- `/titles/search/akas/{aka}`  
  Search titles by exact alternate title (aka).

- `/actors`  
  Retrieve a list of actors with optional filters.

- `/actors/{id}`  
  Get details about a specific actor by IMDb ID.

- `/title/utils/titleType`  
  Get available title types.

- `/title/utils/genres`  
  Get available genres.

- `/title/utils/lists`  
  Get predefined IMDb-based title lists.

  ---

  ## Request and Response Format

- **Request Structure:**  
  Most endpoints support optional query parameters such as `limit`, `page`, `info`, `titleType`, `genre`, `year`, `sort`, etc.  
  Example request to fetch multiple titles with filters:  

- **Response Structure:**  
Responses are JSON objects containing a `results` array with the requested data objects. For paginated endpoints, additional keys like `page`, `next`, and `entries` are included.  

Example response snippet for `/titles`:  
```json
{
  "page": 1,
  "next": 2,
  "entries": 10,
  "results": [
    {
      "id": "tt1234567",
      "titleText": "Example Movie",
      "primaryImage": "https://image.url",
      "titleType": "movie",
      "releaseDate": "2023-05-10",
      "genres": ["Drama", "Thriller"],
      "runtime": 120,
      "plot": "An example movie plot summary.",
      "ratingsSummary": {
        "averageRating": 7.5,
        "numVotes": 1500
      }
    }
  ]
}
```

  ---
## Authentication
Currently, the API does not specify explicit authentication requirements in the documentation provided. However, typical methods to authenticate API requests include:

**API Key**:
Including an API key in request headers or as a query parameter, for example:


```
GET /titles
Headers: {
  "Authorization": "Bearer YOUR_API_KEY"
}
```
or
```
GET /titles?api_key=YOUR_API_KEY
```
Other methods may include OAuth tokens or client credentials, but none are specified here.

Please check the official API provider’s documentation or contact the developer for specific authentication details.

---
## Error Handling
The API may return standard HTTP error codes indicating issues with the request or server. Common errors include:

- **400 Bad Request**
Returned when the request has invalid parameters or malformed syntax.
How to handle: Validate all query parameters and path variables before making requests.

- **401 Unauthorized**
Returned when authentication credentials are missing or invalid.
How to handle: Ensure you include valid API keys or tokens if required.

- **403 Forbidden**
Returned when access is denied due to insufficient permissions.
How to handle: Verify your credentials and permissions with the API provider.

- **404 Not Found**
Returned when the requested resource (e.g., title or actor by ID) does not exist.
How to handle: Handle gracefully by checking if resource exists and informing users accordingly.

- **429 Too Many Requests**
Returned when request rate limits are exceeded.
How to handle: Implement exponential backoff and retry logic after waiting.

- **500 Internal Server Error**
Returned when the API server encounters an unexpected error.
How to handle: Retry the request after some time; if persistent, contact support.

In your code, always check HTTP response status codes and handle errors appropriately to provide good user experience and robustness.

---

## Usage Limits and Best Practices

### Usage Limits

- **Rate Limits:**  
  Although not explicitly stated in the documentation, most public APIs enforce rate limits to prevent abuse. Typical limits may include a maximum number of requests per minute or hour.  
  If you receive HTTP status code **429 Too Many Requests**, you have exceeded the allowed request rate.

- **Request Size Limits:**  
  Keep query parameters within reasonable size limits. Very large requests may be rejected or cause performance issues.

- **Pagination:**  
  Use pagination parameters such as `limit` and `page` to manage large data sets efficiently. The API supports a maximum of 50 items per page.

---

### Best Practices

- **Use Filtering and Sorting:**  
  Apply filters (`genre`, `year`, `titleType`, etc.) and sorting options to retrieve only the data you need and reduce response size.

- **Cache Responses:**  
  Cache API responses where possible, especially for data that doesn’t change frequently (e.g., actor biographies, past titles) to reduce the number of requests and improve performance.

- **Handle Errors Gracefully:**  
  Implement error handling for common HTTP errors (e.g., 400, 401, 404, 429, 500). Use retries with exponential backoff for rate limit errors.

- **Respect Update Frequencies:**  
  Titles are updated weekly, ratings and episodes daily. Avoid polling the API excessively more often than these intervals.

- **Use Exact Matches for Searches:**  
  When possible, use exact search parameters to get precise results and reduce unnecessary data transfer.

- **Monitor Usage:**  
  Track your API usage to avoid hitting unknown limits and to optimize your application's interaction with the API.
