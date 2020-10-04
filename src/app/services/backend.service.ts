import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import LabelStatus from '../models/label-status';
import TextRegion from '../models/text-region';

const REGIONS: TextRegion[] = [
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1601677237215-c9a8f0747b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1601677237215-c9a8f0747b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
  new TextRegion(
    "123",
    "https://images.unsplash.com/photo-1601677237215-c9a8f0747b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1601677237215-c9a8f0747b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    0,
    0,
    0,
    0,
    "This is an example label",
    LabelStatus.NotLabeled,
    null,
    null),
];


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(
    private http: HttpClient
  ) { }

  public loadRegionsForLabeling(userId: string, itemCount: number): Promise<TextRegion[]> {
    return new Promise<TextRegion[]>((resolve, reject) => {
      resolve(REGIONS.slice(0, itemCount));
    });
  }

  public labelRegion(region: TextRegion, canLabel: boolean, label: string): Promise<void> {
    return new Promise<void>((resolve, rejects) => {
      resolve();
    });
  }

  public loadRegionsForVerifying(userId: string, itemCount: number): Promise<TextRegion[]> {
    return new Promise<TextRegion[]>((resolve, reject) => {
      resolve(REGIONS.slice(0, itemCount));
    });
  }

  public verifyLabel(region: TextRegion, isCorrect: boolean): Promise<void> {
    return new Promise<void>((resolve, rejects) => {
      resolve();
    });
  }
}
