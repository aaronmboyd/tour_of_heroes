import { Component, OnInit}     from '@angular/core';
import { Router }               from '@angular/router';

import { Hero }                 from './hero';
import { HeroService }          from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  name  = 'Angular'; 
  
  selectedHero  : Hero;
  heroes        : Hero[];

  ngOnInit() : void {
    this.getHeroes();
  }

  constructor(private router: Router,
              private heroService: HeroService) { }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

}
