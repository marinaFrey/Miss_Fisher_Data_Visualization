import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './features/home/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { NumberOfScenesPerCharacterVisualizationComponent } from './visualizations/number-of-scenes-per-character-visualization/number-of-scenes-per-character-visualization.component';
import { VisualizationComponent } from './visualizations/visualization/visualization.component';
import { NameCallingVisualizationComponent } from './visualizations/name-calling-visualization/name-calling-visualization.component';
import { IndulgingVisualizationComponent } from './visualizations/indulging-visualization/indulging-visualization.component';
import { AboutComponent } from './about/about.component';
import { OutfitsVisualizationComponent } from './visualizations/outfits-visualization/outfits-visualization.component';
import { MurdersVisualizationComponent } from './visualizations/murders-visualization/murders-visualization.component';
import { ClosenessVisualizationComponent } from './visualizations/closeness-visualization/closeness-visualization.component';
import { LegendComponent } from './visualizations/legend/legend.component';
import { ButtonGroupComponent } from './visualizations/button-group/button-group.component';
import { BarChartComponent } from './visualizations/bar-chart/bar-chart.component';
import { LineChartComponent } from './visualizations/line-chart/line-chart.component';
import { SankeyChartComponent } from './visualizations/sankey-chart/sankey-chart.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { CharactersComponent } from './characters/characters.component';
import { RomanceComponent } from './features/romance/romance.component';
import { WardrobeComponent } from './features/wardrobe/wardrobe.component';
import { MudersComponent } from './features/muders/muders.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { ForceChartComponent } from './visualizations/force-chart/force-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavigationBarComponent,
    NumberOfScenesPerCharacterVisualizationComponent,
    VisualizationComponent,
    NameCallingVisualizationComponent,
    IndulgingVisualizationComponent,
    AboutComponent,
    OutfitsVisualizationComponent,
    MurdersVisualizationComponent,
    ClosenessVisualizationComponent,
    LegendComponent,
    ButtonGroupComponent,
    BarChartComponent,
    LineChartComponent,
    SankeyChartComponent,
    SideBarComponent,
    CharactersComponent,
    RomanceComponent,
    WardrobeComponent,
    MudersComponent,
    TimelineComponent,
    ForceChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
