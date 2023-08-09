import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChipValue } from 'src/app/models/chip';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  /**
   * Chip will be marked as invalid if invalid: true
   */
  @Input() invalid = false;

  /**
   * Chip will be marked as selected if selected: true
   */
  @Input() selected = false;

  /**
   * Chip will be disabled if disabled: true. Click will be disabled.
   */
  @Input() disabled = false;

  /**
   * Id of the chip.
   */
  @Input({ required: true }) id!: string;

  /**
   * Name of the chip.
   */
  @Input({ required: true }) name!: string;

  /**
   * Value of the chip.
   */
  @Input({ required: true }) value!: ChipValue;

  /**
   * `selection` event will be emitted when the chip is clicked if it's not disabled.
   */
  @Output() selection = new EventEmitter<ChipValue>();

  toggle(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
    } else {
      this.selection.emit(this.value);
    }
  }
}
