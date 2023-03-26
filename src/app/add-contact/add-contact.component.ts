import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';//MyContact ne import chaydu
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
// from here component name is made available to app-routing module
export class AddContactComponent implements OnInit {


//contact html contactId evide declare /define chayyanyyunnu  adileek value pass chaydaalee console dispaly aaavuu
contactId:any;

//define chaayyunnu edine html ninnu ts leek pass chayyduuu (two way binding)

contactName:string='';

allGroups:any[]=[]; //declare variable for string interpolation in html page

//MyContact modal class name -> object aan   kure datads pass chayyaanundd contact laayirikkum ella kaaryangalum varuga

contact:MyContact={};

//ApiService ne dependency injection evide chayduu  api service aaraanennu parannu koduthu
  constructor(private api:ApiService ,private route:Router){

  }

  //page open chayyumboo thannne varaan ngOnInit insidekoduykkunnad
  ngOnInit():void{

          this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);//array(3)
          this.allGroups=data;//refer chayyunnu data pass chayuunuu

        })
  }

  //add new contact  kodukkumbbo admin page kk varum new aayittu add chayda contact details display chayyum
//private route:Router inject chayyunnad Router enna classinu inside method aaya navigate by url evide usze chayyanann dependency injection chaydad
  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{

      //router class inside method aan navigate by  url vachaan  adu kittanannan => this.route.navigateByUrl('') 
      
      
    
    //eni create btn click chayyumbboo
      this.route.navigateByUrl('') //  '' quotes indicate chayyundda   oru page next page poovaan redirect chayyan =render to admin page
    })
   }

}
