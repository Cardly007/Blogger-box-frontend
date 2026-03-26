import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBar } from './components/top-bar/top-bar';
import { App } from './app';
import { PostList } from './components/post-list/post-list';
const routes: Routes = [{ path: '', component: PostList }];

@NgModule({
  // declarations: [PostList],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App]

})
export class AppRoutingModule { }
