
const memaM19 = require('../../../models/smee/mema/MEMA_M19');

const mema_M19 = {};
//Metodos
// Obtiene todos los empleados
mema_M19.getmema_M19Data = async (req, res)=>{
    const {id} = req.params;

    const memam19 = await memaM19.findById(id)
    res.json(memam19)
}

// Editar un documento
mema_M19.editmema_M19Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM19 = {
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
        
        //Contacto M1 derecho
        dcdpv: req.body.dcdpvv || '',
        dcdpl: req.body.dcdpll || '',
        dcdpf: req.body.dcdpff || '',

        dtv: req.body.dtvv || '',
        dtl: req.body.dtll || '',
        dtf: req.body.dtff || '',

        dtcv: req.body.dtcvv || '',
        dtcl: req.body.dtcll || '',
        dtcf: req.body.dtcff || '',

        dtov: req.body.dtovv || '',
        dtol: req.body.dtoll || '',
        dtof: req.body.dtoff || '',

        //Contacto M1 izquierdo

        icdpv: req.body.icdpvv || '',
        icdpl: req.body.icdpll || '',
        icdpf: req.body.icdpff || '',

        itv: req.body.itvv || '',
        itl: req.body.itll || '',
        itf: req.body.itff || '',

        itcv: req.body.itcvv || '',
        itcl: req.body.itcll || '',
        itcf: req.body.itcff || '',

        itov: req.body.itovv || '',
        itol: req.body.itoll || '',
        itof: req.body.itoff || '',

        //Contacto M2 derecho
        dcdp2v: req.body.dcdp2vv || '',
        dcdp2l: req.body.dcdp2ll || '',
        dcdp2f: req.body.dcdp2ff || '',

        dt2v: req.body.dt2vv || '',
        dt2l: req.body.dt2ll || '',
        dt2f: req.body.dt2ff || '',

        dtc2v: req.body.dtc2vv || '',
        dtc2l: req.body.dtc2ll || '',
        dtc2f: req.body.dtc2ff || '',

        dto2v: req.body.dto2vv || '',
        dto2l: req.body.dto2ll || '',
        dto2f: req.body.dto2ff || '',

        //Contacto cabina M1

        cacdpv: req.body.cacdpvv || '',
        cacdpl: req.body.cacdpll || '',
        cacdpf: req.body.cacdpff || '',

        catv: req.body.catvv || '',
        catl: req.body.catll || '',
        catf: req.body.catff || '',

        catcv: req.body.catcvv || '',
        catcl: req.body.catcll || '',
        catcf: req.body.catcff || '',

        catov: req.body.catovv || '',
        catol: req.body.catoll || '',
        catof: req.body.catoff || '',

        //Contacto cabina M2

        ca2cdpv: req.body.ca2cdpvv || '',
        ca2cdpl: req.body.ca2cdpll || '',
        ca2cdpf: req.body.ca2cdpff || '',

        ca2tv: req.body.ca2tvv || '',
        ca2tl: req.body.ca2tll || '',
        ca2tf: req.body.ca2tff || '',

        ca2tcv: req.body.ca2tcvv || '',
        ca2tcl: req.body.ca2tcll || '',
        ca2tcf: req.body.ca2tcff || '',

        ca2tov: req.body.ca2tovv || '',
        ca2tol: req.body.ca2toll || '',
        ca2tof: req.body.ca2toff || '',

        obs2: req.body.obs22 || '',

        //-------------------------------

    }
    await memaM19.findByIdAndUpdate(id, { $set: mema_M19}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M19.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM19.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M19.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM19.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M19.getAllmema_M19TypeM = async (req, res) => {
    const memam19 = await memaM19.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam19)
    };

    mema_M19.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM19New = {
        historyFile: req.body.historyFile || []
    }
    await memaM19.findByIdAndUpdate(id, { $set: historymemaM19New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M19.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam19 = await memaM19.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam19)
    }

    mema_M19.createmema_M19TypeM = async (req, res) => {
    const memam19 = new memaM19(req.body)

    await memam19.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M19;
