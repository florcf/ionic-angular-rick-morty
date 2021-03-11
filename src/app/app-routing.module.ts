import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'characters-list',
    pathMatch: 'full'
  },
  {
    path: 'characters-list',
    loadChildren: () => import('./characters-list/characters-list.module').then( m => m.CharactersListPageModule)
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
