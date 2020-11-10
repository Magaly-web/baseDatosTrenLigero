'use strict'

var mmmaM38 = require('../../../models/smm/mayor/MMMA_M38');

const MMMA_M38 = {};

MMMA_M38.getMMMA_M38Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM38.findById(id)
    res.json(maintenance)
};
MMMA_M38.editMMMA_M38Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M38 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        drenadoAceiteM1Ant: req.body || false,
        drenadoAceiteM1Post: req.body || false,
        drenadoAceiteM2Ant: req.body || false,
        drenadoAceiteM2Post: req.body || false,
        observacionesDa: req.body || '',

        lavadoM1Ant: req.body || false,
        lavadoM1Post: req.body || false,
        lavadoM2Ant: req.body || false,
        lavadoM2Post: req.body || false,
        observacionesL: req.body || '',

        cambioAceiteM1Ant: req.body || false,
        cambioAceiteM1Post: req.body || false,
        cambioAceiteM2Ant: req.body || false,
        cambioAceiteM2Post: req.body || false,
        observacionesDa: req.body || '',

        cantidadAceiteUM1Ant: req.body || false,
        cantidadAceiteUM1Post: req.body || false,
        cantidadAceiteUM2Ant: req.body || false,
        cantidadAceiteUM2Post: req.body || false,
        observacionesCau: req.body || '',

        revisionRespiraderosM1Ant: req.body || false,
        revisionRespiraderosM1Post: req.body || false,
        revisionRespiraderosM2Ant: req.body || false,
        revisionRespiraderosM2Post: req.body || false,
        observacionesRr: req.body || '',

        revisionTornilloM1Ant: req.body || false,
        revisionTornilloM1Post: req.body || false,
        revisionTornilloM2Ant: req.body || false,
        revisionTornilloM2Post: req.body || false,
        observacionesRt: req.body || '',

        revisionPinionM1Ant: req.body || false,
        revisionPinionM1Post: req.body || false,
        revisionPinionM2Ant: req.body || false,
        revisionPinionM2Post: req.body || false,
        observacionesRp: req.body || '',

        revisionCoronaM1Ant: req.body || false,
        revisionCoronaM1Post: req.body || false,
        revisionCoronaM2Ant: req.body || false,
        revisionCoronaM2Post: req.body || false,
        observacionesRc: req.body || '',

        torqueTornilleriaM1Ant: req.body || false,
        torqueTornilleriaM1Post: req.body || false,
        torqueTornilleriaM2Ant: req.body || false,
        torqueTornilleriaM2Post: req.body || false,
        observacionesTt: req.body || '',

        revisionPaquetesM1Ant: req.body || false,
        revisionPaquetesM1Post: req.body || false,
        revisionPaquetesM2Ant: req.body || false,
        revisionPaquetesM2Post: req.body || false,
        observacionesRpg: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM38.findByIdAndUpdate(id, { $set: MMMA_M38}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M38.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM38.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M38.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM38.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M38.getAllMaintenenceMMMA_M38 = async (req, res) => {
    const maintenances = await mmmaM38.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M38.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M38New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM38.findByIdAndUpdate(id, { $set: historyMMMA_M38New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M38.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM38.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M38.createMaintenenceMMMA_M38 = async (req, res) => {
    const maintenence = new mmmaM38(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M38;