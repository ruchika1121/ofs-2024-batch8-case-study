/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import "oj-c/input-text";
import "ojs/ojknockout";
import "oj-c/input-number";
import 'oj-c/form-layout';
import "oj-c/button";
import { RESTDataProvider } from 'ojs/ojrestdataprovider';
import ko = require("knockout");
import 'ojs/ojtable';
type D ={"id" : number; "name" : string}
type K =D['id']
class CustomersViewModel {
  id: ko.Observable<number> | ko.Observable<any>;
  nameInp: ko.Observable<string> | ko.Observable<any>;
  dataprovider : RESTDataProvider<K, D>;
  isUpdate: ko.Observable<boolean> ;
  constructor(){
      this.id =ko.observable(null)
      this.nameInp = ko.observable(null);
      this.isUpdate = ko.observable(false);
      this.dataprovider = new RESTDataProvider({
        keyAttributes : 'id',
        url:'http://localhost:8888/employees',
        transforms:{
          fetchFirst : {
            request : async(options)=>{
              const url = new URL(options.url);
              return new Request(url.href)
            },
            response : async({body})=>{
              let data = body;
              console.log(body);
              console.log({body});
            return {data};
            }
          }
        }
      });
  }
  checkSubmit = async()=>{
    if(!this.isUpdate()){
      this.addRow();
    }
    else{
      this.trueUpdate();
    }
  }

  trueUpdate = async()=>{
    let name = this.nameInp();
    console.log(name);
    console.log(this.id());

    let emp = {
      id : this.id(),
      name : name
    }
    console.log(emp);
    const req = new Request('http://localhost:8888/employees',{
      headers: new Headers({
        "Content-type" : "application/json",
      }),
      body: JSON.stringify(emp),
      method: "PUT",
    });
    const resp = await fetch(req);
    const addedRow = await resp.json();

    const rowIndex = addedRow.index;
    delete addedRow.index;
    const addedRowKey = addedRow['id'];
    const addedRowMetaData = { key: addedRowKey };

    this.dataprovider.mutate({
      update: {
        data: [addedRow],
        indexes: [rowIndex],
        keys: new Set([addedRowKey]),
        metadata: [addedRowMetaData],
      },
    });

    this.dataprovider.refresh()
    this.isUpdate(false)
    this.nameInp("")

  }
  addRow = async() =>{
    console.log("addrow");
    const row = {
      // Id : this.idInp(),
      name : this.nameInp(),
    };
    console.log(row);
    const req = new Request('http://localhost:8888/employees',{
      headers: new Headers({
        "Content-type" : "application/json",
      }),
      body: JSON.stringify(row),
      method: "POST",
    });
    const resp = await fetch(req);
    const addedRow = await resp.json();

    const rowIndex = addedRow.index;
    delete addedRow.index;
    const addedRowKey = addedRow['id'];
    const addedRowMetaData = { key: addedRowKey };

    this.dataprovider.mutate({
      add: {
        data: [addedRow],
        indexes: [rowIndex],
        keys: new Set([addedRowKey]),
        metadata: [addedRowMetaData],
      },
    });
    this.nameInp("")
  }

  delete_handler = async(event : Event)=>{

    const target = event.target as HTMLElement | null;
    
    if (target!=null){
      let id = target.getAttribute('data-row-info');
      const url = 'http://localhost:8888/employees/'+id;

      const req = new Request(url,{
        headers: new Headers({
          "Content-type" : "application/json",
        }),
        method: "DELETE",
      });
      const resp = await fetch(req);
      this.dataprovider.refresh()  
    }
  }

  update_handler = async(event : Event)=>{
    this.isUpdate = ko.observable(true);
    console.log("update_handler is called = "+this.isUpdate());
    const target = event.target as HTMLElement | null;
    if(target != null){
      let id = target.getAttribute('data-row-id');
      let name = target.getAttribute('data-row-name');
      console.log(id,name);
      this.nameInp(String(name))
      if(id!=null)
        this.id(parseInt(id))
    }
    
  }
}
export = CustomersViewModel;
