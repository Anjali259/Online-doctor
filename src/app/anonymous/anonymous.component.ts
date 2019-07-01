import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.component.html',
  styleUrls: ['./anonymous.component.css']
})
export class AnonymousComponent implements OnInit {

  public question='';

 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(anonymous){
    this.router.navigate(['/anonymous-detail']);
  
    } 
}
