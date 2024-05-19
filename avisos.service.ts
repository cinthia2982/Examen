import { Injectable } from '@angular/core';
import { Aviso } from '../models/aviso';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private dbInstance!: SQLiteObject; 

  constructor(private sqlite: SQLite) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.dbInstance = db;
      db.executeSql('CREATE TABLE IF NOT EXISTS avisos(id INTEGER PRIMARY KEY, title TEXT, description TEXT, date TEXT, photo TEXT)', [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  getAvisos(): Promise<Aviso[]> {
    return this.dbInstance.executeSql('SELECT * FROM avisos', []).then((res) => {
      let avisos: Aviso[] = [];
      for (var i = 0; i < res.rows.length; i++) {
        avisos.push(res.rows.item(i));
      }
      return avisos;
    });
  }

  createAviso(aviso: Aviso): Promise<any> {
    let data = [aviso.title, aviso.description, aviso.date, aviso.photo];
    return this.dbInstance.executeSql('INSERT INTO avisos (title, description, date, photo) VALUES (?, ?, ?, ?)', data);
  }

  deleteAviso(id: number): Promise<any> {
    return this.dbInstance.executeSql('DELETE FROM avisos WHERE id = ?', [id]);
  }
}

