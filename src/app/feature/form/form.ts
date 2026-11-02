import { Component, computed, effect, inject, input } from '@angular/core';
import {
  FormBuilder,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProjectService } from '../../shared/services/project-service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  private fb = inject(FormBuilder).nonNullable;
  private service = inject(ProjectService);
  readonly id = input<string>(); // private project = inject();

  // project = this.service.projectList;

  projectForm = this.fb.group({
    name: ['', Validators.required],
    imagePath: [''],
    videoPath: [''],
    description: ['', [Validators.required, Validators.maxLength(70)]],
    programmingLanguages: this.fb.control<string[]>([], Validators.required),
    tools: this.fb.control<string[]>([], Validators.required),
    skills: this.fb.control<string[]>([], Validators.required),
    status: this.fb.control<'in-progress' | 'completed'>('completed'),
  });

  constructor() {
    effect(() => {
      // const project = this.;
      const project = this.project();
      if (project) {
        console.log(project);
        this.projectForm.patchValue(project);
      }
    });
  }

  project = computed(() => this.service.projectList().find((b) => b.id === Number(this.id())));

  onSubmit(): void {
    if (this.projectForm.invalid) return;

    const value = this.projectForm.getRawValue();
    // const project = this.service.projectList;
    // const nextId = project().length>0 ? Math.max(...project().find(p =>p.id)) + 1 : 1;

    const nextId =
      this.service.projectList().length > 0
        ? Math.max(...this.service.projectList().map((p) => p.id)) + 1
        : 1;
    let newVal;

    this.service.addProject({
      id: nextId,
      ...value,
    });
    this.projectForm.reset();

    console.log(value);
  }

  // protected readonly onsubmit = onsubmit;
}
