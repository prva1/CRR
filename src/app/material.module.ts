import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { MatFormFieldModule,MatExpansionModule,MatCardModule,MatGridListModule,MatToolbarModule,MatButtonModule,MatTableModule  } from '@angular/material';

//

// Material 2 
/* import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider'; */
//import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
imports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule ,MatButtonModule,MatFormFieldModule],
exports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule, MatButtonModule,MatFormFieldModule ]
})

export class MaterialModule {


}