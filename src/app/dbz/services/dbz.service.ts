import { Injectable } from '@angular/core';
import {v4 as uudi} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public characters: Character[] =[{
        id :uudi(),
        name:"Krillin",
        power:1000
    },
    {
        id :uudi(),
        name:"Gokú",
        power:9500
    },
    {
        id :uudi(),
        name:"Vegeta",
        power:9000
    }

    ];
    
    addCharacter(character:Character):void{
        const newCharacter = {id:uudi(),...character}

        this.characters.push(newCharacter);
    }


    deleteCharacterById(id:string):void{
        this.characters = this.characters.filter(character => character.id !==id);
    }
    
}