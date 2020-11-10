'use strict'

var mmmaM36 = require('../../../models/smm/mayor/MMMA_M36');

const MMMA_M36 = {};

MMMA_M36.getMMMA_M36Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM36.findById(id)
    res.json(maintenance)
};
MMMA_M36.editMMMA_M36Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M36 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        limpiezaGralM1: req.body || false,
        limpiezaGralM2: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevM1: req.body || false,
        desarmadoRevM2: req.body || false,
        observacionesDr: req.body || '',

        engrasadoM1: req.body || false,
        engrasadoM2: req.body || false,
        observacionesE: req.body || '',

        noBalasM1: req.body || false,
        noBalasM2: req.body || false,
        observacionesNb: req.body || '',

        //MOTRIZ 1
        grados0Int: req.body || '',
        grados90Int: req.body || '',
        grados180Int: req.body || '',
        grados270Int: req.body || '',
        
        //MOTRIZ 2
        grados0Ext: req.body || '',
        grados90Ext: req.body || '',
        grados180Ext: req.body || '',
        grados270Ext: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM36.findByIdAndUpdate(id, { $set: MMMA_M36}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M36.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM36.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M36.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM36.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M36.getAllMaintenenceMMMA_M36 = async (req, res) => {
    const maintenances = await mmmaM36.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M36.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M36New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM36.findByIdAndUpdate(id, { $set: historyMMMA_M36New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M36.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM36.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M36.createMaintenenceMMMA_M36 = async (req, res) => {
    const maintenence = new mmmaM36(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M36;