
const memeC07 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C07');

const MEME_C07 = {};
//Metodos
// Obtiene todos los empleados
MEME_C07.getMEME_C07Data = async (req, res)=>{
    const {id} = req.params;

    const memec07 = await memeC07.findById(id)
    res.json(memec07)
};


// Editar un documento
MEME_C07.editMEME_C07Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC07 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
            
        //actividad
        contenedorSop:req.body.contSop || false,
        contenedorLimp:req.body.contLimp || false,
        contenedorRev:req.body.contRev || false,

        ducSop:req.body.duSop || false,
        ducLimp:req.body.duLimp || false,
        ducRev:req.body.duRev || false,

        filSop:req.body.fiSop || false,
        filLimp:req.body.fiLimp || false,
        filRev:req.body.fiRev || false,

        disSop:req.body.diSop || false,
        disLimp:req.body.diLimp || false,
        disRev:req.body.diRev || false,

        mvSop:req.body.mSop || false,
        mvLimp:req.body.mLimp || false,
        mvRev:req.body.mRev || false,

        conexSop:req.body.coneSop || false,
        conexLim:req.body.coneLim || false,
        conexRev:req.body.coneRev || false,

        //tapCaja

        señaSop:req.body.señSop || false,
        señaLimp:req.body.señLimp || false,
        señaRev:req.body.señRev || false,

        pestSop:req.body.pesSop || false,
        pestLimp:req.body.pesLimp || false,
        pestREv:req.body.petREv || false,

        lamSop:req.body.laSop || false,
        lamLimp:req.body.laLimp || false,
        lamRev:req.body.laRev || false,

        selSop:req.body.seSop || false,
        selLimp:req.body.seLimp || false,
        selRev:req.body.seRev || false,
        
        // cedtTe90
        a_10Sop:req.body.a_10So || false,
        a_10Limp:req.body.a_10Lim || false,
        a_10Rev:req.body.a_10Re || false,
        a_10Serie: req.body.a_10Seri || '',

        a_20Sop:req.body.a_20So || false,
        a_20Limp:req.body.a_20Lim || false,
        a_20Rev:req.body.a_20Re || false,
        a_20Serie: req.body.a_20Seri || '',

        a_30Sop:req.body.a_30So || false,
        a_30Limp:req.body.a_30Lim || false,
        a_30Rev:req.body.a_30Re || false,
        a_30Serie: req.body.a_30Seri || '',

        // cedtTe95
        rfddmSop:req.body.rfddmSo || false,
        rfddmLimp:req.body.rfddmLim || false,
        rfddmRev:req.body.rfddmRe || false,
        
        //epuTe06

        indSop:req.body.indSo || false,
        indLimp:req.body.indLim || false,
        indRev:req.body.indRe || false,

        ctSop:req.body.ctSo || false,
        ctLimp:req.body.ctLim || false,
        ctRev:req.body.ctRe || false,

        ctvSop:req.body.ctvSo || false,
        ctvLimp:req.body.ctvLim || false,
        ctvRev:req.body.ctvRe || false,

        ctpLimp:req.body.ctpLim || false,
        ctpRev:req.body.ctpRe || false,

        catpSop:req.body.catpSo || false,
        catpLimp:req.body.catpLim || false,
        catpRev:req.body.catpRe || false,

        observaciones: req.body.obs || '',

    }

    await memeC07.findByIdAndUpdate(id, { $set: MEME_C07}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C07.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC07.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C07.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC07.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C07.getAllMEME_C07TypeC = async (req, res) => {
    const memec07 = await memeC07.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec07)
};

MEME_C07.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC07New = {
        historyFile: req.body.historyFile || []
    }
    await memeC07.findByIdAndUpdate(id, { $set: historyMEMEC07New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C07.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec07 = await memeC07.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec07)
}

MEME_C07.createMEME_C07TypeC = async (req, res) => {
    const memec07 = new memeC07(req.body)
    
    await memec07.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C07;