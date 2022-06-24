import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Container } from 'src/app/entidad/container/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  
  Containers: Container[] = []

  constructor(public db: AngularFirestore) 
  {
  }

  async traerContainers()
  {
    this.db.collection<Container>('container').valueChanges().subscribe(Container => {
      this.Containers = Container;
    })
  }

  actualizarContainer(container: Container)
  {
    return this.db.collection('container').doc(container.id).update({
      marca: container.marca,
      capacidad: container.capacidad
    })
  }

  eliminarContainer(container: Container)
  {
    return this.db.collection('container').doc(container.id).delete()
  }

}
