import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2DirectivesAppComponent } from '../app/angular2-directives.component';

beforeEachProviders(() => [Angular2DirectivesAppComponent]);

describe('App: Angular2Directives', () => {
  it('should create the app',
      inject([Angular2DirectivesAppComponent], (app: Angular2DirectivesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-directives works!\'',
      inject([Angular2DirectivesAppComponent], (app: Angular2DirectivesAppComponent) => {
    expect(app.title).toEqual('angular2-directives works!');
  }));
});
