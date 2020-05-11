# NgxStlViewer

This component provides 3D preview for STL files format.

### Usage

_1. Install the package_

```sh
npm i ngx-stl-viewer --save
```

_2. Install the dependencies_

```sh
npm i three --save
npm i three-orbit-controls --save
npm i three-stl-loader --save
```

_3. Import Module_

```ts  
import { NgxStlViewerModule } from 'ngx-stl-viewer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxStlViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```