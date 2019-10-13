import { CartModel } from '../models/cart.model';
import { ActionModel } from '../models/action.model';
import { ActionTypes } from '../actions/cart.ations';
import { ProductModel } from '../models/product.model';

export const cart = new CartModel();

export function cartReducer(state = cart, action: ActionModel) {
  switch (action.type) {
    case ActionTypes.Add: {
      state.products.push(action.payload);
      state.total = calculateTotal(state.products);

      return state;
    }

    case ActionTypes.Remove: {
      const index = state.products.indexOf(action.payload);
      state.products.slice(index, 1);
      state.total = calculateTotal(state.products);

      return state;
    }

    case ActionTypes.Clear: {
      state = new CartModel();
      state.total = 0;
    }

    default:
      return state;
  }
}

function calculateTotal(products: ProductModel[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}
