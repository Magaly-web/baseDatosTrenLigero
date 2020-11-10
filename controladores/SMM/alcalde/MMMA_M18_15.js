'use strict'

var mmmaM18_15 = require('../../../models/smm/mayor/MMMA_M18_15');

const MMMA_M18_15 = {};

MMMA_M18_15.getMMMA_M18_15Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_15.findById(id)
    res.json(maintenance)
};
MMMA_M18_15.editMMMA_M18_15Data = async (req, res) => {
    const { id } = req.params;
    
    const MMMA_M18_15 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //PRUEBAS
        caudal8: req.body || '',
        caudal8giro: req.body || '',

        caudal10: req.body || '',
        caudal10giro: req.body || '',

        //PRUEBAS DE FASES DE MOTOR SIN CARGA
        motorSinCargaF1Ro: req.body || '',
        motorSinCargaF1Ct: req.body || '',
        observacionesMscF1: req.body || '',

        motorSinCargaF2Ro: req.body || '',
        motorSinCargaF2Ct: req.body || '',
        observacionesMscF2: req.body || '',

        motorSinCargaF3Ro: req.body || '',
        motorSinCargaF3Ct: req.body || '',
        observacionesMscF3: req.body || '',

        motorSinCargaRpmRo: req.body || '',
        motorSinCargaRpmCt: req.body || '',
        observacionesMscRpm: req.body || '',

        //PRUEBAS DE FASES DE MOTOR CON CARGA
        motorConCargaF1Ro: req.body || '',
        motorConCargaF1Ct: req.body || '',
        observacionesMccF1: req.body || '',

        motorConCargaF2Ro: req.body || '',
        motorConCargaF2Ct: req.body || '',
        observacionesMccF2: req.body || '',

        motorConCargaF3Ro: req.body || '',
        motorConCargaF3Ct: req.body || '',
        observacionesMccF3: req.body || '',

        motorConCargaRpmRo: req.body || '',
        motorConCargaRpmCt: req.body || '',
        observacionesMccRpm: req.body || '',

        observaciones: req.body.obs,
    };
    await mmmaM18_15.findByIdAndUpdate(id, { $set: MMMA_M18_15}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_15.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_15.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_15.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_15.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_15.getAllMaintenenceMMMA_M18_15 = async (req, res) => {
    const maintenances = await mmmaM18_15.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_15.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_15New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_15.findByIdAndUpdate(id, { $set: historyMMMA_M18_15New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_15.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_15.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_15.createMaintenenceMMMA_M18_15 = async (req, res) => {
    const maintenence = new mmmaM18_15(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_15;