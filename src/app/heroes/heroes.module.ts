import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule //Es para las directivas de *ngfor, *ngIf, etc; sin esta no funcionan
    ]
})
export class HeroesModule{}