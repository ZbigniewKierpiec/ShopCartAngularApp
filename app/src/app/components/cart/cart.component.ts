import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
  }
  emptyCart() {
    this.cartservice.removeAllCart();
  }
}
