const memaM33 = require('../../../models/smee/mema/MEMA_M33');

const mema_M33 = {};
//Metodos
// Obtiene todos los empleados
mema_M33.getmema_M33Data = async (req, res)=>{
    const {id} = req.params;

    const memam33 = await memaM33.findById(id)
    res.json(memam33)
}

// Editar un documento
mema_M33.editmema_M33Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM33 = {
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
        //Motoventilador cap
        tef: req.body.teff || '',
        tl: req.body.tll || '',
        tpi: req.body.tpii || '',
        taj: req.body.tajj || '',

        pvef: req.body.pveff || '',
        pvl: req.body.pvll || '',
        pvpi: req.body.pvpii || '',
        pvaj: req.body.pvajj || '',

        baef: req.body.baeff || '',
        bal: req.body.ball || '',
        bapi: req.body.bapii || '',
        baaj: req.body.baajj || '',

        toef: req.body.toeff || '',
        tol: req.body.toll || '',
        topi: req.body.topii || '',
        toaj: req.body.toajj || '',

        cmef: req.body.cmeff || '',
        cml: req.body.cmll || '',
        cmpi: req.body.cmpii || '',
        cmaj: req.body.cmajj || '',

        eef: req.body.eeff || '',
        el: req.body.ell || '',
        epi: req.body.epii || '',
        eaj: req.body.eajj || '',

        ref: req.body.reff || '',
        rl: req.body.rll || '',
        rpi: req.body.rpii || '',
        raj: req.body.rajj || '',

        roef: req.body.roeff || '',
        rol: req.body.roll || '',
        ropi: req.body.ropii || '',
        roaj: req.body.roajj || '',

        vef: req.body.veff || '',
        vl: req.body.vll || '',
        vpi: req.body.vpii || '',
        vaj: req.body.vajj || '',

        taef: req.body.taeff || '',
        tal: req.body.tall || '',
        tapi: req.body.tapii || '',
        taaj: req.body.taajj || '',

        ttef: req.body.tteff || '',
        ttl: req.body.ttll || '',
        ttpi: req.body.ttpii || '',
        ttaj: req.body.ttajj || '',

        ccef: req.body.cceff || '',
        ccl: req.body.ccll || '',
        ccpi: req.body.ccpii || '',
        ccaj: req.body.ccajj || '',

        bcef: req.body.bceff || '',
        bcl: req.body.bcll || '',
        bcpi: req.body.bcpii || '',
        bcaj: req.body.bcajj || '',

        uv: req.body.uvv || '',
        vw: req.body.vww || '',
        wu: req.body.wuu || '',
        ut: req.body.utt || '',
        vt: req.body.vtt || '',
        wt: req.body.wtt || '',
        ar: req.body.arr || '',
        n: req.body.nn || '',
        rpm: req.body.rpmm || '',

        obs2: req.body.obs22 || '',
        //-------------------------------

    }
    await memaM33.findByIdAndUpdate(id, { $set: mema_M33}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M33.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM33.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M33.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM33.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M33.getAllmema_M33TypeM = async (req, res) => {
    const memam33 = await memaM33.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam33)
    };

    mema_M33.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM33New = {
        historyFile: req.body.historyFile || []
    }
    await memaM33.findByIdAndUpdate(id, { $set: historymemaM33New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M33.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam33 = await memaM33.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam33)
    }

    mema_M33.createmema_M33TypeM = async (req, res) => {
    const memam33 = new memaM33(req.body)

    await memam33.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M33;
