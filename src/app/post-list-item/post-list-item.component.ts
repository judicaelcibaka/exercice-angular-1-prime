import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() myPost : any[] = [];
  
  @Input() posttitle: string;
  @Input() postcontent: string;
  @Input() postlove: number;
  @Input() postdontlove: number;
  @Input() postcreated: Date;
  
  AddLoveIt(){
  	return this.postlove + 1;
  }

  AddDontLoveIt(){
  	return this.postdontlove + 1;
  }

  getTendance(){
  	if (this.postlove > this.postdontlove) {
  		return '*La majorité des lecteurs a aimé ce post';
  	} else if (this.postlove < this.postdontlove) {
  		return '*La majorité des lecteurs n\'a pas aimé ce post';
  	} else if (this.postlove == 0 && this.postdontlove == 0) {
  		return '*Ce post n\'a pas encore recueilli d\'avis'
  	} else if (0 < this.postlove == this.postdontlove > 0) {
  		return '*Avis positifs et négatifs s\'équivalent';
  	}
  }

  constructor() { }

  ngOnInit() {
  }

    
}
