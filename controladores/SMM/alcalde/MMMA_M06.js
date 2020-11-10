'use strict'

var mmmaM06 = require('../../../models/smm/mayor/MMMA_M06');

const MMMA_M06 = {};

MMMA_M06.getMMMA_M06Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM06.findById(id)
    res.json(maintenance)
};
MMMA_M06.editMMMA_M06Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M06 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',
        
        //1. DESMONTAJE DEL INDICADOR DE DESTINO
        retirarMm1: req.body || false,
        retirarMm2: req.body || false,
        observacionesRm: req.body || '',

        retirarTm1: req.body || false,
        retirarTm2: req.body || false,
        observacionesRt: req.body || '',

        aflojarRm1: req.body || false,
        aflojarRm2: req.body || false,
        observacionesAr: req.body || '',

        desmontarIm1: req.body || false,
        desmontarIm2: req.body || false,
        observacionesDi: req.body || '',

        //2. MANTENIMIENTO
        retirarTsLimp: req.body || false,
        retirarTsRev: req.body || false,
        retirarTsCamb: req.body || false,
        observacionesRts: req.body || '',

        retirarMdLimp: req.body || false,
        retirarMdRev: req.body || false,
        retirarMdCamb: req.body || false,
        observacionesRmd: req.body || '',

        retirarBLimp: req.body || false,
        retirarBRev: req.body || false,
        retirarBCamb: req.body || false,
        observacionesRb: req.body || '',

        cadenasMLimp: req.body || false,
        cadenasMRev: req.body || false,
        cadenasMCamb: req.body || false,
        observacionesCm: req.body || '',

        engranesLimp: req.body || false,
        engranesRev: req.body || false,
        engranesCamb: req.body || false,
        observacionesE: req.body || '',

        resortesLimp: req.body || false,
        resortesRev: req.body || false,
        resortesCamb: req.body || false,
        observacionesR: req.body || '',

        tornilleriaLimp: req.body || false,
        tornilleriaRev: req.body || false,
        tornilleriaCamb: req.body || false,
        observacionesT: req.body || '',

        lijadoPm1: req.body || false,
        lijadoPm2: req.body || false,
        observacionesLp: req.body || '',

        aplicacionSm1: req.body || false,
        aplicacionSm2: req.body || false,
        observacionesAs: req.body || '',

        //3. MONTAJE INDICADOR DESTINO
        montarMm1: req.body || false,
        montarMm2: req.body || false,
        montarMfunc: req.body || false,
        montarMajust: req.body || false,
        observacionesMm: req.body || '',

        montarMDm1: req.body || false,
        montarMDm2: req.body || false,
        montarMDfunc: req.body || false,
        montarMDajust: req.body || false,
        observacionesMmd: req.body || '',

        montarIDm1: req.body || false,
        montarIDm2: req.body || false,
        montarIDfunc: req.body || false,
        montarIDajust: req.body || false,
        observacionesMid: req.body || '',

        colocarTm1: req.body || false,
        colocarTm2: req.body || false,
        colocarTfunc: req.body || false,
        colocarTajust: req.body || false,
        observacionesCt: req.body || '',

        colocarMRm1: req.body || false,
        colocarMRm2: req.body || false,
        colocarMRfunc: req.body || false,
        colocarMRajust: req.body || false,
        observacionesCmr: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM06.findByIdAndUpdate(id, { $set: MMMA_M06}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M06.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM06.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M06.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM06.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M06.getAllMaintenenceMMMA_M06 = async (req, res) => {
    const maintenances = await mmmaM06.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M06.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M06New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM06.findByIdAndUpdate(id, { $set: historyMMMA_M06New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M06.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM06.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M06.createMaintenenceMMMA_M06 = async (req, res) => {
    const maintenence = new mmmaM06(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M06;