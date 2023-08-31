import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DisplayAllProductComponent } from './components/display-all-product/display-all-product.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'help', component:HelpComponent},
  {path:'contact', component:ContactComponent},
  {path:'demo', component:DemoComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'displayAllProduct', component:DisplayAllProductComponent},
  {path:'**', component:PageNotFoundComponent}
]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
