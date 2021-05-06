import { Component, OnInit } from '@angular/core';

import { ServiceapiService } from 'src/app/Service/serviceapi.service';

declare var $: any;
declare var toastr: any;


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {



  user = localStorage.getItem('user')
  constructor(private serviceapi: ServiceapiService) { }

  item : any;

  buying = 'Buy';
  buyingbool = false;
  buydata: any;

  alldevices : any
  ngOnInit(): void {
    this.getdevices()

  }



  removecomma(val: any) {
    return val.replace(/[^\d]/g, '');
   }

   addcomma(val: any) {
     let vall = val+''
    return vall.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
   }

  getdevices() {

    this.serviceapi.devices().then(data => {

      this.alldevices = data;
      console.log(data)
    })
  }



  profile() {
    $('#buyitem').modal('hide')
    window.location.href = '#/profile';
  }


  buyitem(id: any) {
    this.item = id;
   

    this.buying = 'Buying...';
    this.buyingbool = true;
  
 

    this.serviceapi.buy(this.item).then(data => {

      this.buydata = data;
      console.log(this.buydata )
      $('#buyitem').modal('show')

      this.buying = 'Buy';
      this.buyingbool = false;
    
   
      
    })
  }


  close() {
    $('#buyitem').modal('hide')
  }

  logout() {
    window.location.href = '/';
    localStorage.clear();
  }
}
