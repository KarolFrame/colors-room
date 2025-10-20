import { Component, OnInit } from '@angular/core';
import { NavegationBarSection } from "../navegation-bar-section/navegation-bar-section";
import { CommonModule } from '@angular/common';
import { Path, PathDataService } from '../../services/path-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navegation-bar',
  imports: [NavegationBarSection, CommonModule],
  templateUrl: './navegation-bar.html',
  styleUrl: './navegation-bar.scss'
})
export class NavegationBar implements OnInit{
  paths$!: Observable<Path[]>;
  isMenuOpen = false;

  paths: Path[] = [];
  
  constructor(private pathDataServices: PathDataService){};
  
  ngOnInit(): void {
    this.paths$ = this.pathDataServices.paths$;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
