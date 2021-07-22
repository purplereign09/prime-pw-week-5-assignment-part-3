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

console.log(' Added AlbumOne', addToCollection('Thriller', 'Michael Jackson', 1982));
console.log(' Added AlbumTwo', addToCollection('Back in Black', 'AC/DC', 1980));
console.log(' Added AlbumThree', addToCollection('Bat Out of Hell', 'Meat Loaf', 1977));
console.log(' Added AlbumFour', addToCollection('The Dark Side Of the Moon', 'Pink Floyd', 1973));
console.log(' Added AlbumFive', addToCollection('The Bodyguard', 'Whitney Houston', 1992));
console.log(' Added AlbumSix', addToCollection('Their Greatest Hits', 'The Eagles', 1976));

//- After all are added, console.log the `collection` array.
console.log('Collection', collection);

//This function has been corrected and the unnecessary object property has been deleted.



function showCollection(results){
  console.log(results.length);
  for(const item of results){
    console.log(item.title, item.artist, item.yearPublished);
  }
}

  showCollection(collection);


  //- Add a function named `findByArtist`. This function should:
    //- Take in `artist` (a string) parameter
    //- Create an array to hold any results, empty to start
    //- Loop through the `collection` and add any objects with a matching artist to the array.
    //- Return the array with the matching results. If no results are found, return an empty array.

  //- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
  //Check that for artists with multiple matches, all are found.

function findByArtist(artist) {
  let results = [];
  for(let i = 0; i < collection.length; i++){
    if(artist === collection[i].artist){
      results.push(collection[i].artist);
    }
  }
  return results;
}

  //collection.artist = "Pink Floyd";
  console.log(findByArtist('Pink Floyd'));
  console.log(findByArtist('Whitney Houston'));
  console.log(findByArtist('DMX'));
//This code has been corrected to reflect multiple search results, including an artist in my playlist and an artist and an artist not in it.

//Stretch Goal


function search(value){
  //taking in an input parameter
  if(Object.keys(value).length === 0){
    //checking if the object has a value
    return collection
  }
  let song = [];
  //function named search taking an input parameter for a search criteria object
  for(const key of collection){
    //looping through the keys of the global variable collection
    if(key.artist === value.artist && key.yearPublished === value.year){
      //if the values artist and year are equal to the search criteria 'value'
      song.push(key);
    }
  }
  return song;
  //return the collection's artists and the year published
}

let myArtist = { artist: 'Michael Jackson', year: 1982 };
console.log(search({ artist: 'Ray Charles', year: 1957 }));//not in music
console.log(search({ artist: 'Michael Jackson', year: 1982 }));
console.log(search(myArtist));
//This function now takes in multiple parameters, including an artist that isn't there, and one that is there
