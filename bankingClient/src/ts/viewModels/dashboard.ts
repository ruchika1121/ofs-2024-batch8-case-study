/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import 'oj-c/form-layout';
import "oj-c/input-text";
import "ojs/ojknockout";

import 'oj-c/input-password';
import "oj-c/input-number";
import "oj-c/button";
import ko = require("knockout");
class DashboardViewModel {
  fname: ko.Observable<string> | ko.Observable<any>;
  lname: ko.Observable<string> | ko.Observable<any>;
  username: ko.Observable<string> | ko.Observable<any>;
  address: ko.Observable<string> | ko.Observable<any>;
  city: ko.Observable<string> | ko.Observable<any>;
  state: ko.Observable<string> | ko.Observable<any>;
  pincode: ko.Observable<number> | ko.Observable<any>;
  phone: ko.Observable<number> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;
  email: ko.Observable<string> | ko.Observable<any>;

  constructor() {
    this.fname = ko.observable(null);
      this.lname = ko.observable(null);
      this.username = ko.observable(null);
      this.address = ko.observable(null);
      this.city = ko.observable(null);
      this.state = ko.observable(null);
      this.pincode = ko.observable(null);
      this.phone = ko.observable(null);
      this.password = ko.observable(null);
      this.email = ko.observable(null);
  }

  addCustomer= async()=>{
    console.log("Function");
    const customer ={
      first_name : this.fname(),
      last_name : this.lname(),
      username : this.username(),
      address_1 : this.address(),
      address_2 : null,
      address_3 : null,
      city : this.city(),
      state : this.state(),
      pin_code : this.pincode(),
      phone_number : this.phone(),
      password : this.password(),
      email : this.email(),
      status : "Pending",
      no_of_attempts : 0,
    }

    // console.log(customer);

    const req = new Request("http://localhost:8080/bankingmain/customer",{
      headers: new Headers({
        "Content-type" : "application/json",
      }),
      body: JSON.stringify(customer),
      method: "POST",
    });
    let resp = await fetch(req);
    console.log(await resp.json());
  }

}

export = DashboardViewModel;
