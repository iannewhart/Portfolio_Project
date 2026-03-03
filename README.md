# Media Platform

Full-stack media platform built with **React, Spring Boot, and PostgreSQL** that allows users to browse and view video content through a responsive carousel interface.

The project demonstrates full-stack architecture, REST API design, containerized development, and frontend UI interaction.

---

## Tech Stack

**Frontend**

* React
* React Slick (carousel UI)
* JavaScript
* CSS

**Backend**

* Java
* Spring Boot
* REST API architecture
* Spring Data JPA

**Database**

* PostgreSQL

**Infrastructure**

* Docker
* Docker Compose

**External Services**

* Vimeo embedded media player

---

## Architecture

Frontend and backend communicate through REST APIs.

```
React Frontend
      |
      | HTTP / REST
      v
Spring Boot Backend
      |
      | JPA
      v
PostgreSQL Database
```

The backend follows a layered architecture:

```
controller
service
repository
model/entity
```

This separation ensures clean application structure and maintainability.

---

## Features

* Video/media browsing interface
* Dynamic video carousel UI
* Thumbnail navigation
* REST API for media objects
* PostgreSQL persistence layer
* Dockerized development environment
* Embedded Vimeo video playback

---

## Screenshots

(Add screenshots of the UI here)

Example sections you could include:

* Video carousel view
* Thumbnail navigation
* Embedded video player

---

## Running Locally

### 1. Clone the repository

```
git clone https://github.com/iannewhart/media-platform.git
cd media-platform
```

### 2. Start services with Docker

```
docker-compose up
```

This will start:

* Spring Boot backend
* PostgreSQL database

### 3. Run the frontend

```
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## API Example

Example endpoint:

```
GET /api/media
```

Response example:

```
[
  {
    "id": 1,
    "title": "Example Video",
    "thumbnailUrl": "...",
    "videoUrl": "..."
  }
]
```

---

## Future Improvements

* AWS deployment
* JWT authentication
* CI/CD pipeline with GitHub Actions
* Media upload support
* User accounts and favorites
* Pagination and caching

---

## Purpose of the Project

This project was created to demonstrate:

* Full-stack application development
* REST API design with Spring Boot
* React frontend integration
* Containerized development using Docker
* Clean backend architecture patterns
