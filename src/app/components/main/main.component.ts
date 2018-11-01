import { Component, OnInit, AfterViewInit, Input, ChangeDetectorRef, OnChanges, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';

import * as $ from 'jquery';

import { DataServiceService } from '../../services/data-service.service';  
//import { RepositoryService } from '../../services/repository.service';

import { OrderPipe } from 'ngx-order-pipe';

/**/
//
//import { OnCreate } from '../../onCreate.directive';
//
//
//import { range } from 'rxjs';
//import { map, filter, scan } from 'rxjs/operators';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements AfterViewInit {

 	//DATOS
	tabla:any;  
	order: string = 'idVentaNegocio';
    reverse: boolean = false;
	sortedCollection: any[];
	tablaCsv:any;
	cbTipoDB:any;
	cbReportSelected:any;

	//OPTIONS TABLE
	//dtOptions: any = {};

	/*FILTROS*/
	txtNombreReporte:string="";
	txtFechaInicio:string="";
	txtFechaFin:string="";
	txtSelect:string="";
	txtFilters:string="";
	txtGroupBy:string="";
	txtConfigValue:string="";
	txtAdvertencia:string="";
	txtNombreClonar:string="";
	//ARREGLO FILTROS
	filters:any = {
		sucursal: [],
		estadoNegocio: [],
		tipoNegocio: [],
		lineaNegocio: [],
		vendedora: [],
		cliente: [],
		estadoLinea: [],
		tipoInterfaz: [],
		sunProducto: [],
		proveedor: [],
		servicio: [],
		nombrePasajero: [],
		moneda: [],
		auditor: [],
		interfaz: [],
		proveedorBsp:[],
		tipoPago:[],
		tarjetaCredito:[],
		ciudadOrigen:[],
		paisOrigen:[],
		ciudadDestino:[],
		paisDestino:[]
	};

	config:any={
		filtersSelected : {
			sucursal: "",
			estadoNegocio: "",
			tipoNegocio: "",
			lineaNegocio: "",
			cliente: "",
			estadoLinea: "",
			sunProducto: "",
			proveedor: "",
			servicio: "",
			nombrePasajero: "",
			moneda: "",
			auditor: "",
			interfaz:"",
			proveedorBsp:"",
			tipoPago:"",
			tarjetaCredito:"",
			ciudadOrigen:"",
			paisOrigen:"",
			ciudadDestino:"",
			paisDestino:""
		},
		actions : {
			actionIdVentaNegocio:true,
			actionSucursal:true,
			actionEstadoNegocio:true,
			actionTipoNegocio:true,
			actionLineaNegocio:true,
			actionVendedora:true,
			actionCliente:true,
			actionFechaCreacion:true,
			actionCerrado:true,
			actionIdVentaNegocioDetalle:true,
			actionEstadoLinea:true,
			actionInterfaz:true,
			actionTipoInterfaz:true,
			actionSunProducto:true,
			actionProveedor:true,
			actionServicio:true,
			actionNombrePasajero:true,
			actionMoneda:true,
			actionTipoCambio:true,
			actionMontoVenta:true,
			actionMontoVentaCLP:true,
			actionMontoTax:true,
			actionMontoTotal:true,
			actionMontoTotalCLP:true,
			actionComision:true,
			actionComisionIva:true,
			actionMontoCosto:true,
			actionDescuento:true,
			actionMontoDescuento:true,
			actionIva:true,
			actionMontoIva:true,
			actionMontoFee:true,
			actionMontoMargen:true,
			actionComisionCLP:true,
			actionComisionIvaCLP:true,
			actionDescuentoCLP:true,
			actionMontoDescuentoCLP:true,
			actionMontoCostoCLP:true,
			actionIvaCLP:true,
			actionMontoIvaCLP:true,
			actionMontoFeeCLP:true,
			actionMontoMargenCLP:true,
			actionMontoFeeOculto:true,
			actionMontoFeeOcultoCLP:true,
			actionMontoMargenRiesgo:true,
			actionMontoMargenRiesgoCLP:true,
			actionMontoVentaUSD:true,
			actionMontoTaxUSD:true,
			actionMontoTotalUSD:true,
			actionComisionUSD:true,
			actionComisionIvaUSD:true,
			actionMontoCostoUSD:true,
			actionDescuentoUSD:true,
			actionMontoDescuentoUSD:true,
			actionIvaUSD:true,
			actionMontoIvaUSD:true,
			actionMontoFeeUSD:true,
			actionMontoMargenUSD:true,
			actionMontoFeeOcultoUSD:true,
			actionMontoMargenRiesgoUSD:true,
			actionFechaViajeDesde:true,
			actionFechaViajeHasta:true,
			actionFechaFacturaLinea:true,
			actionNoFacturaLinea:true,
			actionMontoFacturadoLinea:true,
			actionImpuestoFacturadoLinea:true,
			actionIata:true,
			actionProveedorBsp:true,
			actionTipoPago:true,
			actionTarjetaCredito:true,
			actionNoTarjetaCredito:true,
			actionNoTicket:true,
			actionPnrLocator:true,
			actionTipoNI:true,
			actionRuta:true,
			actionTipoER:true,
			actionNoTicketReemiison:true,
			actionBspMontoTotal:true,
			actionBspMontoContado:true,
			actionBspMontoCredito:true,
			actionBspComisionPorcentaje:true,
			actionBspMontoComision:true,
			actionBspOverPorcentaje:true,
			actionBspMontoOver:true,
			actionBspNetoAPagar:true,
			actionNoVoucher:true,
			actionFechaEmision:true,
			actionVoucherMontoTotal:true,
			actionVoucherComisionPorcentaje:true,
			actionVoucherMontoComision:true,
			actionVoucherNetoAPagar:true,
			actionRemark01:true,
			actionRemark02:true,
			actionRemark03:true,
			actionRemark04:true,
			actionRemark05:true,
			actionRemark06:true,
			actionRemark07:true,
			actionRemark08:true,
			actionRemark09:true,
			actionRemark10:true,
			actionRemark11:true,
			actionRemark12:true,
			actionRemark13:true,
			actionRemark14:true,
			actionRemark15:true,
			actionRemark16:true,
			actionRemark17:true,
			actionRemark18:true,
			actionRemark19:true,
			actionRemark20:true,
			actionRemark21:true,
			actionRemark22:true,
			actionRemark23:true,
			actionRemark24:true,
			actionTaa:true,
			actionTad:true,
			actionTba:true,
			actionTbvp:true,
			actionTbd:true,
			actionAhorro:true,
			actionAnticipacion:true,
			actionAuditor:true,
			actionBooking:true,
			actionCiudadOrigen:true,
			actionPaisOrigen:true,
			actionCiudadDestino:true,
			actionPaisDestino:true,
			actionClases:true,
			actionCodigoIT:true,
			actionFechaRegreso:true,
			actionFechaSalida:true,
			actionHoraSalida:true,
			actionNumeroNoches:true,
			actionFareBasis:true,
			actionTotalGasto:true,
			actionTotalTarifa:true,
			actionMontoTaxCLP:true,
		    actionIdClieCliente:true,
		    actionIdMaeSucursal:true,
		    actionIdProdSubProducto:true,
		    actionIdProvProveedores:true,
		    actionIdSegUsuarioCreacion:true,
		    actionIdVendVendedora:true
		},
		actionAgrupar: false
	}

	prepareQuery:any={
			idVentaNegocio:'count',
			sucursal:'text',
			estadoNegocio:'text',
			tipoNegocio:'text',
			lineaNegocio:'text',
			vendedora:'text',
			cliente:'text',
			fechaCreacion:'text',
			cerrado:'text',
			idVentaNegocioDetalle:'count',
			estadoLinea:'text',
			interfaz:'text',
			tipoInterfaz:'text',
			sunProducto:'text',
			proveedor:'text',
			servicio:'text',
			nombrePasajero:'text',
			moneda: 'text',
			tipoCambio:'text',
			montoVenta:'sum',
			montoVentaCLP:'sum',
			montoTax:'sum',
			montoTotal:'sum',
			montoTotalCLP:'sum',
			comision:'sum',
			comisionIva:'sum',
			montoCosto:'sum',
			descuento:'sum',
			montoDescuento:'sum',
			iva:'text',
			montoIva:'sum',
			montoFee:'sum',
			montoMargen:'sum',
			comisionCLP:'sum',
			comisionIvaCLP:'sum',
			descuentoCLP:'sum',
			montoDescuentoCLP:'sum',
			montoCostoCLP:'sum',
			ivaCLP:'sum',
			montoIvaCLP:'sum',
			montoFeeCLP:'sum',
			montoMargenCLP:'sum',
			montoFeeOculto:'sum',
			montoFeeOcultoCLP:'sum',
			montoMargenRiesgo:'sum',
			montoMargenRiesgoCLP:'sum',
			montoVentaUSD:'sum',
			montoTaxUSD:'sum',
			montoTotalUSD:'sum',
			comisionUSD:'sum',
			comisionIvaUSD:'sum',
			montoCostoUSD:'sum',
			descuentoUSD:'sum',
			montoDescuentoUSD:'sum',
			ivaUSD:'sum',
			montoIvaUSD:'sum',
			montoFeeUSD:'sum',
			montoMargenUSD:'sum',
			montoFeeOcultoUSD:'sum',
			montoMargenRiesgoUSD:'sum',
			fechaViajeDesde:'text',
			fechaViajeHasta:'text',
			fechaFacturaLinea:'text',
			noFacturaLinea:'sum',
			montoFacturadoLinea:'sum',
			impuestoFacturadoLinea:'sum',
			iata:'text',
			proveedorBsp:'text',
			tipoPago:'text',
			tarjetaCredito:'text',
			noTarjetaCredito:'count',
			noTicket:'count',
			pnrLocator:'text',
			tipoNI:'text',
			ruta:'text',
			tipoER:'text',
			noTicketReemiison:'count',
			bspMontoTotal:'sum',
			bspMontoContado:'sum',
			bspMontoCredito:'sum',
			bspComisionPorcentaje:'sum',
			bspMontoComision:'sum',
			bspOverPorcentaje:'sum',
			bspMontoOver:'sum',
			bspNetoAPagar:'sum',
			noVoucher:'sum',
			fechaEmision:'text',
			voucherMontoTotal:'sum',
			voucherComisionPorcentaje:'text',
			voucherMontoComision:'sum',
			voucherNetoAPagar:'sum',
			remark01:'text',
			remark02:'text',
			remark03:'text',
			remark04:'text',
			remark05:'text',
			remark06:'text',
			remark07:'text',
			remark08:'text',
			remark09:'text',
			remark10:'text',
			remark11:'text',
			remark12:'text',
			remark13:'text',
			remark14:'text',
			remark15:'text',
			remark16:'text',
			remark17:'text',
			remark18:'text',
			remark19:'text',
			remark20:'text',
			remark21:'text',
			remark22:'text',
			remark23:'text',
			remark24:'text',
			taa:'text',
			tad:'text',
			tba:'text',
			tbvp:'text',
			tbd:'text',
			ahorro:'sum',
			anticipacion:'text',
			auditor:'text',
			booking:'text',
			ciudadOrigen:'text',
			paisOrigen:'text',
			ciudadDestino:'text',
			paisDestino:'text',
			clases:'text',
			codigoIT:'text',
			fechaRegreso:'text',
			fechaSalida:'text',
			horaSalida:'text',
			numeroNoches:'text',
			fareBasis:'text',
			totalGasto:'sum',
			totalTarifa:'sum',
			montoTaxCLP:'sum',
		    idClieCliente:'count',
		    idMaeSucursal:'count',
		    idProdSubProducto:'count',
		    idProvProveedores:'count',
		    idSegUsuarioCreacion:'count',
		    idVendVendedora:'count'
	}

	cbFiltroSucursal:string;

	//ACTION CHECKBOX
	actionTodos:boolean;
	actionAdvertencia:boolean;

	//CLASES
	btnColumnaInit:boolean=true;
	btnColumnaPress:boolean=false;

	btnFiltroInit:boolean=true;
	btnFiltroPress:boolean=false;

	btnAgruparInit:boolean=true;
	btnAgruparPress:boolean=false;

	btnGrillaInit:boolean=true;
	btnGrillaPress:boolean=false;

	isOpen:boolean=false;
	@ViewChild('gif') gif: ElementRef;
	@ViewChild('closeAddDeleteModal') closeAddDeleteModal: ElementRef;
	constructor(
		private service : DataServiceService, 
		public cd: ChangeDetectorRef, 
		private orderPipe: OrderPipe){

		this.getConfigService();
		//this.sortedCollection = orderPipe.transform(this.tabla, 'idVentaNegocio');
	}

	ngAfterViewInit() {
		this.gif.nativeElement.style = 'display: block'
		this.actionAdvertencia=false;
		this.actionTodos=true;
		setTimeout(() => { 
			this.cd.detectChanges();
			this.gif.nativeElement.style = 'display: none'
		},3000);
	}

	getConfigService(){
		this.service.getConfig().subscribe(filters =>  {
		//setTimeout(() => { 
				
			this.filters.sucursal= filters[0][0];
			this.filters.estadoNegocio= filters[0][1];
			this.filters.tipoNegocio= filters[0][2];
			this.filters.lineaNegocio= filters[0][3];
			this.filters.vendedora= filters[0][4];
			this.filters.cliente= filters[0][5];
			this.filters.estadoLinea= filters[0][6];
			this.filters.tipoInterfaz= filters[0][7];
			this.filters.sunProducto= filters[0][8];
			this.filters.proveedor= filters[0][9];
			this.filters.servicio= filters[0][10];
			//this.filters.nombrePasajero= filters[0][11];
			this.filters.moneda= filters[0][12];
			this.filters.auditor= filters[0][13];
			this.filters.interfaz= filters[0][14];
			this.filters.proveedorBsp=filters[0][15];
			this.filters.tipoPago=filters[0][16];
			this.filters.tarjetaCredito=filters[0][17];
			this.filters.ciudadOrigen=filters[0][18];
			this.filters.paisOrigen=filters[0][19];
			this.filters.ciudadDestino=filters[0][20];
			this.filters.paisDestino=filters[0][21];
		
			//FILTROS ALMACENADOS
			this.cbTipoDB = filters[1];
			this.cbReportSelected = 0;

			this.cd.detectChanges();
		//},1000);
		});
	}

	changeClassExpand(btn){
		switch(btn) {
		    case 'columns':
				this.btnColumnaInit = !this.btnColumnaInit;
				this.btnColumnaPress = !this.btnColumnaPress;
		        break;
		    case 'filtro':
				this.btnFiltroInit = !this.btnFiltroInit;
				this.btnFiltroPress = !this.btnFiltroPress;
		        break;
		    case 'agrupar':
				this.btnAgruparInit = !this.btnAgruparInit;
				this.btnAgruparPress = !this.btnAgruparPress;
		        break;
		    case 'grilla':
				this.btnGrillaInit = !this.btnGrillaInit;
				this.btnGrillaPress = !this.btnGrillaPress;
		        break;
		    default:
		        return false;
		}
	}


	getTabla(){
		this.gif.nativeElement.style = 'display: block'

		if(this.txtFechaInicio!=undefined && this.txtFechaInicio!="" && this.txtFechaFin!=undefined && this.txtFechaFin!=""){

			//get data
			let filter:string="";

			this.prepareSelect();
			this.prepareFilters();
			this.prepareGroupBy();

			this.service.getTabla(this.txtFechaInicio, this.txtFechaFin, this.txtSelect, this.txtFilters, this.txtGroupBy).subscribe(tabla =>  {
				var count = Object.keys(tabla).length;
				if( count <700){
					this.gif.nativeElement.style = 'display: none'
					this.actionAdvertencia = false;
					this.tabla = null;

					//LLENAMOS LA TABLA CON LA RESPUESTA
					this.tabla = tabla;
					this.tablaCsv = tabla;
					if(this.isOpen==false)
					{
						this.isOpen = true;
					}
					this.cd.detectChanges();

				}else{
					this.gif.nativeElement.style = 'display: none'
					this.txtAdvertencia = "En la tabla solo se muestran las primeras 700 filas. Usted proceso: "+count+" filas";
					this.actionAdvertencia = true;
					this.tablaCsv = tabla;
					this.tabla = this.createSmallTable();
					if(this.isOpen==false)
					{
						this.isOpen = true;
						this.btnGrillaInit=false;
						this.btnGrillaPress=true;
					}
					this.cd.detectChanges();
				}
			});
		}else{
			this.gif.nativeElement.style = 'display: none'
			this.txtAdvertencia ="Seleccione fecha inicio y fecha fin";
			this.actionAdvertencia = true; 
			var elem = <HTMLInputElement> document.getElementById("checkAgrupar");
			elem.checked = false;
		}
	}

	changeExpande(){
		this.isOpen = !this.isOpen;
	}

	createSmallTable(){
		let smallTable:any=[];
		for(let i=0;i<700;i++)
		{
			smallTable.push(this.tablaCsv[i]);
		}
		return smallTable;
	}

	setOrder(value: string) {
	   if (this.order === value) {
	     this.reverse = !this.reverse;
	   }

	   this.order = value;
	}
    
	all(){
		if(this.actionTodos == true){
			this.config.actions.actionIdVentaNegocio = true;
			this.config.actions.actionSucursal = true;
			this.config.actions.actionEstadoNegocio = true;
			this.config.actions.actionTipoNegocio = true;
			this.config.actions.actionLineaNegocio = true;
			this.config.actions.actionVendedora = true;
			this.config.actions.actionCliente = true;
			this.config.actions.actionFechaCreacion = true;
			this.config.actions.actionCerrado = true;
			this.config.actions.actionIdVentaNegocioDetalle = true;
			this.config.actions.actionEstadoLinea = true;
			this.config.actions.actionInterfaz = true;
			this.config.actions.actionTipoInterfaz = true;
			this.config.actions.actionSunProducto = true;
			this.config.actions.actionProveedor = true;
			this.config.actions.actionServicio = true;
			this.config.actions.actionNombrePasajero = true;
			this.config.actions.actionMoneda = true;
			this.config.actions.actionTipoCambio = true;
			this.config.actions.actionMontoVenta = true;
			this.config.actions.actionMontoVentaCLP = true;
			this.config.actions.actionMontoTax = true;
			this.config.actions.actionMontoTotal = true;
			this.config.actions.actionMontoTotalCLP = true;
			this.config.actions.actionComision = true;
			this.config.actions.actionComisionIva = true;
			this.config.actions.actionMontoCosto = true;
			this.config.actions.actionDescuento = true;
			this.config.actions.actionMontoDescuentoUSD = true;
			this.config.actions.actionIva = true;
			this.config.actions.actionMontoIva = true;
			this.config.actions.actionMontoFee = true;
			this.config.actions.actionMontoMargen = true;
			this.config.actions.actionComisionCLP = true;
			this.config.actions.actionComisionIvaCLP = true;
			this.config.actions.actionDescuentoCLP = true;
			this.config.actions.actionMontoCostoCLP = true;
			this.config.actions.actionMontoDescuentoCLP = true;
			this.config.actions.actionIvaCLP = true;
			this.config.actions.actionMontoIvaCLP = true;
			this.config.actions.actionMontoFeeCLP = true;
			this.config.actions.actionMontoMargenCLP = true;
			this.config.actions.actionMontoFeeOculto = true;
			this.config.actions.actionMontoFeeOcultoCLP = true;
			this.config.actions.actionMontoMargenRiesgo = true;
			this.config.actions.actionMontoMargenRiesgoCLP = true;
			this.config.actions.actionMontoVentaUSD = true;
			this.config.actions.actionMontoTaxUSD = true;
			this.config.actions.actionMontoTotalUSD = true;
			this.config.actions.actionComisionUSD = true;
			this.config.actions.actionComisionIvaUSD = true;
			this.config.actions.actionMontoCostoUSD = true;
			this.config.actions.actionDescuentoUSD = true;
			this.config.actions.actionMontoDescuento = true;
			this.config.actions.actionIvaUSD = true;
			this.config.actions.actionMontoIvaUSD = true;
			this.config.actions.actionMontoFeeUSD = true;
			this.config.actions.actionMontoMargenUSD = true;
			this.config.actions.actionMontoFeeOcultoUSD = true;
			this.config.actions.actionMontoMargenRiesgoUSD = true;
			this.config.actions.actionFechaViajeDesde = true;
			this.config.actions.actionFechaViajeHasta = true;
			this.config.actions.actionFechaFacturaLinea = true;
			this.config.actions.actionNoFacturaLinea = true;
			this.config.actions.actionMontoFacturadoLinea = true;
			this.config.actions.actionImpuestoFacturadoLinea = true;
			this.config.actions.actionIata = true;
			this.config.actions.actionProveedorBsp = true;
			this.config.actions.actionTipoPago = true;
			this.config.actions.actionTarjetaCredito = true;
			this.config.actions.actionNoTarjetaCredito = true;
			this.config.actions.actionNoTicket = true;
			this.config.actions.actionPnrLocator = true;
			this.config.actions.actionTipoNI = true;
			this.config.actions.actionRuta = true;
			this.config.actions.actionTipoER = true;
			this.config.actions.actionNoTicketReemiison = true;
			this.config.actions.actionBspMontoTotal = true;
			this.config.actions.actionBspMontoContado = true;
			this.config.actions.actionBspMontoCredito = true;
			this.config.actions.actionBspComisionPorcentaje = true;
			this.config.actions.actionBspMontoComision = true;
			this.config.actions.actionBspOverPorcentaje = true;
			this.config.actions.actionBspMontoOver = true;
			this.config.actions.actionBspNetoAPagar = true;
			this.config.actions.actionNoVoucher = true;
			this.config.actions.actionFechaEmision = true;
			this.config.actions.actionVoucherMontoTotal = true;
			this.config.actions.actionVoucherComisionPorcentaje = true;
			this.config.actions.actionVoucherMontoComision = true;
			this.config.actions.actionVoucherNetoAPagar = true;
			this.config.actions.actionRemark01 = true;
			this.config.actions.actionRemark02 = true;
			this.config.actions.actionRemark03 = true;
			this.config.actions.actionRemark04 = true;
			this.config.actions.actionRemark05 = true;
			this.config.actions.actionRemark06 = true;
			this.config.actions.actionRemark07 = true;
			this.config.actions.actionRemark08 = true;
			this.config.actions.actionRemark09 = true;
			this.config.actions.actionRemark10 = true;
			this.config.actions.actionRemark11 = true;
			this.config.actions.actionRemark12 = true;
			this.config.actions.actionRemark13 = true;
			this.config.actions.actionRemark14 = true;
			this.config.actions.actionRemark15 = true;
			this.config.actions.actionRemark16 = true;
			this.config.actions.actionRemark17 = true;
			this.config.actions.actionRemark18 = true;
			this.config.actions.actionRemark19 = true;
			this.config.actions.actionRemark20 = true;
			this.config.actions.actionRemark21 = true;
			this.config.actions.actionRemark22 = true;
			this.config.actions.actionRemark23 = true;
			this.config.actions.actionRemark24 = true;
			this.config.actions.actionTaa = true;
			this.config.actions.actionTad = true;
			this.config.actions.actionTba = true;
			this.config.actions.actionTbvp = true;
			this.config.actions.actionTbd = true;
			this.config.actions.actionAhorro = true;
			this.config.actions.actionAnticipacion = true;
			this.config.actions.actionAuditor = true;
			this.config.actions.actionBooking = true;
			this.config.actions.actionCiudadOrigen = true;
			this.config.actions.actionPaisOrigen = true;
			this.config.actions.actionCiudadDestino = true;
			this.config.actions.actionPaisDestino = true;
			this.config.actions.actionClases = true;
			this.config.actions.actionCodigoIT = true;
			this.config.actions.actionFechaRegreso = true;
			this.config.actions.actionFechaSalida = true;
			this.config.actions.actionHoraSalida = true;
			this.config.actions.actionNumeroNoches = true;
			this.config.actions.actionFareBasis = true;
			this.config.actions.actionTotalGasto = true;
			this.config.actions.actionTotalTarifa = true;
			this.config.actions.actionMontoTaxCLP = true;
			this.config.actions.actionIdClieCliente = true;
			this.config.actions.actionIdMaeSucursal = true;
			this.config.actions.actionIdProdSubProducto = true;
			this.config.actions.actionIdProvProveedores = true;
			this.config.actions.actionIdSegUsuarioCreacion = true;
			this.config.actions.actionIdVendVendedora = true;

		
		}else{
			this.config.actions.actionIdVentaNegocio = false;
			this.config.actions.actionSucursal = false;
			this.config.actions.actionEstadoNegocio = false;
			this.config.actions.actionTipoNegocio = false;
			this.config.actions.actionLineaNegocio = false;
			this.config.actions.actionVendedora = false;
			this.config.actions.actionCliente = false;
			this.config.actions.actionFechaCreacion = false;
			this.config.actions.actionCerrado = false;
			this.config.actions.actionIdVentaNegocioDetalle = false;
			this.config.actions.actionEstadoLinea = false;
			this.config.actions.actionInterfaz = false;
			this.config.actions.actionTipoInterfaz = false;
			this.config.actions.actionSunProducto = false;
			this.config.actions.actionProveedor = false;
			this.config.actions.actionServicio = false;
			this.config.actions.actionNombrePasajero = false;
			this.config.actions.actionMoneda = false;
			this.config.actions.actionTipoCambio = false;
			this.config.actions.actionMontoVenta = false;
			this.config.actions.actionMontoVentaCLP = false;
			this.config.actions.actionMontoTax = false;
			this.config.actions.actionMontoTotal = false;
			this.config.actions.actionMontoTotalCLP = false;
			this.config.actions.actionComision = false;
			this.config.actions.actionComisionIva = false;
			this.config.actions.actionMontoCosto = false;
			this.config.actions.actionDescuento = false;
			this.config.actions.actionMontoDescuentoUSD = false;
			this.config.actions.actionIva = false;
			this.config.actions.actionMontoIva = false;
			this.config.actions.actionMontoFee = false;
			this.config.actions.actionMontoMargen = false;
			this.config.actions.actionComisionCLP = false;
			this.config.actions.actionComisionIvaCLP = false;
			this.config.actions.actionDescuentoCLP = false;
			this.config.actions.actionMontoCostoCLP = false;
			this.config.actions.actionMontoDescuentoCLP = false;
			this.config.actions.actionIvaCLP = false;
			this.config.actions.actionMontoIvaCLP = false;
			this.config.actions.actionMontoFeeCLP = false;
			this.config.actions.actionMontoMargenCLP = false;
			this.config.actions.actionMontoFeeOculto = false;
			this.config.actions.actionMontoFeeOcultoCLP = false;
			this.config.actions.actionMontoMargenRiesgo = false;
			this.config.actions.actionMontoMargenRiesgoCLP = false;
			this.config.actions.actionMontoVentaUSD = false;
			this.config.actions.actionMontoTaxUSD = false;
			this.config.actions.actionMontoTotalUSD = false;
			this.config.actions.actionComisionUSD = false;
			this.config.actions.actionComisionIvaUSD = false;
			this.config.actions.actionMontoCostoUSD = false;
			this.config.actions.actionDescuentoUSD = false;
			this.config.actions.actionMontoDescuento = false;
			this.config.actions.actionIvaUSD = false;
			this.config.actions.actionMontoIvaUSD = false;
			this.config.actions.actionMontoFeeUSD = false;
			this.config.actions.actionMontoMargenUSD = false;
			this.config.actions.actionMontoFeeOcultoUSD = false;
			this.config.actions.actionMontoMargenRiesgoUSD = false;
			this.config.actions.actionFechaViajeDesde = false;
			this.config.actions.actionFechaViajeHasta = false;
			this.config.actions.actionFechaFacturaLinea = false;
			this.config.actions.actionNoFacturaLinea = false;
			this.config.actions.actionMontoFacturadoLinea = false;
			this.config.actions.actionImpuestoFacturadoLinea = false;
			this.config.actions.actionIata = false;
			this.config.actions.actionProveedorBsp = false;
			this.config.actions.actionTipoPago = false;
			this.config.actions.actionTarjetaCredito = false;
			this.config.actions.actionNoTarjetaCredito = false;
			this.config.actions.actionNoTicket = false;
			this.config.actions.actionPnrLocator = false;
			this.config.actions.actionTipoNI = false;
			this.config.actions.actionRuta = false;
			this.config.actions.actionTipoER = false;
			this.config.actions.actionNoTicketReemiison = false;
			this.config.actions.actionBspMontoTotal = false;
			this.config.actions.actionBspMontoContado = false;
			this.config.actions.actionBspMontoCredito = false;
			this.config.actions.actionBspComisionPorcentaje = false;
			this.config.actions.actionBspMontoComision = false;
			this.config.actions.actionBspOverPorcentaje = false;
			this.config.actions.actionBspMontoOver = false;
			this.config.actions.actionBspNetoAPagar = false;
			this.config.actions.actionNoVoucher = false;
			this.config.actions.actionFechaEmision = false;
			this.config.actions.actionVoucherMontoTotal = false;
			this.config.actions.actionVoucherComisionPorcentaje = false;
			this.config.actions.actionVoucherMontoComision = false;
			this.config.actions.actionVoucherNetoAPagar = false;
			this.config.actions.actionRemark01 = false;
			this.config.actions.actionRemark02 = false;
			this.config.actions.actionRemark03 = false;
			this.config.actions.actionRemark04 = false;
			this.config.actions.actionRemark05 = false;
			this.config.actions.actionRemark06 = false;
			this.config.actions.actionRemark07 = false;
			this.config.actions.actionRemark08 = false;
			this.config.actions.actionRemark09 = false;
			this.config.actions.actionRemark10 = false;
			this.config.actions.actionRemark11 = false;
			this.config.actions.actionRemark12 = false;
			this.config.actions.actionRemark13 = false;
			this.config.actions.actionRemark14 = false;
			this.config.actions.actionRemark15 = false;
			this.config.actions.actionRemark16 = false;
			this.config.actions.actionRemark17 = false;
			this.config.actions.actionRemark18 = false;
			this.config.actions.actionRemark19 = false;
			this.config.actions.actionRemark20 = false;
			this.config.actions.actionRemark21 = false;
			this.config.actions.actionRemark22 = false;
			this.config.actions.actionRemark23 = false;
			this.config.actions.actionRemark24 = false;
			this.config.actions.actionTaa = false;
			this.config.actions.actionTad = false;
			this.config.actions.actionTba = false;
			this.config.actions.actionTbvp = false;
			this.config.actions.actionTbd = false;
			this.config.actions.actionAhorro = false;
			this.config.actions.actionAnticipacion = false;
			this.config.actions.actionAuditor = false;
			this.config.actions.actionBooking = false;
			this.config.actions.actionCiudadOrigen = false;
			this.config.actions.actionPaisOrigen = false;
			this.config.actions.actionCiudadDestino = false;
			this.config.actions.actionPaisDestino = false;
			this.config.actions.actionClases = false;
			this.config.actions.actionCodigoIT = false;
			this.config.actions.actionFechaRegreso = false;
			this.config.actions.actionFechaSalida = false;
			this.config.actions.actionHoraSalida = false;
			this.config.actions.actionNumeroNoches = false;
			this.config.actions.actionFareBasis = false;
			this.config.actions.actionTotalGasto = false;
			this.config.actions.actionTotalTarifa = false;
			this.config.actions.actionMontoTaxCLP = false;
			this.config.actions.actionIdClieCliente = false;
			this.config.actions.actionIdMaeSucursal = false;
			this.config.actions.actionIdProdSubProducto = false;
			this.config.actions.actionIdProvProveedores = false;
			this.config.actions.actionIdSegUsuarioCreacion = false;
			this.config.actions.actionIdVendVendedora = false;
		}
	}

    convertToCSV() {
	    //let json = $("#_json").val();
	    
	    let json = this.prepareExportCSV();

	    if(json == '' || json == undefined){
	    	this.txtAdvertencia = "No hay datos para convertir";
	    	this.actionAdvertencia = true;
	    	return '';
	    }else{
		    //json = JSON.parse(json).results;
		    // Find the largest element
		    let largestEntry = 0;
		    let header;

		    for(let i=0; i<json.length; i++){
		        if (!Object.keys) {
		            Object.keys = function(obj) {
		                let keys = [];
		                for (let i in obj) {
		                    if (obj.hasOwnProperty(i)) {
		                        keys.push(i);
		                    }
		                }
		                return keys;
		            };
		        }
		        if(Object.keys(json[i]).length > largestEntry){
		            largestEntry = Object.keys(json[i]).length;
		            header = Object.keys(json[i]);
		        }
		    };
		    // Assemble the header
		    let convertedjson = "";
		    if (typeof Array.prototype.forEach != 'function') {
		        Array.prototype.forEach = function(callback){
		          for (let i = 0; i < this.length; i++){
		            callback.apply(this, [this[i], i, this]);
		          }
		        };
		    }
		    header.forEach(function(heading){
		        if(convertedjson != "") {
		            convertedjson += ",";
		        }
		        convertedjson += "\"";
		        convertedjson += heading
		        convertedjson += "\"";
		    });
		    convertedjson += "\r\n";
		    // Iterate through the header for all elements
		    json.forEach(function(entry){
		        header.forEach(function(heading){
		            convertedjson += "\"";
		            convertedjson += (entry[heading] || "");
		            convertedjson += "\"";
		            convertedjson += ",";
		        });
		        convertedjson = convertedjson.substring(0, convertedjson.length - 1);
		        convertedjson += "\r\n";
		    });
		    return convertedjson;
	    }
	    
	}

	exportCSV(){
	    //convert();
	    //let csv = $("#_csv").val();
	    this.actionAdvertencia=false;
	    let csv = this.convertToCSV();
	    if(csv == ''){
	        return;
	    }else{
		    // Exporting
		    let months = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "noviembre", "Diciembre");               
		    let now = new Date();
		    let date = now.getDate();
		    let year = now.getFullYear();
		    let month = months[now.getMonth()];
		    let fileName = "CSV"+year+month+date;
		    let uri = 'data:text/csv;charset=utf-8,' + escape(csv);         
		    let link = document.createElement("a"); 
		    $(link).hide();
		    link.href = uri;
		    link.download = fileName + ".csv";
		    $("body").append(link);
		    link.click();
		    //$("body").remove(link);
	    }
	}

	saveReport(){
		if(this.txtNombreReporte !="" && this.txtNombreReporte!=undefined){

			
			this.gif.nativeElement.style = 'display: block'
			let save = 0;
			let reporte={
				'filters':this.config.filtersSelected,
				'actions':this.config.actions,
				'actionAgrupar': this.config.actionAgrupar
			}
			let reporteJson = JSON.stringify(reporte);

			if(this.cbReportSelected!=0){
				this.service.onUpdateReport(this.cbReportSelected.id, this.txtNombreReporte, reporteJson)
				this.getConfigService();
				
				this.gif.nativeElement.style = 'display: none'
				this.actionAdvertencia = false;
				//setTimeout(() => { 
					this.cd.detectChanges();
				//},1000);
			}else{
				this.service.onSaveReport(this.txtNombreReporte, reporteJson);
				this.getConfigService();
				
				this.gif.nativeElement.style = 'display: none'
				this.actionAdvertencia = false;
				//setTimeout(() => { 
					this.cd.detectChanges();
				//},1000);
			}
			this.clearAll();
			this.gif.nativeElement.style = 'display: none'
		}else{
			this.txtAdvertencia = "Debe ingresar un nombre para el nuevo reporte"; 
			this.actionAdvertencia = true;
		}
	}

	deleteTipoReporte(){

		if(this.cbReportSelected != 0){
			this.closeAddDeleteModal.nativeElement.click();
		}else{
			this.txtAdvertencia = "¡Para eliminar un tipo de reporte primero debe seleccionarlo!";
			this.actionAdvertencia = true;
		}
	}

	onDeleteTipoReporte(){
		this.gif.nativeElement.style = 'display: block'
		let idTipoReporte = JSON.parse(this.cbReportSelected['id']);
		this.service.deleteConfig(idTipoReporte, this.txtNombreReporte);
		this.getConfigService();
		this.actionAdvertencia = false;
		this.clearAll();
		this.cd.detectChanges();
		this.gif.nativeElement.style = 'display: none';
		
	}

	getConfig(){
		if(this.cbReportSelected!=0){
			this.txtNombreReporte = this.cbReportSelected['nombre']

			let configSabana = JSON.parse(this.cbReportSelected['configuracionSabana']);
			this.config.actions = configSabana['actions']
			this.config.filtersSelected = configSabana['filters']
			this.config.actionAgrupar = configSabana['actionAgrupar']
		}else{

			this.clearAll()
		}
	}

	saveClonar(){
		if(this.cbReportSelected !=""){
			if(this.txtNombreClonar!=""){
				this.gif.nativeElement.style = 'display: block'
				let config={
					'filters':this.config.filtersSelected,
					'actions':this.config.actions,
					'actionAgrupar': this.config.actionAgrupar
				}
				let configJson = JSON.stringify(config);
	
				this.service.onSaveReport(this.txtNombreClonar, configJson);
				this.getConfigService();
				
				this.actionAdvertencia = false;
				this.clearAll();
				//setTimeout(() => { 
					this.cd.detectChanges();
				//},1000);
			}else{
				this.txtAdvertencia="El nombre del nuevo tipo de reporte no puede quedar vacio";
				this.actionAdvertencia = true;
			}
			this.gif.nativeElement.style = 'display: none'
		}else{
			this.txtAdvertencia = "Para clonar debe seleccionar un tipo de reporte";
			this.actionAdvertencia = true;
		}
	}

	prepareExportCSV(){
		//let count = Object.keys(this.tablaCsv).length;
		if(this.tablaCsv!=undefined){
			let temp = JSON.stringify(this.tablaCsv); 
			let newTemp = JSON.parse(temp)
			for (var key in this.config.actions) {
				let header = key.slice(6, key.length);
				header = header.charAt(0).toLowerCase() + header.slice(1);
				if(this.config.actions[key]==false){
					for(let i = 0;i<newTemp.length;i++){
						delete newTemp[i][header];
					}
				}
			}
			return newTemp;
		}
		else{
			return'';
		}
	}

	prepareSelect(){
		this.txtSelect  = "select "
		if(this.config.actionAgrupar){
			for(let key in this.config.actions){
				if(this.config.actions[key]==true){
					if(this.txtSelect.length > 7){
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						header = this.prepareSelectGroup(header);
						this.txtSelect =this.txtSelect+", "+header;
					}else{
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						header = this.prepareSelectGroup(header);
						this.txtSelect += " "+header;
					}
				}
			}
			
		}else{
			for(let key in this.config.actions){
				if(this.config.actions[key]==true){
					if(this.txtSelect.length > 7){
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						this.txtSelect += ", "+header;
					}else{
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						this.txtSelect += " "+header;
					}
				}
			}
		}
		this.txtSelect += " from ReporteSabana where FechaFacturaLinea between ";
		this.txtSelect = this.replaceColumns(this.txtSelect)
	}

	prepareFilters(){
		this.txtFilters = "";
		for (var key in this.config.filtersSelected) {
		    if (this.config.filtersSelected.hasOwnProperty(key)){
		        if(this.config.filtersSelected[key]!= ""){
					this.txtFilters += " and "+key+"=''"+this.config.filtersSelected[key]+"''";
				}
		    }
		}
	}

	prepareGroupBy(){
		if(this.config.actionAgrupar){
			this.txtGroupBy = " group by "
			for(let key in this.config.actions){
				if(this.config.actions[key]==true){
					if(this.txtGroupBy.length > 10){
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						if(this.prepareQuery[header]=='text'){
							this.txtGroupBy += ", "+header;
						}
					}else{
						let header = key.slice(6, key.length);
						header = header.charAt(0).toLowerCase() + header.slice(1);
						if(this.prepareQuery[header]=='text'){
							this.txtGroupBy += " "+header;
						}
					}
				}
			}
			this.txtGroupBy = this.replaceColumns(this.txtGroupBy)

		}else{
			this.txtGroupBy = "";
		}
	}

	replaceColumns(txt){
		txt  = txt.replace("tipoNI", "[Tipo N/I]");
		txt  = txt.replace("tipoER", "[Tipo E/R]");
		txt  = txt.replace("bspComisionPorcentaje", "[BspComision%]");
		txt  = txt.replace("bspOverPorcentaje", "[BspOver%]");
		txt  = txt.replace("voucherComisionPorcentaje", "[VoucherComision%]");	
		return txt;	
	}

	prepareSelectGroup(header){
		let temp;
		switch(this.prepareQuery[header]) {
		    case "text":
		        return header;
		        //break;
		    case "sum":
		    	temp = "Sum(isnull(convert(money,"+header+"),0)) as "+header;
		    	temp = this.replaceColumns(temp);
		        return temp
		        //break;
		    case "count":

		    	temp = "count("+header+") as "+header; 
		    	temp = this.replaceColumns(temp);
		    	return temp;
		    default:
		}
		return header;
	}

	clearAll(){

		this.tabla = [];
		this.isOpen=false;
		this.actionAdvertencia = false;
		this.actionTodos = true;
		this.txtNombreReporte = "";
		this.txtNombreClonar = "";
		this.all();

		this.config.filtersSelected.sucursal= "";
		this.config.filtersSelected.estadoNegocio= "";
		this.config.filtersSelected.tipoNegocio= "";
		this.config.filtersSelected.lineaNegocio= "";
		this.config.filtersSelected.cliente= "";
		this.config.filtersSelected.estadoLinea= "";
		this.config.filtersSelected.sunProducto= "";
		this.config.filtersSelected.proveedor= "";
		this.config.filtersSelected.servicio= "";
		this.config.filtersSelected.nombrePasajero= "";
		this.config.filtersSelected.moneda= "";
		this.config.filtersSelected.auditor= "";
		this.config.filtersSelected.interfaz="";
		this.config.filtersSelected.proveedorBsp="";
		this.config.filtersSelected.tipoPago="";
		this.config.filtersSelected.tarjetaCredito="";
		this.config.filtersSelected.ciudadOrigen="";
		this.config.filtersSelected.paisOrigen="";
		this.config.filtersSelected.ciudadDestino="";
		this.config.filtersSelected.paisDestino="";

		this.config.actionAgrupar = false;

		this.btnColumnaInit=true;
		this.btnColumnaPress=false;

		this.btnFiltroInit=true;
		this.btnFiltroPress=false;

		this.btnAgruparInit=true;
		this.btnAgruparPress=false;

		this.btnGrillaInit=true;
		this.btnGrillaPress=false;
	}


/*
	fnExcelReport(){
		var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
		let textRange; 
		let j=0;
		let tab = (<HTMLInputElement>document.getElementById("gridSabana")).value;
		
		for(j = 0 ; j < this.gridSabana.rows.length ; j++) 
		{     
		    tab_text=tab_text+this.gridSabana.rows[j].innerHTML+"</tr>";
		    //tab_text=tab_text+"</tr>";
		}
		
		tab_text=tab_text+"</table>";
		tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
		tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
		tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
		
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE"); 
		
		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
		{
		    txtArea1.document.open("txt/html","replace");
		    txtArea1.document.write(tab_text);
		    txtArea1.document.close();
		    txtArea1.focus(); 
		    sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
		}  
		else                 //other browser not tested on IE 11
		    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
		
		return (sa);
	}
*/

/*

	saveFilters(row){

	  	let sucursal = [];
	  	let estadoNegocio = [];
	  	let tipoNegocio = [];
	  	let lineaNegocio = [];
	  	let vendedora = [];
	  	let cliente = [];
	  	let estadoLinea = [];
	  	let tipoInterfaz = [];
	  	let sunProducto = [];
	  	let proveedor = [];
	  	let servicio = [];
	  	let nombrePasajero = [];
	  	let moneda = [];
	  	let auditor = [];
	  	
	  	//sucursal
		this.filters.sucursal.indexOf(row.sucursal) === -1 ? this.filters.sucursal.push(row.sucursal) : null;
	  	for(let i=0; i<this.filters.sucursal.length; i++){
	  		sucursal.push({id:i,nombre: this.filters.sucursal[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.sucursal = sucursal;
	    }); 

	  	//estadoNegocio
	  	this.filters.estadoNegocio.indexOf(row.estadoNegocio) === -1 ? this.filters.estadoNegocio.push(row.estadoNegocio) : null;
		for(let i=0; i<this.filters.estadoNegocio.length; i++){
	  		estadoNegocio.push({id:i,nombre: this.filters.estadoNegocio[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.estadoNegocio = estadoNegocio;
	    }); 

	    //tipoNegocio
	  	this.filters.tipoNegocio.indexOf(row.tipoNegocio) === -1 ? this.filters.tipoNegocio.push(row.tipoNegocio) : null;
		for(let i=0; i<this.filters.tipoNegocio.length; i++){
	  		tipoNegocio.push({id:i,nombre: this.filters.tipoNegocio[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.tipoNegocio = tipoNegocio;
	    }); 

	    //lineaNegocio
	  	this.filters.lineaNegocio.indexOf(row.lineaNegocio) === -1 ? this.filters.lineaNegocio.push(row.lineaNegocio) : null;
		for(let i=0; i<this.filters.lineaNegocio.length; i++){
	  		lineaNegocio.push({id:i,nombre: this.filters.lineaNegocio[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.lineaNegocio = lineaNegocio;
	    }); 

	    //vendedora
	  	this.filters.vendedora.indexOf(row.vendedora) === -1 ? this.filters.vendedora.push(row.vendedora) : null;
		for(let i=0; i<this.filters.vendedora.length; i++){
	  		vendedora.push({id:i,nombre: this.filters.vendedora[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.vendedora = vendedora;
	    }); 

	    //cliente
	  	this.filters.cliente.indexOf(row.cliente) === -1 ? this.filters.cliente.push(row.cliente) : null;
		for(let i=0; i<this.filters.vendedora.length; i++){
	  		cliente.push({id:i,nombre: this.filters.cliente[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.cliente = cliente;
	    });

	    //estadoLinea
	  	this.filters.estadoLinea.indexOf(row.estadoLinea) === -1 ? this.filters.estadoLinea.push(row.estadoLinea) : null;
		for(let i=0; i<this.filters.estadoLinea.length; i++){
	  		estadoLinea.push({id:i,nombre: this.filters.estadoLinea[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.estadoLinea = estadoLinea;
	    });

	    //tipoInterfaz
	    this.filters.tipoInterfaz.indexOf(row.tipoInterfaz) === -1 ? this.filters.tipoInterfaz.push(row.tipoInterfaz) : null;
		for(let i=0; i<this.filters.tipoInterfaz.length; i++){
	  		tipoInterfaz.push({id:i,nombre: this.filters.tipoInterfaz[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.tipoInterfaz = tipoInterfaz;
	    });

	    //sunProducto
	  	this.filters.sunProducto.indexOf(row.sunProducto) === -1 ? this.filters.sunProducto.push(row.sunProducto) : null;
		for(let i=0; i<this.filters.sunProducto.length; i++){
	  		sunProducto.push({id:i,nombre: this.filters.sunProducto[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.sunProducto = sunProducto;
	    });

	  	//proveedor
	  	this.filters.proveedor.indexOf(row.proveedor) === -1 ? this.filters.proveedor.push(row.proveedor) : null;
		for(let i=0; i<this.filters.proveedor.length; i++){
	  		proveedor.push({id:i,nombre: this.filters.proveedor[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.proveedor = proveedor;
	    });

	    //servicio
	  	this.filters.servicio.indexOf(row.servicio) === -1 ? this.filters.servicio.push(row.servicio) : null;
		for(let i=0; i<this.filters.servicio.length; i++){
	  		servicio.push({id:i,nombre: this.filters.servicio[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.servicio = servicio;
	    });

	    //nombrePasajero
	    this.filters.nombrePasajero.indexOf(row.nombrePasajero) === -1 ? this.filters.nombrePasajero.push(row.nombrePasajero) : null;
		for(let i=0; i<this.filters.nombrePasajero.length; i++){
	  		nombrePasajero.push({id:i,nombre: this.filters.nombrePasajero[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.nombrePasajero = nombrePasajero;
	    });

	    //moneda
	    this.filters.moneda.indexOf(row.moneda) === -1 ? this.filters.moneda.push(row.moneda) : null;
		for(let i=0; i<this.filters.moneda.length; i++){
	  		moneda.push({id:i,nombre: this.filters.moneda[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.moneda = moneda;
	    });

	    //auditor
	    this.filters.auditor.indexOf(row.auditor) === -1 ? this.filters.auditor.push(row.auditor) : null;
		for(let i=0; i<this.filters.auditor.length; i++){
	  		auditor.push({id:i,nombre: this.filters.auditor[i]});
	  	}
	  	setTimeout (() => { 
	        this.filters.auditor = auditor;
	    });
	}

			//this.dtOptions= {
        //
	    //  // Declare the use of the extension in the dom parameter
	    //  dom: 'Bfrtip',
	    //  // Configure the buttons
	    //  buttons: [
	    //    'csv',
	    //    'excel',
	    //    //{
	    //    //  text: 'Some button',
	    //    //  key: '1',
	    //    //  action: function (e, dt, node, config) {
	    //    //    alert('Button activated');
	    //    //  }
	    //    //}
	    //  ],
	    //  filter: false,
	    //  language: {
		//      emptyTable: 'Datos no disponibles',
		//      paginate: {
		//      	previous: 'Anterior',
		//      	next: 'Siguiente'
		//      }
		//  }
	    //};


	//cargarConfiguracion(){
	//	//setTimeout(() => { 
	//		let test:any = new Array();
	//	    this.service.getConfig().subscribe(filters =>  {
	//	    	test.push(filters);
	//	    	
	//			//this.filtersSelected =  {};
	//			this.filters = {};
	//		
	//			this.filters = {
	//				sucursal: filters[0],
	//				estadoNegocio: filters[1],
	//				tipoNegocio: filters[2],
	//				lineaNegocio: filters[3],
	//				vendedora: filters[4],
	//				cliente: filters[5],
	//				estadoLinea: filters[6],
	//				tipoInterfaz: filters[7],
	//				sunProducto: filters[8],
	//				proveedor: filters[9],
	//				servicio: filters[10],
	//				//nombrePasajero: filters[11],
	//				moneda: filters[12],
	//				auditor: filters[13],
	//				interfaz: filters[14],
	//				proveedorBsp:filters[15],
	//				tipoPago:filters[16],
	//				tarjetaCredito:filters[17],
	//				ciudadOrigen:filters[18],
	//				paisOrigen:filters[19],
	//				ciudadDestino:filters[20],
	//				paisDestino:filters[21]
	//			};
	//			//FILTROS ALMACENADOS
	//			this.cbFiltrosDB = filters[22];
	//			this.cd.markForCheck();
	//			return filters;
	//		});
	//	//},2000);
	//}
*/

}
