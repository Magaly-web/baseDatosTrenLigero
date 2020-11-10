
const memaM28 = require('../../../models/smee/mema/MEMA_M28');

const mema_M28 = {};
//Metodos
// Obtiene todos los empleados
mema_M28.getmema_M28Data = async (req, res)=>{
    const {id} = req.params;

    const memam28 = await memaM28.findById(id)
    res.json(memam28)
}

// Editar un documento
mema_M28.editmema_M28Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM28 = {
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
        
        //Grupo de reveladores cofre 3

        rtr1l: req.body.rtr1ll || '',
        rtr1d: req.body.rtr1dd || '',
        rtr1r: req.body.rtr1rr || '',
        rtr1f: req.body.rtr1ff || '',

        rfrl: req.body.rfrll || '',
        rfrd: req.body.rfrdd || '',
        rfrr: req.body.rfrrr || '',
        rfrf: req.body.rfrff || '',

        rtr2l: req.body.rtr2ll || '',
        rtr2d: req.body.rtr2dd || '',
        rtr2r: req.body.rtr2rr || '',
        rtr2f: req.body.rtr2ff || '',

        rfr2l: req.body.rfr2ll || '',
        rfr2d: req.body.rfr2dd || '',
        rfr2r: req.body.rfr2rr || '',
        rfr2f: req.body.rfr2ff || '',

        //Borneros de conexion y cableado

        c29v: req.body.c29vv || '',
        c29l: req.body.c29ll || '',
        c29f: req.body.c29ff || '',

        c30v: req.body.c30vv || '',
        c30l: req.body.c30ll || '',
        c30f: req.body.c30ff || '',

        c31v: req.body.c31vv || '',
        c31l: req.body.c31ll || '',
        c31f: req.body.c31ff || '',

        c32v: req.body.c32vv || '',
        c32l: req.body.c32ll || '',
        c32f: req.body.c32ff || '',

        tcv: req.body.tcvv || '',
        tcl: req.body.tcll || '',
        tcf: req.body.tcff || '',

        ac3v: req.body.ac3vv || '',
        ac3l: req.body.ac3ll || '',
        ac3f: req.body.ac3ff || '',

        //Grupo de fusibles GFB3

        pol: req.body.poll || '',
        por: req.body.porr || '',

        maf: req.body.maff || '',
        mal: req.body.mall || '',
        mar: req.body.marr || '',

        upsf: req.body.upsff || '',
        upsl: req.body.upsll || '',
        upsr: req.body.upsrr || '',

        gstff: req.body.gstfff || '',
        gstfl: req.body.gstfll || '',
        gstfr: req.body.gstfrr || '',

        mpf: req.body.mpff || '',
        mpl: req.body.mpll || '',
        mpr: req.body.mprr || '',

        ccaf: req.body.ccaff || '',
        ccal: req.body.ccall || '',
        ccar: req.body.ccarr || '',

        mf: req.body.mff || '',
        ml: req.body.mll || '',
        mr: req.body.mrr || '',

        aemf: req.body.aemff || '',
        aeml: req.body.aemll || '',
        aemr: req.body.aemrr || '',

        obs2: req.body.obs22 || '',

        //-------------------------------

    }
    await memaM28.findByIdAndUpdate(id, { $set: mema_M28}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M28.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM28.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M28.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM28.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M28.getAllmema_M28TypeM = async (req, res) => {
    const memam28 = await memaM28.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam28)
    };

    mema_M28.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM28New = {
        historyFile: req.body.historyFile || []
    }
    await memaM28.findByIdAndUpdate(id, { $set: historymemaM28New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M28.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam28 = await memaM28.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam28)
    }

    mema_M28.createmema_M28TypeM = async (req, res) => {
    const memam28 = new memaM28(req.body)

    await memam28.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M28;
