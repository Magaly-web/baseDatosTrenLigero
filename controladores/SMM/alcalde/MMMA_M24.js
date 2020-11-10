'use strict'

var mmmaM24 = require('../../../models/smm/mayor/MMMA_M24');

const MMMA_M24 = {};

MMMA_M24.getMMMA_M24Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM24.findById(id)
    res.json(maintenance)
};
MMMA_M24.editMMMA_M24Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M24 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        engrasado: req.body || false,
        observacionesE: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        baleroInterior: req.body || '',
        baleroExterior: req.body || '',

        //RODAMIENTO INTERIOR
        grados0Int: req.body || '',
        grados90Int: req.body || '',
        grados180Int: req.body || '',
        grados270Int: req.body || '',
        
        //RODAMIENTO EXTERIOR
        grados0Ext: req.body || '',
        grados90Ext: req.body || '',
        grados180Ext: req.body || '',
        grados270Ext: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM24.findByIdAndUpdate(id, { $set: MMMA_M24}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M24.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM24.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M24.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM24.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M24.getAllMaintenenceMMMA_M24 = async (req, res) => {
    const maintenances = await mmmaM24.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M24.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M24New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM24.findByIdAndUpdate(id, { $set: historyMMMA_M24New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M24.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM24.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M24.createMaintenenceMMMA_M24 = async (req, res) => {
    const maintenence = new mmmaM24(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M24;