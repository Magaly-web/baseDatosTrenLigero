
const memaM03 = require('../../../models/smee/mema/MEMA_M03');

const mema_M03 = {};
//Metodos
// Obtiene todos los empleados
mema_M03.getmema_M03Data = async (req, res)=>{
    const {id} = req.params;

    const memam03 = await memaM03.findById(id)
    res.json(memam03)
}

// Editar un documento
mema_M03.editmema_M03Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM03 = {
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

        //Arnes de sobre techo
        tsm1v: req.body.tsm1vv || '',
        tsm1l: req.body.tsm1ll || '',
        tsm1t: req.body.tsm1tt || '',
        tsm1f: req.body.tsm1ff || '',
        tsm1ra: req.body.tsm1raa || '',

        tsm2v: req.body.tsm2vv || '',
        tsm2l: req.body.tsm2ll || '',
        tsm2t: req.body.tsm2tt || '',
        tsm2f: req.body.tsm2ff || '',
        tsm2ra: req.body.tsm2raa || '',

        pataprv: req.body.pataprvv || '',
        pataprl: req.body.pataprll || '',
        pataprt: req.body.pataprtt || '',
        pataprf: req.body.pataprff || '',
        pataprra: req.body.pataprraa || '',

        patcfv: req.body.patcfvv || '',
        patcfl: req.body.patcfll || '',
        patcft: req.body.patcftt || '',
        patcff: req.body.patcfff || '',
        patcfra: req.body.patcfraa || '',

        ceav: req.body.ceavv || '',
        ceal: req.body.ceall || '',
        ceat: req.body.ceatt || '',
        ceaf: req.body.ceaff || '',
        ceara: req.body.cearaa || '',

        patdev: req.body.patdevv || '',
        patdel: req.body.patdell || '',
        patdet: req.body.patdett || '',
        patdef: req.body.patdeff || '',
        patdera: req.body.patderaa || '',

        capv: req.body.capvv || '',
        capl: req.body.capll || '',
        capt: req.body.captt || '',
        capf: req.body.capff || '',
        capra: req.body.capraa || '',

        atm1v: req.body.atm1vv || '',
        atm1l: req.body.atm1ll || '',
        atm1t: req.body.atm1tt || '',
        atm1f: req.body.atm1ff || '',
        atm1ra: req.body.atm1raa || '',

        ac3v: req.body.ac3vv || '',
        ac3l: req.body.ac3ll || '',
        ac3t: req.body.ac3tt || '',
        ac3f: req.body.ac3ff || '',
        ac3ra: req.body.ac3raa || '',

        saprv: req.body.saprvv || '',
        saprl: req.body.saprll || '',
        saprt: req.body.saprtt || '',
        saprf: req.body.saprff || '',
        saprra: req.body.saprraa || '',

        sdev: req.body.sdevv || '',
        sdel: req.body.sdell || '',
        sdet: req.body.sdett || '',
        sdef: req.body.sdeff || '',
        sdera: req.body.sderaa || '',

        torv: req.body.torvv || '',
        torl: req.body.torll || '',
        tort: req.body.tortt || '',
        torf: req.body.torff || '',
        torra: req.body.torraa || '',

        bdfv: req.body.bdfvv || '',
        bdfl: req.body.bdfll || '',
        bdft: req.body.bdftt || '',
        bdff: req.body.bdfff || '',
        bdfra: req.body.bdfraa || '',
        
        obs2: req.body.obs22 || '',

    }
    await memaM03.findByIdAndUpdate(id, { $set: mema_M03}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M03.getAllmema_M03TypeM = async (req, res) => {
    const memam03 = await memaM03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam03)
};

mema_M03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM03New = {
        historyFile: req.body.historyFile || []
    }
    await memaM03.findByIdAndUpdate(id, { $set: historymemaM03New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam03 = await memaM03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam03)
}

mema_M03.createmema_M03TypeM = async (req, res) => {
    const memam03 = new memaM03(req.body)
    
    await memam03.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M03;