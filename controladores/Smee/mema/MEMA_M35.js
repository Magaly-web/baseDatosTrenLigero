
const memaM35 = require('../../../models/smee/mema/MEMA_M35');

const mema_M35 = {};
//Metodos
// Obtiene todos los empleados
mema_M35.getmema_M35Data = async (req, res)=>{
    const {id} = req.params;

    const memam35 = await memaM35.findById(id)
    res.json(memam35)
}

// Editar un documento
mema_M35.editmema_M35Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM35 = {
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

        mca1ef: req.body.mca1eff || '',
        mca1r: req.body.mca1rr || '',
        mca1l: req.body.mca1ll || '',

        mca2ef: req.body.mca2eff || '',
        mca2r: req.body.mca2rr || '',
        mca2l: req.body.mca2ll || '',

        mstef: req.body.msteff || '',
        mstr: req.body.mstrr || '',
        mstl: req.body.mstll || '',

        mtcef: req.body.mtceff || '',
        mtcr: req.body.mtcrr || '',
        mtcl: req.body.mtcll || '',

        maccef: req.body.macceff || '',
        maccr: req.body.maccrr || '',
        maccl: req.body.maccll || '',

        mtfef: req.body.mtfeff || '',
        mtfr: req.body.mtfrr || '',
        mtfl: req.body.mtfll || '',
        
        //-------------------

        bra1l: req.body.bra1ll || '',
        bra1ai: req.body.bra1aii || '',
        bra1sa: req.body.bra1saa || '',
        bra1to: req.body.bra1too || '',

        brb1l: req.body.brb1ll || '',
        brb1ai: req.body.brb1aii || '',
        brb1sa: req.body.brb1saa || '',
        brb1to: req.body.brb1too || '',

        brc1l: req.body.brc1ll || '',
        brc1ai: req.body.brc1aii || '',
        brc1sa: req.body.brc1saa || '',
        brc1to: req.body.brc1too || '',

        //--------------------

        bra2l: req.body.bra2ll || '',
        bra2ai: req.body.bra2aii || '',
        bra2sa: req.body.bra2saa || '',
        bra2to: req.body.bra2too || '',

        brb2l: req.body.brb2ll || '',
        brb2ai: req.body.brb2aii || '',
        brb2sa: req.body.brb2saa || '',
        brb2to: req.body.brb2too || '',

        brc2l: req.body.brc2ll || '',
        brc2ai: req.body.brc2aii || '',
        brc2sa: req.body.brc2saa || '',
        brc2to: req.body.brc2too || '',

        //--------------------

        bra3l: req.body.bra3ll || '',
        bra3ai: req.body.bra3aii || '',
        bra3sa: req.body.bra3saa || '',
        bra3to: req.body.bra3too || '',

        brb3l: req.body.brb3ll || '',
        brb3ai: req.body.brb3aii || '',
        brb3sa: req.body.brb3saa || '',
        brb3to: req.body.brb3too || '',

        brc3l: req.body.brc3ll || '',
        brc3ai: req.body.brc3aii || '',
        brc3sa: req.body.brc3saa || '',
        brc3to: req.body.brc3too || '',

        //--------------------

        bra4l: req.body.bra4ll || '',
        bra4ai: req.body.bra4aii || '',
        bra4sa: req.body.bra4saa || '',
        bra4to: req.body.bra4too || '',

        brb4l: req.body.brb4ll || '',
        brb4ai: req.body.brb4aii || '',
        brb4sa: req.body.brb4saa || '',
        brb4to: req.body.brb4too || '',

        brc4l: req.body.brc4ll || '',
        brc4ai: req.body.brc4aii || '',
        brc4sa: req.body.brc4saa || '',
        brc4to: req.body.brc4too || '',

        //--------------------

        bra5l: req.body.bra5ll || '',
        bra5ai: req.body.bra5aii || '',
        bra5sa: req.body.bra5saa || '',
        bra5to: req.body.bra5too || '',

        brb5l: req.body.brb5ll || '',
        brb5ai: req.body.brb5aii || '',
        brb5sa: req.body.brb5saa || '',
        brb5to: req.body.brb5too || '',

        brc5l: req.body.brc5ll || '',
        brc5ai: req.body.brc5aii || '',
        brc5sa: req.body.brc5saa || '',
        brc5to: req.body.brc5too || '',

        obs2: req.body.obs22 || '',

        //------------------M2

        m2ca1c: req.body.m2ca1cc || '',
        m2ca2c: req.body.m2ca2cc || '',
        m2str: req.body.m2strr || '',
        
        //-------------------

        bra1r: req.body.bra1rr || '',
        brb1r: req.body.brb1rr || '',
        brc1r: req.body.brc1rr || '',
        brt1: req.body.brt11 || '',
        bre1: req.body.bre11 || '',

        //-------------------

        bra2r: req.body.bra2rr || '',
        brb2r: req.body.brb2rr || '',
        brc2r: req.body.brc2rr || '',
        brt2: req.body.brt22 || '',
        bre2: req.body.bre22 || '',

        //-------------------

        bra3r: req.body.bra3rr || '',
        brb3r: req.body.brb3rr || '',
        brc3r: req.body.brc3rr || '',
        brt3: req.body.brt33 || '',
        bre3: req.body.bre33 || '',

        //-------------------

        bra4r: req.body.bra4rr || '',
        brb4r: req.body.brb4rr || '',
        brc4r: req.body.brc4rr || '',
        brt4: req.body.brt44 || '',
        bre4: req.body.bre44 || '',

        //-------------------

        bra5r: req.body.bra5rr || '',
        brb5r: req.body.brb5rr || '',
        brc5r: req.body.brc5rr || '',
        brt5: req.body.brt55 || '',
        bre5: req.body.bre55 || '',

        //-------------------
        rt: req.body.rtt || '',

        obs3: req.body.obs33 || '',
        //-------------------------------

    }
    await memaM35.findByIdAndUpdate(id, { $set: mema_M35}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M35.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM35.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M35.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM35.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M35.getAllmema_M35TypeM = async (req, res) => {
    const memam35 = await memaM35.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam35)
    };

    mema_M35.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM35New = {
        historyFile: req.body.historyFile || []
    }
    await memaM35.findByIdAndUpdate(id, { $set: historymemaM35New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M35.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam35 = await memaM35.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam35)
    }

    mema_M35.createmema_M35TypeM = async (req, res) => {
    const memam35 = new memaM35(req.body)

    await memam35.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M35;
