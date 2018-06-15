# MovieSuggestions

## 1. Collections / Model

* Lists

  * moviesId
  * name
  * score
  * posterUri
  * vote
  * \_id
  * createdAt
  * updatedAt

* Movies
  !!! Object example : <https://api.themoviedb.org/3/movie/337167?api_key=7345489e9522a18a9b84bbc90f4d7758&language=en>
  * adult
  * backdrop_path
  * belongs_to_collection
    * id
    * name
    * poster_path
    * backdrop_path
  * budget
  * genres
    * id
    * name
  * homepage
  * id
  * imdb_id
  * original_language
  * original_title
  * overview
  * popularity
  * poster_path
  * production_companies
    * id
    * logo_path
    * name
    * origin_country
  * production_countries
    * iso_3166_1
    * name
  * release_date
  * revenue
  * runtime
  * spoken_languages
  * status
  * tagline
  * title
  * video
  * vote_average
  * vote_count

## 2. Route / RESTful

* GET -> /api/movies/:movieId = get movie infomation by movieId
* GET -> /api/movies?content = get all moviesId by req.query.content(is movieName and actorName)
* GET -> /api/movies/:id/homepage = get URI of ONE movie
  * Example: {"homepage": "https://www.google.com/search?query=Fifty+Shades+Freed"}
  * Example: {"homepage": "http://www.fiftyshadesmovie.com"}

---

* POST -> /api/lists = creat a list

  * Example 1: req.body = {"moviesId": [1,2,3,4,5,6], "name": "List của Dũng"}
  * Example 2: req.body = {"moviesId": [1,2,3], "name": "List của Dũng"}
  * Lưu ý: request phải ở dạng JSON

* GET -> /api/lists/count = get number of lists in database
* GET -> /api/lists?page = get infomation of 10 lists (after skip [10 * (page-1)] lists)
* GET -> /api/lists/top10 = get infomation 10 lists with priority is score
* GET -> /api/lists/:id = get infomation of 1 list
* PUT -> /api/lists/:id/ = increase score of req.params.id by req.body.score

## 3. Cooked Data

* /api/lists
  !!! Object example is in [ObjectExample1](backend/examples/ObjectExample1.json)

  * moviesId
  * name
  * score
  * vote
  * posterUri
  * \_id

* /api/movies
  !!! Object example is in [ObjectExample2](backend/examples/ObjectExample2.json)

  * genres
    * id
    * name
  * homepage
  * id
  * overview
  * posterUri
  * release_date
  * title
  * vote_average
  * actor
    * character
    * name
    * profileUri

## 4. API Link

* Get movie infomation by movieId (lack actors) = <https://api.themoviedb.org/3/movie/337167?api_key=7345489e9522a18a9b84bbc90f4d7758>

* Get movie credits by movieId = <https://api.themoviedb.org/3/movie/337167/credits?api_key=7345489e9522a18a9b84bbc90f4d7758>

* Render poster image by posterUrl = <https://image.tmdb.org/t/p/original/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg>

* Get actorId by actorName = <https://api.themoviedb.org/3/search/person?api_key=7345489e9522a18a9b84bbc90f4d7758&query=leonardo+dicaprio>

* Get all movies with actorId = <http://api.themoviedb.org/3/discover/movie?api_key=7345489e9522a18a9b84bbc90f4d7758&with_cast=500>

* Get movieId by movieName = <http://api.themoviedb.org/3/search/movie?api_key=7345489e9522a18a9b84bbc90f4d7758&query=Fifty+Shade>
