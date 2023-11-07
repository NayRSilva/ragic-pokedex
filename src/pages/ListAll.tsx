import { useAllPokemon } from "../api/allPokemon"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"
import { Link } from "../routes"

export const ListAllPokemonPage = () => {
  const data = useAllPokemon()
  return (
    <>
  {/*TODO: Me create a component specific to list the pokemons, I shouldnt need to repeat this code */}
      <Navbar />
      <PageContent>
        <PageTitle>List all Pokemon</PageTitle>
        <PokelistContainer>
          {!data ? (
            <Loading />
          ) : (
            data.map((pokemon) => (
              <Link to="/pokemon/:pokemon_id" params={{pokemon_id:pokemon.id}}>
              <PokeCard pokemon={pokemon} key={pokemon.name} />
              </Link>
            ))
          )}
        </PokelistContainer>
      </PageContent>
    </>
  )
}
