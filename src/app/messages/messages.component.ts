import { Component, OnInit,Input ,OnChanges} from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})



export class MessagesComponent implements OnChanges {
film_1 : any;
i :  number;
filmsArray: any[] = [];
  @Input() char;

  constructor(public messageService: MessageService) { }

  ngOnChanges() {
    this.filmsArray.length = 0;
    if(this.char){
    this.getFilms();
    }
  }
  getFilms(){
    for(this.i = 0; this.i < this.char.films.length; this.i++)
    {
    this.messageService.getFilms(this.char.films[this.i])
    .subscribe(data => {
      const datas = data.title;
      if (datas) {
           this.filmsArray.push(datas)
      } 
          });
        
        }

}
}