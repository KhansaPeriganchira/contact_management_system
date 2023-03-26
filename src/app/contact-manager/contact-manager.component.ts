import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit{

//defined a searchKey inside a class for searching,type string parannu kodukka , empty aayottu set chaydu searchKey nee 

searchKey:string='';


//Display date and time in main page with help of Datepipe

loginDate:any;



//..............................single data print chayyippikkunnu in html page  string interpolation
heading='Contact Details'

//.................................. single data print chayyippikkunnu in html page string interpolation


//.................................. string interpolation ................................//

//while variable declare in typescript ,it is compulsory to declare variable type must mention to resolve error by :any 

//  i) method 1  allContacts:any
//ii) method 2    type :modal parrnnu koduthu (MyContact) empty array assign chaydu (string interpolation nadathaan veendi allcontacts variable is created)


//to pass array(4) all contact details in to variable 'allContacts' we have to mention variable type 

allContacts:MyContact[]=[]  //allContacts -> variable name , MyContact -> created modal name , [] -> data inside model in form of array(ie array of data aayittaan)   , =[] empty array  initialize chayduu..assign chaydu

//............... above variable declared for to do string interpolation..............................................//

  constructor(private api:ApiService){


    //constructor inside code kodukkaam or ngOnInit llo veenemenggil  kodukkaam no problem
     //buitin method to display date .  default pipe,builtin pipe

     //verude kodukkan not possible so create new object  'new Date()',then dispaly this loginDate in html page(string interpolation) as <p>{{loginDate| date:'medium'}}</p>
    
    
     this.loginDate=new Date() 
  }
      
  ngOnInit():void{

    this.getAllContacts()
  }
    getAllContacts(){
    //MyContact erase chayydu  instead any  kodukkuga to remove error in this.allContacts because type mycontact already given in variable declaration part , so give any here

        this.api.getAllContacts().subscribe((data:any)=>{
           console.log(data);//array(4) all contact details


//to access class variable this.allContacts koduthuu ,also before passing data to a variable ,variable must declared inside class.

          //variable ne edinagathottu kodunnu ,then pass it(allContacts ulla data ne ) to html file(data binding(evide string interpolation chayyunnad) nadathi html file display chayyan)
             this.allContacts=data//entire data assigned to allContacts
          
        })
        
      }
   
   //userdefined value kodukkunnad alle so ngOnInit kayinnittu kodukka  ......event binding  function kodukkunaad  ts file

  //  nameChange(){
  //   alert('value changed')
  //  }
//data passed to ts file , varunna event nde type mention chaydu kodukkugaa type:any
//event.target.value -> engane koduthaal input boxil kodukkunna/type chayyunna  value console varum

  search(event:any){

    console.log(event.target.value);
    this.searchKey=event.target.value
    console.log( this.searchKey);
    

  }
  deleteContact(contactId:any){
//api nammal define chayda file le delete contact enna function ,fun inside contact id pass chayyanam ,eni delete icon click chayyunna time contact data delete chayyanamennggill 
//intermediadte delete chayyan referesh chaayannam to avoid this call function getAllContacs() appo thanne remove aavaan
    this.api.deleteContact(contactId).subscribe((data:any)=>{
    alert("contact deleted")
    this.getAllContacts()
  })
  }
}

























