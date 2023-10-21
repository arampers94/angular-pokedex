import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Move } from 'pokenode-ts';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { MoveActions, MoveSelectors } from 'src/app/store';

@Component({
  selector: 'app-move-detail',
  templateUrl: './move-detail.component.html',
  styleUrls: ['./move-detail.component.scss']
})
export class MoveDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() moveName = '';
  public moveData?: Move;
  public getMoveLoading$: Observable<boolean> = 
    this.store$.select(
      MoveSelectors.selectGetMoveLoading
    );

  private destroyed$ = new Subject<boolean>;

  constructor(
    private store$: Store,
    private actions$: Actions,
  ) { }

  ngOnInit(): void {
    this.actions$.pipe(
      ofType(MoveActions.getMoveSuccess),
      takeUntil(this.destroyed$),
      tap(({ move }) => {
        this.moveData = move;
      })
    )
    .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['moveName']) {
      console.log('got name')
      console.log(changes['moveName']);
      this.getMoveData(this.moveName);
      // this.moveDescription = this.moveData.flavor_text_entries?.find(item => { return item.language.name === "en" })?.flavor_text;
      // this.moveShortEffect = this.moveData.effect_entries?.find(effect => { return effect.language.name === "en" })?.short_effect;
      // let effectChance = this.moveData.effect_chance?.toString();
      // this.moveShortEffect = this.moveShortEffect?.replace('$effect_chance', effectChance ? effectChance : '');
    }
  }

  // TODO: load individual move data
  public getMoveData(moveName: string): void {
    console.log('getMoveData called');
    if (!this.moveData?.id) {
      console.log('inside condition')
      this.store$.dispatch(MoveActions.getMove({ moveName }));
    }
  }

  get moveDescription(): string {
    return this.moveData?.flavor_text_entries?.find(item => { return item.language.name === "en" })?.flavor_text || '';
  }

  get moveShortEffect(): string {
    return this.moveData?.effect_entries?.find(effect => { return effect.language.name === "en" })?.short_effect || '';
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
