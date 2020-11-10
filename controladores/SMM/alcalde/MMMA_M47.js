'use strict'

var mmmaM47 = require('../../../models/smm/mayor/MMMA_M47');

const MMMA_M47 = {};

MMMA_M47.getMMMA_M47Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM47.findById(id)
    res.json(maintenance)
};
MMMA_M47.editMMMA_M47Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M47 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        limpiezaGralV1: req.body || false,
        limpiezaGralV2: req.body || false,
        limpiezaGralV3: req.body || false,
        limpiezaGralV4: req.body || false,
        limpiezaGralV5: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevV1: req.body || false,
        desarmadoRevV2: req.body || false,
        desarmadoRevV3: req.body || false,
        desarmadoRevV4: req.body || false,
        desarmadoRevV5: req.body || false,
        observacionesDr: req.body || '',

        revisionFugasV1: req.body || false,
        revisionFugasV2: req.body || false,
        revisionFugasV3: req.body || false,
        revisionFugasV4: req.body || false,
        revisionFugasV5: req.body || false,
        observacionesRf: req.body || '',

        lubricacionRenoilV1: req.body || false,
        lubricacionRenoilV2: req.body || false,
        lubricacionRenoilV3: req.body || false,
        lubricacionRenoilV4: req.body || false,
        lubricacionRenoilV5: req.body || false,
        observacionesLr: req.body || '',

        cambioKitV1: req.body || false,
        cambioKitV2: req.body || false,
        cambioKitV3: req.body || false,
        cambioKitV4: req.body || false,
        cambioKitV5: req.body || false,
        observacionesCk: req.body || '',

        pruebasV1: req.body || false,
        pruebasV2: req.body || false,
        pruebasV3: req.body || false,
        pruebasV4: req.body || false,
        pruebasV5: req.body || false,
        observacionesP: req.body || '',

        observaciones: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM47.findByIdAndUpdate(id, { $set: MMMA_M47}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M47.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM47.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M47.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM47.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M47.getAllMaintenenceMMMA_M47 = async (req, res) => {
    const maintenances = await mmmaM47.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M47.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M47New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM47.findByIdAndUpdate(id, { $set: historyMMMA_M47New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M47.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM47.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M47.createMaintenenceMMMA_M47 = async (req, res) => {
    const maintenence = new mmmaM47(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M47;