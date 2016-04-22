import _ from 'underscore-contrib';
import { Maybe } from 'monet';
import colors from './colors.js';

export class Block {
  constructor(position, color) {
    this.position = position || THREE.Vector3(0,0,0);

    let geometry = new THREE.BoxGeometry(1,1,1);
    let material = new THREE.MeshPhongMaterial({ color: color || colors.grass });

    this.mesh = new THREE.Mesh(geometry, material);
  }
}

export class World {
  constructor() {
    this.objs = _.repeat(64*64*64, Maybe.None());
  }
}

