import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      { 
        name: 'First event', date: '2022.01.31', time: '10:00', 
        location: {
          city: 'Bp',
          country: 'Hun',
          address: 'Any street 1'
        }
      },
      { 
        name: 'Second event', date: '2022.01.31', time: '11:00', 
        location: {
          city: 'Bp',
          country: 'Hun',
          address: 'Any street 1'
        }
      },
      { 
        name: 'Third event', date: '2022.01.31', time: '12:00', 
        location: {
          city: 'Bp',
          country: 'Hun',
          address: 'Any street 1'
        }
      },

    ]
  }
}
