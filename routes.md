1. API Routes are how we will be sending and receiving info between front and back ends.
2. Aim to keep routes RESTful but there are many situations that need a custom route

#### Backend Routes

- What information will you make AJAX requests for?
- Will that information have its own route or be included in a payload? For instance, there is no "likes" index route.
- Backend routes are not the same as frontend routes. We won't see these routes in the URL.

# Backend Routes

## HTML

`GET /` - `StaticPagesController#root`

## API Endpoints

### `users`

`GET /api/users` - returns the user info for user search
`POST /api/users` -sign up

### `session`

`POST /api/session` -log in
`DELETE /api/session` - log out

### `posts`

`GET /api/posts` - returns all posts (filters by params)
`GET /api/posts/:id` - returns a single post
`POST /api/posts` - creates a post

### `likes`

`POST /api/likes` - likes a post
`DELETE /api/likes` - deletes a post

# Frontend Routes

What we see in the URL

`/`

- Splash page
  `/login`
- `SessionForm`
  `/signup`
- `SessionForm`
  `/dashboard`
  `Index`
  `/users/:userID` -user profile
  `/saves`
