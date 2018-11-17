import {Component, OnInit} from '@angular/core';
import {Member} from "../_models/member";
import {CharacterService} from "../_services/character.service";
import {forEach} from "@angular/router/src/utils/collection";
import {of} from "rxjs/internal/observable/of";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  characters: Member[];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit() {
    this.characterService.getCharacters().subscribe((characters: Member[]) => {
      this.characters = characters;
    });
  }
}
