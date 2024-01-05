
import { Meals } from "./meals";
import { Order } from "./order";
export interface Store {
    option: 'Current' | 'Complete' | 'In Progress';
    products: Meals;
    orders:Order[]; 
}