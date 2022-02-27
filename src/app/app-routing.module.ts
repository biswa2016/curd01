import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"prod",component:ProductComponent},
  {path:"add",component:AddproductComponent},
  {path:'edit/:i',component:EditproductComponent},
  {path:"",redirectTo:"prod",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
