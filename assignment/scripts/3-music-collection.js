console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = [
        {
            title,  
            artist, 
            yearPublished
        }
    ]
    collection.push(album)
    return album
}

function showCollection(array){
    console.log(array.length)
// - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
    for (i=0; i<=array.length;i++){
        console.log(array[i] +  'by' + array[i],  'published in',  array[i])
    }
}

function findByArtist(artist){
    let artistList = []
    for (i=0; i < collection.length; i++) {
        let album = collection[i]
        if (album.artist === artist) {
            artistList.push(album)
        }
    }
  return artistList
}
// testing addToCollection function

console.log(addToCollection("In My Own Words", "Ne-Yo", "2006")),


console.log(addToCollection("Because of You", "Ne-Yo", "2007")),



console.log(addToCollection("Hybrid Theory", "Linkin Park", "2000")),



console.log(addToCollection("Meteroa", "Linkin Park", "2003"))

console.log(addToCollection("The Eminem Show", "Eminem", "2002"))

console.log(addToCollection("Recovery", "Eminem", "2010"))

console.log(collection)

// testing showCollection function
showCollection(collection)

// testing findByArtist function
findByArtist("Linkin Park")

