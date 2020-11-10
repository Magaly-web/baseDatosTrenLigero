'use strict'

var mmmaM43 = require('../../../models/smm/mayor/MMMA_M43');

const MMMA_M43 = {};

MMMA_M43.getMMMA_M43Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM43.findById(id)
    res.json(maintenance)
};
MMMA_M43.editMMMA_M43Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M43 = {
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

        distanciaTapaEmbolo: req.body || false,
        observacionesDte: req.body || '',

        distanciaTapaAnillo: req.body || false,
        observacionesDta: req.body || '',

        medidaAnillo: req.body || false,
        observacionesMa: req.body || '',

        observaciones1: req.body || '',

        //PRUEBAS DESARROLLADAS AL CILINDRO DE FRENO
        hermeticidadCilindro: req.body || false,
        observacionesHc: req.body || '',

        frenoServicio: req.body || false,
        observacionesFs: req.body || '',

        cilindroMuelle: req.body || false,
        observacionesCm: req.body || '',

        depositoProceso: req.body || false,
        observacionesDp: req.body || '',

        //MEDIDAD DE CARCAZA
        a_b: req.body || '',
        c_d: req.body || '',
        estadoGuarnicion: req.body || '',
        estadoCuerpoC: req.body || '',

        observaciones2: req.body || '',

        palancaVastRev: req.body || false,
        palancaVastLimp: req.body || false,
        palancaVastEng: req.body || false,
        palancaVastCamb: req.body || false,
        observacionesPv: req.body || '',

        casquillosRev: req.body || false,
        casquillosLimp: req.body || false,
        casquillosEng: req.body || false,
        casquillosCamb: req.body || false,
        observacionesC: req.body || '',

        palancaPuntoRev: req.body || false,
        palancaPuntoLimp: req.body || false,
        palancaPuntoEng: req.body || false,
        palancaPuntoCamb: req.body || false,
        observacionesPp: req.body || '',

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

        barraTraccionRev: req.body || false,
        barraTraccionLimp: req.body || false,
        barraTraccionEng: req.body || false,
        barraTraccionCamb: req.body || false,
        observacionesBt: req.body || '',

        casquillos3Rev: req.body || false,
        casquillos3Limp: req.body || false,
        casquillos3Eng: req.body || false,
        casquillos3Camb: req.body || false,
        observacionesC3: req.body || '',

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

        casquillos4Rev: req.body || false,
        casquillos4Limp: req.body || false,
        casquillos4Eng: req.body || false,
        casquillos4Camb: req.body || false,
        observacionesC4: req.body || '',

        soporteRev: req.body || false,
        soporteLimp: req.body || false,
        soporteEng: req.body || false,
        soporteCamb: req.body || false,
        observacionesS: req.body || '',

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

        tornilloPivoteRev: req.body || false,
        tornilloPivoteLimp: req.body || false,
        tornilloPivoteEng: req.body || false,
        tornilloPivoteCamb: req.body || false,
        observacionesTp: req.body || '',

        arandelaSegRev: req.body || false,
        arandelaSegLimp: req.body || false,
        arandelaSegEng: req.body || false,
        arandelaSegCamb: req.body || false,
        observacionesAs: req.body || '',

        guiaControlRev: req.body || false,
        guiaControlLimp: req.body || false,
        guiaControlEng: req.body || false,
        guiaControlCamb: req.body || false,
        observacionesGc: req.body || '',

        tornilloHexagonalRev: req.body || false,
        tornilloHexagonalLimp: req.body || false,
        tornilloHexagonalEng: req.body || false,
        tornilloHexagonalCamb: req.body || false,
        observacionesTh: req.body || '',

        soporteCojineteRev: req.body || false,
        soporteCojineteLimp: req.body || false,
        soporteCojineteEng: req.body || false,
        soporteCojineteCamb: req.body || false,
        observacionesSc: req.body || '',

        bulonRoscableRev: req.body || false,
        bulonRoscableLimp: req.body || false,
        bulonRoscableEng: req.body || false,
        bulonRoscableCamb: req.body || false,
        observacionesBr: req.body || '',

        bulonRosacable2Rev: req.body || false,
        bulonRosacable2Limp: req.body || false,
        bulonRosacable2Eng: req.body || false,
        bulonRosacable2Camb: req.body || false,
        observacionesBr2: req.body || '',

        tuercaHexagonalRev: req.body || false,
        tuercaHexagonalLimp: req.body || false,
        tuercaHexagonalEng: req.body || false,
        tuercaHexagonalCamb: req.body || false,
        observacionesTuercaH: req.body || '',

        observaciones3: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM43.findByIdAndUpdate(id, { $set: MMMA_M43}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M43.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM43.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M43.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM43.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M43.getAllMaintenenceMMMA_M43 = async (req, res) => {
    const maintenances = await mmmaM43.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M43.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M43New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM43.findByIdAndUpdate(id, { $set: historyMMMA_M43New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M43.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM43.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M43.createMaintenenceMMMA_M43 = async (req, res) => {
    const maintenence = new mmmaM43(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M43;