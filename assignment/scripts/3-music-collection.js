console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    let album = [
        {
            title,
            artist, 
            yearPublished,
        }
    ]
    collection.push(album)
    return album
}



// testing addToCollection function

console.log(addToCollection("In My Own Words", "Ne-Yo", "2006")),


console.log(addToCollection("Because of You", "Ne-Yo", "2007")),



console.log(addToCollection("Hybrid Theory", "Linkin Park", "2000")),



console.log(addToCollection("Meteroa", "Linkin Park", "2003"))

console.log(addToCollection("The Eminem Show", "Eminem", "2002"))

console.log(addToCollection("Recovery", "Eminem", "2010"))

console.log(collection)