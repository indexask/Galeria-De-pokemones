const axios = require("axios");
const getPokemon = async (url) => {
    const { data } = await axios.get(url);
    return data;
};
const getAllDataPokemon = async() => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
    const promesas = data.results.map(({ url }) => getPokemon(url));
    const pokemones = await Promise.all(promesas);
    const arrayPokemones = []
    pokemones.forEach(({ name: nombrecito, sprites }) => {
        const pokeImagen = sprites["front_default"]
        let p = {}
        p.nombre = nombrecito
        p.img = pokeImagen
        arrayPokemones.push(p)
    });
    return arrayPokemones
    }
module.exports = {getAllDataPokemon}