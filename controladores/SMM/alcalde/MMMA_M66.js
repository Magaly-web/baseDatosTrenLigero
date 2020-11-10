'use strict'

var mmmaM66 = require('../../../models/smm/mayor/MMMA_M66');

const MMMA_M66 = {};

MMMA_M66.getMMMA_M66Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM66.findById(id)
    res.json(maintenance)
};
MMMA_M66.editMMMA_M66Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M66 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        noSerie: req.body.serie || '',

        noSerie2: req.body || '',

        bastidorLav: req.body || false,
        bastidorLimp: req.body || false,
        bastidorRevFuga: req.body || false,
        bastidorVer: req.body || false,
        observacionesB: req.body || '',

        recipienteFiltradoLav: req.body || false,
        recipienteFiltradoLimp: req.body || false,
        recipienteFiltradoRevFuga: req.body || false,
        recipienteFiltradoVer: req.body || false,
        observacionesRf: req.body || '',

        cuerpoSecadorLav: req.body || false,
        cuerpoSecadorLimp: req.body || false,
        cuerpoSecadorRevFuga: req.body || false,
        cuerpoSecadorVer: req.body || false,
        observacionesCs: req.body || '',

        valvulaCheckLav: req.body || false,
        valvulaCheckLimp: req.body || false,
        valvulaCheckRevFuga: req.body || false,
        valvulaCheckVer: req.body || false,
        observacionesVch: req.body || '',

        tanqueRegeneracionLav: req.body || false,
        tanqueRegeneracionLimp: req.body || false,
        tanqueRegeneracionRevFuga: req.body || false,
        tanqueRegeneracionVer: req.body || false,
        observacionesTr: req.body || '',

        filtroLav: req.body || false,
        filtroLimp: req.body || false,
        filtroRevFuga: req.body || false,
        filtroVer: req.body || false,
        observacionesF: req.body || '',

        silenciadorLav: req.body || false,
        silenciadorLimp: req.body || false,
        silenciadorRevFuga: req.body || false,
        silenciadorVer: req.body || false,
        observacionesS: req.body || '',

        valvulaDectair6Rev: req.body || false,
        valvulaDectair6Limp: req.body || false,
        valvulaDectair6Lub: req.body || false,
        valvulaDectair6CambKit: req.body || false,
        observacionesVd: req.body || '',

        observaciones: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM66.findByIdAndUpdate(id, { $set: MMMA_M66}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M66.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM66.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M66.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM66.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M66.getAllMaintenenceMMMA_M66 = async (req, res) => {
    const maintenances = await mmmaM66.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M66.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M66New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM66.findByIdAndUpdate(id, { $set: historyMMMA_M66New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M66.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM66.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M66.createMaintenenceMMMA_M66 = async (req, res) => {
    const maintenence = new mmmaM66(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M66;