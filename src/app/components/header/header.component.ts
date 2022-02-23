import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Practice';

  // contructor. Usado quando se quer inicializar o codigo um vez.
  constructor() { }

  // lifecycle. Usado quando se quer incializar algum codigo varias vezes.
  ngOnInit(): void {}
  
  toggleAndTask() {
    console.log('toggle')
  }

}
