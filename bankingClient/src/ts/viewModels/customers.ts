/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import "oj-c/button";
class CustomersViewModel {

  constructor() {

  }

  logOut = async()=>{
    localStorage.clear();
    window.location.href='?ojr=dashboard'
  }
}

export = CustomersViewModel;
