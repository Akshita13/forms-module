import { Injectable } from '@angular/core';


@Injectable()
export class FormService {

    public fromstation: any[];
    public tostation: any[];
    public no_of_tickets: any[];
    public type: any[];


    constructor() {

        this.fromstation = ["valsad","mumbai","delhi","pune"];
        this.tostation = ["kerala","ahmedabad","surat","asam","uttrakhand"];
        this.no_of_tickets=[1,2,3,4,5,6];
        this.type=["SL","AC","GEN"];
    }
    getfromdata() {
        return this.fromstation;
      }
      gettodata() {
        return this.tostation;
      }
      getticketsdata() {
        return this.no_of_tickets;
      }
      getclassdata() {
        return this.type;
      }






}

  




