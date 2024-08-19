/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import ko = require("knockout");
import * as AccUtils from "../accUtils";
import 'oj-c/form-layout';
import "oj-c/button";
import "oj-c/input-text";
import 'oj-c/input-password';
class IncidentsViewModel {
  username: ko.Observable<string> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;
  output: ko.Observable<string> | ko.Observable<any>;
    constructor() {
      this.username = ko.observable(null);
      this.password = ko.observable(null);
      this.output = ko.observable(null);
  }
  public input_handler = async () => {
      const row = {
          username : this.username(),
          password  : this.password(),
        
      }
      let url = 'http://localhost:8080/bankingmain/customer/login';

      const req = new Request(url, {
          headers: new Headers({
              "Content-type": "application/json; charset=UTF-8",
          }),
          body: JSON.stringify(row),
          method: "POST"
      })
      const response = await fetch(req);
      const dataset = await response.json();
      
      console.log(dataset);
      
      if (dataset.username === 'Invalid Username') {
        this.output("Invalid Username");
      } else {
          if (dataset.no_of_attempts <= 3 && dataset.status != "Blocked") {
              if(dataset.username==this.username() && dataset.password==this.password()){
                this.output("Successfull Login")
                localStorage.setItem('final',JSON.stringify(dataset));
                window.location.href='http://localhost:8000/?ojr=incidents'
              }else{
                this.output("Wrong Password")
              }
          } else {
              this.output("This Account is Blocked");
          }
      }
    
      
  }
}

export = IncidentsViewModel;
