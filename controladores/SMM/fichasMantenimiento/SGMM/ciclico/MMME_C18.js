'use strict'

var mmmeC18 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C18');

const MMME_C18 = {};

MMME_C18.getMMME_C18Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC18.findById(id)
    res.json(maintenance)
};
MMME_C18.editMMME_C18Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C18 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        noRedAntM1: req.body || 0,
        noRedPostM1: req.body || 0,
        noRedAntM2: req.body || 0,
        noRedPostM2: req.body || 0,

        drenadoM1Ant: req.body || false,
        drenadoM1Post: req.body || false,
        drenadoM2Ant: req.body || false,
        drenadoM2Post: req.body || false,

        lavadoM1Ant: req.body || false,
        lavadoM1Post: req.body || false,
        lavadoM2Ant: req.body || false,
        lavadoM2Post: req.body || false,

        llenadoM1Ant: req.body || false,
        llenadoM1Post: req.body || false,
        llenadoM2Ant: req.body || false,
        llenadoM2Post: req.body || false,

        revisionM1Ant: req.body || false,
        revisionM1Post: req.body || false,
        revisionM2Ant: req.body || false,
        revisionM2Post: req.body || false,

        par75M1Ant: req.body || false,
        par75M1Post: req.body || false,
        par75M2Ant: req.body || false,
        par75M2Post: req.body || false,

        par180M1Ant: req.body || false,
        par180M1Post: req.body || false,
        par180M2Ant: req.body || false,
        par180M2Post: req.body || false,

        revisionPM1Ant: req.body || false,
        revisionPM1Post: req.body || false,
        revisionPM2Ant: req.body || false,
        revisionPM2Post: req.body || false,

        aceiteTE90_TE95M1Ant: req.body || '',
        aceiteTE90_TE95M1Post: req.body || '',
        aceiteTE90_TE95M2Ant: req.body || '',
        aceiteTE90_TE95M2Post: req.body || '',

        aceiteTE06M1Ant: req.body || '',
        aceiteTE06M1Post: req.body || '',
        aceiteTE06M2Ant: req.body || '',
        aceiteTE06M2Post: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC18.findByIdAndUpdate(id, { $set: MMME_C18}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C18.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC18.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C18.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC18.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C18.getAllMaintenenceMMME_C18 = async (req, res) => {
    const maintenances = await mmmeC18.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C18.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C18New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC18.findByIdAndUpdate(id, { $set: historyMMME_C18New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C18.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC18.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C18.createMaintenenceMMME_C18 = async (req, res) => {
    const maintenence = new mmmeC18(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C18;