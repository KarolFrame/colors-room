import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Path{
  pathName:string;
  sectionName: string;
  inSection: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PathDataService {
  private pathsSubject = new BehaviorSubject<Path[]>([
    { pathName: "/", sectionName: "HOME", inSection: true },
    { pathName: "/games", sectionName: "GAMES", inSection: false },
    { pathName: "/aboutus", sectionName: "ABOUT US", inSection: false },
    { pathName: "/contact", sectionName: "CONTACT", inSection: false }
  ]);

  paths$: Observable<Path[]> = this.pathsSubject.asObservable();

  constructor(){};

  setActivePath(activePathName: string): void {
    const currentPaths = this.getPaths();
    const updatedPaths = currentPaths.map(path => ({
      ...path,
      inSection: path.pathName === activePathName
    }));
    this.pathsSubject.next(updatedPaths);
  }

  getPaths(): Path[]{
    return this.pathsSubject.getValue();
  }
}
