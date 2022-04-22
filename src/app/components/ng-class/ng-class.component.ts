import { Component } from '@angular/core';
 
@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent{
  cssAlteradoViaVar: string = 'color size'
  objNgClass: UmaClasseCss = new UmaClasseCss()
}
 
// criar a class para ser vinculada a diretiva ngClass
class UmaClasseCss{
  color: boolean = true
  size: boolean = true
}
