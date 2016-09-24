'use strict';

var util = require('util');
var AtomUtil = require('../atom-util');
var ContainerAtom = require('../container-atom');

function AtomMINF() {
    ContainerAtom.apply(this, Array.prototype.slice.call(arguments));

    this.availableAtoms = [AtomUtil.ATOM_VMHD, AtomUtil.ATOM_SMHD, AtomUtil.ATOM_DINF, AtomUtil.ATOM_STBL];
}

util.inherits(AtomMINF, ContainerAtom);

module.exports = AtomMINF;