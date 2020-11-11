'use strict'

var mmmeC12 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C12');

const MMME_C12 = {};

MMME_C12.getMMME_C12Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC12.findById(id)
    res.json(maintenance)
};
MMME_C12.editMMME_C12Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C12 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //PARA TE-90 Y TE-95
        mitadSRev: req.body || false,
        mitadSLimp: req.body || false,
        mitadSaExtend: req.body || false,
        mitadSCamb: req.body || false,
        observacionesMs: req.body || '',

        tornilloHRev: req.body || false,
        tornilloHLimp: req.body || false,
        tornilloHCamb: req.body || false,
        observacionesTh: req.body || '',

        arandelaRev: req.body || false,
        arandelaLimp: req.body || false,
        arandelaCamb: req.body || false,
        observacionesA: req.body || '',

        chapaRev: req.body || false,
        chapaLimp: req.body || false,
        chapaCamb: req.body || false,
        observacionesCh: req.body || '',

        tuberiaRev: req.body || false,
        tuberiaLimp: req.body || false,
        tuberiaCamb: req.body || false,
        observacionesT: req.body || '',

        anillosRRev: req.body || false,
        anillosRLimp: req.body || false,
        anillosRCamb: req.body || false,
        observacionesAr: req.body || '',

        tuercaHRev: req.body || false,
        tuercaHLimp: req.body || false,
        tuercaHCamb: req.body || false,
        observacionesTuercaH: req.body || '',

        juntaRev: req.body || false,
        juntaLimp: req.body || false,
        juntaCamb: req.body || false,
        observacionesJ: req.body || '',

        mitadIRev: req.body || false,
        mitadILimp: req.body || false,
        mitadIaExtend: req.body || false,
        mitadICamb: req.body || false,
        observacionesMi: req.body || '',

        grifoRev: req.body || false,
        grifoLimp: req.body || false,
        grifoCamb: req.body || false,
        observacionesG: req.body || '',

        //PARA TE-06
        filtroRev: req.body || false,
        filtroLimp: req.body || false,
        filtroCamb: req.body || false,
        observacionesFc: req.body || '',

        mirillaRev: req.body || false,
        mirillaLimp: req.body || false,
        mirillaCamb: req.body || false,
        observacionesM: req.body || '',

        flotadorRev: req.body || false,
        flotadorLimp: req.body || false,
        flotadorCamb: req.body || false,
        observacionesF: req.body || '',
            
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC12.findByIdAndUpdate(id, { $set: MMME_C12}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C12.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC12.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C12.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC12.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C12.getAllMaintenenceMMME_C12 = async (req, res) => {
    const maintenances = await mmmeC12.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C12.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C12New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC12.findByIdAndUpdate(id, { $set: historyMMME_C12New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C12.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC12.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C12.createMaintenenceMMME_C12 = async (req, res) => {
    const maintenence = new mmmeC12(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C12;