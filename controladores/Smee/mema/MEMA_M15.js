
const memaM15 = require('../../../models/smee/mema/MEMA_M15');

const mema_M15 = {};
//Metodos
// Obtiene todos los empleados
mema_M15.getmema_M15Data = async (req, res)=>{
    const {id} = req.params;

    const memam15 = await memaM15.findById(id)
    res.json(memam15)
}

// Editar un documento
mema_M15.editmema_M15Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM15 = {
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
        //Grupo de relevadores frente de articulacion 1
        rap1l: req.body.rap1ll || '',
        rap1d: req.body.rap1dd || '',
        rap1r: req.body.rap1rr || '',
        rap1f: req.body.rap1ff || '',

        ran1l: req.body.ran1ll || '',
        ran1d: req.body.ran1dd || '',
        ran1r: req.body.ran1rr || '',
        ran1f: req.body.ran1ff || '',

        rvpl: req.body.rvpll || '',
        rvpd: req.body.rvpdd || '',
        rvpr: req.body.rvprr || '',
        rvpf: req.body.rvpff || '',

        r2kl: req.body.r2kll || '',
        r2kd: req.body.r2kdd || '',
        r2kr: req.body.r2krr || '',
        r2kf: req.body.r2kff || '',

        rccl: req.body.rccll || '',
        rccd: req.body.rccdd || '',
        rccr: req.body.rccrr || '',
        rccf: req.body.rccff || '',

        rafl: req.body.rafll || '',
        rafd: req.body.rafdd || '',
        rafr: req.body.rafrr || '',
        raff: req.body.rafff || '',

        rifl: req.body.rifll || '',
        rifd: req.body.rifdd || '',
        rifr: req.body.rifrr || '',
        riff: req.body.rifff || '',

        //Grupo de fusibles
        //gfvb1
        gfvb1pl: req.body.gfvb1pll || '',
        gfvb1pr: req.body.gfvb1prr || '',

        gfvb17fa: req.body.gfvb17faa || '',
        gfvb17fl: req.body.gfvb17fll || '',
        gfvb17fr: req.body.gfvb17frr || '',

        gfvb16fa: req.body.gfvb16faa || '',
        gfvb16fl: req.body.gfvb16fll || '',
        gfvb16fr: req.body.gfvb16frr || '',

        gfvb11fa: req.body.gfvb11faa || '',
        gfvb11fl: req.body.gfvb11fll || '',
        gfvb11fr: req.body.gfvb11frr || '',

        gfvb12fa: req.body.gfvb12faa || '',
        gfvb12fl: req.body.gfvb12fll || '',
        gfvb12fr: req.body.gfvb12frr || '',

        gfvb13fa: req.body.gfvb13faa || '',
        gfvb13fl: req.body.gfvb13fll || '',
        gfvb13fr: req.body.gfvb13frr || '',

        gfvb14fa: req.body.gfvb14faa || '',
        gfvb14fl: req.body.gfvb14fll || '',
        gfvb14fr: req.body.gfvb14frr || '',

        gfvb15fa: req.body.gfvb15faa || '',
        gfvb15fl: req.body.gfvb15fll || '',
        gfvb15fr: req.body.gfvb15frr || '',

        //gfbv2
        gfvb2pl: req.body.gfvb2pll || '',
        gfvb2pr: req.body.gfvb2prr || '',

        gfvb21fa: req.body.gfvb21faa || '',
        gfvb21fl: req.body.gfvb21fll || '',
        gfvb21fr: req.body.gfvb21frr || '',

        gfvb22fa: req.body.gfvb22faa || '',
        gfvb22fl: req.body.gfvb22fll || '',
        gfvb22fr: req.body.gfvb22frr || '',

        gfvb23fa: req.body.gfvb23faa || '',
        gfvb23fl: req.body.gfvb23fll || '',
        gfvb23fr: req.body.gfvb23frr || '',

        gfvb24fa: req.body.gfvb24faa || '',
        gfvb24fl: req.body.gfvb24fll || '',
        gfvb24fr: req.body.gfvb24frr || '',

        gfvb25fa: req.body.gfvb25faa || '',
        gfvb25fl: req.body.gfvb25fll || '',
        gfvb25fr: req.body.gfvb25frr || '',

        gfvb26fa: req.body.gfvb26faa || '',
        gfvb26fl: req.body.gfvb26fll || '',
        gfvb26fr: req.body.gfvb26frr || '',

        gfvb27fa: req.body.gfvb27faa || '',
        gfvb27fl: req.body.gfvb27fll || '',
        gfvb27fr: req.body.gfvb27frr || '',

        //gfba1
        gfba1pl: req.body.gfba1pll || '',
        gfba1pr: req.body.gfba1prr || '',

        gfba1fmfa: req.body.gfba1fmfaa || '',
        gfba1fml: req.body.gfba1fmll || '',
        gfba1fmr: req.body.gfba1fmrr || '',

        gfba1frfa: req.body.gfba1frfaa || '',
        gfba1frl: req.body.gfba1frll || '',
        gfba1frr: req.body.gfba1frrr || '',

        //gfba2

        gfba2pl: req.body.gfba2pll || '',
        gfba2pr: req.body.gfba2prr || '',

        gfba2flifa: req.body.gfba2flifaa || '',
        gfba2flil: req.body.gfba2flill || '',
        gfba2flir: req.body.gfba2flirr || '',

        gfba2ldfa: req.body.gfba2ldfaa || '',
        gfba2ldl: req.body.gfba2ldll || '',
        gfba2ldr: req.body.gfba2ldrr || '',

        gfba2ld2fa: req.body.gfba2ld2faa || '',
        gfba2ld2l: req.body.gfba2ld2ll || '',
        gfba2ld2r: req.body.gfba2ld2rr || '',

        gfba2ld3fa: req.body.gfba2ld3faa || '',
        gfba2ld3l: req.body.gfba2ld3ll || '',
        gfba2ld3r: req.body.gfba2ld3rr || '',

        gfba2flidfa: req.body.gfba2flidfaa || '',
        gfba2flidl: req.body.gfba2flidll || '',
        gfba2flidr: req.body.gfba2flidrr || '',

        gfba2fli2fa: req.body.gfba2fli2faa || '',
        gfba2fli2l: req.body.gfba2fli2ll || '',
        gfba2fli2r: req.body.gfba2fli2rr || '',

        gfba2fclfa: req.body.gfba2fclfaa || '',
        gfba2fcll: req.body.gfba2fclll || '',
        gfba2fclr: req.body.gfba2fclrr || '',

        //Modulos de conexion y cableado
        
        c14l: req.body.c14ll || '',
        c14v: req.body.c14vv || '',
        c14f: req.body.c14ff || '',

        c15l: req.body.c15ll || '',
        c15v: req.body.c15vv || '',
        c15f: req.body.c15ff || '',

        c16l: req.body.c16ll || '',
        c16v: req.body.c16vv || '',
        c16f: req.body.c16ff || '',

        c17l: req.body.c17ll || '',
        c17v: req.body.c17vv || '',
        c17f: req.body.c17ff || '',

        c18l: req.body.c18ll || '',
        c18v: req.body.c18vv || '',
        c18f: req.body.c18ff || '',

        c19l: req.body.c19ll || '',
        c19v: req.body.c19vv || '',
        c19f: req.body.c19ff || '',

        c20l: req.body.c20ll || '',
        c20v: req.body.c20vv || '',
        c20f: req.body.c20ff || '',

        clofl: req.body.clofll || '',
        clofv: req.body.clofvv || '',
        cloff: req.body.clofff || '', 
        
        bma1l: req.body.bma1ll || '',
        bma1v: req.body.bma1vv || '',
        bma1f: req.body.bma1ff || '',

        aal: req.body.aall || '',
        aav: req.body.aavv || '',
        aaf: req.body.aaff || '',

        //Bobinas para electrovalvula de puertas
        
        ecial: req.body.eciall || '',
        eciai: req.body.eciaii || '',
        eciar: req.body.eciarr || '',
        eciaf: req.body.eciaff || '',

        eaibl: req.body.eaibll || '',
        eaibi: req.body.eaibii || '',
        eaibr: req.body.eaibrr || '',
        eaibf: req.body.eaibff || '',

        ecdcl: req.body.ecdcll || '',
        ecdci: req.body.ecdcii || '',
        ecdcr: req.body.ecdcrr || '',
        ecdcf: req.body.ecdcff || '',

        eadhl: req.body.eadhll || '',
        eadhi: req.body.eadhii || '',
        eadhr: req.body.eadhrr || '',
        eadhf: req.body.eadhff || '',

        obs2: req.body.obs22 || '',
        
        //Frente de articulacion M2
        rcdl: req.body.rcdll || '',
        rcdd: req.body.rcddd || '',
        rcdr: req.body.rcdrr || '',
        rcdf: req.body.rcdff || '',

        rcil: req.body.rcill || '',
        rcid: req.body.rcidd || '',
        rcir: req.body.rcirr || '',
        rcif: req.body.rciff || '',

        radl: req.body.radll || '',
        radd: req.body.raddd || '',
        radr: req.body.radrr || '',
        radf: req.body.radff || '',

        rail: req.body.raill || '',
        raid: req.body.raidd || '',
        rair: req.body.rairr || '',
        raif: req.body.raiff || '',

        ran2l: req.body.ran2ll || '',
        ran2d: req.body.ran2dd || '',
        ran2r: req.body.ran2rr || '',
        ran2f: req.body.ran2ff || '',

        rap2l: req.body.rap2ll || '',
        rap2d: req.body.rap2dd || '',
        rap2r: req.body.rap2rr || '',
        rap2f: req.body.rap2ff || '',

        //Grupo de fusibles
        mp3l: req.body.mp3ll || '',
        mp3r: req.body.mp3rr || '',

        m83fa: req.body.m83faa || '',
        m83l: req.body.m83ll || '',
        m83r: req.body.m83rr || '',

        m93fa: req.body.m93faa || '',
        m93l: req.body.m93ll || '',
        m93r: req.body.m93rr || '',

        m103fa: req.body.m103faa || '',
        m103l: req.body.m103ll || '',
        m103r: req.body.m103rr || '',

        m113fa: req.body.m113faa || '',
        m113l: req.body.m113ll || '',
        m113r: req.body.m113rr || '',

        m123fa: req.body.m123faa || '',
        m123l: req.body.m123ll || '',
        m123r: req.body.m123rr || '',

        m133fa: req.body.m133faa || '',
        m133l: req.body.m133ll || '',
        m133r: req.body.m133rr || '',

        m143fa: req.body.m143faa || '',
        m143l: req.body.m143ll || '',
        m143r: req.body.m143rr || '',

        //gfbv4
        mp4l: req.body.mp4ll || '',
        mp4r: req.body.mp4rr || '',

        m84fa: req.body.m84faa || '',
        m84l: req.body.m84ll || '',
        m84r: req.body.m84rr || '',

        m94fa: req.body.m94faa || '',
        m94l: req.body.m94ll || '',
        m94r: req.body.m94rr || '',

        m104fa: req.body.m104faa || '',
        m104l: req.body.m104ll || '',
        m104r: req.body.m104rr || '',

        m114fa: req.body.m114faa || '',
        m114l: req.body.m114ll || '',
        m114r: req.body.m114rr || '',

        m124fa: req.body.m124faa || '',
        m124l: req.body.m124ll || '',
        m124r: req.body.m124rr || '',

        m134fa: req.body.m134faa || '',
        m134l: req.body.m134ll || '',
        m134r: req.body.m134rr || '',

        m144fa: req.body.m144faa || '',
        m144l: req.body.m144ll || '',
        m144r: req.body.m144rr || '',

        //Modulos de conexion

        c49l: req.body.c49ll || '',
        c49v: req.body.c49vv || '',
        c49f: req.body.c49ff || '',

        c50l: req.body.c50ll || '',
        c50v: req.body.c50vv || '',
        c50f: req.body.c50ff || '',

        c51l: req.body.c51ll || '',
        c51v: req.body.c51vv || '',
        c51f: req.body.c51ff || '',

        c52l: req.body.c52ll || '',
        c52v: req.body.c52vv || '',
        c52f: req.body.c52ff || '',

        c53l: req.body.c53ll || '',
        c53v: req.body.c53vv || '',
        c53f: req.body.c53ff || '',

        c54l: req.body.c54ll || '',
        c54v: req.body.c54vv || '',
        c54f: req.body.c54ff || '',

        c55l: req.body.c55ll || '',
        c55v: req.body.c55vv || '',
        c55f: req.body.c55ff || '',

        bmfa2l: req.body.bmfa2ll || '',
        bmfa2v: req.body.bmfa2vv || '',
        bmfa2f: req.body.bmfa2f || '',

        itml: req.body.itmll || '',
        itmv: req.body.itmvv || '',
        itmf: req.body.itmff || '',

        ararl: req.body.ararll || '',
        ararv: req.body.ararvv || '',
        ararf: req.body.ararff || '',

        //Bobinas para electrovalvula

        ecicl: req.body.ecicll || '',
        ecici: req.body.ecicii || '',
        ecicr: req.body.ecicrr || '',
        ecicf: req.body.ecicff || '',

        eaiel: req.body.eaiell || '',
        eaiei: req.body.eaieii || '',
        eaier: req.body.eaierr || '',
        eaief: req.body.eaieff || '',

        ecdbl: req.body.ecdbll || '',
        ecdbi: req.body.ecdbii || '',
        ecdbr: req.body.ecdbrr || '',
        ecdbf: req.body.ecdbff || '',

        eadhl: req.body.eadhll || '',
        eadhi: req.body.eadhii || '',
        eadhr: req.body.eadhrr || '',
        eadhf: req.body.eadhff || '',

        obs3: req.body.obs33 || '',
        

        //-------------------------------

    }
    await memaM15.findByIdAndUpdate(id, { $set: mema_M15}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M15.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM15.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M15.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM15.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M15.getAllmema_M15TypeM = async (req, res) => {
    const memam15 = await memaM15.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam15)
    };

    mema_M15.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM15New = {
        historyFile: req.body.historyFile || []
    }
    await memaM15.findByIdAndUpdate(id, { $set: historymemaM15New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M15.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam15 = await memaM15.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam15)
    }

    mema_M15.createmema_M15TypeM = async (req, res) => {
    const memam15 = new memaM15(req.body)

    await memam15.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M15;
