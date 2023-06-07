import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor( private router: Router){
    
  }
  goToCreateItem(): void{
    this.router.navigate(['form']);
  }
  items: string[]= [
    'MaiaHI',
    'MaiaHA',
    'MaiaHAHA',
    'MaiaHI',
    'MaiaHA',
    'MaiaHAHA',
    'MaiaHI',
    'MaiaHA',
    'MaiaHAHA',
    'MaiaHA',
    
    ]
}