'use strict'

var mmmaM18_10 = require('../../../models/smm/mayor/MMMA_M18_10');

const MMMA_M18_10 = {};

MMMA_M18_10.getMMMA_M18_10Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_10.findById(id)
    res.json(maintenance)
};
MMMA_M18_10.editMMMA_M18_10Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_10 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //MOTOR
        cuerpoR: req.body || false,
        cuerpoL: req.body || false,
        cuerpoE: req.body || false,
        cuerpoC: req.body || false,
        observacionesC: req.body || '',

        rotorR: req.body || false,
        rotorL: req.body || false,
        rotorE: req.body || false,
        rotorC: req.body || false,
        observacionesR: req.body || '',

        estatorR: req.body || false,
        estatorL: req.body || false,
        estatorE: req.body || false,
        estatorC: req.body || false,
        observacionesE: req.body || '',

        lineasElectricasR: req.body || false,
        lineasElectricasL: req.body || false,
        lineasElectricasE: req.body || false,
        lineasElectricasC: req.body || false,
        observacionesLe: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_10.findByIdAndUpdate(id, { $set: MMMA_M18_10}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_10.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_10.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_10.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_10.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_10.getAllMaintenenceMMMA_M18_10 = async (req, res) => {
    const maintenances = await mmmaM18_10.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_10.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_10New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_10.findByIdAndUpdate(id, { $set: historyMMMA_M18_10New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_10.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_10.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_10.createMaintenenceMMMA_M18_10 = async (req, res) => {
    const maintenence = new mmmaM18_10(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_10;