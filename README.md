# Note Taker Starter Code

# note app 

# Install guide 
go to github, clone the repo 
open in vs code 
you must npm init
you must npm install 
npm start 
then go to localhost:3007 in your browser to use

# repo
https://github.com/buckxx1/note_taker_v1/

# screenshots
![Screen Shot 2021-06-11 at 2 46 35 PM (2)](https://user-images.githubusercontent.com/67339036/121737103-71696500-cac6-11eb-99d4-97b21cd1d927.png)
![Screen Shot 2021-06-11 at 2 44 40 PM (2)](https://user-images.githubusercontent.com/67339036/121737171-86de8f00-cac6-11eb-9d16-5cff7a07b4f7.png)
![Screen Shot 2021-06-11 at 2 18 22 PM (2)](https://user-images.githubusercontent.com/67339036/121737201-8fcf6080-cac6-11eb-9fa7-6dab84120406.png)
![Screen Shot 2021-06-11 at 2 18 36 PM (2)](https://user-images.githubusercontent.com/67339036/121737226-98c03200-cac6-11eb-80ea-b2b0dfe3d4e9.png)








## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column


## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).