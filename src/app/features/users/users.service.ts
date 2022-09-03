import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpService: HttpService) {}

  getStudentDataById(id:any) {
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.GET_STUDENT_DETAILS_BYID,
      {},
      id
    );
  }
}
