let book ={
  title: `javascript`,
  author:`marijn haverbeke`,
  year: 2001,
  isAvailable:`true`,
  borrow: function isAvailable(){
    return this.isAvailable =!this.isAvailable
  }
   
}

let publisher={
name :`khaled`,

location:{
city:`Riyadh`,
country:`KSA`

}
}


console.log(book);
console.log(book.title);
delete book.author
console.log(book.isAvailable);
console.log(publisher);
console.log(publisher.location.city)


//lab2


const characters = [ { 
  name: "Luke Skywalker",
  height: 177,
  gender: "male",
  mass: 77,
  eye_color: "brown",
   }, 
  { 
  name: "Leia Organa", 
  height: 160,
  gender: "female", 
  mass: 56,
  eye_color: "blue",
   }, 
  { 
  name: "Han Solo",
  height: 180,
  gender: "male",
  mass: 80,
  eye_color: "brown",
   },
   { 
  name: "Chewie",
  height: 222, 
  gender: "male",
  mass: 190,
  eye_color: "black",
   },
   {
  name: "Kevin",
  height: 106,
  gender: "male",
  mass: 32.2, 
  eye_color: "red",
   },
   ];

   
   let character = characters.find(character => character.mass > 75);
   console.log(character);


  //  Get the first eye color of a character shorter than 180.
  let eye = characters.find(character => character.height< 180);
  console.log(eye);

  let heights = characters.find(character => character.height > 150 && character.height < 210);
  console.log(heights);


  let fiml = characters.filter(character => character.gender =="female");
  console.log(fiml);


  let eys = characters.map(character => character.eye_color);
  console.log(eys);

  
  let mass = characters.map(character => character.mass);
  console.log(mass);

  // let  alphabetically  = characters.sort((a, b) => a.name.toLowerCase,localeCompare(b.name.toLowerCase));
  // console.log(alphabetically );

  let height1 = characters.sort((a, b) => a.character - b.character);
  console.log(height1);

  let characters1 = characters.every(character => character.height > 100);
console.log(characters1); 

let characters2 = characters.every(character => character.weight < 200);
console.log(characters2);  

let  least = characters.some(character => character.eye_color === 'black');
console.log(least ); 

const least1 = characters.some(character => character.height > 177);
console.log(least1 ); 

//lab3

const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

let mov = movies.find(movie => movie.year > 2000);
console.log(mov)

let tqum = movies.find(movie => movie.rating > 9);
console.log(tqum)

let film = movies.filter(movie => movie.director == "Christopher Nolan");
console.log(film)

let before = movies.filter(movie => movie.year < 2010);
console.log(before);

let movie = movies.map(movie => movie.title);
console.log(movie);

let rating = movies.reduce((sum,movie) => sum + movie.rating, 0) / movies.length;
console.log(rating);

let movies1 = movies.sort((a, b) => b.title - a.title);
console.log(movies1)

let movies2 = movies.sort((a, b) => a.year - b.year);
console.log(movies2)

let every1 = movies.every(movie => movie.rating > 8);
console.log(every1);

let every2 = movies.every(movie => movie.title > 1999);
console.log(every1);

let every3 = movies.every(movie => movie.director == movies[0].director);
console.log(every3);



let some1 = movies.some(movie => movie.rating < 8.5);
console.log(some1);





























   



