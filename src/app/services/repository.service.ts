import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() { }

  param:any;

  setData(param){
  	this.param = param;
  }

  getData(){
  	return this.param;
  }
}
