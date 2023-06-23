const books = [
    {
        ISBN : "12345ABFC",
        title: "Harry Potter and the Sorcerer's Stone",
        pubDate: "2001-07-07",
        language: "english",
        numPage: 500,
        author: ["1A", "1B"],
        publication: ["A"],
        category: ["fiction", "magic", "science"],
        year: 2001,
    },
    {
        ISBN : "12346ABFD",
        title: "Harry Potter and the Chamber of Secrets",
        pubDate: "2004-04-07",
        language: "english",
        numPage: 550,
        author: ["1A", "1B"],
        publication: ["A"],
        category: ["fiction", "magic"],
        year: 2004,
    },
    {
        ISBN : "12347ABFE",
        title: "Harry Potter and the Prisoner of Azkaban",
        pubDate: "2006-04-05",
        language: "hindi",
        numPage: 600,
        author: ["1B", "1C"],
        publication: ["B"],
        category: ["fiction", "magic", "action"],
        year: 2006,
    },
    {
        ISBN : "12348ABFG",
        title: "Harry Potter and the goblet of Fire",
        pubDate: "2008-03-02",
        language: "hindi",
        numPage: 620,
        author: ["1B", "1C"],
        publication: ["B"],
        category: ["fiction", "magic", "action"],
        year: 2006,
    }
]

const author = [
    {
        id: "1A",
        name: "J.K. Rowling",
        books: ["12345ABFC", "12346ABFD"]
    },
    {
        id: "1B",
        name: "Aryan Chauhan",
        books: ["12345ABFC", "12346ABFD","12347ABFE", "12348ABFG"]
    },
    {
        id: "1C",
        name: "Priyanshi",
        books: ["12347ABFE", "12348ABFG"]
    }
]

const publication = [
    {
        id: "A",
        name: "Apress",
        books: ["12345ABFC", "12346ABFD"]
    },
    {
        id: "B",
        name: "Pearson",
        books: ["12347ABFE", "12348ABFG"]
    }
]

module.exports = {
    books,
    author,
    publication
}



