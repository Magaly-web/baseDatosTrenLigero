'use strict'

var mmmeB01 = require('../../../../../models/smm/fichasMantenimiento/SGMM/sistematico/MMME_B01');

const MMME_B01 = {};

MMME_B01.getMMME_B01Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeB01.findById(id)
    res.json(maintenance)
};
MMME_B01.editMMME_B01Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_B01 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        resistenciasS: req.body || false,
        resistenciasL: req.body || false,
        observacionesR: req.body || '',

        convertidorTS: req.body || false,
        convertidorTL: req.body || false,
        observacionesCt: req.body || '',

        convertidorAS: req.body || false,
        convertidorAL: req.body || false,
        observacionesCa: req.body || '',

        cajaCAPS: req.body || false,
        cajaCAPL: req.body || false,
        observacionesCAP: req.body || '',

        disyuntorS: req.body || false,
        disyuntorL: req.body || false,
        observacionesD: req.body || '',

        cajaHVS: req.body || false,
        cajaHVL: req.body || false,
        observacionesHV: req.body || '',

        cajaCCATL: req.body || false,
        observacionesCCAT: req.body || '',

        convertidorCTL: req.body || false,
        observacionesCT: req.body || '',

        cofre1S: req.body || false,
        cofre1L: req.body || false,
        observacionesC1: req.body || '',

        cofre2S: req.body || false,
        cofre2L: req.body || false,
        observacionesC2: req.body || '',

        cofre3S: req.body || false,
        cofre3L: req.body || false,
        observacionesC3: req.body || '',

        bogiem1S: req.body || false,
        bogiem1L: req.body || false,
        bogiem1R: req.body || false,
        observacionesBm1: req.body || '',

        bogierS: req.body || false,
        bogierL: req.body || false,
        bogierR: req.body || false,
        observacionesBr: req.body || '',

        bogiem2S: req.body || false,
        bogiem2L: req.body || false,
        bogiem2R: req.body || false,
        observacionesBm2: req.body || '',

        motocompresorS: req.body || false,
        motocompresorL: req.body || false,
        motocompresorR: req.body || false,
        observacionesM: req.body || '',

        acopladorm1S: req.body || false,
        acopladorm1L: req.body || false,
        acopladorm1R: req.body || false,
        observacionesAm1: req.body || '',

        acopladorm2S: req.body || false,
        acopladorm2L: req.body || false,
        acopladorm2R: req.body || false,
        observacionesAm2: req.body || '',

        bajoBm1S: req.body || false,
        bajoBm1L: req.body || false,
        bajoBm1R: req.body || false,
        observacionesBbm1: req.body || '',

        bajoAS: req.body || false,
        bajoAL: req.body || false,
        bajoAR: req.body || false,
        observacionesBa: req.body || '',

        bajoBm2S: req.body || false,
        bajoBm2L: req.body || false,
        bajoBm2R: req.body || false,
        observacionesBbm2: req.body || '',

        busquedaFm1R: req.body || false,
        observacionesBfm1: req.body || '',

        busquedaFrR: req.body || false,
        observacionesBfr: req.body || '',

        busquedaFm2R: req.body || false,
        observacionesBfm2: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmeB01.findByIdAndUpdate(id, { $set: MMME_B01}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_B01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeB01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_B01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeB01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_B01.getAllMaintenenceMMME_B01 = async (req, res) => {
    const maintenances = await mmmeB01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_B01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_B01New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeB01.findByIdAndUpdate(id, { $set: historyMMME_B01New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_B01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeB01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_B01.createMaintenenceMMME_B01 = async (req, res) => {
    const maintenence = new mmmeB01(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_B01;