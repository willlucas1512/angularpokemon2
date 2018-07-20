import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokemonService {

pokeApiUrl = 'https://pokeapi.co/api/v2/';

  constructor(public http: HttpClient) { 
  	console.log('Hello Pokemon Service');
  }
	getPokemon(id):Observable<any>{
		return this.http.get(this.pokeApiUrl+'pokemon/'+id).map(res=> res);
	}
}
