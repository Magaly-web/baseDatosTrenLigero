'use strict'

var mmmaM02 = require('../../../models/smm/mayor/MMMA_M02');

const MMMA_M02 = {};

MMMA_M02.getMMMA_M02Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM02.findById(id)
    res.json(maintenance)
};
MMMA_M02.editMMMA_M02Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M02 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        //1. DESMONTAJE FILTROS DE ADMISION DE AIRE
        retirarTFm1: req.body || false,
        retirarTFm2: req.body || false,
        observacionesRt: req.body || '',

        desmontajeFFm1: req.body || false,
        desmontajeFFm2: req.body || false,
        observacionesDf: req.body || '',

        //2. MANTENIMIENTO A FILTROS DE ADMISION DE AIRE
        sopleteadoMFm1: req.body || false,
        sopleteadoMFm2: req.body || false,
        observacionesSm: req.body || '',

        asentadoPFm1: req.body || false,
        asentadoPFm2: req.body || false,
        observacionesAp: req.body || '',

        limpiezaFm1: req.body || false,
        limpiezaFm2: req.body || false,
        observacionesLimp: req.body || '',

        empapeladoMFm1: req.body || false,
        empapeladoMFm2: req.body || false,
        observacionesEm: req.body || '',

        recuperacionDFm1: req.body || false,
        recuperacionDFm2: req.body || false,
        observacionesRd: req.body || '',

        aplicacionSpFm1: req.body || false,
        aplicacionSpFm2: req.body || false,
        observacionesAsp: req.body || '',

        //3. MONTAJE DE FILTROS DE ADMISION DE AIRE
        montajeFm1: req.body || false,
        montajeFm2: req.body || false,
        observacionesM: req.body || '',

        colocarSFm1: req.body || false,
        colocarSFm2: req.body || false,
        observacionesCs: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM02.findByIdAndUpdate(id, { $set: MMMA_M02}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M02.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM02.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M02.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM02.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M02.getAllMaintenenceMMMA_M02 = async (req, res) => {
    const maintenances = await mmmaM02.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M02.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M02New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM02.findByIdAndUpdate(id, { $set: historyMMMA_M02New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M02.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM02.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M02.createMaintenenceMMMA_M02 = async (req, res) => {
    const maintenence = new mmmaM02(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M02;