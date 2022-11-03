# Flixder Back-End

## Jonathan Villagomez

[LinkedIn](https://www.linkedin.com/in/jonathan-hernandez-361565240/) |
[GitHub](https://github.com/VillagomezHJonathan) |
[Website](https://www.jonweb.dev/)

---

## **_Description_**

#### The back-end of my Flixder application. Flixder is an application that gathers random movies from your favorite genres and displays them in cards in front of you like a dating app. If you like a movie you swipe right and gets inserted in your movies to watch list. Built with Node.js and MongoDB, the backend has various endpoints like profiles, movies, genres etc.

---

## **_Technologies Used_**

- Node.js
- MongoDB

---

## **_Endpoints_**

### **_Base URL:_**

```
https://localhost/api
```

| Endpoint         | HTTP Verb | Description                  |
| ---------------- | --------- | ---------------------------- |
| /movies          | GET       | Gets all movies              |
| /movies          | POST      | Posts a new movie            |
| /movies/:id      | GET       | Gets one movie from our db   |
| /movies/tmdb/:id | GET       | Gets movie using its TMDB id |
| /genres          | GET       | Gets all genres              |
| /genres/:id      | GET       | Gets one genre               |
| /providers       | GET       | Gets all watch providers     |
| /providers/:id   | GET       | Gets one watch provider      |
| /regions         | GET       | Gets all watch regions       |
| /regions/:id     | GET       | Gets one watch region        |
| /images          | GET       | Gets all images              |
| /images/:id      | GET       | Gets one image               |
| /profiles        | GET       | Gets all profiles            |
| /profiles        | POST      | Posts a new profile          |
| /profiles/:id    | GET       | Get one profiles             |
| /profiles/:id    | PUT       | Updates a profile            |
| /profiles/:id    | DELETE    | Deletes a profile            |

---

## **_Credits_**

### Movies info from: [TMDB API]('https://developers.themoviedb.org/3/getting-started/introduction')

### Images from: [Unsplash]('https://unsplash.com/')
