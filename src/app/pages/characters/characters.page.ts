import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IonSearchbar } from '@ionic/angular';

import { CleanFiltersService } from '@services/clean-filters.service';
import { ApiService } from '@services/api.service';

import { Character, CharacterInfo, Filters, SelectedFilter } from '@interfaces';

import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit, OnDestroy {
  @ViewChild('searchBar', { static: false }) searchbar: IonSearchbar;

  public errorMessage: string;
  public reqStatus: string;

  public page: number;

  public hasNextValue: boolean;

  public filters: Filters;

  public currentCharacters: Array<Character>;
  public favoritesList: Array<Character>;

  public charactersList$: Subscription;

  public onDestroy$: Subject<boolean> = new Subject<boolean>();
  public sendReq$: Subject<void> = new Subject<void>();

  constructor(
    private cleanFilterService: CleanFiltersService,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.hasNextValue = true;
    this.page = 1;
    this.filters = {
      page: this.page,
    };
    this.favoritesList = [];

    this.charactersList$ = this.listReq()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.getCharacters();
      });
  }

  ngOnInit() {
    const listData = this.activatedRoute.snapshot.data.http;
    const storageData = this.activatedRoute.snapshot.data.storage;

    this.favoritesList = storageData ? storageData : [];

    if (listData.error) {
      this.reqStatus = 'error';
      this.errorMessage = listData.error.error.error;
    } else {
      this.reqStatus = 'success';

      this.currentCharacters = listData.results.map((response: Character) => {
        return this.checkFavorite(response);
      });
    }
  }

  getCharacters() {
    this.apiService
      .getList(this.filters)
      .pipe(
        debounceTime(300),
        takeUntil(this.onDestroy$),
        tap((checkNext: CharacterInfo) => {
          this.hasNextValue = checkNext.info.next ? true : false;
        }),
        tap((setFavorite: CharacterInfo) => {
          setFavorite.results.map((values: Character) => {
            return this.checkFavorite(values);
          });
        }),
        map((result: CharacterInfo) =>
          this.currentCharacters.concat(result.results)
        )
      )
      .subscribe(
        (value: Character[]) => {
          this.currentCharacters = value;
          this.reqStatus = 'success';
        },
        (err) => {
          this.errorMessage = err.error.error;
          this.reqStatus = 'error';
        }
      );
  }

  setFilter(ev: SelectedFilter) {
    this.cleanList();

    if (ev.value == null) {
      delete this.filters[ev.filter];
    } else {
      this.filters[ev.filter] = ev.value;
    }

    this.sendReq();
  }

  searchCharacter(ev) {
    const value = ev.target.value;

    if (value != null) {
      this.cleanList();

      if (value.length == 0) {
        delete this.filters.name;
      } else {
        this.filters.name = value;
      }

      this.sendReq();
    }
  }

  doInfinite(ev) {
    this.page++;

    this.filters.page = this.page;

    if (this.filters.name == '') {
      delete this.filters.name;
    }

    this.sendReq();
    ev.target.complete();
  }

  cleanList() {
    this.currentCharacters = [];
    this.page = 1;
    this.filters.page = this.page;
  }

  checkFavorite(response: Character) {
    const isFavorite = this.favoritesList.some((element) => {
      if (element.id === response.id) {
        return true;
      }

      return false;
    });

    return { ...response, favorite: isFavorite };
  }

  cleanFilters() {
    this.searchbar.value = null;
    this.currentCharacters = [];

    this.filters = {
      page: 1,
    };

    this.cleanFilterService.sendCleaner();
    this.sendReq();
  }

  listReq() {
    return this.sendReq$.asObservable();
  }

  sendReq() {
    this.sendReq$.next();
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }
}
