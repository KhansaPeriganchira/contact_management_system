import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/model/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl:string = 'http://localhost:3000/contacts'

  //function - get all contacts
  getAllContacts():Observable<MyContact>{
   return this.http.get(this.baseUrl)

  }
// api call for fetch particular contact
//for to fetch data corresponds to particular id(view chyyanulla function call ,parameter aayittu id pass chaydu 'id' present aaya data kittaan)

viewContact(contactId:any){

//http://localhost:3000/contacts/1    (url of id :1 person data details)

//above path ninnum data return chaydu kittanam

// get varanamenggill this.http kodukkanam  inject chaydittundd, / kayinnu  varunna value

  return this.http.get(`${this.baseUrl}/${contactId}`)

} //after this we have to use this funtion call in view component ts file,then there will again a dependecy comes


//group path call chayyenameggill api  call nadathanam, api call will done in api services

//api call for fetch group name of particular groupid adinde grp name veenam

getGroupName(groupId:any)  //function create chaydu ,parameter aayiyyu groupid:with type given
{
  return this.http.get('http://localhost:3000/group/'+groupId)
}//after this api call goes to viewcontactcoomponene ts file leekk


//function to fetch all group names from path http://localhost:3000/group/'
//here id pass chayyenddaa because particular data aalla veendadd complete grp data veenam
getAllGroups(){

  return this.http.get('http://localhost:3000/group/')//fetch chayyanulla code
}//add contact ts fileek edine   pass chaydu



//function for adding new contact to server  , post method aaan use chaydad uer data add chayyugayaan  contactBody=content store chayyunuu
      
       addContact(contactBody:any){

          return this.http.post(this.baseUrl,contactBody)
          
        }//pass this fun to add contact ts file


        //function for deleting a contact from server,parameter pass chayyanam id vachaaan delete chayyenddad
        // btn clickil api call  this.baseurl ninnu contact id kittanam
        deleteContact(contactId:any)
        {

          return this.http.delete(`${this.baseUrl}/${contactId}`)
        }

        //function for updating an existing contact fully update chayyunnu so put is used,partially update aaneggill  patch used
        updateContact(contactId:any,contactBody:any)
        {
         
          return this.http.put(`${this.baseUrl}/${contactId}`,contactBody)
          
        }

}
