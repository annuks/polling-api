# POLLING API PROJECT

## `Start Project`

### `npm start`

Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

## Project Tree


 ```
polling-api
├─ .git
├─ .gitignore
├─ config
│  └─ mongoose.js
├─ controllers
│  └─ api
│     └─ pollingController.js
├─ index.js
├─ models
│  ├─ options.js
│  └─ question.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ router
   ├─ api
   │  └─ pollingRoute.js
   └─ index.js

```


## SETUP ON LOCAL SYSTEM

### `1. Setup Express Server`
### `2. Setup Mongoose and Connect to MongoDB-Cloud`
### `3. Setup Mongoose Schema for API`
### `4. Setup MongoSchema for Question and Options`
### `5. Setup Contoller and Routes for Adding Question`
Link for Abbove Step :  domain[/questions/create](/questions/create)
### `6. Setup Contoller and Routes for Deleting a Question`
Link for Abbove Step :  domain[/questions/:id/delete](/questions/:id/delete)
### `7. Setup Contoller and Routes for Adding a option to a Question`
Link for Abbove Step :  domain[/questions/:id/options/create](/questions/:id/options/create)
### `8. Setup Contoller and Routes for Deleting a Option  from  a Question`
Link for Abbove Step :  domain[/options/:id/delete](/options/:id/delete)
### `9. Setup Contoller and Routes for Adding Vote to option`
Link for Abbove Step :  domain[/options/:id/add_vote](/options/:id/add_vote)
### `10. Setup Contoller and Routes for View Question`
Link for Abbove Step :  domain[/questions/:id](/questions/:id) to see particular question.

Link for Abbove Step :  domain[/questions/:id](/questions/:id) to see all question.

