import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 product:any
  constructor(private use:ProductComponent,private http:HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

  // login(form:NgForm){
  // //  this.use.postData(form.value).subscribe((val: any) => {
  // //     form.reset()
  // //     alert("product Added successfully")
  // //     let closeAuto=document.getElementById("close")
  // //     closeAuto?.click()
  // //     console.log(val); 
  // //     this.getData()
  // //   })



  // }



  edit(form:NgForm){
    console.log( form.value);
return this.http.post(`https://ty-shop.herokuapp.com/api/products`,form.value).subscribe(val=>{
  console.log( val);
  alert("product added succesfully")
  this.route.navigate(["product"])
})
  }


  getData(){
    return this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((res)=>{
     
    this.product=res.products
    console.log(this.product);
   })
 }

 deleteData(id: any){
   return this.http.delete<any>(`https://ty-shop.herokuapp.com/api/products${id}`).subscribe((re)=>{
     console.log(re);
     
   })
 }

 editProduct(u: any){
  console.log( "edit");  
  
    }

}
