
const memaM01 = require('../../../models/smee/mema/MEMA_M01');

const mema_M01 = {};
//Metodos
// Obtiene todos los empleados
mema_M01.getmema_M01Data = async (req, res)=>{
    const {id} = req.params;

    const memam01 = await memaM01.findById(id)
    res.json(memam01)
}

// Editar un documento
mema_M01.editmema_M01Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM01 = {
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

        //apr
        tctvf: req.body.tctvff || '',
        tctl: req.body.tctll || '',
        tctf: req.body.tctff || '',

        cpvf: req.body.cpvff || '',
        cpl: req.body.cpll || '',
        cpf: req.body.cpff || '',

        osgvf: req.body.osgvff || '',
        osgl: req.body.osgll || '',
        osgf: req.body.osgff || '',

        ctvf: req.body.ctvff || '',
        ctl: req.body.ctll || '',
        ctf: req.body.ctff || '',

        odlvf: req.body.odlvff || '',
        odll: req.body.odlll || '',
        odlf: req.body.odlff || '',

        ofvf: req.body.ofvff || '',
        ofl: req.body.ofll || '',
        off: req.body.offf || '',

        tvf: req.body.tvff || '',
        tl: req.body.tll || '',
        tf: req.body.tff || '',

        //prueba de rigidez
        nl1: req.body.nl11 || '',
        nl2: req.body.nl22 || '',
        
        obs2: req.body.obs22 || '',

    }
    await memaM01.findByIdAndUpdate(id, { $set: mema_M01}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M01.getAllmema_M01TypeM = async (req, res) => {
    const memam01 = await memaM01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam01)
};

mema_M01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM01New = {
        historyFile: req.body.historyFile || []
    }
    await memaM01.findByIdAndUpdate(id, { $set: historymemaM01New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam01 = await memaM01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam01)
}

mema_M01.createmema_M01TypeM = async (req, res) => {
    const memam01 = new memaM01(req.body)
    
    await memam01.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M01;