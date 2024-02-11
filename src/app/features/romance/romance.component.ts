import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../episode.service';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {

  public episodes: Episode[] = [];

  nameCallingInfo = [
    {
      name: "Jack", infos: [
        { name: "Jack", label: "Jack says '(Miss) Phryne Fisher'", color: "#163075ff", hightlight: "#102252ff", isShowing: true },
        { name: "Jack", label: "Jack says 'Miss Fisher'", color: "#3553a0ff", hightlight: "#284284ff", isShowing: true },
        { name: "Jack", label: "Jack says 'Phryne'", color: "#4b76e4ff", hightlight: "#3b62c7ff", isShowing: true }
      ]
    },
    {
      name: "Phryne", infos: [
        { name: "Phryne", label: "Phryne says 'Detective Inspector Jack Robinson'", color: "#4e252bff", hightlight: "#42171eff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Inspector (Jack) (Robinson)'", color: "#7c3842ff", hightlight: "#60252eff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Jack Robinson'", color: "#b74d5cff", hightlight: "#9f4552ff", isShowing: true },
        { name: "Phryne", label: "Phryne says 'Jack'", color: "#e25b6fff", hightlight: "#c14b5dff", isShowing: true }
      ]
    }
  ];

  closenessInfo = [
    {
      name: "Phryne & Jack", infos: [
        { name: "Phryne & Jack", label: "Standing very close", color: "#9e5b60ff", hightlight: "#6d3a3dff", isShowing: true },
        { name: "Phryne & Jack", label: "Long eye contact", color: "#f8b76eff", hightlight: "#c68f52ff", isShowing: true },
        { name: "Phryne & Jack", label: "Touching", color: "#f27f66ff", hightlight: "#bb6a58ff", isShowing: true }
      ]
    }
  ];

  talkingInfo = [
    {
      name: "Phryne & Jack", infos: [
        { name: "Phryne & Jack", label: "Screen time with Phryne and Jack on the same scene (not 'alone')", color: "#44345E", hightlight: "#342342", isShowing: true },
        { name: "Phryne & Jack", label: "Screen time with Phryne and Jack 'alone'", color: "#9D67A4", hightlight: "#785897", isShowing: true }
      ]
    }
  ];

  indulgingInfo = [
    {
      name: "Jack", infos: [
        { name: "Jack", label: "Screen time with Jack in Phryne's Home", color: "#4b76e4ff", hightlight: "#3b62c7ff", isShowing: true }/*,
        { name: "Jack", label: "Total number of scenes in Phryne's Home", color: "grey", hightlight: "black", isShowing: true }*/
      ]
    },
    {
      name: "Phryne", infos: [
        { name: "Phryne", label: "scenes with Phryne in Jack's police station", color: "#7c3842ff", hightlight: "#60252eff", isShowing: true },
        { name: "Phryne", label: "scenes with Phryne in Jack's office", color: "#b74d5cff", hightlight: "#9f4552ff", isShowing: true },
        { name: "Phryne", label: "scenes with Phryne in Jack's table", color: "#e25b6fff", hightlight: "#c14b5dff", isShowing: true }/*,
        { name: "Phryne", label: "Total number of scenes in Jack's police station", color: "grey", hightlight: "black", isShowing: true }*/
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
