# Kiosk-Check in

## About 
This project is intended to be a Kiosk sign up application that will be applied for Mobile devices such as tablets, where the person can enter there contact information and have it stored in a database.

As stated by the assignment: 
The sign-in application is a simple front-end application that runs on a mobile device, e.g., an iPad or an Android tablet that communicated with a back-end database. This application is used as a kiosk device to collect 


### Non-Functional Requirements

##Design 

##Admin View :login
- The design will be comprised of a Login page for Admin View which in this case is called Admin.
   Username
   Password

##Admin View :database
- The design will be comprised of a Login page for Admin View which in this case is called Admin.
   Will be the posting of the database
   
##Visitor View 
View for the individuals that approach the Kiosk. 
   Within the window the fields will appear as: 
   Name 
   Email
   Telephone
   Company
   Official visit (checkbox)
   Escort required (checkbox)
   Escort name (if Escort is checked)  ( Although I was unable to successfully implement)
    

#Tooling
 Listed are the necessary tools in order to operate successfully:
- Mongodb : for Database
- NPM : for dependencies
- Express : Routing
- NodeJS : For Backend
- Mondodb Compass : for database management
- Mustache
- Handlebars
- Mozilla Firefox : for debugging with a firebug plugin
- HTML
- CSS
- Javascript
- Git : required for cloning my repo and making your own future modifications


Admin View
The sign-in application offers a password-protected admin view. This view lists all the data from the database as a table.


Development Environment
Your application should be verified using the Chrome's developer tools view.



## How to run

1. Clone my Kiosk-Checkin repository via your terminal with
git clone https://github.com/genriquez1/Kiosk-Checkin.git

2. Start mongodb 

3. Open terminal with the new folder Directory and 

4. On mozilla or your favorite browser run Localhost:3000 
http://localhost:3000/kiosk/login




Plan of Action

[] Research toronet in depth
[] Acquire additional Backend knowledge
[] Implement a new endpoint and have it communicate with store   (ran into some issues here )
[] Implement the rest of the assignment
[] Fill out README and note progress
[] Decided to proceed another option
[] Installed firefox
[] Installed Mongodb on windows
[] Intall remaining depedencies
[] tooling (Nodejs, mongodb, etc) 
[] Setup server
[] deploy on localhost

##References
Below are some of the many tutorials I used to help me understand my final product:
Node.js + Express - Tutorial - Insert and Get Data with MongoDB
https://www.youtube.com/watch?v=ZKwrOXl5TDI&t=15s

Node.js Login System With Passport 
https://www.youtube.com/watch?v=OnuC3VtEQks



Below is the audit commit histories with description changes

Version 1.0 - Kiosk 
- foundation  layout

Version 1.1 - Kiosk
- General changes

Version 1.5 - Kiosk - 
- DB running and 
- UI updates

Version 1.8 - Kiosk - 
- DB endpoint additions, 
- Overall Enhancement

 Version 2.0 - Kiosk - 
 - Creation of Administrator view (alpha mode) , 
 - Significant UI enhancements  
 - Additional DB endpoint adjustments
 
 Version 3.0 - Kiosk  
 - All changes to Frontend and Backend 
 - Deletion of previous toronet adaptation

Admin logging in:
![admin login](https://user-images.githubusercontent.com/17266148/33921202-289e7a60-df77-11e7-899a-e33d341118f8.PNG)

Admin View of Database:
![screen shot 2017-12-12 at 19 52 02](https://user-images.githubusercontent.com/17266148/33921021-249435dc-df76-11e7-8ff8-b3f6b9e67fee.png)

Registration window:
![register](https://user-images.githubusercontent.com/17266148/33921176-ef4509e6-df76-11e7-8c71-7d69910e9447.PNG)


Visitor Window:
![visitor](https://user-images.githubusercontent.com/17266148/33921249-828618b2-df77-11e7-9e5d-88eee9991677.PNG)
