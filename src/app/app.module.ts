import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, OsComponentes } from './app-routing.module';
import { AppComponent } from './app.component';

import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { SecundarioComponent } from './components/secundario/secundario.component';
import { OutputComponent } from './components/output/output.component';

import { AlterarTextoDirective } from './alterar-texto.directive';
// importando FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilhoZeroComponent } from './components/filho-zero/filho-zero.component';
import { PipeNativoComponent } from './components/pipe-nativo/pipe-nativo.component';
import { RaizQuadrada } from './pipe-raiz-quadrada';

// importando recursos necessários para a aconversão de moeda BRL
import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

// importando o service
import { ProductService } from './product.service';
import { LoggerService } from './logger.service';


registerLocaleData(localePt, 'pt')


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    SecundarioComponent,
    OutputComponent,
    AlterarTextoDirective,
    FilhoZeroComponent,
    PipeNativoComponent,
    RaizQuadrada,
    OsComponentes  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, LoggerService,
                {
                  provide: LOCALE_ID,
                  useValue: 'pt'
                },
                {
                  provide: DEFAULT_CURRENCY_CODE,
                  useValue: 'BRL'
                }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
