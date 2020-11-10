'use strict'

var mmmaM57_2 = require('../../../models/smm/mayor/MMMA_M57_2');

const MMMA_M57_2 = {};

MMMA_M57_2.getMMMA_M57_2Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM57_2.findById(id)
    res.json(maintenance)
};
MMMA_M57_2.editMMMA_M57_2Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M57_2 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        limpiezaGralEW6: req.body || false,
        limpiezaGralNW6: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevEW6: req.body || false,
        desarmadoRevNW6: req.body || false,
        observacionesDr: req.body || '',

        revisionFugaEW6: req.body || false,
        revisionFugaNW6: req.body || false,
        observacionesRf: req.body || '',

        lubricacionRenoilEW6: req.body || false,
        lubricacionRenoilNW6: req.body || false,
        observacionesLr: req.body || '',

        cambioKitEW6: req.body || false,
        cambioKitNW6: req.body || false,
        observacionesCk: req.body || '',

        pruebasEW6: req.body || false,
        pruebasNW6: req.body || false,
        observacionesP: req.body || '',

        observaciones: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM57_2.findByIdAndUpdate(id, { $set: MMMA_M57_2}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M57_2.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM57_2.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M57_2.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM57_2.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M57_2.getAllMaintenenceMMMA_M57_2 = async (req, res) => {
    const maintenances = await mmmaM57_2.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M57_2.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M57_2New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM57_2.findByIdAndUpdate(id, { $set: historyMMMA_M57_2New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M57_2.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM57_2.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M57_2.createMaintenenceMMMA_M57_2 = async (req, res) => {
    const maintenence = new mmmaM57_2(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M57_2;