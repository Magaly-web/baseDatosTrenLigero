
    const mongoose = require('mongoose');
    const {Schema} = mongoose;
    
    const memaM05Schema = new Schema({
    
        trainModel: { type: String, required: true },//tren programado
        kilometraje: { type: Number },
        
        date_inicio: { type: String },
        date_termino: { type: String },
        
        dateultmant: { type: String },
        datepromant: { type: String },
    
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        obs1: String,

        //Ciruito principal
        bav: String,
        bal: String,
        bar: String,
        baf: String,
        
        cmv: String,
        cml: String,
        cmr: String,
        cmf: String,

        csv: String,
        csl: String,
        csr: String,
        csf: String,

        civ: String,
        cil: String,
        cir: String,
        cif: String,

        cizqv: String,
        cizql: String,
        cizqr: String,
        cizqf: String,

        cderv: String,
        cderl: String,
        cderr: String,
        cderf: String,

        cav: String,
        cal: String,
        car: String,
        caf: String,

        cgv: String,
        cgl: String,
        cgr: String,
        cgf: String,

        bamv: String,
        baml: String,
        bamr: String,
        bamf: String,

        gcsv: String,
        gcsl: String,
        gcsr: String,
        gcsf: String,

        torv: String,
        torl: String,
        torr: String,
        torf: String,

        obs2: String,

        //Disipador
        adv: String,
        adl: String,
        adr: String,
        adf: String,

        tdv: String,
        tdl: String,
        tdr: String,
        tdf: String,

        pv: String,
        pl: String,
        pr: String,
        pf: String,

        idv: String,
        idl: String,
        idr: String,
        idf: String,

        adev: String,
        adel: String,
        ader: String,
        adef: String,

        apov: String,
        apol: String,
        apor: String,
        apof: String,

        cv: String,
        cl: String,
        cr: String,
        cf: String,

        pgfv: String,
        pgfl: String,
        pgfr: String,
        pgff: String,

        pgpv: String,
        pgpl: String,
        pgpr: String,
        pgpf: String,
        
        env: String,
        enl: String,
        enr: String,
        enf: String,

        plv: String,
        pll: String,
        plr: String,
        plf: String,

        imv: String,
        iml: String,
        imr: String,
        imf: String,

        rsfv: String,
        rsfl: String,
        rsfr: String,
        rsff: String,

        tsfv: String,
        tsfl: String,
        tsfr: String,
        tsff: String,

        vav: String,
        val: String,
        var: String,
        vaf: String,

        mderv: String,
        mderl: String,
        mderr: String,
        mderf: String,

        mizqv: String,
        mizql: String,
        mizqr: String,
        mizqf: String,

        sov: String,
        sol: String,
        sor: String,
        sof: String,

        pfiv: String,
        pfil: String,
        pfir: String,
        pfif: String,

        tbv: String,
        tbl: String,
        tbr: String,
        tbf: String,
        
        obs3: String,

        //Camara de Soplado
        pcsv: String,
        pcsl: String,
        pcsr: String,
        pcsf: String,

        dv: String,
        dl: String,
        dr: String,
        df: String,

        dcsv: String,
        dcsl: String,
        dcsr: String,
        dcsf: String,

        dsv: String,
        dsl: String,
        dsr: String,
        dsf: String,

        psv: String,
        psl: String,
        psr: String,
        psf: String,

        cs1v: String,
        cs1l: String,
        cs1r: String,
        cs1f: String,
        
        cov: String,
        col: String,
        cor: String,
        cof: String,

        vrv: String,
        vrl: String,
        vrr: String,
        vrf: String,

        tfv: String,
        tfl: String,
        tfr: String,
        tff: String,

        //Contactos auxiliares

        coauxv: String,
        coauxl: String,
        coauxr: String,
        coauxf: String,
        
        aauxv: String,
        aauxl: String,
        aauxr: String,
        aauxf: String,

        vasv: String,
        vasl: String,
        vasr: String,
        vasf: String,

        palv: String,
        pall: String,
        palr: String,
        palf: String,

        tiv: String,
        til: String,
        tir: String,
        tif: String,

        plav:String,
        plal:String,
        plar:String,
        plaf:String,

        muv: String,
        mul: String,
        mur: String,
        muf: String,

        pg11v: String,
        pg11l: String,
        pg11r: String,
        pg11f: String,

        plaisv: String,
        plaisl: String,
        plaisr: String,
        plaisf: String,

        tov: String,
        tol: String,
        tor: String,
        tof: String,

        //Dispositivo de cierre
        
        adcv: String,
        adcl: String,
        adcr: String,
        adcf: String,

        tdcv: String,
        tdcl: String,
        tdcr: String,
        tdcf: String,

        bctmv: String,
        bctml: String,
        bctmr: String,
        bctmf: String,

        hsbtv: String,
        hsbtl: String,
        hsbtr: String,
        hsbtf: String,

        vastagov: String,
        vastagol: String,
        vastagor: String,
        vastagof: String,

        horv: String,
        horl: String,
        horr: String,
        horf: String,

        pfrv: String,
        pfrl: String,
        pfrr: String,
        pfrf: String,

        ciliv: String,
        cilil: String,
        cilir: String,
        cilif: String,

        murev: String,
        murel: String,
        murer: String,
        muref: String,

        mhorv: String,
        mhorl: String,
        mhorr: String,
        mhorf: String,

        cnmv: String,
        cnml: String,
        cnmr: String,
        cnmf: String,

        soportev: String,
        soportel: String,
        soporter: String,
        soportef: String,

        sbzv: String,
        sbzl: String,
        sbzr: String,
        sbzf: String,

        plpostv: String,
        plpostl: String,
        plpostr: String,
        plpostf: String,
        
        obs4: String,

    equipolUtilizado: {
        numberOfEquipo: Number,    
        arr: [{
            numberOfequ: String,
            marca: String,
            inv: String,
        }]
        },
    
       //Materiales
       materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
            unit: String
        }]
    },
    
    documentFormCurrentState: {
        approvalByWorker    : { id_worker: String, checked: Boolean },
        approvalBySupervisor: { id_worker: String, checked: Boolean },
        approvalByMannager  : { id_worker: String, checked: Boolean },
        loading: Boolean
    },
    historyFile: [
        {
            id_worker: String,
            workerName: String,
      
            editDate: Date,
            editValue: Number
        }
    ]
    
    });
    
    module.exports = mongoose.model('memaM05', memaM05Schema);
    
    
        
