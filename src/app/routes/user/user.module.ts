import {NgModule, NgModuleRef} from '@angular/core';
import {UserRoutingModule} from './user-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {UserListComponent} from './list/list.component';
import {UserEditComponent} from './edit/edit.component';
import {UserViewComponent} from './view/view.component';
import {UserCreateComponent} from "./create/create.component";
import {ListService} from "./list/list.service";

const COMPONENTS = [
    UserListComponent];
const COMPONENTS_NOROUNT = [
    UserEditComponent,
    UserViewComponent,
    UserCreateComponent
];

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule,

    ],
    declarations: [
        ...COMPONENTS,
        ...COMPONENTS_NOROUNT
    ],
    providers: [ListService],
    entryComponents: COMPONENTS_NOROUNT
})
export class UserModule {
}
