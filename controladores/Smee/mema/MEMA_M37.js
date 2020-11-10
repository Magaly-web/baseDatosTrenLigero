
const memaM37 = require('../../../models/smee/mema/MEMA_M37');

const mema_M37 = {};
//Metodos
// Obtiene todos los empleados
mema_M37.getmema_M37Data = async (req, res)=>{
    const {id} = req.params;

    const memam37 = await memaM37.findById(id)
    res.json(memam37)
}

// Editar un documento
mema_M37.editmema_M37Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM37 = {
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
        //Cartero M1 Derecho

        m1dsv: req.body.m1dsvv || '',
        m1dsl: req.body.m1dsll || '',
        m1dsr: req.body.m1dsrr || '',
        m1dsf: req.body.m1dsff || '',

        m1drv: req.body.m1drvv || '',
        m1drl: req.body.m1drll || '',
        m1drr: req.body.m1drrr || '',
        m1drf: req.body.m1drff || '',

        m1dav: req.body.m1davv || '',
        m1dal: req.body.m1dall || '',
        m1dar: req.body.m1darr || '',
        m1daf: req.body.m1daff || '',

        m1dlfv: req.body.m1dlfvv || '',
        m1dlfl: req.body.m1dlfll || '',
        m1dlfr: req.body.m1dlfrr || '',
        m1dlff: req.body.m1dlfff || '',

        m1dlpv: req.body.m1dlpvv || '',
        m1dlpl: req.body.m1dlpll || '',
        m1dlpr: req.body.m1dlprr || '',
        m1dlpf: req.body.m1dlpff || '',

        m1dlafv: req.body.m1dlafvv || '',
        m1dlafl: req.body.m1dlafll || '',
        m1dlafr: req.body.m1dlafrr || '',
        m1dlaff: req.body.m1dlafff || '',

        m1dlapv: req.body.m1dlapvv || '',
        m1dlapl: req.body.m1dlapll || '',
        m1dlapr: req.body.m1dlaprr || '',
        m1dlapf: req.body.m1dlapff || '',

        m1dmafv: req.body.m1dmafvv || '',
        m1dmafl: req.body.m1dmafll || '',
        m1dmafr: req.body.m1dmafrr || '',
        m1dmaff: req.body.m1dmafff || '',

        m1dmapv: req.body.m1dmapvv || '',
        m1dmapl: req.body.m1dmapll || '',
        m1dmapr: req.body.m1dmaprr || '',
        m1dmapf: req.body.m1dmapff || '',

        m1dmvfv: req.body.m1dmvfvv || '',
        m1dmvfl: req.body.m1dmvfll || '',
        m1dmvfr: req.body.m1dmvfrr || '',
        m1dmvff: req.body.m1dmvfff || '',

        m1dmvpv: req.body.m1dmvpvv || '',
        m1dmvpl: req.body.m1dmvpll || '',
        m1dmvpr: req.body.m1dmvprr || '',
        m1dmvpf: req.body.m1dmvpff || '',

        m1dtfv: req.body.m1dtfvv || '',
        m1dtfl: req.body.m1dtfll || '',
        m1dtfr: req.body.m1dtfrr || '',
        m1dtff: req.body.m1dtfff || '',

        m1dehv: req.body.m1dehvv || '',
        m1dehl: req.body.m1dehll || '',
        m1dehr: req.body.m1dehrr || '',
        m1dehf: req.body.m1dehff || '',

        m1dtov: req.body.m1dtovv || '',
        m1dtol: req.body.m1dtoll || '',
        m1dtor: req.body.m1dtorr || '',
        m1dtof: req.body.m1dtoff || '',

        m1dccv: req.body.m1dccvv || '',
        m1dccl: req.body.m1dccll || '',
        m1dccr: req.body.m1dccrr || '',
        m1dccf: req.body.m1dccff || '',

        //Cartero M1 Izquierdo

        m1isv: req.body.m1isvv || '',
        m1isl: req.body.m1isll || '',
        m1isr: req.body.m1isrr || '',
        m1isf: req.body.m1isff || '',

        m1irv: req.body.m1irvv || '',
        m1irl: req.body.m1irll || '',
        m1irr: req.body.m1irrr || '',
        m1irf: req.body.m1irff || '',

        m1iav: req.body.m1iavv || '',
        m1ial: req.body.m1iall || '',
        m1iar: req.body.m1iarr || '',
        m1iaf: req.body.m1iaff || '',

        m1ilfv: req.body.m1ilfvv || '',
        m1ilfl: req.body.m1ilfll || '',
        m1ilfr: req.body.m1ilfrr || '',
        m1ilff: req.body.m1ilfff || '',

        m1ilpv: req.body.m1ilpvv || '',
        m1ilpl: req.body.m1ilpll || '',
        m1ilpr: req.body.m1ilprr || '',
        m1ilpf: req.body.m1ilpff || '',

        m1ilafv: req.body.m1ilafvv || '',
        m1ilafl: req.body.m1ilafll || '',
        m1ilafr: req.body.m1ilafrr || '',
        m1ilaff: req.body.m1ilafff || '',

        m1ilapv: req.body.m1ilapvv || '',
        m1ilapl: req.body.m1ilapll || '',
        m1ilapr: req.body.m1ilaprr || '',
        m1ilapf: req.body.m1ilapff || '',

        m1imafv: req.body.m1imafvv || '',
        m1imafl: req.body.m1imafll || '',
        m1imafr: req.body.m1imafrr || '',
        m1imaff: req.body.m1imafff || '',

        m1imapv: req.body.m1imapvv || '',
        m1imapl: req.body.m1imapll || '',
        m1imapr: req.body.m1imaprr || '',
        m1imapf: req.body.m1imapff || '',

        m1imvfv: req.body.m1imvfvv || '',
        m1imvfl: req.body.m1imvfll || '',
        m1imvfr: req.body.m1imvfrr || '',
        m1imvff: req.body.m1imvfff || '',

        m1imvpv: req.body.m1imvpvv || '',
        m1imvpl: req.body.m1imvpll || '',
        m1imvpr: req.body.m1imvprr || '',
        m1imvpf: req.body.m1imvpff || '',

        m1itfv: req.body.m1itfvv || '',
        m1itfl: req.body.m1itfll || '',
        m1itfr: req.body.m1itfrr || '',
        m1itff: req.body.m1itfff || '',

        m1iehv: req.body.m1iehvv || '',
        m1iehl: req.body.m1iehll || '',
        m1iehr: req.body.m1iehrr || '',
        m1iehf: req.body.m1iehff || '',

        m1itov: req.body.m1itovv || '',
        m1itol: req.body.m1itoll || '',
        m1itor: req.body.m1itorr || '',
        m1itof: req.body.m1itoff || '',

        m1iccv: req.body.m1iccvv || '',
        m1iccl: req.body.m1iccll || '',
        m1iccr: req.body.m1iccrr || '',
        m1iccf: req.body.m1iccff || '',

        //Cartero M2 Derecho
        m2dsv: req.body.m2dsvv || '',
        m2dsl: req.body.m2dsll || '',
        m2dsr: req.body.m2dsrr || '',
        m2dsf: req.body.m2dsff || '',

        m2drv: req.body.m2drvv || '',
        m2drl: req.body.m2drll || '',
        m2drr: req.body.m2drrr || '',
        m2drf: req.body.m2drff || '',

        m2dav: req.body.m2davv || '',
        m2dal: req.body.m2dall || '',
        m2dar: req.body.m2darr || '',
        m2daf: req.body.m2daff || '',

        m2dlfv: req.body.m2dlfvv || '',
        m2dlfl: req.body.m2dlfll || '',
        m2dlfr: req.body.m2dlfrr || '',
        m2dlff: req.body.m2dlfff || '',

        m2dlpv: req.body.m2dlpvv || '',
        m2dlpl: req.body.m2dlpll || '',
        m2dlpr: req.body.m2dlprr || '',
        m2dlpf: req.body.m2dlpff || '',

        m2dlafv: req.body.m2dlafvv || '',
        m2dlafl: req.body.m2dlafll || '',
        m2dlafr: req.body.m2dlafrr || '',
        m2dlaff: req.body.m2dlafff || '',

        m2dlapv: req.body.m2dlapvv || '',
        m2dlapl: req.body.m2dlapll || '',
        m2dlapr: req.body.m2dlaprr || '',
        m2dlapf: req.body.m2dlapff || '',

        m2dmafv: req.body.m2dmafvv || '',
        m2dmafl: req.body.m2dmafll || '',
        m2dmafr: req.body.m2dmafrr || '',
        m2dmaff: req.body.m2dmafff || '',

        m2dmapv: req.body.m2dmapvv || '',
        m2dmapl: req.body.m2dmapll || '',
        m2dmapr: req.body.m2dmaprr || '',
        m2dmapf: req.body.m2dmapff || '',

        m2dmvfv: req.body.m2dmvfvv || '',
        m2dmvfl: req.body.m2dmvfll || '',
        m2dmvfr: req.body.m2dmvfrr || '',
        m2dmvff: req.body.m2dmvfff || '',

        m2dmvpv: req.body.m2dmvpvv || '',
        m2dmvpl: req.body.m2dmvpll || '',
        m2dmvpr: req.body.m2dmvprr || '',
        m2dmvpf: req.body.m2dmvpff || '',

        m2dtfv: req.body.m2dtfvv || '',
        m2dtfl: req.body.m2dtfll || '',
        m2dtfr: req.body.m2dtfrr || '',
        m2dtff: req.body.m2dtfff || '',

        m2dehv: req.body.m2dehvv || '',
        m2dehl: req.body.m2dehll || '',
        m2dehr: req.body.m2dehrr || '',
        m2dehf: req.body.m2dehff || '',

        m2dtov: req.body.m2dtovv || '',
        m2dtol: req.body.m2dtoll || '',
        m2dtor: req.body.m2dtorr || '',
        m2dtof: req.body.m2dtoff || '',

        m2dccv: req.body.m2dccvv || '',
        m2dccl: req.body.m2dccll || '',
        m2dccr: req.body.m2dccrr || '',
        m2dccf: req.body.m2dccff || '',

        //Cartero M2 Izquierdo

        m2isv: req.body.m2isvv || '',
        m2isl: req.body.m2isll || '',
        m2isr: req.body.m2isrr || '',
        m2isf: req.body.m2isff || '',

        m2irv: req.body.m2irvv || '',
        m2irl: req.body.m2irll || '',
        m2irr: req.body.m2irrr || '',
        m2irf: req.body.m2irff || '',

        m2iav: req.body.m2iavv || '',
        m2ial: req.body.m2iall || '',
        m2iar: req.body.m2iarr || '',
        m2iaf: req.body.m2iaff || '',

        m2ilfv: req.body.m2ilfvv || '',
        m2ilfl: req.body.m2ilfll || '',
        m2ilfr: req.body.m2ilfrr || '',
        m2ilff: req.body.m2ilfff || '',

        m2ilpv: req.body.m2ilpvv || '',
        m2ilpl: req.body.m2ilpll || '',
        m2ilpr: req.body.m2ilprr || '',
        m2ilpf: req.body.m2ilpff || '',

        m2ilafv: req.body.m2ilafvv || '',
        m2ilafl: req.body.m2ilafll || '',
        m2ilafr: req.body.m2ilafrr || '',
        m2ilaff: req.body.m2ilafff || '',

        m2ilapv: req.body.m2ilapvv || '',
        m2ilapl: req.body.m2ilapll || '',
        m2ilapr: req.body.m2ilaprr || '',
        m2ilapf: req.body.m2ilapff || '',

        m2imafv: req.body.m2imafvv || '',
        m2imafl: req.body.m2imafll || '',
        m2imafr: req.body.m2imafrr || '',
        m2imaff: req.body.m2imafff || '',

        m2imapv: req.body.m2imapvv || '',
        m2imapl: req.body.m2imapll || '',
        m2imapr: req.body.m2imaprr || '',
        m2imapf: req.body.m2imapff || '',

        m2imvfv: req.body.m2imvfvv || '',
        m2imvfl: req.body.m2imvfll || '',
        m2imvfr: req.body.m2imvfrr || '',
        m2imvff: req.body.m2imvfff || '',

        m2imvpv: req.body.m2imvpvv || '',
        m2imvpl: req.body.m2imvpll || '',
        m2imvpr: req.body.m2imvprr || '',
        m2imvpf: req.body.m2imvpff || '',

        m2itfv: req.body.m2itfvv || '',
        m2itfl: req.body.m2itfll || '',
        m2itfr: req.body.m2itfrr || '',
        m2itff: req.body.m2itfff || '',

        m2iehv: req.body.m2iehvv || '',
        m2iehl: req.body.m2iehll || '',
        m2iehr: req.body.m2iehrr || '',
        m2iehf: req.body.m2iehff || '',

        m2itov: req.body.m2itovv || '',
        m2itol: req.body.m2itoll || '',
        m2itor: req.body.m2itorr || '',
        m2itof: req.body.m2itoff || '',

        m2iccv: req.body.m2iccvv || '',
        m2iccl: req.body.m2iccll || '',
        m2iccr: req.body.m2iccrr || '',
        m2iccf: req.body.m2iccff || '',

        //Acabados a Carcasa

        m1ipri: req.body.m1iprii || '',
        m1ialu: req.body.m1ialuu || '',
        m1itra: req.body.m1itraa || '',

        m1dpri: req.body.m1dprii || '',
        m1dalu: req.body.m1daluu || '',
        m1dtra: req.body.m1dtraa || '',

        m2ipri: req.body.m2iprii || '',
        m2ialu: req.body.m2ialuu || '',
        m2itra: req.body.m2itraa || '',

        m2dpri: req.body.m2dprii || '',
        m2dalu: req.body.m2daluu || '',
        m2dtra: req.body.m2dtraa || '',

        obs2: req.body.obs22 || '',
        
        //-------------------------------

    }
    await memaM37.findByIdAndUpdate(id, { $set: mema_M37}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M37.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM37.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M37.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM37.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M37.getAllmema_M37TypeM = async (req, res) => {
    const memam37 = await memaM37.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam37)
    };

    mema_M37.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM37New = {
        historyFile: req.body.historyFile || []
    }
    await memaM37.findByIdAndUpdate(id, { $set: historymemaM37New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M37.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam37 = await memaM37.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam37)
    }

    mema_M37.createmema_M37TypeM = async (req, res) => {
    const memam37 = new memaM37(req.body)

    await memam37.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M37;
