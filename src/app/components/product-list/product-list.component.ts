import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { DataService } from './../../data.service';
import { Add } from './../../actions/cart.ations';
import { CartModel } from './../../models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController,
    private service: DataService,
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => this.products = [...data]);
  }

  async add(product) {
    this.store.dispatch(Add(product));

    const toast = await this.toastCtrl.create({
      message: `${product.title} adicionado ao carrinho`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    toast.present();
  }

}
