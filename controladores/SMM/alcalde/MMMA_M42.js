'use strict'

var mmmaM42 = require('../../../models/smm/mayor/MMMA_M42');

const MMMA_M42 = {};

MMMA_M42.getMMMA_M42Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM42.findById(id)
    res.json(maintenance)
};
MMMA_M42.editMMMA_M42Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M42 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        //INSPECCION INICIAL
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',
        
        fugaAire: req.body || false,
        observacionesFa: req.body || '',

        revCarcaza: req.body || false,
        observacionesRc: req.body || '',

        //MEDIDAS DE REFERENCIA
        distanciaTapaEmbolo: req.body || false,
        observacionesDte: req.body || '',

        distanciaTapaAnillo: req.body || false,
        observacionesDta: req.body || '',

        //INSPECCION DE PIEZA
        bridaSujeccion: req.body || false,
        observacionesBs: req.body || '',

        tapa: req.body || false,
        observacionesT: req.body || '',

        tuercaPresion: req.body || false,
        observacionesTp: req.body || '',

        husillo: req.body || false,
        observacionesHusillo: req.body || '',

        //PRUEBAS DESARROLLADAS
        resistencia: req.body || false,
        observacionesR: req.body || '',

        hermeticidad: req.body || false,
        observacionesH: req.body || '',

        //MANTENIMIENTO
        //MEDIDA CILINDRO 178+0.6 MAXIMO DESGASTE: 179.00
        a_b: req.body || '',
        c_d: req.body || '',
        estadoGuarnicion: req.body || '',
        estadoCuerpoC: req.body || '',

        observaciones1: req.body || '',

        //PAG 2
        palancaFrenoRev: req.body || false,
        palancaFrenoLimp: req.body || false,
        palancaFrenoEng: req.body || false,
        palancaFrenoCamb: req.body || false,
        observacionesPf: req.body || '',

        casquillosRev: req.body || false,
        casquillosLimp: req.body || false,
        casquillosEng: req.body || false,
        casquillosCamb: req.body || false,
        observacionesC: req.body || '',

        barraTraccionRev: req.body || false,
        barraTraccionLimp: req.body || false,
        barraTraccionEng: req.body || false,
        barraTraccionCamb: req.body || false,
        observacionesBt: req.body || '',

        casquillos2Rev: req.body || false,
        casquillos2Limp: req.body || false,
        casquillos2Eng: req.body || false,
        casquillos2Camb: req.body || false,
        observacionesC2: req.body || '',

        portazapatasRev: req.body || false,
        portazapatasLimp: req.body || false,
        portazapatasEng: req.body || false,
        portazapatasCamb: req.body || false,
        observacionesP: req.body || '',

        zapatasRev: req.body || false,
        zapatasLimp: req.body || false,
        zapatasEng: req.body || false,
        zapatasCamb: req.body || false,
        observacionesZ: req.body || '',

        bridaColganteRev: req.body || false,
        bridaColganteLimp: req.body || false,
        bridaColganteEng: req.body || false,
        bridaColganteCamb: req.body || false,
        observacionesBc: req.body || '',

        bulonRev: req.body || false,
        bulonLimp: req.body || false,
        bulonEng: req.body || false,
        bulonCamb: req.body || false,
        observacionesB: req.body || '',

        chapaSeguridadRev: req.body || false,
        chapaSeguridadLimp: req.body || false,
        chapaSeguridadEng: req.body || false,
        chapaSeguridadCamb: req.body || false,
        observacionesChs: req.body || '',

        pasadoresChavetasRev: req.body || false,
        pasadoresChavetasLimp: req.body || false,
        pasadoresChavetasEng: req.body || false,
        pasadoresChavetasCamb: req.body || false,
        observacionesPch: req.body || '',

        bulonRoscableRev: req.body || false,
        bulonRoscableLimp: req.body || false,
        bulonRoscableEng: req.body || false,
        bulonRoscableCamb: req.body || false,
        observacionesBr: req.body || '',

        resorteDiscoRev: req.body || false,
        resorteDiscoLimp: req.body || false,
        resorteDiscoEng: req.body || false,
        resorteDiscoCamb: req.body || false,
        observacionesRd: req.body || '',

        tuercaHexagonalM24Rev: req.body || false,
        tuercaHexagonalM24Limp: req.body || false,
        tuercaHexagonalM24Eng: req.body || false,
        tuercaHexagonalM24Camb: req.body || false,
        observacionesThM24: req.body || '',

        bulonRosacable2Rev: req.body || false,
        bulonRosacable2Limp: req.body || false,
        bulonRosacable2Eng: req.body || false,
        bulonRosacable2Camb: req.body || false,
        observacionesBr2: req.body || '',

        casquilloCortoRev: req.body || false,
        casquilloCortoLimp: req.body || false,
        casquilloCortoEng: req.body || false,
        casquilloCortoCamb: req.body || false,
        observacionesCc: req.body || '',

        casquilloConicoRev: req.body || false,
        casquilloConicoLimp: req.body || false,
        casquilloConicoEng: req.body || false,
        casquilloConicoCamb: req.body || false,
        observacionesCconico: req.body || '',

        casquilloLargoRev: req.body || false,
        casquilloLargoLimp: req.body || false,
        casquilloLargoEng: req.body || false,
        casquilloLargoCamb: req.body || false,
        observacionesCl: req.body || '',

        tuercaHexagonalM20Rev: req.body || false,
        tuercaHexagonalM20Limp: req.body || false,
        tuercaHexagonalM20Eng: req.body || false,
        tuercaHexagonalM20Camb: req.body || false,
        observacionesThM20: req.body || '',

        observaciones2: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM42.findByIdAndUpdate(id, { $set: MMMA_M42}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M42.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM42.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M42.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM42.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M42.getAllMaintenenceMMMA_M42 = async (req, res) => {
    const maintenances = await mmmaM42.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M42.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M42New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM42.findByIdAndUpdate(id, { $set: historyMMMA_M42New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M42.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM42.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M42.createMaintenenceMMMA_M42 = async (req, res) => {
    const maintenence = new mmmaM42(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M42;