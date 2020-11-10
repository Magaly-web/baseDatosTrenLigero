
const memeC18 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C18');

const MEME_C18 = {};
//Metodos
// Obtiene todos los empleados
MEME_C18.getMEME_C18Data = async (req, res)=>{
    const {id} = req.params;

    const memec18 = await memeC18.findById(id)
    res.json(memec18)
};


// Editar un documento
MEME_C18.editMEME_C18Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC18 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //act
        cets:req.body.cetss || false,
        cetl:req.body.cetll || false,
        cetr:req.body.cetrr || false,

        rts:req.body.rtss || false,
        rtl:req.body.rtll || false,
        rtr:req.body.rtrr || false,

        ces:req.body.cess || false,
        cel:req.body.cell || false,
        cer:req.body.cerr || false,

        fs:req.body.fss || false,
        fl:req.body.fll || false,
        fr:req.body.frr || false,

        cos:req.body.coss || false,
        col:req.body.coll || false,
        cor:req.body.corr || false,

        sfs:req.body.sfss || false,
        sfl:req.body.sfll || false,
        sfr:req.body.sfrr || false,

        //te90
        a10s:req.body.a10ss || false,
        a10l:req.body.a10ll || false,
        a10r:req.body.a10rr || false,
        a10n:req.body.a10nn || '',

        a20s:req.body.a20ss || false,
        a20l:req.body.a20ll || false,
        a20r:req.body.a20rr || false,
        a20n:req.body.a20nn || '',

        a30s:req.body.a30ss || false,
        a30l:req.body.a30ll || false,
        a30r:req.body.a30rr || false,
        a30n:req.body.a30nn || '',

        //te95
        mods:req.body.modss || false,
        modl:req.body.modll || false,
        modr:req.body.modrr || false,

        cetso:req.body.cetss || false,
        cetli:req.body.cetll || false,
        cetre:req.body.cetrr || false,

        tms:req.body.tmss || false,
        tml:req.body.tmll || false,
        tmr:req.body.tmrr || false,

        //te06
        ifls:req.body.iflss || false,
        ifll:req.body.iflll || false,
        iflr:req.body.iflrr || false,

        ctfs:req.body.ctfss || false,
        ctfl:req.body.ctfll || false,
        ctfr:req.body.ctfrr || false,

        ctvs:req.body.ctvss || false,
        ctvl:req.body.ctvll || false,
        ctvr:req.body.ctvrr || false,

        ctpl:req.body.ctpll || false,
        ctpr:req.body.ctprr || false,

        hvpl:req.body.hvpll || false,
        hvpr:req.body.hvprr || false,

        observaciones: req.body.obs || '',

    }

    await memeC18.findByIdAndUpdate(id, { $set: MEME_C18}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C18.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC18.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C18.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC18.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C18.getAllMEME_C18TypeC = async (req, res) => {
    const memec18 = await memeC18.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec18)
};

MEME_C18.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC18New = {
        historyFile: req.body.historyFile || []
    }
    await memeC18.findByIdAndUpdate(id, { $set: historyMEMEC18New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C18.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec18 = await memeC18.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec18)
}

MEME_C18.createMEME_C18TypeC = async (req, res) => {
    const memec18 = new memeC18(req.body)
    
    await memec18.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C18;