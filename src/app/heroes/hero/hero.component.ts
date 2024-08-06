import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "iron man";
  public age:number = 45;
  
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getheroDescription():string{
    return `${this.name.toUpperCase()}-${this.age}`
  }
  
  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 23;
  }

  resetForm():void{
    this.name = "iron man";
    this.age = 45

    // document.querySelectorAll("h1")!.forEach(el=>{
    //   el.innerHTML = `<h1>Desde Angular</h1>`;
    // })

  }

}
