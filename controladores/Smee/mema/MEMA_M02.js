
const memaM02 = require('../../../models/smee/mema/MEMA_M02');

const mema_M02 = {};
//Metodos
// Obtiene todos los empleados
mema_M02.getmema_M02Data = async (req, res)=>{
    const {id} = req.params;

    const memam02 = await memaM02.findById(id)
    res.json(memam02)
}

// Editar un documento
mema_M02.editmema_M02Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM02 = {
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

        // Antenas SAE

        gpsv: req.body.gpsvv || '',
        gpsl: req.body.gpsll || '',
        gpsr: req.body.gpsrr || '',
        gpsf: req.body.gpsff || '',

        atv: req.body.atvv || '',
        atl: req.body.atll || '',
        atr: req.body.atrr || '',
        atf: req.body.atff || '',

        tfv: req.body.tfvv || '',
        tfl: req.body.tfll || '',
        tfr: req.body.tfrr || '',
        tff: req.body.tfff || '',

        //Baliza SAE

        bv: req.body.bvv || '',
        bl: req.body.bll || '',
        br: req.body.brr || '',
        bf: req.body.bff || '',

        bpv: req.body.bpvv || '',
        bpl: req.body.bpll || '',
        bpr: req.body.bprr || '',
        bpf: req.body.bpff || '',

        tdv: req.body.tdvv || '',
        tdl: req.body.tdll || '',
        tdr: req.body.tdrr || '',
        tdf: req.body.tdff || '',

        obs2: req.body.obs22 || '',

    }
    await memaM02.findByIdAndUpdate(id, { $set: mema_M02}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M02.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM02.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M02.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM02.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M02.getAllmema_M02TypeM = async (req, res) => {
    const memam02 = await memaM02.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam02)
};

mema_M02.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM02New = {
        historyFile: req.body.historyFile || []
    }
    await memaM02.findByIdAndUpdate(id, { $set: historymemaM02New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M02.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam02 = await memaM02.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam02)
}

mema_M02.createmema_M02TypeM = async (req, res) => {
    const memam02 = new memaM02(req.body)
    
    await memam02.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M02;