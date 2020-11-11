'use strict'

var mmmeC07 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C07');

const MMME_C07 = {};

MMME_C07.getMMME_C07Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC07.findById(id)
    res.json(maintenance)
};
MMME_C07.editMMME_C07Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C07 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        bastidorLimp: req.body || false,
        bastidorVer: req.body || false,
        observacionesB: req.body || '',

        recipienteLimp: req.body || false,
        recipienteFaire: req.body || false,
        recipienteVer: req.body || false,
        observacionesRf: req.body || '',

        cuerpoLimp: req.body || false,
        cuerpoFaire: req.body || false,
        cuerpoVer: req.body || false,
        observacionesCs: req.body || '',

        valvulaLimp: req.body || false,
        valvulaEng: req.body || false,
        valvulaFaire: req.body || false,
        valvulaVer: req.body || false,
        observacionesVc: req.body || '',

        tanqueLimp: req.body || false,
        tanqueFaire: req.body || false,
        tanqueVer: req.body || false,
        observacionesTr: req.body || '',

        filtroLimp: req.body || false,
        filtroFaire: req.body || false,
        filtroVer: req.body || false,
        observacionesF: req.body || '',

        silenciadorLimp: req.body || false,
        silenciadorFaire: req.body || false,
        silenciadorVer: req.body || false,
        observacionesS: req.body || '',

        coladeraLimp: req.body || false,
        coladeraFaire: req.body || false,
        coladeraVer: req.body || false,
        observacionesCi: req.body || '',

        //ELECTROVALVULA DIRECTAIR 6
        operadorRev: req.body || false,
        operadorLimp: req.body || false,
        operadorLub: req.body || false,
        operadorCamb: req.body || false,
        observacionesOm: req.body || '',

        tuercaRev: req.body || false,
        tuercaLimp: req.body || false,
        tuercaLub: req.body || false,
        tuercaCamb: req.body || false,
        observacionesTb: req.body || '',

        etiquetaRev: req.body || false,
        etiquetaLimp: req.body || false,
        etiquetaLub: req.body || false,
        etiquetaCamb: req.body || false,
        observacionesEb: req.body || '',

        carcazaRev: req.body || false,
        carcazaLimp: req.body || false,
        carcazaLub: req.body || false,
        carcazaCamb: req.body || false,
        observacionesCb: req.body || '',

        roldanaRev: req.body || false,
        roldanaLimp: req.body || false,
        roldanaLub: req.body || false,
        roldanaCamb: req.body || false,
        observacionesR: req.body || '',

        camisaRev: req.body || false,
        camisaLimp: req.body || false,
        camisaLub: req.body || false,
        camisaCamb: req.body || false,
        observacionesC: req.body || '',

        bobinaRev: req.body || false,
        bobinaLimp: req.body || false,
        bobinaLub: req.body || false,
        bobinaCamb: req.body || false,
        observacionesBobina: req.body || '',

        guiaRev: req.body || false,
        guiaLimp: req.body || false,
        guiaLub: req.body || false,
        guiaCamb: req.body || false,
        observacionesG: req.body || '',

        resortecRev: req.body || false,
        resortecLimp: req.body || false,
        resortecLub: req.body || false,
        resortecCamb: req.body || false,
        observacionesRc: req.body || '',

        emboloRev: req.body || false,
        emboloLimp: req.body || false,
        emboloLub: req.body || false,
        emboloCamb: req.body || false,
        observacionesE: req.body || '',

        cuerpovRev: req.body || false,
        cuerpovLimp: req.body || false,
        cuerpovLub: req.body || false,
        cuerpovCamb: req.body || false,
        observacionesCv: req.body || '',

        vastagoRev: req.body || false,
        vastagoLimp: req.body || false,
        vastagoLub: req.body || false,
        vastagoCamb: req.body || false,
        observacionesV: req.body || '',

        bujeRev: req.body || false,
        bujeLimp: req.body || false,
        bujeLub: req.body || false,
        bujeCamb: req.body || false,
        observacionesBuje: req.body || '',
        
        resorteRev: req.body || false,
        resorteLimp: req.body || false,
        resorteLub: req.body || false,
        resorteCamb: req.body || false,
        observacionesResorte: req.body || '',

        guiarRev: req.body || false,
        guiarLimp: req.body || false,
        guiarLub: req.body || false,
        guiarCamb: req.body || false,
        observacionesGr: req.body || '',

        tapaRev: req.body || false,
        tapaLimp: req.body || false,
        tapaLub: req.body || false,
        tapaCamb: req.body || false,
        observacionesTapa: req.body || '',

        tornillosRev: req.body || false,
        tornillosLimp: req.body || false,
        tornillosLub: req.body || false,
        tornillosCamb: req.body || false,
        observacionesT: req.body || '',

        oringsLub: req.body || false,
        oringsCamb: req.body || false,
        observacionesO: req.body || '',

        silenRev: req.body || false,
        silenLimp: req.body || false,
        silenCamb: req.body || false,
        observacionesSilen: req.body || '',

        filtRev: req.body || false,
        filtLimp: req.body || false,
        filtCamb: req.body || false,
        observacionesFiltro: req.body || '',
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC07.findByIdAndUpdate(id, { $set: MMME_C07}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C07.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC07.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C07.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC07.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C07.getAllMaintenenceMMME_C07 = async (req, res) => {
    const maintenances = await mmmeC07.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C07.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C07New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC07.findByIdAndUpdate(id, { $set: historyMMME_C07New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C07.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC07.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C07.createMaintenenceMMME_C07 = async (req, res) => {
    const maintenence = new mmmeC07(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C07;