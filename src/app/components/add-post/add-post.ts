import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../data/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.html',
  standalone: false
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      categoryId: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(2500)]]
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(cats => this.categories = cats);
  }

  get title() { return this.postForm.controls['title']; }
  get content() { return this.postForm.controls['content']; }
  get categoryId() { return this.postForm.controls['categoryId']; }

  onSubmit(): void {
    if (this.postForm.invalid) {
      this.postForm.markAllAsTouched();
      // erreur si le formulaire est invalide 
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'error',
        title: 'Please review your post',
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }

    const formValue = this.postForm.value;

    const postPayload = {
      title: formValue.title,
      content: formValue.content,
      categoryId: formValue.categoryId
    };

    this.postService.create(postPayload).subscribe({
      next: () => {
        // Toast de succès 
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Post Submitted Successfully',
          showConfirmButton: false,
          timer: 3000
        });
        // Redirection vers la page d'accueil
        this.router.navigate(['/']);
      }
    });
  }
}