
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";

const routes = [
    {path:'',component:HomeComponent}
]
}
@NgModule({
    imports:[CommonModule, RouterModule.forChild(routes)],
    declarations:[HomeComponent]
    
})
export default class HomeModule{}