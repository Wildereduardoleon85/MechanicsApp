Application that shows tickets generated by a mechanic car workshop to perform various activities related to car repairs, it also has a section where the history of commits made in its same Github repository. Below are details of the application's functionalities:

1. Main App:

- It has a search bar that filters the results of the tickets generated by the content of the ticket message or by the name of the assigned mechanic.

- It has 2 buttons, one to add a new ticket and another to add a new mechanic, you can also click on the ticket message to update it and finally, you can delete the tickets by clicking on the trash icon.

2. Github Commits Section:

- It has a search bar that filters the commits by any word that matches said commit, once the word is written in the search bar, click on the "search" button, when clicking the "search" button without anything written, they will be displayed all results. The list is shown ordered by date starting with the most recent, you can also click on the message or on the github icon to go directly to the information of that commit in the Github main page.

3. Instructions for replicate the App:

- Run npm install in the root directory to reconstruct the node modules in the server side of the aplication.

- Run npm install inside de frontend folder to reconstruct the node modules in the client side of the aplication.

- Since the application connects to a Mongo database, sensitive data such as username and password are not included in this repository, a ".env" file must be created with these variables.

- Once the node modules of both the frontend and the backend have been rebuilt and the ".env" file has been added in the main directory, the application can be started in development mode through the "npm run dev" command, this command must be used from the root directory and since there is a dependency installed called "Concurrently", this command will run both servers (the backend and the frontend) at the same time.

This Application was deployed in Heroku plataform for demo porpuse, you can see a live demo here:
http://mechanicsapp.herokuapp.com/
