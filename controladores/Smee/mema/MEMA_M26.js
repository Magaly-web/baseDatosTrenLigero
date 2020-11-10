
const memaM26 = require('../../../models/smee/mema/MEMA_M26');

const mema_M26 = {};
//Metodos
// Obtiene todos los empleados
mema_M26.getmema_M26Data = async (req, res)=>{
    const {id} = req.params;

    const memam26 = await memaM26.findById(id)
    res.json(memam26)
}

// Editar un documento
mema_M26.editmema_M26Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM26 = {
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

        //Grupo de Relevadores
        recl: req.body.recll || '',
        recd: req.body.recdd || '',
        recr: req.body.recrr || '',
        recf: req.body.recff || '',

        rcml: req.body.rcmll || '',
        rcmd: req.body.rcmdd || '',
        rcmr: req.body.rcmrr || '',
        rcmf: req.body.rcmff || '',

        //Borneros Conectores y Cableado
        
        c56if: req.body.c56iif || '',
        c56l: req.body.c56ll || '',
        c56f: req.body.c56ff || '',

        c57if: req.body.c57iif || '',
        c57l: req.body.c57ll || '',
        c57f: req.body.c57ff || '',

        c58if: req.body.c58iif || '',
        c58l: req.body.c58ll || '',
        c58f: req.body.c58ff || '',

        c59if: req.body.c59iif || '',
        c59l: req.body.c59ll || '',
        c59f: req.body.c59ff || '',

        c60if: req.body.c60iif || '',
        c60l: req.body.c60ll || '',
        c60f: req.body.c60ff || '',

        c61if: req.body.c61iif || '',
        c61l: req.body.c61ll || '',
        c61f: req.body.c61ff || '',

        bc99if: req.body.bc99iif || '',
        bc99l: req.body.bc99ll || '',
        bc99f: req.body.bc99ff || '',

        tcif: req.body.tciif || '',
        tcl: req.body.tcll || '',
        tcf: req.body.tcff || '',

        acif: req.body.aciif || '',
        acl: req.body.acll || '',
        acf: req.body.acff || '',

        //Grupo de fusibles cofre 1

        pol: req.body.poll || '',
        por: req.body.porr || '',

        cofa: req.body.cofaa || '',
        col: req.body.coll || '',
        cor: req.body.cor || '',

        cefa: req.body.cefaa || '',
        cel: req.body.cell || '',
        cer: req.body.cer || '',

        ups1fa: req.body.ups1faa || '',
        ups1l: req.body.ups1ll || '',
        ups1r: req.body.ups1r || '',

        ups2fa: req.body.ups2faa || '',
        ups2l: req.body.ups2ll || '',
        ups2r: req.body.ups2r || '',

        ups3fa: req.body.ups3faa || '',
        ups3l: req.body.ups3ll || '',
        ups3r: req.body.ups3r || '',

        eafa: req.body.eafaa || '',
        eal: req.body.eall || '',
        ear: req.body.ear || '',

        capfa: req.body.capfaa || '',
        capl: req.body.capll || '',
        capr: req.body.capr || '',

        ftbfa: req.body.ftbfaa || '',
        ftbl: req.body.ftbll || '',
        ftbr: req.body.ftbr || '',

        obs2: req.body.obs22 || '',

        //Diodos de freno Magnetico

        cfm1dl: req.body.cfm1dll || '',
        cfm1dif: req.body.cfm1diif || '',
        cfm1dp: req.body.cfm1dpp || '',

        cfm1il: req.body.cfm1ill || '',
        cfm1iif: req.body.cfm1iiif || '',
        cfm1ip: req.body.cfm1ipp || '',

        cfm2dl: req.body.cfm2dll || '',
        cfm2dif: req.body.cfm2diif || '',
        cfm2dp: req.body.cfm2dpp || '',

        cfm2il: req.body.cfm2ill || '',
        cfm2iif: req.body.cfm2iiif || '',
        cfm2ip: req.body.cfm2ipp || '',

        cfm3dl: req.body.cfm3dll || '',
        cfm3dif: req.body.cfm3diif || '',
        cfm3dp: req.body.cfm3dpp || '',

        cfm3il: req.body.cfm3ill || '',
        cfm3iif: req.body.cfm3iiif || '',
        cfm3ip: req.body.cfm3ipp || '',

        //Contactores cofre

        cfm1if: req.body.cfm1iif || '',
        cfm1l: req.body.cfm1ll || '',
        cfm1cf: req.body.cfm1cff || '',
        cfm1cm: req.body.cfm1cmm || '',
        cfm1b: req.body.cfm1bb || '',
        cfm1r: req.body.cfm1rr || '',

        cfm2if: req.body.cfm2iif || '',
        cfm2l: req.body.cfm2ll || '',
        cfm2cf: req.body.cfm2cff || '',
        cfm2cm: req.body.cfm2cmm || '',
        cfm2b: req.body.cfm2bb || '',
        cfm2r: req.body.cfm2rr || '',

        cfm3if: req.body.cfm3iif || '',
        cfm3l: req.body.cfm3ll || '',
        cfm3cf: req.body.cfm3cff || '',
        cfm3cm: req.body.cfm3cmm || '',
        cfm3b: req.body.cfm3bb || '',
        cfm3r: req.body.cfm3rr || '',

        cmcif: req.body.cmciif || '',
        cmcl: req.body.cmcll || '',
        cmccf: req.body.cmccff || '',
        cmccm: req.body.cmccmm || '',
        cmcb: req.body.cmcbb || '',
        cmcr: req.body.cmcrr || '',

        //Contactor preparacion
        cpml: req.body.cpmll || '',
        cpmif: req.body.cpmiif || '',
        cpmo: req.body.cpmoo || '',

        obs3: req.body.obs33 || '',

        //Interruptor termomagnetico

        itcal: req.body.itcall || '',
        itcaif: req.body.itcaiif || '',
        itcasb: req.body.itcasbb || '',
        itcarsi: req.body.itcarsii || '',
        itcasbe: req.body.itcasbee || '',
        itcasbc: req.body.itcasbcc || '',

        //Resistencia de aislamiento

        icfa: req.body.icfaa || '',
        icfb: req.body.icfbb || '',
        icfc: req.body.icfcc || '',

        //Resistencia de aislamiento
        iafa: req.body.iafaa || '',
        iafb: req.body.iafbb || '',
        iafc: req.body.iafcc || '',

        //Resistencia de contatos

        ic2fa: req.body.ic2faa || '',
        ic2fb: req.body.ic2fbb || '',
        ic2fc: req.body.ic2fcc || '',

        obs4: req.body.obs44 || '',

        //Revelador bimetalico
        csrif: req.body.csriff || '',
        csrl: req.body.csrll || '',
        csrr: req.body.csrrr || '',
        csro: req.body.csroo || '',

        tstif: req.body.tstiff || '',
        tstl: req.body.tstll || '',
        tstr: req.body.tstrr || '',
        tsto: req.body.tstoo || '',

        ftif: req.body.ftiff || '',
        ftl: req.body.ftll || '',
        ftr: req.body.ftrr || '',
        fto: req.body.ftoo || '',

        taiif: req.body.taiiff || '',
        tail: req.body.taill || '',
        tair: req.body.tairr || '',
        taio: req.body.taioo || '',

        brbif: req.body.brbiff || '',
        brbl: req.body.brbll || '',
        brbr: req.body.brbrr || '',
        brbo: req.body.brboo || '',

        brcaif: req.body.brcaiff || '',
        brcal: req.body.brcall || '',
        brcar: req.body.brcarr || '',
        brcao: req.body.brcaoo || '',

        //Selector Aislador
        sacpl: req.body.sacpll || '',
        sacpif: req.body.sacpi || '',
        sacpnc: req.body.sacpncc || '',
        sacpo: req.body.sacpoo || '',

        obs5: req.body.obs55 || '',

        //Unidad programable
        bateriaif: req.body.bateriai || '',
        baterial: req.body.bateriall || '',
        bateriar: req.body.bateriarr || '',

        smeif: req.body.smei || '',
        smel: req.body.smell || '',
        smer: req.body.smerr || '',

        smoif: req.body.smoi || '',
        smol: req.body.smoll || '',
        smor: req.body.smorr || '',

        seyaif: req.body.seyai || '',
        seyal: req.body.seyall || '',
        seyar: req.body.seyarr || '',

        ieblif: req.body.iebli || '',
        iebll: req.body.ieblll || '',
        ieblr: req.body.ieblrr || '',

        imoslif: req.body.imosli || '',
        imosll: req.body.imoslll || '',
        imoslr: req.body.imoslrr || '',

        imorlif: req.body.imorli || '',
        imorll: req.body.imorlll || '',
        imorlr: req.body.imorlrr || '',

        sodijif: req.body.sodiji || '',
        sodijl: req.body.sodijll || '',
        sodijr: req.body.sodijrr || '',

        //Modulos de interface
        db15ine: req.body.db15inee || '',
        db15oute: req.body.db15outee || '',
        intere: req.body.interee || '',
        sopte: req.body.soptee || '',

        db15ins: req.body.db15inss || '',
        db15outs: req.body.db15outss || '',
        inters: req.body.interss || '',
        sopts: req.body.soptss || '',

        //cable
        db15m: req.body.db15mm || '',
        db15h: req.body.db15hh || '',
        cable: req.body.cable || '',

        //Unidad programable de servicios

        me1v: req.body.me1vv || '',
        me1cb: req.body.me1cbb || '',
        me1cc: req.body.me1ccc || '',
        me1tf: req.body.me1tff || '',
        me1is: req.body.me1iss || '',
        me1ip: req.body.me1ipp || '',

        me2v: req.body.me2vv || '',
        me2cb: req.body.me2cbb || '',
        me2cc: req.body.me2ccc || '',
        me2tf: req.body.me2tff || '',
        me2is: req.body.me2iss || '',
        me2ip: req.body.me2ipp || '',

        me3v: req.body.me3vv || '',
        me3cb: req.body.me3cbb || '',
        me3cc: req.body.me3ccc || '',
        me3tf: req.body.me3tff || '',
        me3is: req.body.me3iss || '',
        me3ip: req.body.me3ipp || '',

        me4v: req.body.me4vv || '',
        me4cb: req.body.me4cbb || '',
        me4cc: req.body.me4ccc || '',
        me4tf: req.body.me4tff || '',
        me4is: req.body.me4iss || '',
        me4ip: req.body.me4ipp || '',

        me5v: req.body.me5vv || '',
        me5cb: req.body.me5cbb || '',
        me5cc: req.body.me5ccc || '',
        me5tf: req.body.me5tff || '',
        me5is: req.body.me5iss || '',
        me5ip: req.body.me5ipp || '',

        me6v: req.body.me6vv || '',
        me6cb: req.body.me6cbb || '',
        me6cc: req.body.me6ccc || '',
        me6tf: req.body.me6tff || '',
        me6is: req.body.me6iss || '',
        me6ip: req.body.me6ipp || '',

        ms1v: req.body.ms1vv || '',
        ms1cb: req.body.ms1cbb || '',
        ms1cc: req.body.ms1ccc || '',
        ms1tf: req.body.ms1tff || '',
        ms1is: req.body.ms1iss || '',
        ms1ip: req.body.ms1ipp || '',

        ms2v: req.body.ms2vv || '',
        ms2cb: req.body.ms2cbb || '',
        ms2cc: req.body.ms2ccc || '',
        ms2tf: req.body.ms2tff || '',
        ms2is: req.body.ms2iss || '',
        ms2ip: req.body.ms2ipp || '',

        ms3v: req.body.ms3vv || '',
        ms3cb: req.body.ms3cbb || '',
        ms3cc: req.body.ms3ccc || '',
        ms3tf: req.body.ms3tff || '',
        ms3is: req.body.ms3iss || '',
        ms3ip: req.body.ms3ipp || '',

        ms4v: req.body.ms4vv || '',
        ms4cb: req.body.ms4cbb || '',
        ms4cc: req.body.ms4ccc || '',
        ms4tf: req.body.ms4tff || '',
        ms4is: req.body.ms4iss || '',
        ms4ip: req.body.ms4ipp || '',

        ms5v: req.body.ms5vv || '',
        ms5cb: req.body.ms5cbb || '',
        ms5cc: req.body.ms5ccc || '',
        ms5tf: req.body.ms5tff || '',
        ms5is: req.body.ms5iss || '',
        ms5ip: req.body.ms5ipp || '',

        ms6v: req.body.ms6vv || '',
        ms6cb: req.body.ms6cbb || '',
        ms6cc: req.body.ms6ccc || '',
        ms6tf: req.body.ms6tff || '',
        ms6is: req.body.ms6iss || '',
        ms6ip: req.body.ms6ipp || '',

        ms7v: req.body.ms7vv || '',
        ms7cb: req.body.ms7cbb || '',
        ms7cc: req.body.ms7ccc || '',
        ms7tf: req.body.ms7tff || '',
        ms7is: req.body.ms7iss || '',
        ms7ip: req.body.ms7ipp || '',

        ms8v: req.body.ms8vv || '',
        ms8cb: req.body.ms8cbb || '',
        ms8cc: req.body.ms8ccc || '',
        ms8tf: req.body.ms8tff || '',
        ms8is: req.body.ms8iss || '',
        ms8ip: req.body.ms8ipp || '',

        obs6: req.body.obs66 || '',

        //-------------------------------

    }
    await memaM26.findByIdAndUpdate(id, { $set: mema_M26}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M26.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM26.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M26.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM26.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M26.getAllmema_M26TypeM = async (req, res) => {
    const memam26 = await memaM26.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam26)
    };

    mema_M26.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM26New = {
        historyFile: req.body.historyFile || []
    }
    await memaM26.findByIdAndUpdate(id, { $set: historymemaM26New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M26.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam26 = await memaM26.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam26)
    }

    mema_M26.createmema_M26TypeM = async (req, res) => {
    const memam26 = new memaM26(req.body)

    await memam26.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M26;
