import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product: any;
  id: any;
  selectedProduct: any;
//   id: any
//   selectedProduct: any;
//   product: any

//   constructor(private http: HttpClient, private route: ActivatedRoute,private rout:Router) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['i']
//     console.log(this.id);

//     this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((res) => {
//       this.product = res.products
//       console.log(this.product);

//       for (let data of this.product) {
//         if (this.id === data._id) {
//           this.selectedProduct = data
//           console.log(this.selectedProduct);

//         }
//       }

//     })


//   }

//   login(data2: any) {

//     console.log(data2);
    
//     this.http.put<any>(`https://ty-shop.herokuapp.com/api/products/${this.selectedProduct._id}`, data2).subscribe((re) => {
//       console.log(re);
//     })
//   }
//    sent(){
//     alert('Product edited Sucessfully')
//      this.rout.navigate(['prod'])
//    }


// }


  constructor(private router:Router, private route: ActivatedRoute,
    private http: HttpClient,
    ) { }
  // edit(form: NgForm) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['i']
    console.log(this.id);

    this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((res) => {
      //  console.log(res);
      this.product = res.products
      console.log(this.product);
      for (let data of this.product) {
        //  console.log(d._id); //id is generated in consloe
        if (this.id === data._id) {
          this.selectedProduct = data;
          console.log(this.selectedProduct);

        }

      }


    })



  }

  login(datas:any){
    console.log(datas);

    this.http.put<any>(`https://ty-shop.herokuapp.com/api/products/${this.selectedProduct._id}`,datas).subscribe(res=>{
      console.log(res);
      
    })
    
  }
  sent(){
    window.alert("Edited Succesfully")
    this.router.navigate(['product'])
    
  }
}
