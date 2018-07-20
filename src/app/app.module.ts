import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component'
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
