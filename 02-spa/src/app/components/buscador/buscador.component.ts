import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {

      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroe(params.termino);

    } );

  }

  verHeroe(index: number) {

    this.router.navigate([ 'heroe', index ]);

  }

}
