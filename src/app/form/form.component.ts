import { Component, OnInit } from '@angular/core';
import { FormService } from '../core/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public fromstation: any[];
    public tostation: any[];
    public no_of_tickets: any[];
    public type: any[];
  constructor(private formservice:FormService) { }

  ngOnInit() {

    this.fromstation=this.formservice.getfromdata();
    console.log(this.fromstation);

    this.tostation=this.formservice.gettodata();
    console.log(this.tostation);

    this.no_of_tickets=this.formservice.getticketsdata();
    console.log(this.no_of_tickets);

    this.type=this.formservice.getclassdata();
    console.log(this.type);
    
  }

}
