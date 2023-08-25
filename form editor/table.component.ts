import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
  
})
export class TableComponent {
 /**ngFor examples 
  title='List Of Movies';
  movies=[
    'Ironman',
   'Thor',
   'Batman',
   'Superman',
   'Captain America'
  ]
 movies=[
    {name:"ironman",director:"Iron",type:"Marvel",release:"march"},
    {name:"superman",director:"Super",type:"Dc",release:"april"},
    {name:"Thor Ragnarok",director:"Thor",type:"Marvel",release:"may"},
    {name:"Batman",director:"Bat",type:"Dc",release:"june"},
    {name:"Captain America",director:"Captain",type:"Marvel",release:"july"},
  ]**/ 
  /**ngSwitch examples 
  num=0;**/

   /**ngSwitch examples
   showMe=true;**/

   /**ngClass examples
   enableRed=false;
   enableBig=false;
   enableItalics=false;**/

/**ngClass examples
   bgcolorattr='black';
   colorattr='white';
**/
/**sharing one component to other componet
 cars:string[]=[];
 carName="";
 addCar(){
      this.cars.push(this.carName);
      this.carName="";
      console.log(this.cars) 
 }**/
 left='left';
 right='right';
 center='center';
 opacity='80%';
bgcolor1='black'
color1='white'
btncolor='blue'
btntxtcolor='white'
fb="arial black"
selected="none"
size1="none"
}
