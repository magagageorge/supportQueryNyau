import { Customer } from 'src/app/models/customer.model';
import { PipeTransform } from '@angular/core';

export const CUSTOMERS : Customer[] = [
    { id:1, name: 'customer1', email:'c1@gmail.com', address:'somewhere customer 1 ', mobile:'123', phone:'456', category_id:1, user_id:2},
    {id:2, name: 'customer2', email:'c2@gmail.com', address:'somewhere customer 2', mobile:'33423', phone:'5345', category_id:2, user_id:3},
    {id:3, name: 'customer3', email:'c3@gmail.com', address:'somewhere customer3', mobile:'43423', phone:'5345', category_id:4,  user_id:4},
    {id:4, name: 'customer4', email:'c4@gmail.com', address:'somewhere customer 4', mobile:'545', phone:'455356', category_id:3,  user_id:5},
    {id:5, name: 'customer5', email:'c5@gmail.com', address:'somewhere customer 5', mobile:'5435', phone:'454556', category_id:2, user_id:6},
]


