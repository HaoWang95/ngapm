import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "../app/welcome/welcome.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { SharedModule } from "../shared/shared.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemDetailGuard } from "./item-detail/item-detail.guard";
import { ItemListComponent } from "./item-list.component";


@NgModule({
    declarations: [
        ItemListComponent,
        ItemDetailComponent,
        ConvertToSpacesPipe,
    ],
    imports: [
        RouterModule.forChild([
            { path: 'items', component: ItemListComponent },
            {
                path: 'items/:id',
                canActivate: [ItemDetailGuard],
                component: ItemDetailComponent
            },
        ]),
        SharedModule
    ]
})
export class ItemModule { }