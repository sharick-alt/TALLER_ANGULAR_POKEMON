import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly pokemonService = inject(PokemonService);

  query = signal('ditto');
  pokemon = signal<Pokemon | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  buscar(): void {
    const term = this.query().trim();
    if (!term) {
      this.error.set('Escribe el nombre de un Pokémon.');
      this.pokemon.set(null);
      return;
    }

    this.loading.set(true);
    this.error.set(null);

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.pokemon.set(null);
        this.error.set(`No se encontró ningún Pokémon llamado "${term}".`);
        this.loading.set(false);
      },
    });
  }
}
