import {Component, OnInit} from '@angular/core';

import {Hero} from '../model/hero';
import {HeroService} from '../service/hero.service';

@Component({
selector:'my-dashboard',
styleUrls: ['app/style/dashboard.component.css'],
templateUrl:'app/template/dashboard.component.html'
})

export class DashboardComponent implements OnInit{
 heroes: Hero[]=[];
constructor(private heroService: HeroService) { }
 
  getHeroes():void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}