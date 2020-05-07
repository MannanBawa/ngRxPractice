import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { incrementRed, decrementRed, resetRed } from './counter.actions';
import { selectRedCounter, selectPurpleCounter } from './counter.selector';

@Component({
  selector: 'app-state-counter',
  templateUrl: './state-counter.component.html',
  styleUrls: ['./state-counter.component.scss']
})
export class StateCounterComponent implements OnInit {

  count$ : Observable<number>;
  count;

  purpCount$;

  constructor(private readonly store: Store) {
    this.count$ = store.pipe(select('count'));

    
  }

  ngOnInit() {
    this.count$.subscribe(count => {
      this.count = count;
    })

    this.purpCount$ = this.store.pipe(select(selectPurpleCounter));
  }

  increment() {
    this.store.dispatch(incrementRed());
  }

  decrement() {
    this.store.dispatch(decrementRed());
  }

  reset() {
    this.store.dispatch(resetRed());
  }

}
