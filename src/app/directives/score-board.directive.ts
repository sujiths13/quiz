import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScoreBoard]',
})
export class ScoreBoardDirective implements OnInit {
  @Input({ required: true }) score = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const scoreBoardClass = this.scoreBoardClass(this.score);
    this.renderer.addClass(this.el.nativeElement, scoreBoardClass);
  }

  private scoreBoardClass(score: number): string {
    if (score <= 1) {
      return 'poor';
    } else if (score <= 3) {
      return 'average';
    } else {
      return 'good';
    }
  }
}
