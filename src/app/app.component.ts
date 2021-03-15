import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT-SHOPING';
  loadedFeature = 'recipe';

 @Input() featureToBe : string;

 onNavigate(feature:string){
  this.loadedFeature = feature;
 }

}
