const marvel_heros = ["IronMan", "Thor", "Hulk"]
const dc_heros = ["BatMan", "Flash", "SuperMan"]
const x_men = ["Magneto", "Storm", "QuickSilver"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

console.log(marvel_heros.concat(dc_heros));

const all_heros = [...marvel_heros, ...dc_heros, ...x_men]
console.log(all_heros)

console.log(Array.of(marvel_heros, dc_heros, x_men))


