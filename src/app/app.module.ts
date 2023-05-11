import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataMock } from './core/mocks/in-memory-data.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuemSomosModule } from './modules/quem-somos/quem-somos.module';
import { ContatoModule } from './modules/contato/contato.module';
import { ServicoModule } from './modules/servico/servico.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { FooterModule } from './shared/components/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuemSomosModule,
    ContatoModule,
    ServicoModule,
    ClientesModule,
    FooterModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', scrollOffset: [0, 70]
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataMock, { dataEncapsulation: false, delay: 0, passThruUnknownUrl: true },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
