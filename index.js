//to import env file
require("dotenv").config();

//importing express
const express = require("express");

//importing body-parser
const bodyParser = require("body-parser");

//importing database
const db = require("./database/dataset");
const Book = require("./database/Book");
const Author = require("./database/Author");
const Publication = require("./database/Publication");

// importing mongoose
const mongoose = require('mongoose');

// Initialize express
const ibook = express();

//allowing ibook to use bodyparser
ibook.use(bodyParser.urlencoded({extended:true}));
ibook.use(bodyParser.json());

// connecting to database by calling the .env file
mongoose.connect(process.env.MONGO_URL, 
  { useNewUrlParser: true, 
    useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Connected to database");
  });

// ALL GET METHOD REQUEST

/* 
 Route         /
 Description   Get all books
 Parameters    none
 Access        Public
 Methods       GET
*/
ibook.get("/", async (req, res) => {
  const books = await Book.find({});
  return res.json(books);
});



/* This is to get a specific book based on ISBN
 Route         /isbn=
 Description   Get a specific book
 Parameters    /:ISBN
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched ISBN book is not found
*/
ibook.get("/isbn=/:ISBN", async (req, res) => {
  const specificBook = await Book.find({ISBN:req.params.ISBN});

  if(!specificBook.length){
    console.log("No books found");
    return res.json({error:`No books found for ISBN ${req.params.ISBN}`});
}
  return res.json({ "Books are as follows": specificBook });
});



/* This is to get specific book based on its category
 Route         /category=
 Description   Get a specific book
 Parameters    /:category
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched category book is not found
*/
ibook.get("/category=/:category", async (req, res) => {
    const specificBook = await Book.find({category:req.params.category});
  
    if(!specificBook.length){
      console.log("No books found");
      return res.json({error:`No books found for category ${req.params.category}`});
  }
  return res.json({ "Books are as follows": specificBook });
  });


  
/* This is to get specific book based on its language
 Route         /language=
 Description   Get a specific book based on language
 Parameters    /:language
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched language book is not found
*/
ibook.get("/language=/:language", async (req, res) => {
    const specificBook = await Book.find({language:req.params.language});
  
    if(!specificBook.length){
      console.log("No books found");
      return res.json({error:`No books found for language ${req.params.language}`});
  }
  return res.json({ "Books are as follows": specificBook });
  });  



/* 
 Route         /author
 Description   Get all authors
 Parameters    none
 Access        Public
 Methods       GET
*/
ibook.get("/author", async (req, res) => {
  const authors = await Author.find({});
  return res.json(authors);
});



/* This is to get specific author based on its name
 Route         /author/name=
 Description   Get a specific author based on name
 Parameters    /:name
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched name author is not found
*/
ibook.get("/author/name=/:name", async (req, res) => {
    const specificAuthor = await Author.find({name:req.params.name});
  
    if(!specificAuthor.length){
      console.log("No books found");
      return res.json({error:`No Authors found for name ${req.params.name}`});
  }
  return res.json({ "Authors are as follows": specificAuthor });
  }); 


/* This is to get specific author based on book name
 Route         /author/bookname=
 Description   Get a specific author based on name
 Parameters    /:name
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched book author is not found
*/
ibook.get("/author/bookname=/:books", async (req, res) => {
    const specificAuthor = await Author.find({books:req.params.books});
  
    if(!specificAuthor.length){
      console.log("No books found");
      return res.json({error:`No Authors found for book ${req.params.books}`});
  }
  return res.json({ "Authors are as follows": specificAuthor });
  }); 



/* This is to get all publications
 Route         /publication
 Description   get all publications
 Parameters    none
 Access        Public
 Methods       GET
*/
ibook.get("/publication", async (req, res) => {
  const publications = await Publication.find({});
  return res.json(publications);
});



/* This is to get specific publiaction based on its name
 Route         /publication/name=
 Description   Get a specific publication based on name
 Parameters    /:name
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched publication is not found
*/
ibook.get("/publication/name=/:name", async (req, res) => {
    const specificPublication = await Publication.find({name:req.params.name});

    if(!specificPublication.length){
      console.log("No publications found");
      return res.json({error:`No publications found for name ${req.params.name}`});
    }

  return res.json({ "Publications are as follows": specificPublication });
});



/* This is to get specific publiaction based on bookname
 Route         /publication/bookname=
 Description   Get a specific publication based on bookname
 Parameters    /:books
 Access        Public
 Methods       GET

 we have used an if condition to show error message if the searched publication is not found
*/
ibook.get("/publication/bookname=/:books", async (req, res) => {
    const specificPublication = await Publication.find({books:req.params.books});

    if(!specificPublication.length){
      console.log("No publications found");
      return res.json({error:`No publications found for name ${req.params.books}`});
    }

  return res.json({ "Publications are as follows": specificPublication });
});



// ALL POST METHOD REQUEST

/* 
 Route         /book/new
 Description   add new book
 Parameters    none
 Access        Public
 Methods       POST
 This is to add a new book to our dataset dynamically using postman
*/
ibook.post("/book/new", async (req, res) => {
    const {newBook} = req.body;
    const addedBook = await Book.create(newBook);
    return res.json({ "Books are as follows": addedBook });
  });



/* 
 Route         /author/new
 Description   add new author
 Parameters    none
 Access        Public
 Methods       POST
 This is to add a new author to our dataset dynamically using postman
*/
ibook.post("/author/new", async (req, res) => {
    const {newAuthor} = req.body;
    return res.json({ "authors are as follows": await Author.create(newAuthor) });
  });
  
  

/* 
 Route         /publication/new
 Description   add new publication
 Parameters    none
 Access        Public
 Methods       POST
 This is to add a new publication to our dataset dynamically using postman
*/
ibook.post("/publication/new", async (req, res) => {
    const {newPublication} = req.body;
    return res.json({ "publications are as follows": await Publication.create(newPublication) });
  });   



// PUT METHOD     
/* 
 Route         /publication/update/book
 Description   update publication and book
 Parameters    :ISBN
 Access        Public
 Methods       PUT
 This is to update publication in books array and add the respected book in publication array to our dataset dynamically using postman
*/
ibook.put("/publication/update/book/:ISBN", async (req, res) => {
    
// update publication database
    const updatedPublication = await Publication.findOneAndUpdate(
      {id:req.body.newid},
      {$addToSet : {books: req.params.ISBN}},
      {new: true}
      );


// update books database
    const updatedBook = await Book.findOneAndUpdate(
      {ISBN:req.params.ISBN},
      {$addToSet : {publication: req.body.newid}},
      {new: true}
    )
  return res.json({
     "publications are as follows": updatedPublication,
     "Books are as follows": updatedBook,
     message : "Book updated successfully"
    });  
  });   



// DELETE METHOD
/* 
 Route         /book/delete/:ISBN
 Description   Delete a book
 Parameters    :ISBN
 Access        Public
 Methods       DELETE
 This is to delete a book from our dataset dynamically using postman
*/
ibook.delete("/book/delete/:ISBN", async (req, res) => {
    const upBookdb = await Book.findOneAndDelete({ISBN:req.params.ISBN});
    return res.json({
      "Books are as follows": upBookdb
    });
});



// DELETE METHOD
/* 
 Route         /author/delete/:id
 Description   Delete a author
 Parameters    :id
 Access        Public
 Methods       DELETE
 This is to delete an author from our dataset dynamically using postman
*/
ibook.delete("/author/delete/:id", async (req, res) => {
    const upAuthdb = await Author.findOneAndDelete({id:req.params.id});
    return res.json({
      "Authors are as follows": upAuthdb
    });
});



// DELETE METHOD
/* 
 Route         /book/author/delete/:ISBN/:id
 Description   Delete a book and associated author with respective isbn and id
 Parameters    :ISBN, :id
 Access        Public
 Methods       DELETE
 This is to delete a book and associated author from our dataset dynamically using postman
*/
ibook.delete("/book/author/delete/:ISBN/:id", async (req, res) => {
    
    // Updating book database
    const upBookdb = await Book.findOneAndDelete(
      {ISBN:req.params.ISBN},
      {new : true}
      );


    // Updating author database
    const upAuthdb = await Author.findOneAndDelete(
      {id:req.params.id},
      {$pull: {books: req.params.ISBN}},
      {new : true}
      );

    return res.json({
      "Books are as follows": upBookdb,
      "Authors are as follows": upAuthdb
    })
});



// to print the local host we are using in terminal
ibook.listen(3000, () => {
  console.log("listening on port 3000");
});
