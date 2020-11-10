
const memaM30 = require('../../../models/smee/mema/MEMA_M30');

const mema_M30 = {};
//Metodos
// Obtiene todos los empleados
mema_M30.getmema_M30Data = async (req, res)=>{
    const {id} = req.params;

    const memam30 = await memaM30.findById(id)
    res.json(memam30)
}

// Editar un documento
mema_M30.editmema_M30Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM30 = {
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
        //M1
        cal: req.body.call || '',
        car: req.body.carr || '',
        caf: req.body.caff || '',

        cnl: req.body.cnll || '',
        cnr: req.body.cnrr || '',
        cnf: req.body.cnff || '',

        ccl: req.body.ccll || '',
        ccr: req.body.ccrr || '',
        ccf: req.body.ccff || '',

        cn2l: req.body.cn2ll || '',
        cn2r: req.body.cn2rr || '',
        cn2f: req.body.cn2ff || '',

        cpl: req.body.cpll || '',
        cpr: req.body.cprr || '',
        cpf: req.body.cpff || '',

        capl: req.body.capll || '',
        capr: req.body.caprr || '',
        capf: req.body.capff || '',

        bpdtl: req.body.bpdtll || '',
        bpdtr: req.body.bpdtrr || '',
        bpdtf: req.body.bpdtff || '',

        bfcl: req.body.bfcll || '',
        bfcr: req.body.bfcrr || '',
        bfcf: req.body.bfcff || '',

        bcel: req.body.bcell || '',
        bcer: req.body.bcerr || '',
        bcef: req.body.bceff || '',

        bcal: req.body.bcall || '',
        bcar: req.body.bcarr || '',
        bcaf: req.body.bcaff || '',

        he: req.body.hee || '',

        obs2: req.body.obs22 || '',

        //M2

        ca2l: req.body.ca2ll || '',
        ca2r: req.body.ca2rr || '',
        ca2f: req.body.ca2ff || '',

        cn22l: req.body.cn22ll || '',
        cn22r: req.body.cn22rr || '',
        cn22f: req.body.cn22ff || '',

        cc2l: req.body.cc2ll || '',
        cc2r: req.body.cc2rr || '',
        cc2f: req.body.cc2ff || '',

        bpdt2l: req.body.bpdt2ll || '',
        bpdt2r: req.body.bpdt2rr || '',
        bpdt2f: req.body.bpdt2ff || '',

        bfc2l: req.body.bfc2ll || '',
        bfc2r: req.body.bfc2rr || '',
        bfc2f: req.body.bfc2ff || '',

        bce2l: req.body.bce2ll || '',
        bce2r: req.body.bce2rr || '',
        bce2f: req.body.bce2ff || '',

        bca2l: req.body.bca2ll || '',
        bca2r: req.body.bca2rr || '',
        bca2f: req.body.bca2ff || '',

        he2: req.body.hee2 || '',

        obs3: req.body.obs33 || '',
        //-------------------------------

    }
    await memaM30.findByIdAndUpdate(id, { $set: mema_M30}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M30.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM30.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M30.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM30.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M30.getAllmema_M30TypeM = async (req, res) => {
    const memam30 = await memaM30.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam30)
    };

    mema_M30.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM30New = {
        historyFile: req.body.historyFile || []
    }
    await memaM30.findByIdAndUpdate(id, { $set: historymemaM30New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M30.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam30 = await memaM30.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam30)
    }

    mema_M30.createmema_M30TypeM = async (req, res) => {
    const memam30 = new memaM30(req.body)

    await memam30.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M30;
