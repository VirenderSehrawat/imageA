import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from '../routes';
import { LoginComponent } from './login.component'
import { ImageListComponent } from './image-list/image-list.component';
import { ImageServiceAPI } from './shared/image.service';

import { MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatProgressBarModule,
  MatIconModule,
  MatDialogModule } from '@angular/material';
// import { MasonryModule } from 'angular2-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    GalleryComponent,
    ImageComponent,
    NavbarComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    // MasonryModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterPipe, ImageServiceAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
