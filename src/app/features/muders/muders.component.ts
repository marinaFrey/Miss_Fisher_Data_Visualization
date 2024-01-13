import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/models/episode';
import { EpisodeService } from 'src/app/episode.service';

@Component({
  selector: 'app-muders',
  templateUrl: './muders.component.html',
  styleUrls: ['./muders.component.css']
})
export class MudersComponent implements OnInit {

  public episodes: Episode[];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit()
  {

    this.episodeService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes, e => console.log("error ", e));

  }

}
