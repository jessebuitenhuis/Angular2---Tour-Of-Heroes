import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]	

})
export class HeroesComponent implements OnInit { 
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private heroService: HeroService,
		private router: Router) { 
	}

	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) { this.selectedHero = hero ; }

	goToDetail() {
		this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
	
}


