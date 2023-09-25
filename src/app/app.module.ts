import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCpntComponent } from './componente1/first-cpnt/first-cpnt.component';
import { SecondComponent } from './componente1/second/second.component';
import { DiretivasComponent } from './componente1/diretivas/diretivas.component';
import { CondicoesComponent } from './componente1/condicoes/condicoes.component';
import { EventosComponent } from './componente1/eventos/eventos.component';
import { EventoOutComponent } from './componente1/evento-out/evento-out.component';
import { ChangeNumbComponent } from './componente1/change-numb/change-numb.component';
import { ListasComponent } from './componente1/listas/listas.component';
import { PipesComponent } from './componente1/pipes/pipes.component';
import { TwoWayBindigComponent } from './componente1/two-way-bindig/two-way-bindig.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCpntComponent,
    SecondComponent,
    DiretivasComponent,
    CondicoesComponent,
    EventosComponent,
    EventoOutComponent,
    ChangeNumbComponent,
    ListasComponent,
    PipesComponent,
    TwoWayBindigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
