import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

  
const routes: Routes = [
  
  {path : '', redirectTo: '/usuarios', pathMatch: 'full'},
  {
    path: 'albumes', 
    loadChildren: () => import('./pages/albumes/albumes.module').then(m => m.AlbumesModule)
  },
  {
    path: 'posteos', 
    loadChildren: () => import('./pages/posteos/posteos.module').then(m => m.PosteosModule)
  },
  {
    path: 'usuarios', 
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'todos', 
    loadChildren: () => import('./pages/todos/todos.module').then(m => m.TodosModule)
  },
  {path : '**', redirectTo: '/usuarios', pathMatch: 'full'},
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
