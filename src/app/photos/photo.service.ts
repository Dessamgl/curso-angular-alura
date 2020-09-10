import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';

import { Photo } from './photo/photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Photo[]>(API + '/' + userName + '/photos', { params });
  }
}