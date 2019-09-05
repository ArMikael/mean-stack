import { InputFormatDirective } from './input-format.directive';
import { describe, expect } from '@angular/core/testing/src/testing_internal';

import {ElementRef} from '@angular/core';


describe('InputFormatDirective', () => {

  it('should create an instance', () => {
    const directive = new InputFormatDirective(<any>ElementRef);
    expect(directive).toBeTruthy();
  });
});
