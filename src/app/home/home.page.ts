import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpConfigService } from '../services/http-config.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  public term: string;
  public album  = [];
  public searchTerm: string = '';

  constructor(private httpConfigService: HttpConfigService) {}


  ngOnInit() {
    this.getAlbums();
  }

  ngOnDestroy() {
    this.getAlbums();
  }

 private getAlbums(){
    this.httpConfigService.getListOfAlbums().subscribe(res =>{
      this.album = res;
    })
  }



}
