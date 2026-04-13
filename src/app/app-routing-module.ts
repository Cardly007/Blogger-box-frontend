import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core'; // Correction du "vimport"
import { RouterModule, Routes } from '@angular/router';

import { App } from './app';
import { PostList } from './components/post-list/post-list';
import { UserListComponent } from './components/user-list-component/user-list-component';
import { UserDetailsComponent } from './components/user-details-component/user-details-component';
import { AddPostComponent } from './components/add-post/add-post';

const routes: Routes = [
  { path: '', component: PostList },

  { path: 'add-post', component: AddPostComponent },

  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailsComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideBrowserGlobalErrorListeners()],
})
export class AppRoutingModule { }