# ts-api-boiler

## Preamble
Trying to discover the best way to structure a TS based API with build scripts that can be deployed to heroku and similar. Using npm lifecyles.

## What this isn't
This is a not a hackaton boilerplate to quickly spin a project. Things that will never be part of this scope:
* Authentication - very hard to get right, just use a provide like Auth0 unless you are an expert.
* Database - Mongo is not the solution to everything.
* Views/HTML rendering/Static assets - the project is aimed at building APIs only.

## Motivation 
Ideally, the project should hide away all scripts similar to `create-react-app` and you simply expose an express router and configure some enviroment variables 

## Reference
Used https://github.com/Microsoft/TypeScript-Node-Starter as a reference