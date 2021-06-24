import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQD4Un9goEndzaDuqFgU-txXNhrwzVW2vclShWh5MCNT8amfzW5YSHmpqa3l4lFdxZzH6BU97a1bv8exyDdMEK0iOZq-32gJ8fn2ZjJoPmI5K1g_zOUuvWikvHpYtooNGmawWxN5NqM'

    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items ));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`)
      //.pipe( map( data => data['artists'].items ));

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map( data => data['tracks'] ));

  }

}
