import { Injectable } from '@angular/core';
import { IResourceMethodObservable, IResourceMethodObservableStrict, Resource } from '@ngx-resource/core';
import { ResourceAction, ResourceHandler, ResourceParams, ResourceRequestBodyType } from '@ngx-resource/core';
import { ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/users`
})
export class UserResourceService extends Resource {

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getUsers: IResourceMethodObservable<void, IUser[]>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/login',
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Text
  })
  login: IResourceMethodObservable<IUser, string>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/signup',
    requestBodyType: ResourceRequestBodyType.JSON
  })
  signup: IResourceMethodObservable<IUser, null>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/info',
    responseBodyType: ResourceResponseBodyType.Json
  })
  getInfo: IResourceMethodObservable<void, IUser>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/checkUsername',
    requestBodyType: ResourceRequestBodyType.JSON,
    headers: {skip: 'true'},
    asResourceResponse: true
  })
  checkUsername: IResourceMethodObservable<IUser, Response>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/checkPassword',
    requestBodyType: ResourceRequestBodyType.JSON,
    headers: {skip: 'true'},
    asResourceResponse: true
  })
  checkPassword: IResourceMethodObservable<{userId: number, password: string}, Response>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/me',
    requestBodyType: ResourceRequestBodyType.JSON
  })
  updateInfo: IResourceMethodObservable<IUser, Response>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/me',
    requestBodyType: ResourceRequestBodyType.JSON
  })
  updatePassword: IResourceMethodObservable<IUser, Response>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{!id}'
  })
  updateUser: IResourceMethodObservableStrict<IUser, null, {id: number}, void>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/{!id}'
  })
  deleteUser: IResourceMethodObservable<{id: number}, void>;

  @ResourceAction({
    method: ResourceRequestMethod.Delete,
    path: '/me'
  })
  deleteOwnUser: IResourceMethodObservable<void, void>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/impersonate/{!id}',
    responseBodyType: ResourceResponseBodyType.Text
  })
  impersonate: IResourceMethodObservable<{id: number}, string>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/return/{!id}',
    responseBodyType: ResourceResponseBodyType.Text
  })
  returnAccount: IResourceMethodObservable<{id: number}, string>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}
