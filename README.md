
# nc-news-front-end-project

## Overview
    
  The purpose of this front-end project was to create a single page
      application with React, using HTTP request types to interact with my own
      back-end API and HTTP response codes to update the UI accordingly. The
      application was to also be fully responsive across different screen
      resolutions, and consolidate understanding of making a C.R.U.D application
      from a front end perspective.
    
## Description
   
   Northcoders News has articles which are divided into topics. Each article
      has user curated ratings and can be up or down voted using the API. Users
      can also add comments about an article. Comments can also be up or down
      voted. A user can add comments and remove any comments which they have
      added. As a user, you are able to:
   
    
   - View a list of all articles
   - View a page for each topic with a list of related articles
   - View an individual article
   - View an individual article’s comments
   - Search for all articles written by a specific user
   - Sort articles by: 
     - Date Created (default)
     - Comment Count
     - Votes
   - Post a new comment to an existing article (as a default logged in user)
   - Delete only your own comments (as a default logged in user)
   - Vote on an article and immediately see the change (increase or decrease
        by maximum of 1)
   - Vote on a comment and immediately see the change (increase or decrease
        by maximum of 1)
   
   
## Installation
    
These instructions will provide you with a copy of the project on your local machine.
  
Using the command terminal, navigate to the directory where you want the repository to be saved.
In the terminal, type:
      

          1. git clone “Repository URL”
          2. npm i
          3. npm start


## Prerequisites
      
Node.js version needs to be v12.13.1 or higher.   
      
Dependencies that need to be installed to run the application:

``` 
@reach/router: ^1.3.3
@testing-library/jest-dom: ^4.2.4
@testing-library/react”: ^9.5.0
@testing-library/user-event”: ^7.2.1
axios: ^0.19.2
react: ^16.13.1
react-dom: ^16.13.1
react-scripts: 3.4.1
```   

## Links

Please click here for deployed website:
[netlify](https://nc-news-fe-project.netlify.app)
        
Please click here for deployed API:
[Heroku](https://nc-news-be-project.herokuapp.com/api)
        
## Authors
        
- [Jake Heath](https://github.com/jakedheath123)
        
