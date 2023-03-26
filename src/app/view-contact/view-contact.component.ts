import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//edokke import chayyanam
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
//two classes  viewContactComponent & ActivatedRoute , when two classess are depended each other use dependency injection

export class ViewContactComponent implements OnInit{

  //router outlet 'id'  parannu koduthuuu.

//url ll particular id pass chayyanam activated route(class ne inject chaydu) enna class venaam  angular le @angular/router inside ulla classan eduu,that class laan params enna method ullad addil observable inside data unddavuga
//corresponding id data kittanam

  // dependency injection use chaydu   - >  to use params in activated route   ....(dependency injection) -> ..activatedRoute:ActivatedRoute....

//........  evide private access specifier aan .......

  //private variable name:dependency injection chayda class (format) .........


//string koddukkaanell after = 'single quotes' kodukka, kodukkanam variable;datatype 
contactId:string=''

//html page string interpolation chaydu displa chayyunnu variable declare chayyunnu.
contact:any;

///html page string interpolation chaydu displa chayyunnu variable declare chayyunnu group id value maatram kittan
groupId:any;

groupName:any;


//inside constructor  (dependency injection chayyuga)   private variable name:dependency injection .....chayda class (format) .........
//two classes depended each others are  ActivatedRoute & viewContactComponent so dependency injection performed 

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

  ngOnInit(): void {
    //click chayda udane data display chayyanam
    //params ll varrunna data observable type aayirikkum next enddu chayyanam ennadd subscribe parannu koduthu

    //this keyword is used for refer any thing inside class.   first refer chayyuga dependency injection chayda class ne 'this.activatedroute'   , data type:any  parameter data vanna console log koddka
    
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data); //contact id  maatram varum  , id - contactId =1 ,which contcat we choose that contact id console varum(id nammukk console kiityy)

      
      //classinu outside variable refer chaydu this use chaydu
      // this.contactId=data //html page inside {  "contactId":"1"} varumm ,then html page <pre>{{contactId |json}} </pre>  kodukka //any person ne view chaydaalum id engane varum 

      //contact id  varunna value varum this way koduthaal  ( data.contactId) particular value mmatram varum
      this.contactId=data.contactId;//1


      //view particular data - api call (ie call path to get data)  nadathunnad api service laan
      // particular contact nee view chayyan api call   api nagathe viewContact function kittann evide apiservice class inject chaydu(dependency vannu)
      //now pass data inside ngOnInit ,here first refer inject api with this.api,fun inside id refer chayyunnu,
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);//contactid with complete ata of particular contact nde data maatram kittum.
        
        //contact ne refer chayya
        this.contact=data;  //now html page complete ata of particular contact nde data maatram kittum,after this html page <pre>{{contact |json}} </pre> tag koduthu
        
        //view api call chayda same time group name display chayyanulla api call chayyanam
        //api call after data assigned to groupId
        this.groupId=data.groupId;//2  group id value  maaatram kiitaan

        //view groupname
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
          this.groupName=data.name;//name maatram kittaan
          console.log( this.groupName);//console kaanaan
          
        })
       


      })




    })


    
  }
}
