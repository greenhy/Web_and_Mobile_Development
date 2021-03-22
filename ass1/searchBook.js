function searchBooks(library, authorName) {
    let bookTitle='';

    library.forEach(function(booklist) {
       if(booklist['author'] === authorName){
           bookTitle+=booklist['title']+',';
       }
    });

    if(bookTitle.length==0){
        return bookTitle='NOT FOUND';
    }

    return bookTitle.slice(0,-1);
}


library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Carolann Camilo', title: 'Eyewitness', libraryID: 32456},
    { author: 'Carolann Camilo', title: 'Cocky Marine', libraryID: 32457}  
   ];

console.log(searchBooks(library,'Bi'));