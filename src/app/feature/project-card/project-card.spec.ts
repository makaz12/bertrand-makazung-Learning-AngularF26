import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardList } from './project-card-list';

describe('ProjectCard', () => {
  let component: ProjectCardList;
  let fixture: ComponentFixture<ProjectCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
