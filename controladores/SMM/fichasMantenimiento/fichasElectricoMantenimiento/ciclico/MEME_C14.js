
const memeC14 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C14');

const MEME_C14 = {};
//Metodos
// Obtiene todos los empleados
MEME_C14.getMEME_C14Data = async (req, res)=>{
    const {id} = req.params;

    const memec14 = await memeC14.findById(id)
    res.json(memec14)
};


// Editar un documento
MEME_C14.editMEME_C14Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC14 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //bcbs
        m1car:req.body.m1carr || false,
        m1cal:req.body.m1call || false,
        rcar:req.body.rcarr || false,
        rcal:req.body.rcall || false,
        m2car:req.body.m2carr || false,
        m2cal:req.body.m2call || false,
        obsca: req.body.obscaa || '',

        m1zar:req.body.m1zarr || false,
        m1zal:req.body.m1zall || false,
        rzar:req.body.rzarr || false,
        rzal:req.body.rzall || false,
        m2zar:req.body.m2zarr || false,
        m2zal:req.body.m2zall || false,
        obsza: req.body.obszaa || '',

        m1tor:req.body.m1torr || false,
        m1tol:req.body.m1toll || false,
        rtor:req.body.rtorr || false,
        rtol:req.body.rtoll || false,
        m2tor:req.body.m2torr || false,
        m2tol:req.body.m2toll || false,
        obsto: req.body.obstoo || '',

        m1cbr:req.body.m1cbrr || false,
        m1cbl:req.body.m1cbll || false,
        rcbr:req.body.rcbrr || false,
        rcbl:req.body.rcbll || false,
        m2cbr:req.body.m2cbrr || false,
        m2cbl:req.body.m2cbll || false,
        obscb: req.body.obscbb || '',

        m1scr:req.body.m1scrr || false,
        m1scl:req.body.m1scll || false,
        rscr:req.body.rscrr || false,
        rscl:req.body.rscll || false,
        m2scr:req.body.m2scrr || false,
        m2scl:req.body.m2scll || false,
        obssc: req.body.obsscc || '',

        observaciones: req.body.obs || '',

    }

    await memeC14.findByIdAndUpdate(id, { $set: MEME_C14}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C14.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC14.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C14.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC14.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C14.getAllMEME_C14TypeC = async (req, res) => {
    const memec14 = await memeC14.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec14)
};

MEME_C14.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC14New = {
        historyFile: req.body.historyFile || []
    }
    await memeC14.findByIdAndUpdate(id, { $set: historyMEMEC14New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C14.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec14 = await memeC14.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec14)
}

MEME_C14.createMEME_C14TypeC = async (req, res) => {
    const memec14 = new memeC14(req.body)
    
    await memec14.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C14;