import { createRoutes, path, UseRoutes } from 'ragic';
import { HomePage } from './pages/HomePage';
import { ListAllPokemonPage } from './pages/ListAll';
import { ListPokemonByTypePage } from './pages/ListByType';
import { ShowPokemonPage } from './pages/ShowPokemon';

export const routes = createRoutes()
    .path('/', { component: HomePage })
    .path('/home', { link_to: '/' })
    .path("/pokemon", {
        component: ListAllPokemonPage,
/*         children: path("/:pokemon_id", {
            //needed to turn this into an arrow function to make it work or change the route to route.tsx
            //either update documentation or make it valid both ways
            component: ShowPokemonPage }),
        }) */
     children: path("/:pokemon_id", {
            //needed to turn this into an arrow function to make it work or change the route to route.tsx
            component:()=> <ShowPokemonPage/> }),
        }) 
            .path('/pokemons', { link_to: '/' })
            .path('/type', {
                children: path('/:type_id', { component: ListPokemonByTypePage }),
            })

export const { Link, Router, useRouteParams } = UseRoutes(routes)