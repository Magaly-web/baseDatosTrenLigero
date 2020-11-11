'use strict'

var mmmeC09 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico//MMME_C09');

const MMME_C09 = {};

MMME_C09.getMMME_C09Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC09.findById(id)
    res.json(maintenance)
};
MMME_C09.editMMME_C09Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C09 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        limpiezam1D1: req.body || false,
        limpiezam1D2: req.body || false,
        limpiezam1D3: req.body || false,
        limpiezam1I1: req.body || false,
        limpiezam1I2: req.body || false,
        limpiezam1I3: req.body || false,
        limpiezam2D1: req.body || false,
        limpiezam2D2: req.body || false,
        limpiezam2D3: req.body || false,
        limpiezam2I1: req.body || false,
        limpiezam2I2: req.body || false,
        limpiezam2I3: req.body || false,

        revisionm1D1: req.body || false,
        revisionm1D2: req.body || false,
        revisionm1D3: req.body || false,
        revisionm1I1: req.body || false,
        revisionm1I2: req.body || false,
        revisionm1I3: req.body || false,
        revisionm2D1: req.body || false,
        revisionm2D2: req.body || false,
        revisionm2D3: req.body || false,
        revisionm2I1: req.body || false,
        revisionm2I2: req.body || false,
        revisionm2I3: req.body || false,

        lubricacionm1D1: req.body || false,
        lubricacionm1D2: req.body || false,
        lubricacionm1D3: req.body || false,
        lubricacionm1I1: req.body || false,
        lubricacionm1I2: req.body || false,
        lubricacionm1I3: req.body || false,
        lubricacionm2D1: req.body || false,
        lubricacionm2D2: req.body || false,
        lubricacionm2D3: req.body || false,
        lubricacionm2I1: req.body || false,
        lubricacionm2I2: req.body || false,
        lubricacionm2I3: req.body || false,

        limpiezaDm1D1: req.body || false,
        limpiezaDm1D2: req.body || false,
        limpiezaDm1D3: req.body || false,
        limpiezaDm1I1: req.body || false,
        limpiezaDm1I2: req.body || false,
        limpiezaDm1I3: req.body || false,
        limpiezaDm2D1: req.body || false,
        limpiezaDm2D2: req.body || false,
        limpiezaDm2D3: req.body || false,
        limpiezaDm2I1: req.body || false,
        limpiezaDm2I2: req.body || false,
        limpiezaDm2I3: req.body || false,

        limpiezaBm1D1: req.body || false,
        limpiezaBm1D2: req.body || false,
        limpiezaBm1D3: req.body || false,
        limpiezaBm1I1: req.body || false,
        limpiezaBm1I2: req.body || false,
        limpiezaBm1I3: req.body || false,
        limpiezaBm2D1: req.body || false,
        limpiezaBm2D2: req.body || false,
        limpiezaBm2D3: req.body || false,
        limpiezaBm2I1: req.body || false,
        limpiezaBm2I2: req.body || false,
        limpiezaBm2I3: req.body || false,

    observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC09.findByIdAndUpdate(id, { $set: MMME_C09}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C09.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC09.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C09.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC09.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C09.getAllMaintenenceMMME_C09 = async (req, res) => {
    const maintenances = await mmmeC09.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C09.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C09New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC09.findByIdAndUpdate(id, { $set: historyMMME_C09New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C09.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC09.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C09.createMaintenenceMMME_C09 = async (req, res) => {
    const maintenence = new mmmeC09(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C09;