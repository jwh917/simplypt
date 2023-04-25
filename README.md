# Simply PT

## Description

Simply PT is an app built with a React frontend, a Rails backend using Postgresql and JSON Server.

A comprehensible scheduling application for physical therapist and patients that would belong to a clinic, it also includes a store for recommended items and equipment. 

## Features
- Patient/Physical Therapist Dashboards
- Log in and log out with a secure password

### Physical Therapist
- Update therapist's information
- Upload/update profile picture
- Upcoming treatment sessions
- View patients information
- Capability to assign patients exercises

### Patients
- Sign up, new account 
- Update patient's information
- Upload/update profile picture
- Physical therapist information
- View assigned exercises
- Upcoming visits
- Ability to schedule/cancel appointments with selected physical therapist
- Email: New accounts/Appointments

### Store
- View/Search items and equipment
- Add to/Update Cart 
- Make a purchase 

## Requirements

- Javascript React
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql
- JSON Server
- Bootstrap


## Setup

Start by **cloning and forking** the project:

```console -
$ git clone https://github.com/jwh917/simplypt
```


When ready to start building the project, run:

```sh
bundle install
rails db:create
rails db:migrate
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `json-server --watch db.json --port 4000`: run json server for the store on [http://localhost:4000](http://localhost:4000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4001](http://localhost:4001)



## Usage and Acknowledgements
### In order for full functionality of the application, you must have credentials for all below:
- Rapidapi [Exercise Api](https://rapidapi.com/developer)
- EmailJS [EmailJS](https://emailjs.com)
- Profile Picture Upload [Cloudinary](https://cloudinary.com)
- Images from the internet (used for learning purposes)

## Links
- [Simply PT](https://simplypt.onrender.com/)
- [Github](https://github.com/jwh917/simplypt)