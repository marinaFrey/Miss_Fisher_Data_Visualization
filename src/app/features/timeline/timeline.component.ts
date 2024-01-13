import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../episode.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  public episodes: Episode[];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit()
  {

    this.episodeService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes, e => console.log("error ", e));

  }

}
