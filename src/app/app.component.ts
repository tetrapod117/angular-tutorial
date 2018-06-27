import { Component } from '@angular/core';
import { Member } from './member'


const MEMBERS: Member[] = [
  { id: 11, name: '武山 岳大' },
  { id: 12, name: '駒倉 光紀' },
  { id: 13, name: '長田 研太' },
  { id: 14, name: '高藤 友梨香' },
  { id: 15, name: '浜崎 貴之' },
  { id: 16, name: '緑川 睦' },
  { id: 17, name: '森谷 怜奈' },
  { id: 18, name: '大槻 祐大' },
  { id: 19, name: '岩野 紀之' },
  { id: 20, name: '佐々木 小次郎' },
];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>社員一覧</h2>
    <ul class="members">
      <li *ngFor="let member of members" (click)="onSelecet(member)"
        [class.selected]="member === selectedMember">
        <span class="badge">{{member.id}}</span> {{member.name}}
      </li>
    </ul>
    <member-detail [member]="selectedMember"></member-detail>
  `,
  
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .members {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .members li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .members li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .members li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .members .text {
      position: relative;
      top: -3px;
    }
    .members .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent  {
  title = '自社社員名簿';
  members = MEMBERS;
  selectedMember : Member;

  onSelecet(member: Member): void {
    this.selectedMember = member
  }
}
