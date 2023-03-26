import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'//pipe name
})
export class FilterPipe implements PipeTransform {


 
//allContacts - search chayyanulla array 
//searchKey  - enter chayyunna string eg: diya
//propertyname - name (array inside ulla name) on which property searcching depends on.
// array ,searchKey -diya ,propName - name

//using these changes made in transform ()

//complete type  any[] array that's why we can't return null  ;

  transform(allContacts:any=[], searchKey:string ,propName:string): any[] { //userdefined pipes are given in transform function
    
    const result:any=[]//transform output //result enna array  , transform inside variable 'result' ennadine  declare chayyuga

    // search field content ellatha situation empty yaaneggil  or '|' indicates that eedenggilumm onnu true aayaal maadee
    if(!allContacts || searchKey ==''||propName==''){

      return allContacts //allcontact ulladd display chayyuga
    }
    //content undeenggil
    //taking complete data and apply filter inside in it
    allContacts.forEach((contact:any)=>{//apply filter inside in it    

//includes array nagath particular name unddoo check chayya trim->to remove whitespace lowercase convert chaydu
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        //name Diya M -> diyam.includes(di)  

        result.push(contact) 
      }
     })
    
        return result; //transform n inside result declare chaydadu kondd this reference remove chaydu,now class inside alla result (refer chayyendda aavshyamilla )  .nammude filter pipe enganee work chayyanamennu evide parannu kodukkaa
  }
}









