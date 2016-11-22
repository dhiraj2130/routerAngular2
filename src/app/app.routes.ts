
import {RouterModule} from "@angular/router";
import {ContactsComponent} from "./contacts/contacts.component";

const routes = [
    {path:'',loadChildren:'./Home/home.module'},
    {path:'contacts',component:ContactsComponent}
];

export default RouterModule.forRoot(routes);