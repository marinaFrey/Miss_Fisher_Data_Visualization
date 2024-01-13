import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../episode.service';

@Component({
  selector: 'app-wardrobe',
  templateUrl: './wardrobe.component.html',
  styleUrls: ['./wardrobe.component.css']
})
export class WardrobeComponent implements OnInit {

  public episodes: Episode[];

  hatInfo = [
    {
      name: "Phryne", infos: [
        { name: "Phryne", label: "Phryne wears a hat", color: "#e25b6fff", hightlight: "#c14b5dff", isShowing: true }
      ]
    },
    {
      name: "Jack", infos: [
        { name: "Jack", label: "Jack wears a hat", color: "#4b76e4ff", hightlight: "#3b62c7ff", isShowing: true }
      ]
    }
  ];

  constructor(private episodeService: EpisodeService) { }

  ngOnInit()
  {

    this.episodeService.getEpisodes()
      .subscribe(episodes => this.episodes = episodes, e => console.log("error ", e));

  }
}
