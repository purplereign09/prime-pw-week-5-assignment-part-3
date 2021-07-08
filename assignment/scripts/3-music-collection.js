console.log('***** Music Collection *****')
//Create a variable `collection` that starts as an empty array.





//- Add a function named `addToCollection`. This function should:
  //- Take in the album's `title`, `artist`, `yearPublished` as input parameters
  //- Create a new object having the above properties
  //- Add the new object to the end of the `collection` array
  //- Return the newly created object

let collection = [ ];

function addToCollection( title, artist, yearPublished) {
  //taking in album title, artist, yearpublished as input parameters
  const obj = { };
  //creating a new object with the new parameters
  obj.title = title;
  obj.artist = artist;
  obj.yearPublished = yearPublished;
  collection.push(obj);
  //Add new object to the end of the collection array using .push
  return obj;
  //return the new objects with its new properties
}

//console.log(addToCollection(newObj));



//- Test the `addToCollection` function:
  //- Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
  //- Console.log each album as added using the returned value.

console.log(' Added AlbumOne', collection.albumOne = addToCollection('Thriller', 'Michael Jackson', 1982));
console.log(' Added AlbumTwo', collection.albumTwo = addToCollection('Back in Black', 'AC/DC', 1980));
console.log(' Added AlbumThree', collection.albumThree = addToCollection('Bat Out of Hell', 'Meat Loaf', 1977));
console.log(' Added AlbumFour', collection.albumFour = addToCollection('The Dark Side Of the Moon', 'Pink Floyd', 1973));
console.log(' Added AlbumFive', collection.albumFive = addToCollection('The Bodyguard', 'Whitney Houston', 1992));
console.log(' Added AlbumSix', collection.albumSix = addToCollection('Their Greatest Hits', 'The Eagles', 1976));

//- After all are added, console.log the `collection` array.
console.log('Collection', collection);





const albumOne = {
  title: 'Thriller',
  artist: 'Michael Jackson',
  yearPublished: 1982
}

//console.log(albumOne);

const albumTwo = {
  title: 'Back in Black',
  artist: 'AC/DC',
  yearPublished: 1980
}

//console.log(albumTwo);

const albumThree = {
  title: 'Bat Out of Hell',
  artist: 'Meat Loaf',
  yearPublished: 1977
}

//console.log(albumThree);

const albumFour = {
  title: 'The Dark Side of the Moon',
  artist: 'Pink Floyd',
  yearPublished: 1973
}

//console.log(albumFour);

const albumFive = {
  title: 'The Bodyguard',
  artist: 'Whitney Houston',
  yearPublished: 1992
}

//console.log(albumFive);

const albumSix = {
  title: 'Their Greatest Hits',
  artist: 'Eagles',
  yearPublished: 1976
}

//console.log(albumSix);
