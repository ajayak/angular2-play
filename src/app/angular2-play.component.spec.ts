import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2PlayAppComponent } from '../app/angular2-play.component';

beforeEachProviders(() => [Angular2PlayAppComponent]);

describe('App: Angular2Play', () => {
  it('should create the app',
      inject([Angular2PlayAppComponent], (app: Angular2PlayAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-play works!\'',
      inject([Angular2PlayAppComponent], (app: Angular2PlayAppComponent) => {
    expect(app.title).toEqual('angular2-play works!');
  }));
});
