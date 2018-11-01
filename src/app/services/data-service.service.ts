import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';



//import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  //url:string = "http://localhost:65108/api/GetSabana/";
  url:string = "http://reportessabana.asinco.cl/api/GetSabana/";
  data:any;

  //headers = new HttpHeaders().set('Content-Type','application/json');

  //return this.http.get("http://localhost:8080/apiRestPhp/gourNet/getDatosForChart.php")
  //return this.http.get("http://localhost:8888/apiRestPhp/gourNet/getTodosProductos.php")
  
  constructor( private http: HttpClient) { }  

  //GetHttpHeaders() : HttpHeaders{
  //  const headers = new HttpHeaders().set('content-type', 'application/json')
  //                                   .set('Access-Control-Allow-Origin', '*')
  //                                   .set('Access-Control-Allow-Methods', 'POST')
  //                                   .set('Authorization', 'Basic YmVlcDpib29w');
  //  return headers;
  //}

  //GET
  getTabla(fechaInicio, fechaFin, select, filtros, agrupar){

    let apiURL = this.url+"getTabla?fechaInicio="+fechaInicio+"&fechaFin="+fechaFin+"&select="+select+"&filtros="+filtros+"&agrupar="+agrupar;
    return  this.http.get(apiURL);  
  }

  //GET
  getConfig(){
    let apiURL = this.url+"getConfig";
    return  this.http.get(apiURL);
  }

  //POST
  onSaveReport(_nombre:string, _config:string){
    let promise = new Promise((resolve, reject) => {
    let apiURL = this.url+"saveConfig?nombre="+_nombre+"&config="+_config;
    this.http.post(apiURL, {_nombre, _config})
      .toPromise()
      .then(
        res => { 
          if(res==1)
          {
            alert("El reporte "+_nombre+" se registro correctamente");
          }else{alert("Problemas con el servidor")}
          resolve();
        }
      );
    });
  }

    //POST
  onUpdateReport(_id:number, _nombre:string, _config:string){
    let promise = new Promise((resolve, reject) => {
    let apiURL = this.url+"updateConfig?id="+_id+"&nombre="+_nombre+"&config="+_config;
    this.http.post(apiURL, {_id,_nombre, _config})
      .toPromise()
      .then(
        res => { 
          if(res==1)
          {
            alert("El reporte "+_nombre+" se actualizo correctamente");
          }else{alert("Problemas con el servidor")}
          resolve();
        }
      );
    });
  }

  //DELETE
  deleteConfig(_idConfig:number, _nombreReporte:string){

    let promise = new Promise((resolve, reject) => {
    let apiURL = this.url+"deleteConfig?idConfig="+_idConfig;
    this.http.delete(apiURL)
      .toPromise()
      .then(
        res => { 
          if(res==1)
          {
            alert("El reporte "+_nombreReporte+" a sido eliminado");
          }else{alert("Problemas con el servidor")}
          resolve();
        }
      );
    });    

  }


}
