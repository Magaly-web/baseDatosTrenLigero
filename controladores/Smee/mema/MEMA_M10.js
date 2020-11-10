
const memaM10 = require('../../../models/smee/mema/MEMA_M10');

const mema_M10 = {};
//Metodos
// Obtiene todos los empleados
mema_M10.getmema_M10Data = async (req, res)=>{
    const {id} = req.params;

    const memam10 = await memaM10.findById(id)
    res.json(memam10)
}

// Editar un documento
mema_M10.editmema_M10Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM10 = {
        trainModel: req.body.modelo || '',
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.revision || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        dateultmant: req.body.ultmant || '',
        datepromant: req.body.promant || '',

        obs1: req.body.obs11 || '',
        //-------------------------------
        rfev: req.body.rfevv || '',
        rfel: req.body.rfell || '',
        rfer: req.body.rferr || '',
        rfef: req.body.rfeff || '',

        rpev: req.body.rpevv || '',
        rpel: req.body.rpell || '',
        rper: req.body.rperr || '',
        rpef: req.body.rpeff || '',

        tfev: req.body.tfevv || '',
        tfel: req.body.tfell || '',
        tfer: req.body.tferr || '',
        tfef: req.body.tfeff || '',

        tmgv: req.body.tmgvv || '',
        tmgl: req.body.tmgll || '',
        tmgr: req.body.tmgrr || '',
        tmgf: req.body.tmgff || '',

        pspv: req.body.pspvv || '',
        pspl: req.body.pspll || '',
        pspr: req.body.psprr || '',
        pspf: req.body.pspff || '',

        atv: req.body.atvv || '',
        atl: req.body.atll || '',
        atr: req.body.atrr || '',
        atf: req.body.atff || '',


        obs2: req.body.obs22 || '',

        //Timpano M2

        cavv: req.body.cavvv || '',
        cavl: req.body.cavll || '',
        cavr: req.body.cavrr || '',
        cavf: req.body.cavff || '',

        rtsv: req.body.rtsvv || '',
        rtsl: req.body.rtsll || '',
        rtsr: req.body.rtsrr || '',
        rtsf: req.body.rtsff || '',

        alov: req.body.alovv || '',
        alol: req.body.aloll || '',
        alor: req.body.alorr || '',
        alof: req.body.aloff || '',

        tmg2v: req.body.tmg2vv || '',
        tmg2l: req.body.tmg2ll || '',
        tmg2r: req.body.tmg2rr || '',
        tmg2f: req.body.tmg2ff || '',

        tfe2v: req.body.tfe2vv || '',
        tfe2l: req.body.tfe2ll || '',
        tfe2r: req.body.tfe2rr || '',
        tfe2f: req.body.tfe2ff || '',

        at2v: req.body.at2vv || '',
        at2l: req.body.at2ll || '',
        at2r: req.body.at2rr || '',
        at2f: req.body.at2ff || '',

        obs3: req.body.obs33 || '',


        //-------------------------------

    }
    await memaM10.findByIdAndUpdate(id, { $set: mema_M10}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M10.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM10.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M10.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM10.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M10.getAllmema_M10TypeM = async (req, res) => {
    const memam10 = await memaM10.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam10)
};

mema_M10.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM10New = {
        historyFile: req.body.historyFile || []
    }
    await memaM10.findByIdAndUpdate(id, { $set: historymemaM10New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M10.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam10 = await memaM10.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam10)
}

mema_M10.createmema_M10TypeM = async (req, res) => {
    const memam10 = new memaM10(req.body)
    
    await memam10.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M10;
