import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from 'src/app/view/components/home/home.component';
import { ContactComponent } from 'src/app/view/components/contact/contact.component';
import { DefaultComponent } from './default.component';
import { PageNotFoundComponent } from 'src/app/view/components/page-not-found/page-not-found.component';
import { ProductCreateComponent } from 'src/app/view/components/product/product-create/product-create.component';
import { ProductDetailComponent } from 'src/app/view/components/product/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/view/components/product/product-list/product-list.component';
import { CategoryListComponent } from 'src/app/view/components/category/category-list/category-list.component';
import { ClendarComponent } from 'src/app/view/components/clendar/clendar.component';
import { CategoryCreateComponent } from 'src/app/view/components/category/category-create/category-create.component';
import { UserListComponent } from 'src/app/view/components/user/user-list/user-list.component';
import { ProductEditComponent } from 'src/app/view/components/product/product-edit/product-edit.component';

@NgModule({
  declarations: [
     HomeComponent,
     ContactComponent,
     DefaultComponent,
     PageNotFoundComponent,
     ProductCreateComponent,
     ProductDetailComponent,
     ProductListComponent,
     CategoryListComponent,
     ClendarComponent,
     CategoryCreateComponent,
     UserListComponent,
     ProductEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    GoogleMapsModule,
    ReactiveFormsModule ,
    ToastrModule.forRoot()
  ],

})
export class DefaultModule { }
