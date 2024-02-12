# Text_Editor

## User Story
> `AS A developer`  
> `I WANT to create notes or code snippets with or without an internet connection`  
> `SO THAT I can reliably retrieve them for later use`

## Acceptance Criteria
> `GIVEN a text editor web application`
> 
> `WHEN I open my application in my editor`  
> `THEN I should see a client server folder structure`
> 
> `WHEN I run 'npm run start' from the root directory`  
> `THEN I find that my application should start up the backend and serve the client`
> 
> `WHEN I run the text editor application from my terminal`  
> `THEN I find that my JavaScript files have been bundled using webpack`
> 
> `WHEN I run my webpack plugins`  
> `THEN I find that I have a generated HTML file, service worker, and a manifest file`
> 
> `WHEN I use next-gen JavaScript in my application`  
> `THEN I find that the text editor still functions in the browser without errors`
> 
> `WHEN I open the text editor`  
> `THEN I find that IndexedDB has immediately created a database storage`
> 
> `WHEN I enter content and subsequently click off of the DOM window`  
> `THEN I find that the content in the text editor has been saved with IndexedDB`
> 
> `WHEN I reopen the text editor after closing it`  
> `THEN I find that the content in the text editor has been retrieved from our IndexedDB`
> 
> `WHEN I click on the Install button`  
> `THEN I download my web application as an icon on my desktop`
> 
> `WHEN I load my web application`  
> `THEN I should have a registered service worker using workbox`
> 
> `WHEN I register a service worker`  
> `THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets`
> 
> `WHEN I deploy to Heroku`  
> `THEN I should have proper build scripts for a webpack application`

## Mock-Up
The following animation demonstrates the application functionality:  
  
![00-demo](https://github.com/nava003/ADN_Text_Editor/assets/32070635/d5669172-825f-4beb-bab6-db39fdac232f)

The following image shows the application's `manifest.json` file:  

![01-manifest](https://github.com/nava003/ADN_Text_Editor/assets/32070635/9ed6ed5d-ea98-4207-963d-c42180d0ba4a)

The following image shows the application's registered service worker:  

![02-service-worker](https://github.com/nava003/ADN_Text_Editor/assets/32070635/9df2c6c4-35bd-47f7-98e4-37e0f6cc4c07)

The following image shows the application's IndexedDB storage:  

![03-idb-storage](https://github.com/nava003/ADN_Text_Editor/assets/32070635/529246f6-596e-4e08-9283-5cca25e83097)

## Student Result
Link to Deployed Heroku Version: https://adn-text-editor-app-c7a59821f7b6.herokuapp.com

The following images demonstrate the application's functionality:  

![PWA_C19_IMG1](https://github.com/nava003/ADN_Text_Editor/assets/32070635/21093f3d-b77a-40da-b9cc-18bdfb0e89a4)

This is the `manifest.json` file:  

![PWA_C19_IMG2](https://github.com/nava003/ADN_Text_Editor/assets/32070635/7c873b88-a63a-4fa8-8856-8a058e6aded0)

This is the registered service worker:  

![PWA_C19_IMG3](https://github.com/nava003/ADN_Text_Editor/assets/32070635/06032a45-d93e-48ae-89a7-81411d94fb9d)

This is the IndexedDB Storage:  

![PWA_C19_IMG4](https://github.com/nava003/ADN_Text_Editor/assets/32070635/34eed682-ea81-45da-bfab-45856b7933e5)
