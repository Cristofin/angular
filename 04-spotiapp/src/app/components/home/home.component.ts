import { Component } from '@angular/core';

import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
  error: boolean;
  loading: boolean;
  mensajeError: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe( (data) => {

        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;

      }, ( errorServicio => {

        this.loading = false;
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;

      }));

  }

}
