import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

@Component({
  selector: 'app-state-counter',
  templateUrl: './state-counter.component.html',
  styleUrls: ['./state-counter.component.scss']
})
export class StateCounterComponent implements OnInit {

  count$ : Observable<number>;

  constructor(private readonly store: Store) {
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
