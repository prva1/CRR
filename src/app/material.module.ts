/* Module like a Package/Wrapper for dependencies belongs to @angular/material */

import { APP_BASE_HREF } from '@angular/common';

import { NgModule } from '@angular/core';
import { MatExpansionModule,MatPaginatorModule,MatCardModule,MatGridListModule,MatToolbarModule,MatButtonModule,MatTableModule,MatTabsModule} from '@angular/material';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
imports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule ,MatButtonModule,MatFormFieldModule, MatTabsModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatIconModule ] ,
exports:[MatExpansionModule,MatCardModule,MatToolbarModule,MatGridListModule,MatTableModule, MatButtonModule,MatFormFieldModule, MatTabsModule, MatSelectModule, MatInputModule, MatPaginatorModule,MatIconModule ]
})
export class MaterialModule { }