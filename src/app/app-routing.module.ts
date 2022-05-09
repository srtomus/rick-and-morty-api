import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpResolverService } from './resolvers/http-resolver.service';
import { StorageResolverService } from './resolvers/storage-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.module').then(
        (m) => m.CharactersPageModule
      ),
    resolve: { http: HttpResolverService, storage: StorageResolverService },
  },
  {
    path: 'character/:id',
    loadChildren: () =>
      import('./pages/character/character.module').then(
        (m) => m.CharacterPageModule
      ),
    resolve: { http: HttpResolverService },
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./pages/favorites/favorites.module').then(
        (m) => m.FavoritesPageModule
      ),
    resolve: { storage: StorageResolverService },
  },
  {
    path: '**',
    redirectTo: 'characters',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
