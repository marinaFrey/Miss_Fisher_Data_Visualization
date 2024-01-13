import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { RomanceComponent } from './features/romance/romance.component';
import { WardrobeComponent } from './features/wardrobe/wardrobe.component';
import { MudersComponent } from './features/muders/muders.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'characters', component: CharactersComponent },
  { path: 'romance', component: RomanceComponent },
  { path: 'wardrobe', component: WardrobeComponent },
  { path: 'murders', component: MudersComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
