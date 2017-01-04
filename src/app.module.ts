import {NgModule} from "@angular/core";
import {DataService} from 'src/services/dataService'; 
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from 'src/app';
import {HttpModule} from "@angular/http";
import { FormsModule }   from '@angular/forms';




@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent ],
  providers: [DataService],
  bootstrap: [ AppComponent ]
})
export class AppModule {}