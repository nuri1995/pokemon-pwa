import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.interface';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor(
    private imagesService: PokemonsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    console.log('Name --> ', name);

    this.imagesService.getPokemonByName(name).subscribe((pokemon) => {
      if (!pokemon) {
        return this.router.navigateByUrl('/');
      }
      this.pokemon = pokemon;
      this.pokemon.image_url = this.pokemon.sprites.other.dream_world.front_default;
      console.log(pokemon);
    });
  }
}
