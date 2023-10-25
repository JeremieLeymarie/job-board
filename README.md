# Job board

This project was developed in 2 weeks by a team of 2, following a school subject. The goal is to have a working web application to browse job offers and apply to them. It also includes a recruiter side, where you can post offers and manage them. Recruiters and applicants have access to a inbox feature to exchange messages. Additionally, the project includes a back-office, with full CRUD capabilities on every database table.

## Main goals

This was the first project that we developed using Flask (API), SQLAlchemy (ORM) and marshmallow (validation). As a result, we tried to keep the backend as simple as possible. The biggest challenge we set ourselves was to dynamically generate the whole admin section in the client.

## Security

On this project, the focus was learning a new stack and implementing functionalities. This why authentication is handled with a simple localStorage object, without any sort of encryption and/or tokenization. Same goes for role management, which is handled client-side.

# Run locally

## Requirements

You need to have installed on your machine:

- npm && node
- python3
- mysql

## Client

```sh
cd client
npm i
npm run start
```

## API

```sh
cd api
source venv/bin/activate
pip install -r requirements.txt
flask --app src/main run
```

## DATABASE

Provision environment variables from .env.example file. Then create a mysql database called "job_board", and run it locally.
