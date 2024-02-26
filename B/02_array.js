
const marvel_heros = ["thor", "Ironman", "Spiderman"]

const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);

console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_anoter_array = another_array.flat(Infinity)

console.log(real_anoter_array);


console.log(Array.isArray("Dhairya"))
console.log(Array.from("Dhairya"));
console.log(Array.from({name: "Dhairya"}));   // insteresting and interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


// interview very imp Q- is, from , of reaad and work



