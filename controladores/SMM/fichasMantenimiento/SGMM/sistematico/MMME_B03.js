'use strict'

var mmmeB03 = require('../../../../../models/smm/fichasMantenimiento/SGMM/sistematico/MMME_B03');

const MMME_B03 = {};

MMME_B03.getMMME_B03Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeB03.findById(id)
    res.json(maintenance)
};
MMME_B03.editMMME_B03Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_B03 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        noSerie: req.body || 0,
        dimAnt: req.body || 0,
        dimPost: req.body || 0,
        cuemoD: req.body || false,
        carbonF: req.body || false,
        dimensionM: req.body || false,
        otros: req.body || false,
        obs: req.body || '',

        articulacionesL: req.body || false,
        articulacionesE: req.body || false,
        articulacionesT: req.body || false,
        observacionesA: req.body || '',

        resortesL: req.body || false,
        resortesE: req.body || false,
        resortesT: req.body || false,
        observacionesR: req.body || '',

        conexionesFL: req.body || false,
        conexionesFE: req.body || false,
        conexionesFC: req.body || false,
        conexionesFT: req.body || false,
        observacionesCf: req.body || '',

        dispositivoSL: req.body || false,
        dispositivoSE: req.body || false,
        dispositivoSC: req.body || false,
        dispositivoST: req.body || false,
        observacioneDs: req.body || '',

        bastidorL: req.body || false,
        bastidorT: req.body || false,
        observacionesB: req.body || '',

        ejeAL: req.body || false,
        ejeAT: req.body || false,
        observacionesEa: req.body || '',

        clavijaAL: req.body || false,
        clavijaAT: req.body || false,
        observacionesCa: req.body || '',

        carbonesAL: req.body || false,
        carbonesAC: req.body || false,
        carbonesAT: req.body || false,
        observacionesCarquet: req.body || '',

        cuernosEL: req.body || false,
        cuernosEC: req.body || false,
        cuernosET: req.body || false,
        observacionesCe: req.body || '',

        torretasm1m2L: req.body || false,
        torretasm1m2E: req.body || false,
        torretasm1m2C: req.body || false,
        torretasm1m2T: req.body || false,
        observacionesTm1m2: req.body || '',

        cableadoT: req.body || false,
        observacionesCt: req.body || '',

        rotulaAL: req.body || false,
        rotulaAE: req.body || false,
        rotulaAC: req.body || false,
        observacionesRa: req.body || '', 
        
        distuntorEL: req.body || false,
        distuntorET: req.body || false,
        observacionesDe: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmeB03.findByIdAndUpdate(id, { $set: MMME_B03}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_B03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeB03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_B03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeB03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_B03.getAllMaintenenceMMME_B03 = async (req, res) => {
    const maintenances = await mmmeB03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_B03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_B03New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeB03.findByIdAndUpdate(id, { $set: historyMMME_B03New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_B03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeB03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_B03.createMaintenenceMMME_B03 = async (req, res) => {
    const maintenence = new mmmeB03(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_B03;