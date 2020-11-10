'use strict'

var mmmaM19_1 = require('../../../models/smm/mayor/MMMA_M19_1');

const MMMA_M19_1 = {};

MMMA_M19_1.getMMMA_M19_1Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM19_1.findById(id)
    res.json(maintenance)
};
MMMA_M19_1.editMMMA_M19_1Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M19_1 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //PLACA PORTADORA-I 93987
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM19_1.findByIdAndUpdate(id, { $set: MMMA_M19_1}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M19_1.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM19_1.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M19_1.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM19_1.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M19_1.getAllMaintenenceMMMA_M19_1 = async (req, res) => {
    const maintenances = await mmmaM19_1.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M19_1.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M19_1New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM19_1.findByIdAndUpdate(id, { $set: historyMMMA_M19_1New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M19_1.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM19_1.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M19_1.createMaintenenceMMMA_M19_1 = async (req, res) => {
    const maintenence = new mmmaM19_1(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M19_1;