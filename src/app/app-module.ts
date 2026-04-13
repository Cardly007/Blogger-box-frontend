import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TopBar } from './components/top-bar/top-bar';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostList } from './components/post-list/post-list';
import { PostListItem } from './components/post-list-item/post-list-item';
import { UserListComponent } from './components/user-list-component/user-list-component';
import { UserDetailsComponent } from './components/user-details-component/user-details-component';
// import { AppComponent } from './components/app-component/app-component';
import { AddPostComponent } from './components/add-post/add-post';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    TopBar,
    PostList,
    PostListItem,
    UserListComponent,
    UserDetailsComponent,
    // AppComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
