'use strict'

var mmmeC14 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C14');

const MMME_C14 = {};

MMME_C14.getMMME_C14Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC14.findById(id)
    res.json(maintenance)
};
MMME_C14.editMMME_C14Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C14 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //ELECTOVALVULA SERIE KUTILIZADA EN APERTURA Y CIERRE PUERTAS DE SALON DE PASAJEROS TE-90 Y TE-95
        tornillos2x2Rev: req.body || false,
        tornillos2x2Limp: req.body || false,
        tornillos2x2Camb: req.body || false,
        observacionesT2x2: req.body || '',

        tornillosPRev: req.body || false,
        tornillosPLimp: req.body || false,
        tornillosPCamb: req.body || false,
        observacionesT5_8: req.body || '',

        tuercaUNFRev: req.body || false,
        tuercaUNFLimp: req.body || false,
        tuercaUNFCamb: req.body || false,
        observacionesTunf: req.body || '',

        tuercaBkRev: req.body || false,
        tuercaBkLimp: req.body || false,
        tuercaBkCamb: req.body || false,
        observacionesTbk: req.body || '',

        carreteRev: req.body || false,
        carreteLimp: req.body || false,
        carreteCamb: req.body || false,
        observacionesC: req.body || '',

        selloRev: req.body || false,
        selloLimp: req.body || false,
        selloLub: req.body || false,
        selloCamb: req.body || false,
        observacionesS: req.body || '',

        resorteKRev: req.body || false,
        resorteKLimp: req.body || false,
        resorteKLub: req.body || false,
        resorteKCamb: req.body || false,
        observacionesR: req.body || '',

        camisaKRev: req.body || false,
        camisaKLimp: req.body || false,
        camisaKLub: req.body || false,
        camisaKCamb: req.body || false,
        observacionesCk: req.body || '',

        retenedorRev: req.body || false,
        retenedorLimp: req.body || false,
        retenedorLub: req.body || false,
        retenedorCamb: req.body || false,
        observacionesRk: req.body || '',

        vastagoKRev: req.body || false,
        vastagoKLimp: req.body || false,
        vastagoKLub: req.body || false,
        vastagoKCamb: req.body || false,
        observacionesVk: req.body || '',

        actuadorRev: req.body || false,
        actuadorLimp: req.body || false,
        actuadorLub: req.body || false,
        actuadorCamb: req.body || false,
        observacionesAd: req.body || '',

        asientoRev: req.body || false,
        asientoLimp: req.body || false,
        asientoLub: req.body || false,
        asientoCamb: req.body || false,
        observacionesA: req.body || '',

        emboloKRev: req.body || false,
        emboloKLimp: req.body || false,
        emboloKLub: req.body || false,
        emboloKCamb: req.body || false,
        observacionesEk: req.body || '',

        resorteCKRev: req.body || false,
        resorteCKLimp: req.body || false,
        resorteCKLub: req.body || false,
        resorteCKCamb: req.body || false,
        observacionesRck: req.body || '',

        guiaRev: req.body || false,
        guiaLimp: req.body || false,
        guiaLub: req.body || false,
        guiaCamb: req.body || false,
        observacionesG: req.body || '',

        protectorRev: req.body || false,
        protectorLimp: req.body || false,
        protectorCamb: req.body || false,
        observacionesP: req.body || '',

        bobinaKRev: req.body || false,
        bobinaKLimp: req.body || false,
        bobinaKCamb: req.body || false,
        observacionesB: req.body || '',

        roldanaKRev: req.body || false,
        roldanaKLimp: req.body || false,
        roldanaKCamb: req.body || false,
        observacionesRoldanaK: req.body || '',

        carcazaRev: req.body || false,
        carcazaLimp: req.body || false,
        carcazaCamb: req.body || false,
        observacionesCarcaza: req.body || '',

        oringsKLub: req.body || false,
        oringsKCamb: req.body || false,
        observacionesOk: req.body || '',

        //ELECTROVALVULA DECTAIR 6 UTILIZADA EN CLAXON, APERTURA Y CIERRE PUERTAS DE OPERADOR TE-90 Y TE-95
        operadorMRev: req.body || false,
        operadorMLimp: req.body || false,
        operadorMLub: req.body || false,
        operadorMCamb: req.body || false,
        observacionesOm: req.body || '',
        
        tuercaBRev: req.body || false,
        tuercaBLimp: req.body || false,
        tuercaBLub: req.body || false,
        tuercaBCamb: req.body || false,
        observacionesTb: req.body || '',

        etiquetaRev: req.body || false,
        etiquetaLimp: req.body || false,
        etiquetaLub: req.body || false,
        etiquetaCamb: req.body || false,
        observacionesEb: req.body || '',

        carcazaBRev: req.body || false,
        carcazaBLimp: req.body || false,
        carcazaBLub: req.body || false,
        carcazaBCamb: req.body || false,
        observacionesCb: req.body || '',

        roldanaRev: req.body || false,
        roldanaLimp: req.body || false,
        roldanaLub: req.body || false,
        roldanaCamb: req.body || false,
        observacionesRoldana: req.body || '',

        camisaRev: req.body || false,
        camisaLimp: req.body || false,
        camisaLub: req.body || false,
        camisaCamb: req.body || false,
        observacionesCamisa: req.body || '',

        bobinaRev: req.body || false,
        bobinaLimp: req.body || false,
        bobinaLub: req.body || false,
        bobinaCamb: req.body || false,
        observacionesBobina: req.body || '',

        guiaERev: req.body || false,
        guiaELimp: req.body || false,
        guiaELub: req.body || false,
        guiaECamb: req.body || false,
        observacionesGuiaE: req.body || '',

        resorteCRev: req.body || false,
        resorteCLimp: req.body || false,
        resorteCLub: req.body || false,
        resorteCCamb: req.body || false,
        observacionesRc: req.body || '',

        emboloRev: req.body || false,
        emboloLimp: req.body || false,
        emboloLub: req.body || false,
        emboloCamb: req.body || false,
        observacionesE: req.body || '',

        cuerpoVRev: req.body || false,
        cuerpoVLimp: req.body || false,
        cuerpoVLub: req.body || false,
        cuerpoVCamb: req.body || false,
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

        guiaRRev: req.body || false,
        guiaRLimp: req.body || false,
        guiaRLub: req.body || false,
        guiaRCamb: req.body || false,
        observacionesGuiaR: req.body || '',

        tapaRev: req.body || false,
        tapaLimp: req.body || false,
        tapaLub: req.body || false,
        tapaCamb: req.body || false,
        observacionesTapa: req.body || '',

        tornillosRev: req.body || false,
        tornillosLimp: req.body || false,
        tornillosLub: req.body || false,
        tornillosCamb: req.body || false,
        observacionesTornillos: req.body || '',

        oringsLub: req.body || false,
        oringsCamb: req.body || false,
        observacionesOrings: req.body || '',

        //ELECTROVALVULA SERIE B6 EN APERTURA Y CIERRE PUERTAS DE SALON DE PASAJEROS Y OPERADOR TE-06
        cuerpoRev: req.body || false,
        cuerpoLimp: req.body || false, 
        cuerpoLub: req.body || false,
        cuerpoCamb: req.body || false,
        observacionesCb6: req.body || '',

        resorteB6Rev: req.body || false,
        resorteB6Limp: req.body || false, 
        resorteB6Lub: req.body || false,
        resorteB6Camb: req.body || false,
        observacionesRb6: req.body || '',

        spoolRev: req.body || false,
        spoolLimp: req.body || false, 
        spoolLub: req.body || false,
        spoolCamb: req.body || false,
        observacionesSpool: req.body || '',

        emboloB6Rev: req.body || false,
        emboloB6Limp: req.body || false, 
        emboloB6Lub: req.body || false,
        emboloB6Camb: req.body || false,
        observacionesEb6: req.body || '',

        cuerpoPRev: req.body || false,
        cuerpoPLimp: req.body || false, 
        cuerpoPLub: req.body || false,
        cuerpoPCamb: req.body || false,
        observacionesCp: req.body || '',

        oringsPRev: req.body || false,
        oringsPLimp: req.body || false, 
        oringsPLub: req.body || false,
        oringsPCamb: req.body || false,
        observacionesOp: req.body || '',

        operadorRev: req.body || false,
        operadorLimp: req.body || false, 
        operadorLub: req.body || false,
        operadorCamb: req.body || false,
        observacionesO: req.body || '',

        empaqueORev: req.body || false,
        empaqueOLimp: req.body || false, 
        empaqueOLub: req.body || false,
        empaqueOCamb: req.body || false,
        observacionesEo: req.body || '',

        balinRev: req.body || false,
        balinLimp: req.body || false, 
        balinLub: req.body || false,
        balinCamb: req.body || false,
        observacionesBb6: req.body || '',

        solenoideRev: req.body || false,
        solenoideLimp: req.body || false, 
        solenoideLub: req.body || false,
        solenoideCamb: req.body || false,
        observacionesSb6: req.body || '',

        tuercaRev: req.body || false,
        tuercaLimp: req.body || false, 
        tuercaLub: req.body || false,
        tuercaCamb: req.body || false,
        observacionesT: req.body || '',

        inductanciaLRev: req.body || false,
        inductanciaLLimp: req.body || false, 
        inductanciaLCamb: req.body || false,
        observacionesIl: req.body || '',

        inductanciaRRev: req.body || false,
        inductanciaRLimp: req.body || false, 
        inductanciaRCamb: req.body || false,
        observacionesIr: req.body || '',

        filtroRev: req.body || false,
        filtroLimp: req.body || false, 
        filtroCamb: req.body || false,
        observacionesF: req.body || '',
            
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC14.findByIdAndUpdate(id, { $set: MMME_C14}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C14.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC14.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C14.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC14.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C14.getAllMaintenenceMMME_C14 = async (req, res) => {
    const maintenances = await mmmeC14.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C14.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C14New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC14.findByIdAndUpdate(id, { $set: historyMMME_C14New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C14.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC14.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C14.createMaintenenceMMME_C14 = async (req, res) => {
    const maintenence = new mmmeC14(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C14;