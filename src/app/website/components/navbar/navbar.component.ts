import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selectTextOne = "¡Cotizar ahora!";

  containerButton = {
    width: 210,
    height: 48,
    colorBorder: 'var(--color-dark)',
    backgroundColor: 'var(--color-4)'
  }

  menuButtonStatus: boolean = false;
  containerServiceText: boolean = false;
  containerServicesContainer: boolean = false;
  containerChooseProject: boolean = false;
  containerProjectScaleEnergy: boolean = false;
  containerProjectScaleSwimming: boolean = false;
  iconActiveProjectsChoose: boolean = false;
  iconActiveProjectEnergy: boolean = false;

  constructor(private router: Router) {
  }

  toggleMenu() {
    this.menuButtonStatus = !this.menuButtonStatus;
  }

  clickEventRouterLink() {
    this.menuButtonStatus = false;
  }

  toggleContainerServices() {
    this.containerServiceText = !this.containerServiceText;
    this.containerServicesContainer = !this.containerServicesContainer;
  }

  toggleContainerChooseProject() {
    this.containerChooseProject = !this.containerChooseProject;
    this.iconActiveProjectsChoose = !this.iconActiveProjectsChoose;
  }

  toggleContainerProjectScaleEnergy() {
    this.containerProjectScaleEnergy = !this.containerProjectScaleEnergy;
    this.iconActiveProjectEnergy = !this.iconActiveProjectEnergy;
  }

  clickPage() {
    this.containerServiceText = false;
    this.containerServicesContainer = false;
  }


  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  
}
