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
import 'oj-c/form-layout';
import "oj-c/button";
import * as AccUtils from "../accUtils";
import { IntlConverterUtils } from "@oracle/oraclejet/ojconverterutils-i18n";
class DashboardViewModel {
  
  fname: ko.Observable<string> | ko.Observable<any>;
  lname: ko.Observable<string> | ko.Observable<any>;
  salary: ko.Observable<number> | ko.Observable<any>;
  password: ko.Observable<string> | ko.Observable<any>;
  datevalue: ko.Observable<string> | ko.Observable<any>;
  activatedButton: ko.Observable<string> | ko.Observable<any>;
    constructor() {
      this.fname = ko.observable(null);
      this.lname = ko.observable(null);
      this.salary = ko.observable(null);
      this.password = ko.observable(null);
      this.datevalue = ko.observable(null);
      this.activatedButton = ko.observable(null);
     }

    public buttonAction = (event: Event) => {
      this.activatedButton((event.currentTarget as HTMLElement).id);
      return true;
    };
  
}

export = DashboardViewModel;
