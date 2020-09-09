import { observable, action } from 'mobx-angular';
import { Injectable } from '@angular/core';
import { computed } from 'mobx';

class CountStore {
  @observable sum = 0;
  @observable
  @action
  count() {
    this.sum += 1;
  }
}

export const contactStore = new CountStore();
