//vere oru component le kaaryam vere component(here app component) paraanuu kodukkanamenggil ,adine evideek import chayyanam ,edinakgath adinde (component name nammal parannu kodukkundd)

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    //localhost://4200 main path '' null aayirikkum, pathMatch :full ee path lekku thanne varanam

    path:'',redirectTo:'contact/admin',pathMatch:'full'

  },

  {
    //localhost://4200/contact/admin
    //here component name is get from corresponding component ts (typescript) file where export class after appeared is component name copy paste it here
   // after paste here an error display in code fix it by Quick fixing and import there
   
    path:'contact/admin',component:ContactManagerComponent
    
  },

   //localhost://4200/contact/add
  {
     path:'contact/add',component:AddContactComponent
  },

   //localhost://4200/contact/update
  {
    //id is given here because particular contact id is passing here
    path:'contact/update/:Id',component:UpdateContactComponent
  },

   //localhost://4200/contact/view
  {
    //path setting of view component
    path:'contact/view/:contactId',component: ViewContactComponent
  },
  {
    //path:** kodukunnad create chayyatha((not created) path kodummboo page not found varanam  functions onnum undaavilla
    path:'**',component:PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
