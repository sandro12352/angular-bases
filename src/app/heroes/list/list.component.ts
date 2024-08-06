import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=["Spiderman","Hulk","Thor","Deppol"];
  public deleteHero?:string;


  borrarUltimoHeroe():void{
    this.deleteHero =  this.heroNames.pop();
  }

}
