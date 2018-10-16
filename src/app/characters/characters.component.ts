import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters : any;
  selectedCharacter: any;
  error: string;
  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }
  getCharacters(){
    
    this.characterService.getCharacters()
    .subscribe(data => {
      this.characters = data.results;
          }

    );

    
  }
  onSelect(Character){
    this.error = "";
  this.selectedCharacter = Character;
  if(Character == undefined){
     this.error = "Please select correct value"
  }
}
}
