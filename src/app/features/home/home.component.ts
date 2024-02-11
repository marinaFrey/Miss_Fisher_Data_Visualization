import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../episode.service';
import { Episode, Murder, EpisodeDate, Information } from '../../models/episode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public episodes: Episode[] = [];

  

  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {

    this.episodeService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes, e => console.log("error ", e));

  }

}
