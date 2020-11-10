'use strict'

var mmmaM37 = require('../../../models/smm/mayor/MMMA_M37');

const MMMA_M37 = {};

MMMA_M37.getMMMA_M37Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM37.findById(id)
    res.json(maintenance)
};
MMMA_M37.editMMMA_M37Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M37 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        medicionCajaADm1_1: req.body || false,
        medicionCajaADm1_2: req.body || false,
        medicionCajaADm1_3: req.body || false,
        medicionCajaADm1_4: req.body || false,
        medicionCajaADr_5: req.body || false,
        medicionCajaADr_6: req.body || false,
        medicionCajaADr_7: req.body || false,
        medicionCajaADr_8: req.body || false,
        medicionCajaADm2_9: req.body || false,
        medicionCajaADm2_10: req.body || false,
        medicionCajaADm2_11: req.body || false,
        medicionCajaADm2_12: req.body || false,

        medicionCajaBCm1_1: req.body || false,
        medicionCajaBCm1_2: req.body || false,
        medicionCajaBCm1_3: req.body || false,
        medicionCajaBCm1_4: req.body || false,
        medicionCajaBCr_5: req.body || false,
        medicionCajaBCr_6: req.body || false,
        medicionCajaBCr_7: req.body || false,
        medicionCajaBCr_8: req.body || false,
        medicionCajaBCm2_9: req.body || false,
        medicionCajaBCm2_10: req.body || false,
        medicionCajaBCm2_11: req.body || false,
        medicionCajaBCm2_12: req.body || false,

        rodamientosCambM1_1: req.body || false,
        rodamientosCambM1_2: req.body || false,
        rodamientosCambM1_3: req.body || false,
        rodamientosCambM1_4: req.body || false,
        rodamientosCambR_5: req.body || false,
        rodamientosCambR_6: req.body || false,
        rodamientosCambR_7: req.body || false,
        rodamientosCambR_8: req.body || false,
        rodamientosCambM2_9: req.body || false,
        rodamientosCambM2_10: req.body || false,
        rodamientosCambM2_11: req.body || false,
        rodamientosCambM2_12: req.body || false,

        materialUtilizado: materiales,
    };
    await mmmaM37.findByIdAndUpdate(id, { $set: MMMA_M37}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M37.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM37.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M37.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM37.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M37.getAllMaintenenceMMMA_M37 = async (req, res) => {
    const maintenances = await mmmaM37.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M37.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M37New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM37.findByIdAndUpdate(id, { $set: historyMMMA_M37New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M37.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM37.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M37.createMaintenenceMMMA_M37 = async (req, res) => {
    const maintenence = new mmmaM37(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M37;