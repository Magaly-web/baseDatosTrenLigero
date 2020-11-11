'use strict'

var mmmeC05 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C05');

const MMME_C05 = {};

MMME_C05.getMMME_C05Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC05.findById(id)
    res.json(maintenance)
};
MMME_C05.editMMME_C05Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C05 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        asientoDm1Rev: req.body || false,
        asientoDm1Limp: req.body || false,
        asientoDm1Apriete: req.body || false,
        asientoDm2Rev: req.body || false,
        asientoDm2Limp: req.body || false,
        asientoDm2Apriete: req.body || false,

        asientoSm1Rev: req.body || false,
        asientoSm1Limp: req.body || false,
        asientoSm1Apriete: req.body || false,
        asientoSm2Rev: req.body || false,
        asientoSm2Limp: req.body || false,
        asientoSm2Apriete: req.body || false,

        tubom1Rev: req.body || false,
        tubom1Limp: req.body || false,
        tubom1Apriete: req.body || false,
        tubom2Rev: req.body || false,
        tubom2Limp: req.body || false,
        tubom2Apriete: req.body || false,

        estructuram1Rev: req.body || false,
        estructuram1Limp: req.body || false,
        estructuram2Rev: req.body || false,
        estructuram2Limp: req.body || false,

        tornilloM6m1Rev: req.body || false,
        tornilloM6m1Limp: req.body || false,
        tornilloM6m1Apriete: req.body || false,
        tornilloM6m2Rev: req.body || false,
        tornilloM6m2Limp: req.body || false,
        tornilloM6m2Apriete: req.body || false,

        tornilloM12m1Rev: req.body || false,
        tornilloM12m1Limp: req.body || false,
        tornilloM12m1Apriete: req.body || false,
        tornilloM12m2Rev: req.body || false,
        tornilloM12m2Limp: req.body || false,
        tornilloM12m2Apriete: req.body || false,

        //TORNILLERIA DE PASAMANOS
        tornillosM1revE: req.body || false,
        tornillosM1apriete: req.body || false,
        tornillosM1cambT: req.body || false,
        tornillosM1revP: req.body || false,

        tornillosM2revE: req.body || false,
        tornillosM2apriete: req.body || false,
        tornillosM2cambT: req.body || false,
        tornillosM2revP: req.body || false,

        tornilloscM1revE: req.body || false,
        tornilloscM1apriete: req.body || false,
        tornilloscM1cambT: req.body || false,
        tornilloscM1revP: req.body || false,

        tornilloscM2revE: req.body || false,
        tornilloscM2apriete: req.body || false,
        tornilloscM2cambT: req.body || false,
        tornilloscM2revP: req.body || false,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC05.findByIdAndUpdate(id, { $set: MMME_C05}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C05.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC05.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C05.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC05.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C05.getAllMaintenenceMMME_C05 = async (req, res) => {
    const maintenances = await mmmeC05.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C05.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C05New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC05.findByIdAndUpdate(id, { $set: historyMMME_C05New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C05.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC05.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C05.createMaintenenceMMME_C05 = async (req, res) => {
    const maintenence = new mmmeC05(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C05;