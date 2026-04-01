# Media Platform

A full-stack media platform built for a videography business, allowing users to browse and view video content through a responsive carousel interface. Features a secured admin panel with JWT authentication and is live on AWS EC2.

🔗 **Live Demo:** http://54.209.171.76

## Tech Stack

### Frontend
- React
- React Slick (carousel UI)
- JavaScript
- CSS

### Backend
- Java
- Spring Boot
- REST API architecture
- Spring Data JPA
- Spring Security
- JWT Authentication

### Database
- PostgreSQL

### Infrastructure
- Docker
- Docker Compose
- AWS EC2 (Production Hosting)
- Nginx

### External Services
- Vimeo embedded media player
- Google Analytics

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

## Features
- Video/media browsing interface
- Dynamic video carousel UI
- Thumbnail navigation
- REST API for media objects (CRUD)
- PostgreSQL persistence layer
- JWT authentication securing admin routes
- Stateless token validation with Spring Security
- Dockerized development environment via Docker Compose
- Deployed and hosted on AWS EC2
- Embedded Vimeo video playback
- Google Analytics integration (30+ visitors in first week)

## Screenshots
*(Add screenshots of the UI here)*

## Running Locally

1. Clone the repository
```bash
git clone https://github.com/iannewhart/media-platform.git
cd media-platform
```

2. Start services with Docker
```bash
docker-compose up
```

This will start:
- Spring Boot backend
- PostgreSQL database

3. Run the frontend
```bash
cd frontend
npm install
npm start
```

Frontend will run at:
```
http://localhost:3000
```

## API Example

Example endpoint:
```
GET /api/media
```

Response:
```json
[
  {
    "id": 1,
    "title": "Example Video",
    "thumbnailUrl": "...",
    "videoUrl": "..."
  }
]
```

## Future Improvements
- CI/CD pipeline with GitHub Actions
- Custom domain with HTTPS
- Media upload support
- User accounts and favorites
- Pagination and caching

## Purpose

This project demonstrates:
- Full-stack application development with Java and Spring Boot
- JWT authentication and Spring Security implementation
- REST API design and integration with a React frontend
- PostgreSQL relational data modeling with Spring Data JPA
- Containerized development using Docker Compose
- Production deployment on AWS EC2
