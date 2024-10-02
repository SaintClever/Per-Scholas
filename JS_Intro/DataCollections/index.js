let movies = ["It", "Saw", "The Platform", null, undefined];

let firstMovie = movies[0];

console.log(movies);
console.log(movies.length);
console.log();

movies[1] = "Batman";
console.log(movies);

movies.length = 1;
console.log(movies);

movies.length = 3;
console.log(movies);

movies[5] = "Interstellar";
console.log(movies);

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

let test = [1, 2, 3]
let spliceMe = ["one", "two", test.flat(), "three"];
console.log(spliceMe);

movies.forEach((movie) => {console.log(movie);})

console.log({"name": "hello"} == {"name": "hello"});


let human = {};

human.name = "Nesta Parchment";
console.log(human);
console.log();

human = {name: "Saint. Clever"}; // replaces original
human = {github: "github.com/saintclever"} // replaces original not adds to it
console.log(human);