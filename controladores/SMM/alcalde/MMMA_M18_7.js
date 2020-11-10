'use strict'

var mmmaM18_7 = require('../../../models/smm/mayor/MMMA_M18_7');

const MMMA_M18_7 = {};

MMMA_M18_7.getMMMA_M18_7Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_7.findById(id)
    res.json(maintenance)
};
MMMA_M18_7.editMMMA_M18_7Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_7 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //ACOPLAMIENTO
        copleMotorR: req.body || false,
        copleMotorL: req.body || false,
        copleMotorE: req.body || false,
        copleMotorC: req.body || false,
        observacionesCm: req.body || '',

        copleCompresorR: req.body || false,
        copleCompresorL: req.body || false,
        copleCompresorE: req.body || false,
        copleCompresorC: req.body || false,
        observacionesCc: req.body || '',

        prisionerosR: req.body || false,
        prisionerosL: req.body || false,
        prisionerosE: req.body || false,
        prisionerosC: req.body || false,
        observacionesP: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_7.findByIdAndUpdate(id, { $set: MMMA_M18_7}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_7.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_7.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_7.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_7.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_7.getAllMaintenenceMMMA_M18_7 = async (req, res) => {
    const maintenances = await mmmaM18_7.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_7.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_7New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_7.findByIdAndUpdate(id, { $set: historyMMMA_M18_7New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_7.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_7.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_7.createMaintenenceMMMA_M18_7 = async (req, res) => {
    const maintenence = new mmmaM18_7(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_7;