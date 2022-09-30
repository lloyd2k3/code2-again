import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.css']
})
export class MenupagesComponent implements OnInit {

  constructor(private param:ActivatedRoute , private service:OrderDetailsService) { }
  getMenuid:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuid = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuid,'getmenu');
    if(this.getMenuid)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuid;
        });
        /* Printing the menuData to the console. */
        console.log(this.menuData,'menudata>>');
        
    }
  }

}
