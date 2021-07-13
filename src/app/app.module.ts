import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemListComponent } from './items/item-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { ItemDetailGuard } from './items/item-detail/item-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ItemDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'items', component: ItemListComponent},
      {
        path:'items/:id',
        canActivate: [ItemDetailGuard], 
        component: ItemDetailComponent
      },
      {path:'welcome', component: WelcomeComponent},
      {path:'', redirectTo: 'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
