import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Options } from './options';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Banner } from './banner.interface';

@Component({
  selector: 'adrianub-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent extends Options implements OnInit {
  url!: string;
  bannerForm: FormGroup = this.createFormBanner();

  constructor(private fb: FormBuilder) {
    super();
    this.onChanges();
  }

  ngOnInit(): void {
    this.bannerForm.valueChanges.subscribe(() => this.onChanges());
  }

  createFormBanner(): FormGroup {
    return this.fb.group({
      typeBanner: this.typeBannerOptions[0].value,
      fontSize: this.fontSizeOptions[3].value,
      images: this.fb.array([this.newImage()]),
      theme: this.themeOptions[0].value,
      md: this.typeTextOptions[0].value,
      text: 'My Awesome Title',
      packageManager: this.packageManagerOptions[0].value,
      showWatermark: 1,
      pattern: this.heroPatternOptions[0].value,
      packageName: 'org/my-awesome-package',
      description: "This is why it's awesome",
      author: 'Adrián UB',
      username: 'adrian-ub',
      date: new Date().toISOString().substring(0, 10),
      logo: this.vercelDark,
      fileType: this.fileTypeOptions[0].value,
    });
  }

  newImage(): FormGroup {
    return this.fb.group({
      image: 'vercel',
      type: 'simple-icons',
      width: '250',
      height: '250',
    });
  }

  changeTypeImage(index: number): void {
    const value = this.images.controls[index].value;
    const type = value.type;
    const image = type === 'simple-icons' ? 'vercel' : 'academic-cap';
    this.images.controls[index].patchValue({ image: image });
  }

  changeTheme(): void {
    const value: Banner = this.bannerForm.value;
    const logo = value.logo;
    if (logo === this.vercelDark) {
      this.bannerForm.patchValue({ logo: this.vercelLight });
    }
    if (logo === this.vercelLight) {
      this.bannerForm.patchValue({ logo: this.vercelDark });
    }
  }

  addImage(): void {
    this.images.push(this.newImage());
  }

  removeImage(i: number) {
    this.images.removeAt(i);
  }

  get images(): FormArray {
    return this.bannerForm.get('images') as FormArray;
  }

  get typeBanner(): string {
    return this.bannerForm.get('typeBanner')?.value;
  }

  onChanges(): void {
    const values: Banner = this.bannerForm.value;
    const url = new URL(window.location.origin);
    url.pathname = `${encodeURIComponent(values.text)}.${values.fileType}`;
    url.searchParams.append('type', values.typeBanner);
    url.searchParams.append('theme', values.theme);

    if (values.typeBanner === 'package') {
      url.searchParams.append('packageManager', values.packageManager);
      url.searchParams.append('packageName', values.packageName);
      url.searchParams.append('description', values.description);
    }

    if (values.typeBanner === 'banner') {
      url.searchParams.append('author', values.author);
      url.searchParams.append('username', values.username);
      url.searchParams.append('date', values.date);
      url.searchParams.append('logo', values.logo);
    }

    for (const image of values.images) {
      url.searchParams.append('images', image.image);

      url.searchParams.append(
        'widths',
        image.width === 'auto' ? '' : image.width
      );

      url.searchParams.append(
        'heights',
        image.height === 'auto' ? '' : image.height
      );
    }

    url.searchParams.append('pattern', values.pattern);
    url.searchParams.append('md', values.md.toString());
    url.searchParams.append('showWatermark', values.showWatermark.toString());
    url.searchParams.append('fontSize', values.fontSize);

    this.url = url.href;
  }
}
