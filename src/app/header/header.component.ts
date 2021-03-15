import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Output()  featuerSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(featured : string){
    this.featuerSelected.emit(featured)
  }

}
