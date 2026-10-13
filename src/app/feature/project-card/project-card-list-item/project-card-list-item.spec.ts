import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardListItem } from './project-card-list-item';

describe('ProjectCardListItem', () => {
  let component: ProjectCardListItem;
  let fixture: ComponentFixture<ProjectCardListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
