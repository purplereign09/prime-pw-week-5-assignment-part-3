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



//- Add a function named `showCollection`. This function should:
  //- Take in an array parameter. (This allows it to be reused to show any collection,
  // --like the results from the find or search.)
  //- Console.log the number of items in the array.
  //- Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.


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

  //- Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

function findByArtist('artist'){
  let results = [];
  //create an array to hold results as an empty array first
  for(const item of collection){
    if(item.artist === 'artist'){
    results.push(item.artist)
    return results = [item.artist];
    }
  //looping through collection

  //adding objects with item.artist that have been looped through AND results of 'artist ' string parameter
  }
  }

  console.log(findByArtist(collection));


//Stetch Goal


function search(object){

}



const jazz = {
  artist: 'Ray Charles',
  year: 1957
}
  //- Create a function called `search`. This function should:
    //- Take an input parameter for a search criteria object.
    //-Create your solution based on a search object that has these properties:

     artist: 'Ray Charles', year: 1957 }

     - The returned output from `search` should meet these requirements:
       - Return a new array of all items in the `collection` matching *all* of the search criteria.
       - If no results are found, return an empty array.
       - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
