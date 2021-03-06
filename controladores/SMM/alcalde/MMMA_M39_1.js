'use strict'

var mmmaM39_1 = require('../../../models/smm/mayor/MMMA_M39_1');

const MMMA_M39_1 = {};

MMMA_M39_1.getMMMA_M39_1Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM39_1.findById(id)
    res.json(maintenance)
};
MMMA_M39_1.editMMMA_M39_1Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M39_1 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        cuboRev: req.body || false,
        cuboLimp: req.body || false,
        cuboCamb: req.body || false,
        observacionesC: req.body || '',

        llantaRev: req.body || false,
        llantaLimp: req.body || false,
        llantaCamb: req.body || false,
        observacionesLl: req.body || '',

        anilloCuniaRev: req.body || false,
        anilloCuniaLimp: req.body || false,
        anilloCuniaCamb: req.body || false,
        observacionesAc: req.body || '',

        anilloGomaRev: req.body || false,
        anilloGomaLimp: req.body || false,
        anilloGomaCamb: req.body || false,
        observacionesAg: req.body || '',

        conductoresElectricosRev: req.body || false,
        conductoresElectricosLimp: req.body || false,
        conductoresElectricosCamb: req.body || false,
        observacionesCe: req.body || '',

        tornilloHexagonalRev: req.body || false,
        tornilloHexagonalLimp: req.body || false,
        tornilloHexagonalCamb: req.body || false,
        observacionesTh: req.body || '',

        arandelaElasticaRev: req.body || false,
        arandelaElasticaLimp: req.body || false,
        arandelaElasticaCamb: req.body || false,
        observacionesAe: req.body || '',

        tornillosDurlokRev: req.body || false,
        tornillosDurlokLimp: req.body || false,
        tornillosDurlokCamb: req.body || false,
        observacionesTd: req.body || '',

        anilloObtuladorRev: req.body || false,
        anilloObtuladorLimp: req.body || false,
        anilloObtuladorCamb: req.body || false,
        observacionesAo: req.body || '',

        diametroRuedaRev: req.body || false,
        diametroRuedaLimp: req.body || false,
        diametroRuedaCamb: req.body || false,
        observacionesDr: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM39_1.findByIdAndUpdate(id, { $set: MMMA_M39_1}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M39_1.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM39_1.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M39_1.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM39_1.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M39_1.getAllMaintenenceMMMA_M39_1 = async (req, res) => {
    const maintenances = await mmmaM39_1.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M39_1.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M39_1New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM39_1.findByIdAndUpdate(id, { $set: historyMMMA_M39_1New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M39_1.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM39_1.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M39_1.createMaintenenceMMMA_M39_1 = async (req, res) => {
    const maintenence = new mmmaM39_1(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M39_1;