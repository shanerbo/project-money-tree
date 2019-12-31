import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.scss']
})
export class ModifyProductComponent implements OnInit {
  selectedCategories: string[];
  SKU: string;
  detail: any;
  constructor(private ps: ProductService, private route: ActivatedRoute) {
    this.SKU = this.route.snapshot.paramMap.get('SKU');
    if (this.SKU) {
      this.ps.fetchProduct(this.SKU).then(result => {
        this.detail = result;
      }).catch(error => console.error(error));
    } else {
    }
  }
  ngOnInit() {
  }
  public gimmeDatCategories(categoriesFromChild: string[]) {
    console.log(categoriesFromChild + " : I am parent, I got cats");
    this.selectedCategories = categoriesFromChild;
  }
  public iNeedaUpdateProduct(fg: FormGroup) {
    console.log(fg.value + " : I am parent, I got detail");
    fg.patchValue({ productCategory: this.selectedCategories ? this.selectedCategories : [] });
    this.ps.addProduct(fg.value).then(result => console.log(result)).catch(error => console.error(error));
    fg.reset();
  }
}

