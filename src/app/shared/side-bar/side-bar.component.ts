import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  items = [
    {
      label: 'Home',
      icon: 'fa fa-home fa-fw',
      routing: '/home'
    },
    {
      label: 'Characters',
      icon: 'fa fa-user-friends fa-fw',
      routing: '/characters'
    },
    {
      label: 'Romance',
      icon: 'fa fa-heart fa-fw',
      routing: '/romance'
    },
    {
      label: 'Wardrobe',
      icon: 'fa fa-tshirt fa-fw',
      routing: '/wardrobe'
    },
    {
      label: 'Murders',
      icon: 'fa fa-dizzy fa-fw',
      routing: '/murders'
    }, /*
    {
      label: 'Timeline',
      icon: 'fa fa-calendar fa-fw',
      routing: '/timeline'
    }, */
    {
      label: 'About',
      icon: 'fa fa-info-circle fa-fw',
      routing: '/about'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
