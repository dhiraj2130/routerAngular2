
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import homeRoutes from "./home.routes";
import { HomeComponent } from "./home.component";
import { StoreModule } from '@ngrx/Store';
import { clock } from './clock_reducers';

@NgModule({
    imports:[CommonModule, homeRoutes,
        StoreModule.provideStore({clock})
    ],
    declarations:[HomeComponent]

})
export default class HomeModule{}