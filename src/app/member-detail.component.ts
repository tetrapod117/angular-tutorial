import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Member } from './member'
import { MemberService } from './member.service';

@Component({
  selector: 'member-detail',
  templateUrl: './member-detail.component.html'
})
export class MemberDetailComponent implements OnInit{
  @Input() member: Member;

  constructor(
    private memberService: MemberService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(){
    this.router.paramMap
    .switchMap((param: ParamMap) => {
      return this.memberService.getMember(+param.get('id'));
    })
    .subscribe(member => this.member);
  }

  goBack(): void {
    this.location.back();
  }
}