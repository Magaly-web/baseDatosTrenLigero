'use strict'

var mmmeC02 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C02');

const MMME_C02 = {};

MMME_C02.getMMME_C02Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC02.findById(id)
    res.json(maintenance)
};
MMME_C02.editMMME_C02Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C02 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        dispm1L: req.body || false,
        dispm1R: req.body || false,
        dispm1E: req.body || false,
        dispm2L: req.body || false,
        dispm2R: req.body || false,
        dispm2E: req.body || false,
        
        manguerasm1L: req.body || false,
        manguerasm1R: req.body || false,
        manguerasm1C: req.body || false,
        manguerasm2L: req.body || false,
        manguerasm2R: req.body || false,
        manguerasm2C: req.body || false,
        
        cubiertaFm1L: req.body || false,
        cubiertaFm1R: req.body || false,
        cubiertaFm1C: req.body || false,
        cubiertaFm2L: req.body || false,
        cubiertaFm2R: req.body || false,
        cubiertaFm2C: req.body || false,
        
        barram1L: req.body || false,
        barram1R: req.body || false,
        barram2L: req.body || false,
        barram2R: req.body || false,
        
        segurosm1L: req.body || false,
        segurosm1R: req.body || false,
        segurosm1C: req.body || false,
        segurosm2L: req.body || false,
        segurosm2R: req.body || false,
        segurosm2C: req.body || false,
        
        mecanismoAm1L: req.body || false,
        mecanismoAm1R: req.body || false,
        mecanismoAm1E: req.body || false,
        mecanismoAm2L: req.body || false,
        mecanismoAm2R: req.body || false,
        mecanismoAm2E: req.body || false,
        
        contactosm1L: req.body || false,
        contactosm1R: req.body || false,
        contactosm2L: req.body || false,
        contactosm2R: req.body || false,
        
        boquillaAm1L: req.body || false,
        boquillaAm1R: req.body || false,
        boquillaAm1C: req.body || false,
        boquillaAm2L: req.body || false,
        boquillaAm2R: req.body || false,
        boquillaAm2C: req.body || false,
        
        dispositivoRm1L: req.body || false,
        dispositivoRm1R: req.body || false,
        dispositivoRm1C: req.body || false,
        dispositivoRm1E: req.body || false,
        dispositivoRm2L: req.body || false,
        dispositivoRm2R: req.body || false,
        dispositivoRm2C: req.body || false,
        dispositivoRm2E: req.body || false,
        
        sellosm1L: req.body || false,
        sellosm1R: req.body || false,
        sellosm1C: req.body || false,
        sellosm2L: req.body || false,
        sellosm2R: req.body || false,
        sellosm2C: req.body || false,
        
        cabezaAm1L: req.body || false,
        cabezaAm1R: req.body || false,
        cabezaAm1C: req.body || false,
        cabezaAm2L: req.body || false,
        cabezaAm2R: req.body || false,
        cabezaAm2C: req.body || false,
        
        pistonm1L: req.body || false,
        pistonm1R: req.body || false,
        pistonm1C: req.body || false,
        pistonm1E: req.body || false,
        pistonm2L: req.body || false,
        pistonm2R: req.body || false,
        pistonm2C: req.body || false,
        pistonm2E: req.body || false,
        
        limpiezam1L: req.body || false,
        limpiezam1R: req.body || false,
        limpiezam1C: req.body || false,
        limpiezam1E: req.body || false,
        limpiezam2L: req.body || false,
        limpiezam2R: req.body || false,
        limpiezam2C: req.body || false,
        limpiezam2E: req.body || false,
        
        electrovalvulam1L: req.body || false,
        electrovalvulam1R: req.body || false,
        electrovalvulam1C: req.body || false,
        electrovalvulam1E: req.body || false,
        electrovalvulam2L: req.body || false,
        electrovalvulam2R: req.body || false,
        electrovalvulam2C: req.body || false,
        electrovalvulam2E: req.body || false,
        
        electrovalvulaAm1L: req.body || false,
        electrovalvulaAm1R: req.body || false,
        electrovalvulaAm1C: req.body || false,
        electrovalvulaAm1E: req.body || false,
        electrovalvulaAm2L: req.body || false,
        electrovalvulaAm2R: req.body || false,
        electrovalvulaAm2C: req.body || false,
        electrovalvulaAm2E: req.body || false,
        
        revisionm1L: req.body || false,
        revisionm1R: req.body || false,
        revisionm1C: req.body || false,
        revisionm1E: req.body || false,
        revisionm2L: req.body || false,
        revisionm2R: req.body || false,
        revisionm2C: req.body || false,
        revisionm2E: req.body || false,
        
        alturaM1: req.body || '',
        alturaM2: req.body || '',
        llenadoM1: req.body || '',
        llenadoM2: req.body || '',
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC02.findByIdAndUpdate(id, { $set: MMME_C02}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C02.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC02.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C02.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC02.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C02.getAllMaintenenceMMME_C02 = async (req, res) => {
    const maintenances = await mmmeC02.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C02.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C02New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC02.findByIdAndUpdate(id, { $set: historyMMME_C02New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C02.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC02.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C02.createMaintenenceMMME_C02 = async (req, res) => {
    const maintenence = new mmmeC02(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C02;