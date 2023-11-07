import { usePokemonByType } from "../api/fetchPokemonByType"
import { Loading } from "../components/Loading"
import { Navbar } from "../components/Navbar"
import { PageContent } from "../components/PageContent"
import { PageTitle } from "../components/PageTitle"
import { PokeCard } from "../components/PokeCard"
import { PokelistContainer } from "../components/PokelistContainer"
import { TypeBadge } from "../components/TypeBadge"
import { Link, useRouteParams } from "../routes"

export const ListPokemonByTypePage = () => {

  
  const {type_id: typeId} = useRouteParams()
  //documentation needs to be updated, the example doesnt show the explicit use of useRouteParams


  const { name, pokemon: pokemons } = usePokemonByType(typeId.toString())

  console.log(pokemons)

  return (
    <>
      <Navbar />
      <PageContent>
        <PageTitle>
          {!name ? <Loading /> : <TypeBadge name={name!}>{name}</TypeBadge>}{" "}
          Pokemon
        </PageTitle>
        <PokelistContainer>
          {!pokemons ? (
            <Loading />
          ) : (
            pokemons.map((pokemon) => (
             <Link to='/pokemon/:pokemon_id' params={{pokemon_id:pokemon.id }}>
              <PokeCard pokemon={pokemon} key={pokemon.name} />
             </Link>
            ))
          )}
        </PokelistContainer>
      </PageContent>
    </>
  )
}
