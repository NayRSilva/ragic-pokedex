import { createRoutes, path, UseRoutes } from 'ragic';
import { HomePage } from './pages/HomePage';
import { ListAllPokemonPage } from './pages/ListAll';
import { ListPokemonByTypePage } from './pages/ListByType';

export const routes = createRoutes()
    .path('/', { component: HomePage })
    .path('/home', { link_to: '/' })
    .path('/pokemon', { component: ListAllPokemonPage })
    .path('/pokemons', { link_to: '/' })
    .path("/type", {
        children: path("/:type_id", { component: ListPokemonByTypePage }),
    })
/*   .path('/blog', {
    component: BlogListPage,
    children: path('/:blog_id', {component: ViewBlogPostPage})
             .path('/new', {component: CreateBlogPostPage}),
  })
  .path('/about-us', { component: AboutUsPage }); */

export const { Link, Router, useRouteParams } = UseRoutes(routes)