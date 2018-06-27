import { Component, Input } from '@angular/core';
import { Member } from './member'

@Component({
  selector: 'member-detail',
  template: `
    <div *ngIf="member">
      <h2>{{member.name}}</h2>
      <div><label>id: </label>{{member.id}}</div>
        <div>
          <label>name: </label>
          <input type="text" [(ngModel)]="member.name" placeholder="名前">
        </div>
      </div>
  `
})
export class MemberDetailComponent{
  @Input() member: Member;
}