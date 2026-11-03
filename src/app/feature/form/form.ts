import { Component, computed, effect, inject, input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ProjectService } from '../../shared/services/project-service';
import { ValidationError } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  private fb = inject(FormBuilder).nonNullable;
  private service = inject(ProjectService);
  readonly projectId = input<string>(); // private project = inject();

  // project = this.service.projectList;

  projectForm = this.fb.group(
    {
      name: ['', [Validators.required, this.nameValidator()]],
      imagePath: [''],
      videoPath: [''],
      description: ['', [Validators.required, Validators.maxLength(70)]],
      // programmingLanguages: this.fb.control<string[]>([], Validators.required),
      // tools: this.fb.control<string[]>([], Validators.required),
      // skills: this.fb.control<string[]>([], Validators.required),
      programmingLanguages: ['', Validators.required],
      tools: ['', Validators.required],
      skills: ['', Validators.required],
      status: this.fb.control<'in-progress' | 'completed'>('completed'),
    },
    { validators: this.sameNameAndDesc() },
  );

  //convert the user's input before sending it to the service
  constructor() {
    effect(() => {
      // const project = this.;
      const project = this.project();
      if (project) {
        console.log(project);
        // this.projectForm.patchValue(project);
        //convert array back to string
        this.projectForm.patchValue({
          ...project,
          programmingLanguages: project.programmingLanguages.join(', '),
          tools: project.tools.join(', '),
          skills: project.skills.join(', ')
          })
      }
    });
  }

  //checks that the user does not enter an input that is not accepted
  nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == 'bad word' && control.value == 'not good') {
        return { invalidProject: true };
      }
      return null;
    };
  }

  //uses cross-validation to check if name and description have the same value and returns error if true
  sameNameAndDesc(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const name = control.get('name');
      const description = control.get('description');
      return name && description && name.value === description.value
        ? { unambiguousRole: true }
        : null;
    };
  }

  project = computed(() => this.service.projectList().find((b) => b.id === Number(this.projectId())));

  onSubmit(): void {
    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    const value = this.projectForm.getRawValue();
    // const project = this.service.projectList;
    // const nextId = project().length>0 ? Math.max(...project().find(p =>p.id)) + 1 : 1;

    //convert the user's input before sending it to the service
    const projectData = {
      ...value,
      programmingLanguages: value.programmingLanguages.split(',').map((s) => s.trim()),
      tools: value.tools.split(',').map((s) => s.trim()),
      skills: value.skills.split(',').map((s) => s.trim()),
    };
    //checks the last id and increments by 1
    const nextId =
      this.service.projectList().length > 0
        ? Math.max(...this.service.projectList().map((p) => p.id)) + 1
        : 1;
    let newVal;
    const existingProject = this.project();
    // checks if an existing project is selected
    if (existingProject) {
      this.service.updateProject(existingProject.id, projectData);
    } else {
      this.service.addProject({
        id: nextId,
        ...projectData,
      });
    }
    this.projectForm.reset();

    console.log(value);
  }

  // protected readonly onsubmit = onsubmit;
}
