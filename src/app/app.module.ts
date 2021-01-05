import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, PokemonsComponent, PokemonComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule, HttpClientModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
