import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import {UserLogin} from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoal-82v9.onrender.com/usuarios/logar', userLogin)

  }
  cadastrar(user:User): Observable<User>{
    return this.http.post<User>('https://blogpessoal-82v9.onrender.com/usuarios/cadastrar', user)
  }
  atualizar(user:User): Observable<User>{
    return this.http.put<User>('https://blogpessoal-82v9.onrender.com/usuarios/atualizar', user)
  }

  getByIdUser(id:number): Observable<User>{
    return this.http.get<User>(`https://blogpessoal-82v9.onrender.com/usuarios/${id}`)
  }
  logado(){
    let ok: boolean = false
    
    if (environment.token != ''){
      ok = true
    }
    return ok
  }
  adm(){
    let ok: boolean = false
    
    if (environment.token == 'adm'){
      ok = true
    }
    return ok
  }
}
