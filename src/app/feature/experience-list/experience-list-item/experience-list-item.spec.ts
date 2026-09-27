import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceListItem } from './experience-list-item';

describe('ExperienceListItem', () => {
  let component: ExperienceListItem;
  let fixture: ComponentFixture<ExperienceListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
