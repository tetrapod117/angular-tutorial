import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <nav>
  <a routerLink="/dashboard" routerLinkActive="active">ダッシュボード</a>
  <a routerLink="/members" routerLinkActive="active">社員一覧</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '自社社員名簿';
}