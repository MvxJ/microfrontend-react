import { mount } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

mount(document.querySelector('#devProductsList'));
mountCart(document.querySelector('#my-cart'));