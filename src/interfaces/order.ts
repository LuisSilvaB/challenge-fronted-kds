import { Meal } from "./meals";
export interface Order {
    id: string;
    date: string;
    products: Meal[];    
    state: 'Current' | 'Complete' | 'In Progress' | 'Cancel';
    timeStatus?: 'Just Created' | 'On Time' | 'Late';
}
export interface Orders{
    orders: Order[];
}