import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
}

interface PokeApiResponse {
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(name: string): Observable<Pokemon> {
    const query = name.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      })),
    );
  }
}
