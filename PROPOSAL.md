# [Inspector.Restaurant](http://inspector.restaurant)

**Problem Statement**

The project aims to solve the problem of consumers not having convenient access to the health inspection records of the restaurants they visit. Despite the data being available through the New York State Open Data portal, access to inspection records on a per-restaurant basis is not supported. Nowadays, despite the ubiquity of online resources, customers still do not get complete information related to their eating habits. With such an application, consumers can easily check the health inspection history of a specific restaurant in their area, empowering them to make more informed decisions about the establishments they frequent and the food they consume.

**Objectives**

Develop an intuitive, mobile-friendly application for viewing an establishment’s health inspection records
Normalize and sanitize health inspection data collected from NYS Open Data
Generate a simplified, weighted score for each establishment’s inspection history

**Stretch Goals**

Tag / search restaurants by the type of food they offer
Browser extension that integrates with GrubHub / Yelp

**Server Architecture**

Node / Express.js Web server handles JSON API requests. MongoDB
MongoDB database

Health Inspection data will be scraped from data.ny.gov and stored in MongoDB. The health data will be sanitized and analyzed using bespoke python developed in a Jupyter notebook.

**Supporting Infrastructure**

Node Package Manager (NPM) to manage external dependencies
Docker + Docker-Compose supports container-based deployment
Services to be deployed on AWS EC2 instance
Reverse-proxy and SSL managed with NGINX

**Client Architecture**

VueJS will be used to handle client-side user interactions and business logic
Supporting libraries: vue-router, vue-meta, vuex (state management)

Bootstrap 4.0 will be the UI framework used to build out the user interface
Mobile-first, responsive features of the framework align with our goals
Styles will be pre-processed with SASS. This enables our team to leverage a variety of features in Bootstrap’s underlying implementation (variables, mixins, functions, etc.)

**Supporting infrastructure**

Node Package Manager (NPM) to manage external dependencies
Webpack will be used to compile all client-side assets for both development and production builds
Static client-side assets will be served from either Amazon S3, or an additional Node/Express.js server. This reduces the load placed on the API server by eliminating its responsibility of serving static data.

