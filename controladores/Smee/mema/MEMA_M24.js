
const memaM24 = require('../../../models/smee/mema/MEMA_M24');

const mema_M24 = {};
//Metodos
// Obtiene todos los empleados
mema_M24.getmema_M24Data = async (req, res)=>{
    const {id} = req.params;

    const memam24 = await memaM24.findById(id)
    res.json(memam24)
}

// Editar un documento
mema_M24.editmema_M24Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }


    const memaM24 = {
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

        //Cofre Cea
        ceacv: req.body.ceacvv || '',
        ceacl: req.body.ceacll || '',
        ceacr: req.body.ceacrr || '',
        ceacf: req.body.ceacff || '',

        ceadcv: req.body.ceadcvv || '',
        ceadcl: req.body.ceadcll || '',
        ceadcr: req.body.ceadcrr || '',
        ceadcf: req.body.ceadcff || '',

        ceatsv: req.body.ceatsvv || '',
        ceatsl: req.body.ceatsll || '',
        ceatsr: req.body.ceatsrr || '',
        ceatsf: req.body.ceatsff || '',

        ceatlv: req.body.ceatlvv || '',
        ceatll: req.body.ceatlll || '',
        ceatlr: req.body.ceatlrr || '',
        ceatlf: req.body.ceatlff || '',

        ceaspv: req.body.ceaspvv || '',
        ceaspl: req.body.ceaspll || '',
        ceaspr: req.body.ceasprr || '',
        ceaspf: req.body.ceaspff || '',

        //Voltaje y Corriente

        vcu01v: req.body.vcu01vv || '',
        vcu01l: req.body.vcu01ll || '',
        vcu01r: req.body.vcu01rr || '',
        vcu01f: req.body.vcu01ff || '',

        vcu02v: req.body.vcu02vv || '',
        vcu02l: req.body.vcu02ll || '',
        vcu02r: req.body.vcu02rr || '',
        vcu02f: req.body.vcu02ff || '',

        vcu03v: req.body.vcu03vv || '',
        vcu03l: req.body.vcu03ll || '',
        vcu03r: req.body.vcu03rr || '',
        vcu03f: req.body.vcu03ff || '',

        vct1t3v: req.body.vct1t3vv || '',
        vct1t3l: req.body.vct1t3ll || '',
        vct1t3r: req.body.vct1t3rr || '',
        vct1t3f: req.body.vct1t3ff || '',

        //Fuentes de voltaje y Corriente

        a20v: req.body.a20vv || '',
        a20l: req.body.a20ll || '',
        a20r: req.body.a20rr || '',
        a20f: req.body.a20ff || '',

        a21v: req.body.a21vv || '',
        a21l: req.body.a21ll || '',
        a21r: req.body.a21rr || '',
        a21f: req.body.a21ff || '',

        obs2: req.body.obs22 || '',

        //Semiconductores de Potencia

        d01v: req.body.d01vv || '',
        d01l: req.body.d01ll || '',
        d01r: req.body.d01rr || '',
        d01i: req.body.d01ii || '',

        d02v: req.body.d02vv || '',
        d02l: req.body.d02ll || '',
        d02r: req.body.d02rr || '',
        d02i: req.body.d02ii || '',

        d03v: req.body.d03vv || '',
        d03l: req.body.d03ll || '',
        d03r: req.body.d03rr || '',
        d03i: req.body.d03ii || '',

        d04v: req.body.d04vv || '',
        d04l: req.body.d04ll || '',
        d04r: req.body.d04rr || '',
        d04i: req.body.d04ii || '',

        d06v: req.body.d06vv || '',
        d06l: req.body.d06ll || '',
        d06r: req.body.d06rr || '',
        d06i: req.body.d06ii || '',

        d07v: req.body.d07vv || '',
        d07l: req.body.d07ll || '',
        d07r: req.body.d07rr || '',
        d07i: req.body.d07ii || '',

        d5152v: req.body.d5152vv || '',
        d5152l: req.body.d5152ll || '',
        d5152r: req.body.d5152rr || '',
        d5152i: req.body.d5152ii || '',

        d1112v: req.body.d1112vv || '',
        d1112l: req.body.d1112ll || '',
        d1112r: req.body.d1112rr || '',
        d1112i: req.body.d1112ii || '',

        d2122v: req.body.d2122vv || '',
        d2122l: req.body.d2122ll || '',
        d2122r: req.body.d2122rr || '',
        d2122i: req.body.d2122ii || '',

        d3132v: req.body.d3132vv || '',
        d3132l: req.body.d3132ll || '',
        d3132r: req.body.d3132rr || '',
        d3132i: req.body.d3132ii || '',

        th06v: req.body.th06vv || '',
        th06l: req.body.th06ll || '',
        th06r: req.body.th06rr || '',
        th06i: req.body.th06ii || '',

        th07v: req.body.th07vv || '',
        th07l: req.body.th07ll || '',
        th07r: req.body.th07rr || '',
        th07i: req.body.th07ii || '',

        th08v: req.body.th08vv || '',
        th08l: req.body.th08ll || '',
        th08r: req.body.th08rr || '',
        th08i: req.body.th08ii || '',

        th09v: req.body.th09vv || '',
        th09l: req.body.th09ll || '',
        th09r: req.body.th09rr || '',
        th09i: req.body.th09ii || '',

        th1112v: req.body.th1112vv || '',
        th1112l: req.body.th1112ll || '',
        th1112r: req.body.th1112rr || '',
        th1112i: req.body.th1112ii || '',

        th3132v: req.body.th3132vv || '',
        th3132l: req.body.th3132ll || '',
        th3132r: req.body.th3132rr || '',
        th3132i: req.body.th3132ii || '',

        th5152v: req.body.th5152vv || '',
        th5152l: req.body.th5152ll || '',
        th5152r: req.body.th5152rr || '',
        th5152i: req.body.th5152ii || '',

        //Tarjetas electronicas
        a01v: req.body.a01vv || '',
        a01l: req.body.a01ll || '',
        a01r: req.body.a01rr || '',
        a01tc: req.body.a01tcc || '',

        a02v: req.body.a02vv || '',
        a02l: req.body.a02ll || '',
        a02r: req.body.a02rr || '',
        a02tc: req.body.a02tcc || '',

        a03v: req.body.a03vv || '',
        a03l: req.body.a03ll || '',
        a03r: req.body.a03rr || '',
        a03tc: req.body.a03tcc || '',

        a04v: req.body.a04vv || '',
        a04l: req.body.a04ll || '',
        a04r: req.body.a04rr || '',
        a04tc: req.body.a04tcc || '',

        a06v: req.body.a06vv || '',
        a06l: req.body.a06ll || '',
        a06r: req.body.a06rr || '',
        a06tc: req.body.a06tcc || '',

        a07v: req.body.a07vv || '',
        a07l: req.body.a07ll || '',
        a07r: req.body.a07rr || '',
        a07tc: req.body.a07tcc || '',

        a08v: req.body.a08vv || '',
        a08l: req.body.a08ll || '',
        a08r: req.body.a08rr || '',
        a08tc: req.body.a08tcc || '',

        a09v: req.body.a09vv || '',
        a09l: req.body.a09ll || '',
        a09r: req.body.a09rr || '',
        a09tc: req.body.a09tcc || '',

        a1112v: req.body.a1112vv || '',
        a1112l: req.body.a1112ll || '',
        a1112r: req.body.a1112rr || '',
        a1112tc: req.body.a1112tcc || '',

        a3132v: req.body.a3132vv || '',
        a3132l: req.body.a3132ll || '',
        a3132r: req.body.a3132rr || '',
        a3132tc: req.body.a3132tcc || '',

        a5152v: req.body.a5152vv || '',
        a5152l: req.body.a5152ll || '',
        a5152r: req.body.a5152rr || '',
        a5152tc: req.body.a5152tcc || '',

        a10v: req.body.a10vv || '',
        a10l: req.body.a10ll || '',
        a10r: req.body.a10rr || '',
        a10tc: req.body.a10tcc || '',

        a15v: req.body.a15vv || '',
        a15l: req.body.a15ll || '',
        a15r: req.body.a15rr || '',
        a15tc: req.body.a15tcc || '',

        a16v: req.body.a16vv || '',
        a16l: req.body.a16ll || '',
        a16r: req.body.a16rr || '',
        a16tc: req.body.a16tcc || '',

        a22v: req.body.a22vv || '',
        a22l: req.body.a22ll || '',
        a22r: req.body.a22rr || '',
        a22tc: req.body.a22tcc || '',

        //Revision Componentes Electricos
        l01v: req.body.l01vv || '',
        l01l: req.body.l01ll || '',
        l01r: req.body.l01rr || '',
        l01p: req.body.l01pp || '',
        
        l02v: req.body.l02vv || '',
        l02l: req.body.l02ll || '',
        l02r: req.body.l02rr || '',
        l02p: req.body.l02pp || '',

        l03v: req.body.l03vv || '',
        l03l: req.body.l03ll || '',
        l03r: req.body.l03rr || '',
        l03p: req.body.l03pp || '',

        l04v: req.body.l04vv || '',
        l04l: req.body.l04ll || '',
        l04r: req.body.l04rr || '',
        l04p: req.body.l04pp || '',

        t4v: req.body.t4vv || '',
        t4l: req.body.t4ll || '',
        t4r: req.body.t4rr || '',
        t4p: req.body.t4pp || '',

        r01v: req.body.r01vv || '',
        r01l: req.body.r01ll || '',
        r01r: req.body.r01rr || '',
        r01p: req.body.r01pp || '',

        r02v: req.body.r02vv || '',
        r02l: req.body.r02ll || '',
        r02r: req.body.r02rr || '',
        r02p: req.body.r02pp || '',

        r03v: req.body.r03vv || '',
        r03l: req.body.r03ll || '',
        r03r: req.body.r03rr || '',
        r03p: req.body.r03pp || '',

        r04v: req.body.r04vv || '',
        r04l: req.body.r04ll || '',
        r04r: req.body.r04rr || '',
        r04p: req.body.r04pp || '',

        r05v: req.body.r05vv || '',
        r05l: req.body.r05ll || '',
        r05r: req.body.r05rr || '',
        r05p: req.body.r05pp || '',

        r06v: req.body.r06vv || '',
        r06l: req.body.r06ll || '',
        r06r: req.body.r06rr || '',
        r06p: req.body.r06pp || '',

        r07v: req.body.r07vv || '',
        r07l: req.body.r07ll || '',
        r07r: req.body.r07rr || '',
        r07p: req.body.r07pp || '',

        r08v: req.body.r08vv || '',
        r08l: req.body.r08ll || '',
        r08r: req.body.r08rr || '',
        r08p: req.body.r08pp || '',

        r09v: req.body.r09vv || '',
        r09l: req.body.r09ll || '',
        r09r: req.body.r09rr || '',
        r09p: req.body.r09pp || '',

        r10v: req.body.r10vv || '',
        r10l: req.body.r10ll || '',
        r10r: req.body.r10rr || '',
        r10p: req.body.r10pp || '',

        r11v: req.body.r11vv || '',
        r11l: req.body.r11ll || '',
        r11r: req.body.r11rr || '',
        r11p: req.body.r11pp || '',

        r121v: req.body.r121vv || '',
        r121l: req.body.r121ll || '',
        r121r: req.body.r121rr || '',
        r121p: req.body.r121pp || '',

        r122v: req.body.r122vv || '',
        r122l: req.body.r122ll || '',
        r122r: req.body.r122rr || '',
        r122p: req.body.r122pp || '',

        r13v: req.body.r13vv || '',
        r13l: req.body.r13ll || '',
        r13r: req.body.r13rr || '',
        r13p: req.body.r13pp || '',

        r14v: req.body.r14vv || '',
        r14l: req.body.r14ll || '',
        r14r: req.body.r14rr || '',
        r14p: req.body.r14pp || '',

        r15v: req.body.r15vv || '',
        r15l: req.body.r15ll || '',
        r15r: req.body.r15rr || '',
        r15p: req.body.r15pp || '',

        r16v: req.body.r16vv || '',
        r16l: req.body.r16ll || '',
        r16r: req.body.r16rr || '',
        r16p: req.body.r16pp || '',

        r17v: req.body.r17vv || '',
        r17l: req.body.r17ll || '',
        r17r: req.body.r17rr || '',
        r17p: req.body.r17pp || '',

        r18v: req.body.r18vv || '',
        r18l: req.body.r18ll || '',
        r18r: req.body.r18rr || '',
        r18p: req.body.r18pp || '',

        c01v: req.body.c01vv || '',
        c01l: req.body.c01ll || '',
        c01r: req.body.c01rr || '',
        c01p: req.body.c01pp || '',

        c02v: req.body.c02vv || '',
        c02l: req.body.c02ll || '',
        c02r: req.body.c02rr || '',
        c02p: req.body.c02pp || '',

        c03v: req.body.c03vv || '',
        c03l: req.body.c03ll || '',
        c03r: req.body.c03rr || '',
        c03p: req.body.c03pp || '',

        c04v: req.body.c04vv || '',
        c04l: req.body.c04ll || '',
        c04r: req.body.c04rr || '',
        c04p: req.body.c04pp || '',

        c05v: req.body.c05vv || '',
        c05l: req.body.c05ll || '',
        c05r: req.body.c05rr || '',
        c05p: req.body.c05pp || '',

        c06v: req.body.c06vv || '',
        c06l: req.body.c06ll || '',
        c06r: req.body.c06rr || '',
        c06p: req.body.c06pp || '',

        c07v: req.body.c07vv || '',
        c07l: req.body.c07ll || '',
        c07r: req.body.c07rr || '',
        c07p: req.body.c07pp || '',

        c08v: req.body.c08vv || '',
        c08l: req.body.c08ll || '',
        c08r: req.body.c08rr || '',
        c08p: req.body.c08pp || '',

        c09v: req.body.c09vv || '',
        c09l: req.body.c09ll || '',
        c09r: req.body.c09rr || '',
        c09p: req.body.c09pp || '',

        c10v: req.body.c10vv || '',
        c10l: req.body.c10ll || '',
        c10r: req.body.c10rr || '',
        c10p: req.body.c10pp || '',

        c11v: req.body.c11vv || '',
        c11l: req.body.c11ll || '',
        c11r: req.body.c11rr || '',
        c11p: req.body.c11pp || '',

        c12v: req.body.c12vv || '',
        c12l: req.body.c12ll || '',
        c12r: req.body.c12rr || '',
        c12p: req.body.c12pp || '',

        //Arnes de cofre

        cdcv: req.body.cdcvv || '',
        cdcl: req.body.cdcll || '',
        cdcr: req.body.cdcrr || '',
        cdcf: req.body.cdcff || '',
        
        catv: req.body.catvv || '',
        catl: req.body.catll || '',
        catr: req.body.catrr || '',
        catf: req.body.catff || '',

        obs3: req.body.obs33 || '',

        //-------------------------------

    }
    await memaM24.findByIdAndUpdate(id, { $set: mema_M24}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M24.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM24.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M24.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM24.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M24.getAllmema_M24TypeM = async (req, res) => {
    const memam24 = await memaM24.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam24)
    };

    mema_M24.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM24New = {
        historyFile: req.body.historyFile || []
    }
    await memaM24.findByIdAndUpdate(id, { $set: historymemaM24New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M24.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam24 = await memaM24.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam24)
    }

    mema_M24.createmema_M24TypeM = async (req, res) => {
    const memam24 = new memaM24(req.body)

    await memam24.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M24;
