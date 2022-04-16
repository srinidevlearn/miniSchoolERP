import { Injectable } from '@angular/core';
import { catchError, Observable, of, take, tap } from 'rxjs';
import { CreateAction, setStateByProp,Query, StoreConfig } from 'src/app/shared/store_decorators';
import { STORE } from 'src/app/shared/store_decorators/store.core';
import { IStudentDetails } from 'src/app/utility/interfaces/studentData';
import { TenureConfigApiService } from './tenure-config-api.service';

@Injectable({
  providedIn: 'root'
})
@StoreConfig({featureKey:'tenureConfig'})
export class TenureConfigFacadeService {
  



}
