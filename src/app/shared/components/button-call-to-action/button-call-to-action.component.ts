import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-call-to-action',
  templateUrl: './button-call-to-action.component.html',
  styleUrls: ['./button-call-to-action.component.scss']
})
export class ButtonCallToActionComponent {
  @Input() widthListener = 0;
  @Input() heightListener = 0;
  @Input() textListener = '';
  @Input() spanListener: true | false = false;
  @Input() colorBorderListener = '';
  @Input() colorTextListener = '';
  @Input() backgroundColorListener = '';
}
