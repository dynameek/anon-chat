import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartChatComponent } from './start-chat/start-chat.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'start/:id', component: StartChatComponent},
  {path: 'chat/:id', component: ChatComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
