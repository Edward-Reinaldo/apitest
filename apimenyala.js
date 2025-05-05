function fetchData() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonSprite = document.getElementById('pokemonSprite');
    const pokemonDisplayName = document.getElementById('pokemonDisplayName');

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            pokemonSprite.src = data.sprites.front_default;
            pokemonSprite.style.display = 'block';
            pokemonDisplayName.textContent = data.name.toUpperCase();
            pokemonDisplayName.style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
            pokemonSprite.style.display = 'none';
            pokemonDisplayName.style.display = 'none';
        });
}

function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const pokemonSprite = document.getElementById('pokemonSprite');
    const pokemonDisplayName = document.getElementById('pokemonDisplayName');

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => response.json())
        .then(data => {
            pokemonSprite.src = data.sprites.front_default;
            pokemonSprite.alt = data.name;
            pokemonSprite.style.display = 'block';
            pokemonDisplayName.textContent = data.name.toUpperCase();
            pokemonDisplayName.style.display = 'block';
        })
        .catch(error => {
            alert('Failed to fetch a random Pokémon');
            pokemonSprite.style.display = 'none';
            pokemonDisplayName.style.display = 'none';
        });
}