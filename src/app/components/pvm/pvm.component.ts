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
  public kaina:number=100;

}
