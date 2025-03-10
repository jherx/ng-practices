import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
 {path:'' , redirectTo:'/home' , pathMatch: 'full' },
 {path:'home' ,component:HomeComponent },
 {path:'contac-reactive' , component: ContactComponent }
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}