import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {

    // console.log('Constructor');

  }

  ngOnInit() {

    this.heroes = this.heroesService.getHeroes();

    // console.log(this.heroes);

  }

  verHeroe(index: number) {

    this.router.navigate([ 'heroe', index ]);

  }

}
