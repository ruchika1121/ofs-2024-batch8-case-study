/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as ko from "knockout";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import 'oj-c/input-password';
import "ojs/ojdatetimepicker";
import "my-component/loader"
import 'oj-c/form-layout';
import "oj-c/button";
import "oj-c/progress-circle";
import 'oj-c/avatar';
import 'oj-c/list-item-layout';
import 'oj-c/list-view';
import ArrayDataProvider = require('ojs/ojarraydataprovider');

import * as AccUtils from "../accUtils";
import { IntlConverterUtils } from "@oracle/oraclejet/ojconverterutils-i18n";
class DashboardViewModel {
  id: ko.Observable<number> | ko.Observable<any>;
  fname: ko.Observable<string> | ko.Observable<any>;
  lname: ko.Observable<string> | ko.Observable<any>;
  salary: ko.Observable<number> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;
  datevalue: ko.Observable<string> | ko.Observable<any>;
  activatedButton: ko.Observable<string> | ko.Observable<any>;
  submitButton: ko.Observable<string> | ko.Observable<any>;
    constructor() {
      this.id =ko.observable(null)
      this.fname = ko.observable(null);
      this.lname = ko.observable(null);
      this.salary = ko.observable(null);
      this.password = ko.observable(null);
      this.datevalue = ko.observable(null);
      this.activatedButton = ko.observable(null);
      this.submitButton = ko.observable(null);
     }

    public buttonAction = (event: Event) => {
      this.activatedButton((event.currentTarget as HTMLElement).id);
      return true;
    };

    public callApi = async (event : Event)=>{
      let scroll = document.getElementById("scroll");
      if(scroll!=null){
        scroll.hidden=false;
      }
      setTimeout(()=>{
        if(scroll!=null){
          scroll.hidden=true;
        }
      },5000)
      let id1 = this.id();
      let url = "https://jsonplaceholder.typicode.com/users/"+id1;
      let res = await fetch(url);
      let new_res = await res.json();
      setTimeout(() => {
        let nameParts = new_res.name.trim().split(" ");
        let fname = nameParts[0];
        let lname = nameParts.slice(1).join(" ");
        let new_sal = new_res.address.zipcode.trim().split("-")
        this.fname(fname)
        this.lname(lname)
        this.salary(parseInt(new_sal[0]))
    }, 5000);
      
      return true;
    }
    public submit = (event:Event) =>{
      let btn = document.getElementById("info");
      if(btn!=null){
        btn.hidden=false;
      }
      return true;
    }

    private readonly data = [
      {
        id: 1,
        name: 'Chris Black',
        title: 'Oracle Cloud Infrastructure GTM Channel Director EMEA',
        image: '../images/hcm/placeholder-male-01.png'
      },
      {
        id: 2,
        name: 'Christine Cooper',
        title: 'Senior Principal Escalation Manager',
        image: '../images/hcm/placeholder-female-01.png'
      },
      {
        id: 3,
        name: 'Chris Benalamore',
        title: 'Area Business Operations Director EMEA & JAPAC',
        image: '../images/hcm/placeholder-male-03.png'
      },
      {
        id: 4,
        name: 'Christopher Johnson',
        title: 'Vice-President HCM Application Development',
        image: '../images/hcm/placeholder-male-04.png'
      },
      {
        id: 5,
        name: 'Samire Christian',
        title: 'Consulting Project Technical Manager',
        image: '../images/hcm/placeholder-male-05.png'
      },
      {
        id: 6,
        name: 'Kurt Marchris',
        title: 'Customer Service Analyst',
        image: '../images/hcm/placeholder-male-06.png'
      },
      {
        id: 7,
        name: 'Zelda Christian Cooperman',
        title: 'Senior Principal Escalation Manager',
        image: '../images/hcm/placeholder-female-02.png'
      }
    ];
  
    readonly dataProvider = new ArrayDataProvider(this.data, {
      keyAttributes: 'value'
    });
    
}

export = DashboardViewModel;
