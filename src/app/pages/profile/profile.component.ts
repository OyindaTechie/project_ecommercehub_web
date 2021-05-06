import { Component, OnInit } from '@angular/core';
import { ServiceapiService } from 'src/app/Service/serviceapi.service';

declare var $: any;
declare var toastr: any;
declare var Chart: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  transactions : any;
  boughtItems : any;
  returnedItems : any
  user = localStorage.getItem('user')
  constructor(private serviceapi: ServiceapiService) { }

  ngOnInit(): void {

   
    this.alltransactions()
  }



  back(){

    window.location.href = '#/buy';

  }

  removecomma(val: any) {
    return val.replace(/[^\d]/g, '');
   }

   addcomma(val: any) {
    return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
   }


  return(id: any) {
  
    this.serviceapi.return(id).then(data => {
      console.log(data)
      this.alltransactions();

      this.successmessage('Item returned successfully!')

      setTimeout(() => {
        window.location.reload()
      }, 2000);
    })
  }


  showchart() {

    var ctx = $('#myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',

    
    data: {
        // labels: ['Items Bought', 'Items Returned'],
        // datasets: [{
        //     label: 'Chart of Items Bought / Items Retuned',
        //     data: [this.boughtItems['length'], this.returnedItems['length']],
        //     backgroundColor: [
        //         'rgba(255, 99, 132, 0.2)',
            
        //         'rgba(158, 255, 102, 0.2)',
       
        //     ],
        //     borderColor: [
        //       'rgba(255, 99, 132, 0.5)',
            
        //         'rgba(158, 255, 102, 0.5)',
           
        //     ],
        //     borderWidth: 1
        // }]

        labels: [
          'Items Bought ('+ this.boughtItems['length']+ ')',
          'Items Returned (' + this.returnedItems['length']+ ')',
        ],
        datasets: [{
          label: 'Chart of Items Bought / Items Retuned',
          data: [this.boughtItems['length'], this.returnedItems['length']],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
         
       
          ],
          hoverOffset: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

  }


  alltransactions() {
    this.transactions = null;
    this.serviceapi.transactions().then(data => {

      this.transactions = data;
      this.boughtItems =  this.transactions.transactions_sold;
      this.returnedItems =  this.transactions.transactions_returned;


      console.log(this.transactions)

      this.showchart();

    })
  }





successmessage(message: any){

  // Display a success toast, with a title
toastr.success(message)
}



failuremessage(message: any){

  // Display a success toast, with a title
toastr.error(message)
}


infomessage(message: any){

  // Display a success toast, with a title
toastr.info(message)
}




}
