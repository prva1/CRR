import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { MatExpansionModule,MatPaginatorModule,MatCardModule,MatGridListModule,MatToolbarModule,MatButtonModule,MatTableModule,MatTabsModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

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
imports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule ,MatButtonModule,MatFormFieldModule, MatTabsModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatIconModule ] ,
exports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule, MatButtonModule,MatFormFieldModule, MatTabsModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatIconModule ]
})

export class MaterialModule {


}