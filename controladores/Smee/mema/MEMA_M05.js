
const memaM05 = require('../../../models/smee/mema/MEMA_M05');

const mema_M05 = {};
//Metodos
// Obtiene todos los empleados
mema_M05.getmema_M05Data = async (req, res)=>{
    const {id} = req.params;

    const memam05 = await memaM05.findById(id)
    res.json(memam05)
}

// Editar un documento
mema_M05.editmema_M05Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM05 = {
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
        //----------------------------

        bav: req.body.bavv || '',
        bal: req.body.ball || '',
        bar: req.body.barr || '',
        baf: req.body.baff || '',

        cmv: req.body.cmvv || '',
        cml: req.body.cmll || '',
        cmr: req.body.cmrr || '',
        cmf: req.body.cmff || '',

        csv: req.body.csvv || '',
        csl: req.body.csll || '',
        csr: req.body.csrr || '',
        csf: req.body.csff || '',

        civ: req.body.civv || '',
        cil: req.body.cill || '',
        cir: req.body.cirr || '',
        cif: req.body.ciff || '',

        cizqv: req.body.cizqvv || '',
        cizql: req.body.cizqll || '',
        cizqr: req.body.cizqrr || '',
        cizqf: req.body.cizqff || '',

        cderv: req.body.cdervv || '',
        cderl: req.body.cderll || '',
        cderr: req.body.cderrr || '',
        cderf: req.body.cderff || '',

        cav: req.body.cavv || '',
        cal: req.body.call || '',
        car: req.body.carr || '',
        caf: req.body.caff || '',

        cgv: req.body.cgvv || '',
        cgl: req.body.cgll || '',
        cgr: req.body.cgrr || '',
        cgf: req.body.cgff || '',

        bamv: req.body.bamvv || '',
        baml: req.body.bamll || '',
        bamr: req.body.bamrr || '',
        bamf: req.body.bamff || '',

        gcsv: req.body.gcsvv || '',
        gcsl: req.body.gcsll || '',
        gcsr: req.body.gcsrr || '',
        gcsf: req.body.gcsff || '',

        torv: req.body.torvv || '',
        torl: req.body.torll || '',
        torr: req.body.torrr || '',
        torf: req.body.torff || '',

        obs2: req.body.obs22 || '',
        
        //Disipador

        adv: req.body.advv || '',
        adl: req.body.adll || '',
        adr: req.body.adrr || '',
        adf: req.body.adff || '',

        tdv: req.body.tdvv || '',
        tdl: req.body.tdll || '',
        tdr: req.body.tdrr || '',
        tdf: req.body.tdff || '',

        pv: req.body.pvv || '',
        pl: req.body.pll || '',
        pr: req.body.prr || '',
        pf: req.body.pff || '',

        idv: req.body.idvv || '',
        idl: req.body.idll || '',
        idr: req.body.idrr || '',
        idf: req.body.idff || '',

        adev: req.body.adevv || '',
        adel: req.body.adell || '',
        ader: req.body.aderr || '',
        adef: req.body.adeff || '',

        apov: req.body.apovv || '',
        apol: req.body.apoll || '',
        apor: req.body.aporr || '',
        apof: req.body.apoff || '',

        cv: req.body.cvv || '',
        cl: req.body.cll || '',
        cr: req.body.crr || '',
        cf: req.body.cff || '',

        pgfv: req.body.pgfvv || '',
        pgfl: req.body.pgfll || '',
        pgfr: req.body.pgfrr || '',
        pgff: req.body.pgfff || '',

        pgpv: req.body.pgpvv || '',
        pgpl: req.body.pgpll || '',
        pgpr: req.body.pgprr || '',
        pgpf: req.body.pgpff || '',

        env: req.body.envv || '',
        enl: req.body.enll || '',
        enr: req.body.enrr || '',
        enf: req.body.enff || '',

        plv: req.body.plvv || '',
        pll: req.body.plll || '',
        plr: req.body.plrr || '',
        plf: req.body.plff || '',

        imv: req.body.imvv || '',
        iml: req.body.imll || '',
        imr: req.body.imrr || '',
        imf: req.body.imff || '',

        rsfv: req.body.rsfvv || '',
        rsfl: req.body.rsfll || '',
        rsfr: req.body.rsfrr || '',
        rsff: req.body.rsfff || '',

        tsfv: req.body.tsfvv || '',
        tsfl: req.body.tsfll || '',
        tsfr: req.body.tsfrr || '',
        tsff: req.body.tsfff || '',

        vav: req.body.vavv || '',
        val: req.body.vall || '',
        var: req.body.varr || '',
        vaf: req.body.vaff || '',

        mderv: req.body.mdervv || '',
        mderl: req.body.mderll || '',
        mderr: req.body.mderrr || '',
        mderf: req.body.mderff || '',

        mizqv: req.body.mizqvv || '',
        mizql: req.body.mizqll || '',
        mizqr: req.body.mizqrr || '',
        mizqf: req.body.mizqff || '',

        sov: req.body.sovv || '',
        sol: req.body.soll || '',
        sor: req.body.sorr || '',
        sof: req.body.soff || '',

        pfiv: req.body.pfivv || '',
        pfil: req.body.pfill || '',
        pfir: req.body.pfirr || '',
        pfif: req.body.pfiff || '',

        tbv: req.body.tbvv || '',
        tbl: req.body.tbll || '',
        tbr: req.body.tbrr || '',
        tbf: req.body.tbff || '',

        obs3: req.body.obs33 || '',

        //Camara de Soplado

        pcsv: req.body.pcsvv || '',
        pcsl: req.body.pcsll || '',
        pcsr: req.body.pcsrr || '',
        pcsf: req.body.pcsff || '',

        dv: req.body.dvv || '',
        dl: req.body.dll || '',
        dr: req.body.drr || '',
        df: req.body.dff || '',

        dcsv: req.body.dcsvv || '',
        dcsl: req.body.dcsll || '',
        dcsr: req.body.dcsrr || '',
        dcsf: req.body.dcsff || '',

        dsv: req.body.dsvv || '',
        dsl: req.body.dsll || '',
        dsr: req.body.dsrr || '',
        dsf: req.body.dsff || '',

        psv: req.body.psvv || '',
        psl: req.body.psll || '',
        psr: req.body.psrr || '',
        psf: req.body.psff || '',

        cs1v: req.body.cs1vv || '',
        cs1l: req.body.cs1ll || '',
        cs1r: req.body.cs1rr || '',
        cs1f: req.body.cs1ff || '',

        cov: req.body.covv || '',
        col: req.body.coll || '',
        cor: req.body.corr || '',
        cof: req.body.coff || '',

        vrv: req.body.vrvv || '',
        vrl: req.body.vrll || '',
        vrr: req.body.vrrr || '',
        vrf: req.body.vrff || '',

        tfv: req.body.tfvv || '',
        tfl: req.body.tfll || '',
        tfr: req.body.tfrr || '',
        tff: req.body.tfff || '',

        //Contactos auxiliares

        coauxv: req.body.coauxvv || '',
        coauxl: req.body.coauxll || '',
        coauxr: req.body.coauxrr || '',
        coauxf: req.body.coauxff || '',

        aauxv: req.body.aauxvv || '',
        aauxl: req.body.aauxll || '',
        aauxr: req.body.aauxrr || '',
        aauxf: req.body.aauxff || '',

        vasv: req.body.vasvv || '',
        vasl: req.body.vasll || '',
        vasr: req.body.vasrr || '',
        vasf: req.body.vasff || '',

        palv: req.body.palvv || '',
        pall: req.body.palll || '',
        palr: req.body.palrr || '',
        palf: req.body.palff || '',

        tiv: req.body.tivv || '',
        til: req.body.till || '',
        tir: req.body.tirr || '',
        tif: req.body.tiff || '',

        plav: req.body.plavv || '',
        plal: req.body.plall || '',
        plar: req.body.plarr || '',
        plaf: req.body.plaff || '',

        muv: req.body.muvv || '',
        mul: req.body.mull || '',
        mur: req.body.murr || '',
        muf: req.body.muff || '',

        pg11v: req.body.pg11vv || '',
        pg11l: req.body.pg11ll || '',
        pg11r: req.body.pg11rr || '',
        pg11f: req.body.pg11ff || '',

        plaisv: req.body.plaisvv || '',
        plaisl: req.body.plaisll || '',
        plaisr: req.body.plaisrr || '',
        plaisf: req.body.plaisff || '',

        tov: req.body.tovv || '',
        tol: req.body.toll || '',
        tor: req.body.torr || '',
        tof: req.body.toff || '',

        //Dispositivo de cierre

        adcv: req.body.adcvv || '',
        adcl: req.body.adcll || '',
        adcr: req.body.adcrr || '',
        adcf: req.body.adcff || '',

        tdcv: req.body.tdcvv || '',
        tdcl: req.body.tdcll || '',
        tdcr: req.body.tdcrr || '',
        tdcf: req.body.tdcff || '',

        bctmv: req.body.bctmvv || '',
        bctml: req.body.bctmll || '',
        bctmr: req.body.bctmrr || '',
        bctmf: req.body.bctmff || '',

        hsbtv: req.body.hsbtvv || '',
        hsbtl: req.body.hsbtll || '',
        hsbtr: req.body.hsbtrr || '',
        hsbtf: req.body.hsbtff || '',

        vastagov: req.body.vastagovv || '',
        vastagol: req.body.vastagoll || '',
        vastagor: req.body.vastagorr || '',
        vastagof: req.body.vastagoff || '',

        horv: req.body.horvv || '',
        horl: req.body.horll || '',
        horr: req.body.horrr || '',
        horf: req.body.horff || '',

        pfrv: req.body.pfrvv || '',
        pfrl: req.body.pfrll || '',
        pfrr: req.body.pfrrr || '',
        pfrf: req.body.pfrff || '',

        ciliv: req.body.cilivv || '',
        cilil: req.body.cilill || '',
        cilir: req.body.cilirr || '',
        cilif: req.body.ciliff || '',

        murev: req.body.murevv || '',
        murel: req.body.murell || '',
        murer: req.body.murerr || '',
        muref: req.body.mureff || '',

        mhorv: req.body.mhorvv || '',
        mhorl: req.body.mhorll || '',
        mhorr: req.body.mhorrr || '',
        mhorf: req.body.mhorff || '',

        cnmv: req.body.cnmvv || '',
        cnml: req.body.cnmll || '',
        cnmr: req.body.cnmrr || '',
        cnmf: req.body.cnmff || '',

        soportev: req.body.soportevv || '',
        soportel: req.body.soportell || '',
        soporter: req.body.soporterr || '',
        soportef: req.body.soporteff || '',

        sbzv: req.body.sbzvv || '',
        sbzl: req.body.sbzll || '',
        sbzr: req.body.sbzrr || '',
        sbzf: req.body.sbzff || '',

        plpostv: req.body.plpostvv || '',
        plpostl: req.body.plpostll || '',
        plpostr: req.body.plpostrr || '',
        plpostf: req.body.plpostff || '',
        
        obs4: req.body.obs44 || '',


        //-----------------------------
    }
    await memaM05.findByIdAndUpdate(id, { $set: mema_M05}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M05.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM05.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M05.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM05.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M05.getAllmema_M05TypeM = async (req, res) => {
    const memam05 = await memaM05.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam05)
};

mema_M05.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM05New = {
        historyFile: req.body.historyFile || []
    }
    await memaM05.findByIdAndUpdate(id, { $set: historymemaM05New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M05.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam05 = await memaM05.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam05)
}

mema_M05.createmema_M05TypeM = async (req, res) => {
    const memam05 = new memaM05(req.body)
    
    await memam05.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M05;