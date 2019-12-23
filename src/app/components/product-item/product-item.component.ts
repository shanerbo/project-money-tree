import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
  products = [
    { name: "Product A", titles: { title: "title A", subTitle: "subTitle A" }, price: "CAD 100", picture: { uri: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1572825197207', thumbNail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1572825197207' } },
    { name: "Product B", titles: { title: "title B", subTitle: "subTitle B" }, price: "CAD 110", picture: { uri: 'https://dummyimage.com/300x300/000/fff', thumbNail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1572825197207' } },
    { name: "Product C", titles: { title: "title C", subTitle: "subTitle C" }, price: "CAD 120", picture: { uri: 'https://dummyimage.com/300x400/000/fff', thumbNail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1572825197207' } },
    { name: "Product D", titles: { title: "title D", subTitle: "subTitle D" }, price: "CAD 130", picture: { uri: 'https://dummyimage.com/600x500/000/fff', thumbNail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=400&hei=400&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1572825197207' } }]
  ngOnInit() {
  }

}
