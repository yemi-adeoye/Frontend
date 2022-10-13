import { Leave } from "../models/leave.model";
import { Manager } from "../models/manager.model";

export const managers: Manager[]=[
  {
    "id": "1",
    "name": 'Bill Lawry',
    "email": "bill@incedo.com",
    "password": "bill@123"
  },
  {
    "id": "2",
    "name": 'Tony Fraser',
    "email": "tony@incedo.com",
    "password": "tony@123"
  },
  {
    "id": "3",
    "name": 'Adam Sterling',
    "email": "adam@incedo.com",
    "password": "adam@123"
  }
];

export const priority:string[]=[
  'RED', 'BLUE', 'GREEN'
];


export const leaves: Leave[]=[
  {
    "id":   1,
    "to":  '2022-03-16',
  "from":  '2022-03-18',
  "email":  'harry@gmail.com',
  "numDays": 3,
  "year":  2022,
  "status": 'CONFIRMED'
  },
  {
    "id":   2,
    "to":  '2022-05-10',
  "from":  '2022-05-17',
  "email":  'harry@gmail.com',
  "year":  2022,
  "numDays":  5,
  "status": 'CONFIRMED'
  },
  {
    "id":   3,
    "to":  '2022-09-2',
  "from":  '2022-09-6',
  "email":  'harry@gmail.com',
  "year":  2022,
  "numDays":  5,
  "status": 'CONFIRMED'
  }
];
