import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { ItemModule } from './items/item.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'},
    ]),
    ItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
