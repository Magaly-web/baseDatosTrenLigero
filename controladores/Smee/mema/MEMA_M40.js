const memaM40 = require('../../../models/smee/mema/MEMA_M40');

const mema_M40 = {};
//Metodos
// Obtiene todos los empleados
mema_M40.getmema_M40Data = async (req, res)=>{
    const {id} = req.params;

    const memam40 = await memaM40.findById(id)
    res.json(memam40)
}

// Editar un documento
mema_M40.editmema_M40Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM40 = {
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
        //Iluminacion para letrero de ruta M1

        m1b40wv: req.body.m1b40wvv || '',
        m1b40wl: req.body.m1b40wll || '',
        m1b40wf: req.body.m1b40wff || '',

        m1lt8v: req.body.m1lt8vv || '',
        m1lt8l: req.body.m1lt8ll || '',
        m1lt8f: req.body.m1lt8ff || '',

        m1t8iv: req.body.m1t8ivv || '',
        m1t8il: req.body.m1t8ill || '',
        m1t8if: req.body.m1t8iff || '',

        m1t8dv: req.body.m1t8dvv || '',
        m1t8dl: req.body.m1t8dll || '',
        m1t8df: req.body.m1t8dff || '',

        m1bt4v: req.body.m1bt4vv || '',
        m1bt4l: req.body.m1bt4ll || '',
        m1bt4f: req.body.m1bt4ff || '',

        m1fuv: req.body.m1fuvv || '',
        m1ful: req.body.m1full || '',
        m1fuf: req.body.m1fuff || '',

        m1pv: req.body.m1pvv || '',
        m1pl: req.body.m1pll || '',
        m1pf: req.body.m1pff || '',

        m1terv: req.body.m1tervv || '',
        m1terl: req.body.m1terll || '',
        m1terf: req.body.m1terff || '',

        //Iluminacion para letrero de ruta M2

        m2b40wv: req.body.m2b40wvv || '',
        m2b40wl: req.body.m2b40wll || '',
        m2b40wf: req.body.m2b40wff || '',

        m2lt8v: req.body.m2lt8vv || '',
        m2lt8l: req.body.m2lt8ll || '',
        m2lt8f: req.body.m2lt8ff || '',

        m2t8iv: req.body.m2t8ivv || '',
        m2t8il: req.body.m2t8ill || '',
        m2t8if: req.body.m2t8iff || '',

        m2t8dv: req.body.m2t8dvv || '',
        m2t8dl: req.body.m2t8dll || '',
        m2t8df: req.body.m2t8dff || '',

        m2bt4v: req.body.m2bt4vv || '',
        m2bt4l: req.body.m2bt4ll || '',
        m2bt4f: req.body.m2bt4ff || '',

        m2fuv: req.body.m2fuvv || '',
        m2ful: req.body.m2full || '',
        m2fuf: req.body.m2fuff || '',

        m2pv: req.body.m2pvv || '',
        m2pl: req.body.m2pll || '',
        m2pf: req.body.m2pff || '',

        m2terv: req.body.m2tervv || '',
        m2terl: req.body.m2terll || '',
        m2terf: req.body.m2terff || '',

        obs2: req.body.obs22 || '',
        //-------------------------------

    }
    await memaM40.findByIdAndUpdate(id, { $set: mema_M40}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M40.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM40.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M40.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM40.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M40.getAllmema_M40TypeM = async (req, res) => {
    const memam40 = await memaM40.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam40)
    };

    mema_M40.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM40New = {
        historyFile: req.body.historyFile || []
    }
    await memaM40.findByIdAndUpdate(id, { $set: historymemaM40New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M40.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam40 = await memaM40.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam40)
    }

    mema_M40.createmema_M40TypeM = async (req, res) => {
    const memam40 = new memaM40(req.body)

    await memam40.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M40;
