import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }
   product:any
  ngOnInit(): void {

    this.getData()
  }

  // postData(pass: any) {
  //   return this.http.post<any>("https://ty-shop.herokuapp.com/api/products", pass)
  // }

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

  send(){
    this.route.navigate(["edit"])
  }

}
