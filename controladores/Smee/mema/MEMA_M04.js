
const memaM04 = require('../../../models/smee/mema/MEMA_M04');

const mema_M04 = {};
//Metodos
// Obtiene todos los empleados
mema_M04.getmema_M04Data = async (req, res)=>{
    const {id} = req.params;

    const memam04 = await memaM04.findById(id)
    res.json(memam04)
}

// Editar un documento
mema_M04.editmema_M04Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM04 = {
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

        //componentes para caja de fusibles

        afv: req.body.afvv || '',
        afl: req.body.afll || '',
        aff: req.body.afff || '',

        iav: req.body.iavv || '',
        ial: req.body.iall || '',
        iaf: req.body.iaff || '',

        bcv: req.body.bcvv || '',
        bcl: req.body.bcll || '',
        bcf: req.body.bcff || '',

        // Caja de fusibles

        ccv: req.body.ccvv || '',
        ccp: req.body.ccpp || '',
        ccf: req.body.ccff || '',

        tcv: req.body.tcvv || '',
        tcp: req.body.tcpp || '',
        tcf: req.body.tcff || '',

        baiv: req.body.baivv || '',
        baip: req.body.baipp || '',
        baif: req.body.baiff || '',

        spv: req.body.spvv || '',
        spp: req.body.sppp || '',
        spf: req.body.spff || '',

        tfv: req.body.tfvv || '',
        tfp: req.body.tfpp || '',
        tff: req.body.tfff || '',

        hv: req.body.hvv || '',
        hp: req.body.hpp || '',
        hf: req.body.hff || '',
        
        //fusibles Cea

        ceafa: req.body.ceafaa || '',
        ceal: req.body.ceall || '',
        cear: req.body.cearr || '',

        obs2: req.body.obs22 || '',

    }
    await memaM04.findByIdAndUpdate(id, { $set: mema_M04}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M04.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM04.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M04.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM04.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M04.getAllmema_M04TypeM = async (req, res) => {
    const memam04 = await memaM04.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam04)
};

mema_M04.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM04New = {
        historyFile: req.body.historyFile || []
    }
    await memaM04.findByIdAndUpdate(id, { $set: historymemaM04New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M04.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam04 = await memaM04.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam04)
}

mema_M04.createmema_M04TypeM = async (req, res) => {
    const memam04 = new memaM04(req.body)
    
    await memam04.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M04;