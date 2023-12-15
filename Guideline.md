# Inspire

## Requirements

### 0/15

* [ ] **Login** automatically on refresh

* [ ] **Image** must be large with at least one element on top

* [ ] **Image** Must be random from api

* [ ] **Weather** Temp displayed in F and C

* [ ] **Quote:** Always displays and author on hover

* [ ] **Clock** accurate time and updates appropriately

* [ ] **Todo** When Adding, page doesn't reload

* [ ] **Todo**  can be added to API

* [ ] **Todo**  can be Updated to API

* [ ] **Todo** style indicater when completed

* [ ] **Todo** Can be deleted from API

* [ ] **Todo** comfirm deletion

* [ ] **Todo** lists the number of unfinished Todoes

* [ ] **Todo** only rendered for user when logged in

* [ ] **API Data** must be retrieved and persisted through Sandbox API

### Extra Goals

* User can set name

* Good Morning/Evening when appropriate

* toggle between 12h and 24h clock

* icon for type of weather

* button to cycle quote and image

* user can change theme

* clicking the weather should toggle between K C and F

* refactor?

## First Steps

* Setup the basic layout with a InspireController LocationController and AccountController

* The Inspire Controller & Service will handle Quotes & Images

* The Location Controller & Service will handle Wheather & Time

* The Account Controller and Service will Handle Auth0 and Todos

## Inpire Controller First Stage

* [ ] **Image** must be large with at least one element on top

* [ ] **Image** Must be random from api

* [ ] **Quote:** Always displays and author on hover

* will need to get both Quote and image to the app

* basic styling to pass the quote and image ui reqirements

## Account Controller First Stage

* [ ] **Login** automatically on refresh

* [ ] **Todo** When Adding, page doesn't reload

* [ ] **Todo**  can be added to API

* [ ] **Todo**  can be Updated to API

* [ ] **Todo** style indicater when completed

* [ ] **Todo** Can be deleted from API

* [ ] **Todo** comfirm deletion

* [ ] **Todo** lists the number of unfinished Todoes

* [ ] **Todo** only rendered for user when logged in

* hopefully firefox doesn't break auth0

* make form and functions for data creation

* post it to the api

* get it back from the api

* update api

* delete it from api

* make delete confirm

* .filtered(todo => todo.completed == true).length

## Location Controller 

* [ ] **Clock** accurate time and updates appropriately

* [ ] **Weather** Temp displayed in F and C

* get the weather and timezone from api and draw it to page

## Cleanup

* [ ] **API Data** must be retrieved and persisted through Sandbox API

* go through and fix any bugs and double check the requirements

## Styling

* exactly what it says

## Stretch