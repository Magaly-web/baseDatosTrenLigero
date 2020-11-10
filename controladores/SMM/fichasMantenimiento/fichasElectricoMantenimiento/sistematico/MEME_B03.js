'use strict'

var memeB03 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B03');

const MEME_B03 = {};

MEME_B03.getMEME_B03Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeB03.findById(id)
    res.json(maintenance)
};
MEME_B03.editMEME_B03Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MEME_B03 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',

        vigaL: req.body,
        vigaR: req.body,
        vigaF: req.body,
        observacionesV: req.body,
        
        unionL: req.body,
        unionR: req.body,
        unionF: req.body,
        observacionesU: req.body,
        
        discoL: req.body,
        discoR: req.body,
        discoF: req.body,
        observacionesD: req.body,
        
        revestL: req.body,
        revestR: req.body,
        revestA: req.body,
        observacionesR: req.body,
        
        fuellesL: req.body,
        fuellesR: req.body,
        observacionesF: req.body,
        
        alojamientoL: req.body,
        alojamientoR: req.body,
        alojamientoA: req.body,
        observacionesA: req.body,

        tapasL: req.body,
        tapasR: req.body,
        tapasF: req.body,
        tapasA: req.body,
        observacionesT: req.body,
        
        tapaspL: req.body,
        tapaspR: req.body,
        tapaspF: req.body,
        tapaspA: req.body,
        observacionesTp: req.body,
        
        moldurastL: req.body,
        moldurastR: req.body,
        moldurastA: req.body,
        observacionesMt: req.body,
        
        nylamidL: req.body,
        nylamidR: req.body,
        nylamidE: req.body,
        nylamidA: req.body,
        nylamidD: req.body,
        observacionesN: req.body,
        
        frentesM1L: req.body,
        frentesM1R: req.body,
        frentesM1A: req.body,
        observacionesFm1: req.body,
        
        frentesM2L: req.body,
        frentesM2R: req.body,
        frentesM2A: req.body,
        observacionesFm2: req.body,
        
        cableadoL: req.body,
        cableadoR: req.body,
        observacionesC: req.body,

        manguerasL: req.body,
        manguerasR: req.body,
        observacionesM: req.body,
        
        cofreL: req.body,
        cofreR: req.body,
        cofreA: req.body,
        observacionesCe: req.body,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await memeB03.findByIdAndUpdate(id, { $set: MEME_B03}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B03.getAllMaintenenceMEME_B03 = async (req, res) => {
    const maintenances = await memeB03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_B03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B03New = {
        historyFile: req.body.historyFile || []
    }
    await memeB03.findByIdAndUpdate(id, { $set: historyMEME_B03New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B03.createMaintenenceMEME_B03 = async (req, res) => {
    const maintenence = new memeB03(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B03;