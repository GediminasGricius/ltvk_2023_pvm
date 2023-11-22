import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pvm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pvm.component.html',
  styleUrl: './pvm.component.css'
})
export class PvmComponent {
  public kaina:number|null=null;
  public bePVM:string="";
  public pvm:string="";
  public suma:string="";

  public skaiciuoti(){
    if (this.kaina!=null){
      this.bePVM=(this.kaina / 1.21).toFixed(2)+" EUR";
      this.pvm=(this.kaina - this.kaina / 1.21).toFixed(2)+" EUR";
      this.suma=this.kaina.toFixed(2)+" EUR";
     // this.kaina=null;
    }
  }

}
