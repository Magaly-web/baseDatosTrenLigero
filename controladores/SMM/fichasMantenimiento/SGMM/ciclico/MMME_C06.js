'use strict'

var mmmeC06 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C06');

const MMME_C06 = {};

MMME_C06.getMMME_C06Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC06.findById(id)
    res.json(maintenance)
};
MMME_C06.editMMME_C06Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C06 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        revisionUem1_1: req.body || false,
        revisionUem1_2: req.body || false,
        revisionUem1_3: req.body || false,
        revisionUem2_1: req.body || false,
        revisionUem2_2: req.body || false,
        revisionUem2_3: req.body || false,
        revisionUim1_1: req.body || false,
        revisionUim1_2: req.body || false,
        revisionUim1_3: req.body || false,
        revisionUim2_1: req.body || false,
        revisionUim2_2: req.body || false,
        revisionUim2_3: req.body || false,
        revisionTm1_1: req.body || false,
        revisionTm1_2: req.body || false,
        revisionTm1_3: req.body || false,
        revisionTm2_1: req.body || false,
        revisionTm2_2: req.body || false,
        revisionTm2_3: req.body || false,
        observacionesR: req.body || '',

        limpiezaUem1_1: req.body || false,
        limpiezaUem1_2: req.body || false,
        limpiezaUem1_3: req.body || false,
        limpiezaUem2_1: req.body || false,
        limpiezaUem2_2: req.body || false,
        limpiezaUem2_3: req.body || false,
        limpiezaUim1_1: req.body || false,
        limpiezaUim1_2: req.body || false,
        limpiezaUim1_3: req.body || false,
        limpiezaUim2_1: req.body || false,
        limpiezaUim2_2: req.body || false,
        limpiezaUim2_3: req.body || false,
        limpiezaTm1_1: req.body || false,
        limpiezaTm1_2: req.body || false,
        limpiezaTm1_3: req.body || false,
        limpiezaTm2_1: req.body || false,
        limpiezaTm2_2: req.body || false,
        limpiezaTm2_3: req.body || false,
        observacionesL: req.body || '',

        selladoUem1_1: req.body || false,
        selladoUem1_2: req.body || false,
        selladoUem1_3: req.body || false,
        selladoUem2_1: req.body || false,
        selladoUem2_2: req.body || false,
        selladoUem2_3: req.body || false,
        selladoUim1_1: req.body || false,
        selladoUim1_2: req.body || false,
        selladoUim1_3: req.body || false,
        selladoUim2_1: req.body || false,
        selladoUim2_2: req.body || false,
        selladoUim2_3: req.body || false,
        selladoTm1_1: req.body || false,
        selladoTm1_2: req.body || false,
        selladoTm1_3: req.body || false,
        selladoTm2_1: req.body || false,
        selladoTm2_2: req.body || false,
        selladoTm2_3: req.body || false,
        observacionesS: req.body || '',

        aplicacionUem1_1: req.body || false,
        aplicacionUem1_2: req.body || false,
        aplicacionUem1_3: req.body || false,
        aplicacionUem2_1: req.body || false,
        aplicacionUem2_2: req.body || false,
        aplicacionUem2_3: req.body || false,
        observacionesA: req.body || '',

        recuperacionUem1_1: req.body || false,
        recuperacionUem1_2: req.body || false,
        recuperacionUem1_3: req.body || false,
        recuperacionUem2_1: req.body || false,
        recuperacionUem2_2: req.body || false,
        recuperacionUem2_3: req.body || false,
        observacionesRec: req.body || '',
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC06.findByIdAndUpdate(id, { $set: MMME_C06}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C06.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC06.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C06.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC06.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C06.getAllMaintenenceMMME_C06 = async (req, res) => {
    const maintenances = await mmmeC06.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C06.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C06New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC06.findByIdAndUpdate(id, { $set: historyMMME_C06New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C06.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC06.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C06.createMaintenenceMMME_C06 = async (req, res) => {
    const maintenence = new mmmeC06(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C06;