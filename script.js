/*const listaSelecaoPokemons = document.querySelector('.pokemon')
const pokemonsCard = document.querySelector('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        // Remover a classe aberto do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')

        //pegar o id do pokemon para saber qual eu vou mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'

        // Agora vamos abrir o card do pokemon 
        const cartaoPokemonParaAbrir = document.getElementById (idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')

        // Remover a classe ativo na listagem (cor Vermelha)
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')


    })
})*/

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.pokemon-card')
 
listaSelecaoPokemons.forEach(pokemon => {
 
    pokemon.addEventListener('click', () => {
        //remover a classe aberto do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')
 
        //pegar o id do pokemon para saber qual eu vou mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
 
        const idCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
 
        //agora vamos abrir o card do pokemon
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('open')
 
        //remover a classe ativo da listagem (cor vermelha)
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
 
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
 
    })
})