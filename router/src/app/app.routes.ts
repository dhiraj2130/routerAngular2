
import {RouterModule} from "@angular/router";

const routes = [
    {path:'contacts',loadChildren:'./Contacts/contacts.module'},
   // {path:'contacts/1',loadChildren:'./Contact/contact.module'},
    {path:'',loadChildren:"./Home/home.module"}

];

export default RouterModule.forRoot(routes);