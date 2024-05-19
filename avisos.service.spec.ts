import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { AvisosService } from './avisos.service';
import { Aviso } from '../models/aviso';

describe('AvisosService', () => {
  let service: AvisosService;
  let storageSpy: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Storage', ['create', 'get', 'set']);
    
    TestBed.configureTestingModule({
      providers: [
        AvisosService,
        { provide: Storage, useValue: spy }
      ]
    });
    service = TestBed.inject(AvisosService);
    storageSpy = TestBed.inject(Storage) as jasmine.SpyObj<Storage>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize storage', async () => {
    await service.init();
    expect(storageSpy.create).toHaveBeenCalled();
  });

  it('should get avisos from storage', async () => {
    const mockAvisos: Aviso[] = [
      { titulo: 'Aviso 1', descripcion: 'Descripción 1', fecha: new Date(), imagen: '' }
    ];
    storageSpy.get.and.returnValue(Promise.resolve(mockAvisos));

    await service.init();
    const avisos = service.getAvisos();
    expect(avisos).toEqual(mockAvisos);
    expect(storageSpy.get).toHaveBeenCalledWith('avisos');
  });

  it('should save a new aviso', async () => {
    const newAviso: Aviso = { titulo: 'Nuevo Aviso', descripcion: 'Nueva Descripción', fecha: new Date(), imagen: '' };
    storageSpy.get.and.returnValue(Promise.resolve([]));

    await service.init();
    service.guardarAviso(newAviso);

    expect(service.getAvisos().length).toBe(1);
    expect(service.getAvisos()[0]).toEqual(newAviso);
    expect(storageSpy.set).toHaveBeenCalledWith('avisos', [newAviso]);
  });

  it('should delete an aviso', async () => {
    const aviso: Aviso = { titulo: 'Aviso a Eliminar', descripcion: 'Descripción a Eliminar', fecha: new Date(), imagen: '' };
    storageSpy.get.and.returnValue(Promise.resolve([aviso]));

    await service.init();
    service.eliminarAviso(aviso);

    expect(service.getAvisos().length).toBe(0);
    expect(storageSpy.set).toHaveBeenCalledWith('avisos', []);
  });
});
