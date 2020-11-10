'use strict'

var moment = require('moment');

var memeB01 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B01');
const MEME_B01 = {};

MEME_B01.getMEME_B01Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeB01.findById(id)
    res.json(maintenance)
};
MEME_B01.editMEME_B01Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MEME_B01 = {
        //date_created: req.body.data || '',
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
        modelo90: req.body.TE90 || '',
        modelo95: req.body.TE95 || '',

        //preparacion de material y pantografo
        //CMP/MP

        aEm1M1: req.body.alum1,
        aEm1M2: req.body.alum2,
        observacionesAE: req.body.obsAE,
        
        tAm1M1: req.body.tiemp,
        observacionestA: req.body.obstA,
        
        campm1M2: req.body.conv,
        observacionesCa: req.body.obsCa,
        
        cmpm1M1: req.body.comp,
        observacionesC: req.body.obsC,

        //N
        aEnm1M1: req.body.alumM1,
        cEnm1M2: req.body.alumM2,
        observacionesAe: req.body.obsAe,
        
        tDnm1M1: req.body.tiempM1,
        observacionesTd: req.body.obsTd,
        
        cAnm1M2: req.body.convAux,
        observacionesConv: req.body.obsConv,
        
        cnm1M1: req.body.compM1,
        observacionesCom: req.body.obsCom,
        
        //bajo bastidor
        //EN
        pAm1M1: req.body.pantM1,
        pAm2M1: req.body.pantM2,
        observacionesP: req.body.obsP,
        
        cAenm1M2: req.body.convCEAm1,
        cAenm2M2: req.body.convCEAm2,
        observacionesCaen: req.body.obsCaen,
        
        cenm1M2: req.body.compm1,
        cenm2M2: req.body.compm2,
        observacionesComp: req.body.obsComp,
        
        venm1M1: req.body.voltm1M1,
        venm1M2: req.body.voltm1M2,
        venm2M1: req.body.voltm2M1,
        venm2M2: req.body.voltm2M2,
        observacionesVol: req.body.obsVol,
        
        eENm1M1: req.body.elecm1M1,
        eENm1M2: req.body.elecm1M2,
        eENm2M1: req.body.elecm2M1,
        eENm2M2: req.body.elecm2M2,
        observacionesEi: req.body.obsEi,
        
        fenm1M1: req.body.fanm1M1,
        fenm1M2: req.body.fanm1M2,
        fenm2M1: req.body.fanm2M1,
        fenm2M2: req.body.fanm2M2,
        observacionesFt: req.body.obsFt,
        
        oenm1M1: req.body.oscilam1M1,
        oenm1M2: req.body.oscilam1M2,
        oenm2M1: req.body.oscilam2M1,
        oenm2M2: req.body.oscilam2M2,
        observacionesOa: req.body.obsOa,
        
        //AP
        pDm1M1: req.body.pantAscm1,
        pDm2M1: req.body.pantAscm2,
        observacionesPap: req.body.obsPap,
        
        cAapm1M2: req.body.convAm1,
        cAapm2M2: req.body.comvAm2,
        observacionesCaAp: req.body.obsCaAp,
        
        capm1M2: req.body.compm1M1,
        capm2M2: req.body.compm2M2,
        observacionesCap: req.body.obsCap,
        
        vapm1M1: req.body.volm1M1,
        vapm1M2: req.body.volm1M2,
        vapm2M1: req.body.volm2M1,
        vapm2M2: req.body.volm2M2,
        observacionesVap: req.body.obsVap,
        
        fapm1M1: req.body.fApm1M1,
        fapm1M2: req.body.fApm1M2,
        fapm2M1: req.body.fApm2M1,
        fapm2M2: req.body.fApm2M2,
        observacionesFap: req.body.obsFap,
        
        dOapm1M1: req.body.dejaOm1M1,
        dOapm1M2: req.body.dejaOm1M2,
        dOapm2M1: req.body.dejaOm2M1,
        dOapm2M2: req.body.dejaOm2M2,
        observacionesDoap: req.body.obsDoap,
        
        //tabique izquierdo
        //EN
        pAscm1M1: req.body.pantAscM1,
        pAscm2M1: req.body.pantAscM2,
        observacionesPasc: req.body.obsPasc,
        
        convm1M2: req.body.convFm1M1,
        convm2M2: req.body.convFm2M2,
        observacionesConvCEA: req.body.obsConvCEA,
        
        cFenm1M2: req.body.compFm1M2,
        cFenm2M2: req.body.compFm2M2,
        observacionesCfen: req.body.obsCfen,

        vFenm1M1: req.body.voltFm1M1,
        vFenm1M2: req.body.voltFm1M2,
        vFenm2M1: req.body.voltFm2M1,
        vFenm2M2: req.body.voltFm2M2,
        observacionesVfen: req.body.obsVfen,
        
        eIenm1M1: req.body.elecIm1M1,
        eIenm1M2: req.body.elecIm1M2,
        eIenm2M1: req.body.elecIm2M1,
        eIenm2M2: req.body.elecIm2M2,
        observacionesEien: req.body.obsEien,
        
        fTenm1M1: req.body.fanTm1M1,
        fTenm1M2: req.body.fanTm1M2,
        fTenm2M1: req.body.fanTm2M1,
        fTenm2M2: req.body.fanTm2M2,
        observacionesFten: req.body.obsFten,
        
        oAenm1M1: req.body.oscAm1M1,
        oAenm1M2: req.body.oscAm1M2,
        oAenm2M1: req.body.oscAm2M1,
        oAenm2M2: req.body.oscAm2M2,
        observacionesOaen: req.body.obsOaen,
        
        //AP
        pDapm1M1: req.body.pantDm1M1,
        pDapm2M1: req.body.pantDm2M1,
        observacionesPdap: req.body.obsPdap,
        
        convApm1M2: req.body.convOffm1M2,
        convApm2M2: req.body.convOffm2M2,
        observacionesConvAp: req.body.obsConvAp,
        
        compAapm1M2: req.body.compOffm1M2,
        compAapm2M2: req.body.compOffm2M2,
        observacionesCompAp: req.body.CompAp,
        
        vFapm1M1: req.body.voltOffm1M1,
        vFapm1M2: req.body.voltOffm1M2,
        vFapm2M1: req.body.voltOffm2M1,
        vFapm2M2: req.body.voltOffm2M2,
        observacionesVoltAp: req.body.obsVoltAp,
        
        fTapm1M1: req.body.fanOffm1M1,
        fTapm1M2: req.body.fanOffm1M2,
        fTapm2M1: req.body.fanOffm2M1,
        fTapm2M2: req.body.fanOffm2M2,
        observacionesFtap: req.body.obsFtap,
        
        dOAapm1M1: req.body.dejaOscm1M1,
        dOAapm1M2: req.body.dejaOscm1M2,
        dOAapm2M1: req.body.dejaOscm2M1,
        dOAapm2M2: req.body.dejaOscm2M2,
        observacionesDo: req.body.obsDo,

        //mandos 
        //llave "C" en conduccion
        torretam1M1: req.body.torretaFm1M1,
        torretam2M2: req.body.torretaFm2M2,
        observacionesT: req.body.obsT,

        timbrem1M1: req.body.timFm1M1,
        timbrem2M2: req.body.timFm2M2,
        observacionesTim: req.body.obsTim,

        ledMotm1M1: req.body.ledMm1M1,
        ledMotm2M2: req.body.ledMm2M2,
        observacionesLedMot: req.body.obsLedMot,

        ledCm1M1: req.body.ledCarroBloqm1M1,
        ledCm2M2: req.body.ledCarroBloqm2M2,
        observacionesLc: req.body.obsLc,

        velocimetrom1M1: req.body.velOnm1M1,
        velocimetrom2M2: req.body.velOnm2M2,
        observacionesVel: req.body.obsVel,
        
        bloqueSm1M1: req.body.bloqueSfm1M1,
        bloqueSm2M2: req.body.bloqueSfm2M2,
        observacionesB: req.body.obsB,

        equipom1M1: req.body.equipoSaeAm1M1,
        equipom2M2: req.body.equipoSaeAm2M2,
        observacionesE: req.body.obsE,

        fanalesAm1M1: req.body.fanAmbarm1M1,
        fanalesAm1M2: req.body.fanAmbarm1M2,
        fanalesAm2M1: req.body.fanAmbarm2M1,
        fanalesAm2M2: req.body.fanAmbarm2M2,
        observacionesF: req.body.obsF,

        fanalesRm1M1: req.body.fanRojosm1M1,
        fanalesRm1M2: req.body.fanRojosm1M2,
        fanalesRm2M1: req.body.fanRojosm2M1,
        fanalesRm2M2: req.body.fanRojosm2M2,
        observacionesR: req.body.obsR,

        //accionamiento de llave de manipulador posicion "1" y selector de marcha en adelante
        timbreFm1M1: req.body.timFrenm1M1,
        timbreFm2M2: req.body.timFrenm2M2,
        observacionesTf: req.body.obsTf,

        ledMotrizm1M1: req.body.ledMoffm1M1,
        ledMotrizm2M2: req.body.ledMoffm2M2,
        observacionesLedM: req.body.obsLedM,

        ledCarrom1M1: req.body.ledContm1M1,
        ledCarrom2M2: req.body.ledContm2M2,
        observacionesLedC: req.body.obsLedC,

        velocimetroCm1M1: req.body.velFm1M1,
        velocimetroCm2M2: req.body.velFm2M2,
        observacionesVelC: req.body.obsVelC,

        bloqueScm1M1: req.body.bloqueContm1M1,
        bloqueScm2M2: req.body.bloqueContm2M2,
        observacionesBs: req.body.obsBs,

        equipoSAEm1M1: req.body.equipoSaem1M1,
        equipoSAEm2M2: req.body.equipoSaem2M2,
        observacionesEs: req.body.obsEs,

        fanalesOnm1M1: req.body.fanTransm1M1,
        fanalesOnm1M2: req.body.fanTransm1M2,
        fanalesOnm2M1: req.body.fanTransm2M1,
        fanalesOnm2M2: req.body.fanTransm2M2,
        observacionesFon: req.body.obsFon,

        fanalesOffm1M1: req.body.fanRoffm1M1,
        fanalesOffm1M2: req.body.fanRoffm1M2,
        fanalesOffm2M1: req.body.fanRoffm2M1,
        fanalesOffm2M2: req.body.fanRoffm2M2,
        observacionesFoff: req.body.obsFoff,

        resistenciasm1M1: req.body.ventResm1M1,
        resistenciasm1M2: req.body.ventResm1M2,
        resistenciasm2M1: req.body.ventResm2M1,
        resistenciasm2M2: req.body.ventResm2M2,
        observacionesRes: req.body.obsRes,

        alumbradom1M1: req.body.alumm1M1,
        alumbradom2M2: req.body.alumm2M2,
        observacionesA: req.body.obsA,

        //SERVICIOS DE TREN
        //"KP" en derechas
        puertasIzqm1M1: req.body.ptaIzqm1M1,
        puertasIzqm1M2: req.body.ptaIzqm1M2,
        puertasIzqm2M1: req.body.ptaIzqm2M1,
        puertasIzqm2M2: req.body.ptaIzqm2M2,
        observacionesPtasIzq: req.body.obsPtasIzq,

        lamparasBotonerasm1M1: req.body.lampBm1M1,
        lamparasBotonerasm2M2: req.body.lampBm2M2,
        observacionesLb: req.body.obsLb,

        //BPA
        lamparasBotonm1M1: req.body.lampBotonm1M1,
        lamparasBotonm2M2: req.body.lampBotonm2M2,
        observacionesLboton: req.body.obsLboton,

        puertasDerm1M1: req.body.ptasDm1M1,
        puertasDerm1M2: req.body.ptasDm1M2,
        puertasDerm2M1: req.body.ptasDm2M1,
        puertasDerm2M2: req.body.ptasDm2M2,
        observacionesPder: req.body.obsPder,

        lampAmbarm1M1: req.body.lampAonm1M1,
        lampAmbarm1M2: req.body.lampAonm1M2,
        lampAmbarm2M1: req.body.lampAonm2M1,
        lampAmbarm2M2: req.body.lampAonm2M2,
        observacionesLambar: req.body.obsLambar,

        //BAA
        lampBotm1M1: req.body.lampBotPm1M1,
        lampBotm2M2: req.body.lampBotPm2M2,
        observacionesLampB: req.body.obsLampB,

        puertasDesblm1M1: req.body.ptasDerDm1M1,
        puertasDesblm1M2: req.body.ptasDerDm1M2,
        puertasDesblm2M1: req.body.ptasDerDm2M1,
        puertasDesblm2M2: req.body.ptasDerDm2M2,
        observacionesPtasD: req.body.obsPtasD,

        //BASD
        audiom1M1: req.body.audioBasdm1M1,
        audiom1M2: req.body.audioBasdm1M2,
        audiom2M1: req.body.audioBasdm2M1,
        audiom2M2: req.body.audioBasdm2M2,
        observacionesAudio: req.body.Audio,

        //BCD
        puertasBloqm1M1: req.body.puertaBcdm1M1,
        puertasBloqm1M2: req.body.puertaBcdm1M2,
        puertasBloqm2M1: req.body.puertaBcdm2M1,
        puertasBloqm2M2: req.body.puertaBcdm2M2,
        observacionesPtasB: req.body.obsPtasB,

        lampAmbarOffm1M1: req.body.lampBcdm1M1,
        lampAmbarOffm1M2: req.body.lampBcdm1M2,
        lampAmbarOffm2M1: req.body.lampBcdm2M1,
        lampAmbarOffm2M2: req.body.lampBcdm2M2,
        observacionesLampOff: req.body.obsLampOff,

        lamparam1M1: req.body.lampMttoOnm1M1,
        lamparam2M2: req.body.lampMttoOnm1M2,
        observacionesLamp: req.body.obsLamp,

        timbreMonoGm1M1: req.body.timMonoGm1M1,
        timbreMonoGm2M2: req.body.timMonoGm2M2,
        observacionesTimMg: req.body.obsTimMg,

        presManFrenMenorm1M1: req.body.presManBcdm1M1,
        presManFrenMenorm1M2: req.body.presManBcdm1M2,
        presManFrenMenorm2M1: req.body.presManBcdm2M1,
        presManFrenMenorm2M2: req.body.presManBcdm2M2,
        observacionesPmfm: req.body.obsPmfm,

        //"KP" en izquierdas
        ptasDerm1M1: req.body.ptasDerClosem1M1,
        ptasDerm1M2: req.body.ptasDerClosem1M2,
        ptasDerm2M1: req.body.ptasDerClosem2M1,
        ptasDerm2M2: req.body.ptasDerClosem2M2,
        observacionesPtasDer: req.body.obsPtasDer,

        lampBotonerasOnm1M1: req.body.lampBotOnm1M1,
        lampBotonerasOnm2M2: req.body.lampBotOnm2M2,
        observacionesLbon: req.body.obsLbon,

        //BPA
        lampBotonOnm1M1: req.body.lampBpam1M1,
        lampBotonOnm2M2: req.body.lampBpam2M2,
        observacionesLbp: req.body.obsLbp,

        puertasIzqAbrenm1M1: req.body.ptasBpam1M1,
        puertasIzqAbrenm1M2: req.body.ptasBpam1M2,
        puertasIzqAbrenm2M1: req.body.ptasBpam2M1,
        puertasIzqAbrenm2M2: req.body.ptasBpam2M2,
        observacionesPizqA: req.body.obsPizqA,

        lampAmbarOnm1M1: req.body.lamAmbarm1M1,
        lampAmbarOnm1M2: req.body.lamAmbarm1M2,
        lampAmbarOnm2M1: req.body.lamAmbarm2M1,
        lampAmbarOnm2M2: req.body.lamAmbarm2M2,
        observacionesLaon: req.body.obsLaon,

        //BAA
        lampBotOffm1M1: req.body.lampBaam1M1,
        lampBotOffm2M2: req.body.lampBaam2M2,
        observacionesLbotOff: req.body.obsLbotOff,

        puertasIzqDesblm1M1: req.body.ptasIzqBaam1M1,
        puertasIzqDesblm1M2: req.body.ptasIzqBaam1M2,
        puertasIzqDesblm2M1: req.body.ptasIzqBaam2M1,
        puertasIzqDesblm2M2: req.body.ptasIzqBaam2M2,
        observacionesPizqD: req.body.obsPizqD,

        //BASI
        audioSalonm1M1: req.body.audioBasim1M1,
        audioSalonm1M2: req.body.audioBasim1M2,
        audioSalonm2M1: req.body.audioBasim2M1,
        audioSalonm2M2: req.body.audioBasim2M2,
        observacionesAsalon: req.body.obsAsalon,

        //BCI
        puertasIzqCierranm1M1: req.body.ptasBcim1M1,
        puertasIzqCierranm1M2: req.body.ptasBcim1M2,
        puertasIzqCierranm2M1: req.body.ptasBcim2M1,
        puertasIzqCierranm2M2: req.body.ptasBcim2M2,
        observacionesPizqC: req.body.obsPizqC,

        lampAmbarAm1M1: req.body.lampBcim1M1,
        lampAmbarAm1M2: req.body.lampBcim1M2,
        lampAmbarAm2M1: req.body.lampBcim2M1,
        lampAmbarAm2M2: req.body.lampBcim2M2,
        observacionesLaa: req.body.obsLaa,

        lamparaMttom1M1: req.body.lampMttoBcim1M1,
        lamparaMttom2M2: req.body.lampMttoBcim2M2,
        observacionesLampMtto: req.body.obsLampMtto,

        timbreMgm1M1: req.body.timbreMgBcim1M1,
        timbreMgm2M2: req.body.timbreMgBcim2M2,
        observacionesTimbremg: req.body.obsTimbremg,

        presManFrenm1M1: req.body.presManBcim1M1,
        presManFrenm1M2: req.body.presManBcim1M2,
        presManFrenm2M1: req.body.presManBcim2M1,
        presManFrenm2M2: req.body.presManBcim2M2,
        observacionesPresM: req.body.obsPresM,

        //SERVICIO DE TREN
        //"KP" en ambas
        lampara2m1M1: req.body,
        lampara2m2M2: req.body,
        observacionesL2: req.body,

        //BPA
        lampBot2m1M1: req.body,
        lampBot2m2M2: req.body,
        observacionesLb2: req.body,

        puertasm1M1: req.body,
        puertasm1M2: req.body,
        puertasm2M1: req.body,
        puertasm2M2: req.body,
        observacionesPa: req.body,

        lAmbarm1M1: req.body,
        lAmbarm1M2: req.body,
        lAmbarm2M1: req.body,
        lAmbarm2M2: req.body,
        observacionesLa: req.body,

        //BAA
        lampBPrepm1M1: req.body,
        lampBPrepm2M2: req.body,
        observacionesLbot: req.body,

        ptasAmbosm1M1: req.body,
        ptasAmbosm1M2: req.body,
        ptasAmbosm2M1: req.body,
        ptasAmbosm2M2: req.body,
        observacionesPtas: req.body,

        //BASD
        audio2m1M1: req.body,
        audio2m1M2: req.body,
        audio2m2M1: req.body,
        audio2m2M2: req.body,
        observacionesA2: req.body,

        //BCD
        puertasDm1M1: req.body,
        puertasDm1M2: req.body,
        puertasDm2M1: req.body,
        puertasDm2M2: req.body,
        observacionesPd: req.body,

        lAmbarOffm1M1: req.body,
        lAmbarOffm1M2: req.body,
        lAmbarOffm2M1: req.body,
        lAmbarOffm2M2: req.body,
        observacionesLamb: req.body,

        lampMm1M1: req.body,
        lampMm2M2: req.body,
        observacionesLm: req.body,

        timbre2m1M1: req.body,
        timbre2m2M2: req.body,
        observacionesT2: req.body,

        presm1M1: req.body,
        presm1M2: req.body,
        presm2M1: req.body,
        presm2M2: req.body,
        observacionesPm: req.body,

        //BASI
        audioSm1M1: req.body,
        audioSm1M2: req.body,
        audioSm2M1: req.body,
        audioSm2M2: req.body,
        observacionesAud: req.body,

        //BCI
        ptasIzqm1M1: req.body,
        ptasIzqm1M2: req.body,
        ptasIzqm2M1: req.body,
        ptasIzqm2M2: req.body,
        observacionesPizq: req.body,

        lAmbOnm1M1: req.body,
        lAmbOnm1M2: req.body,
        lAmbOnm2M1: req.body,
        lAmbOnm2M2: req.body,
        observacionesLambC: req.body,

        lampMttom1M1: req.body,
        lampMttom2M2: req.body,
        observacionesLmtto: req.body,

        timbreMm1M1: req.body,
        timbreMm2M2: req.body,
        observacionesTmg: req.body,

        presManm1M1: req.body,
        presManm1M2: req.body,
        presManm2M1: req.body,
        presManm2M2: req.body,
        observacionesPres: req.body,

        //SPD1
        //AP
        puertaOm1M1: req.body,
        puertaOm2M2: req.body,
        observacionesPta: req.body,

        //CIE
        ptaOperadorm1M1: req.body,
        ptaOperadorm2M2: req.body,
        observacionesPo: req.body,

        //SEP
        //APERTURA
        pOpenm1M1: req.body,
        pOpenm2M2: req.body,
        observacionesPopen: req.body,

        //CIERRE
        ptaClosem1M1: req.body,
        ptaClosem2M2: req.body,
        observacionesPtaClose: req.body,

        //NEUTRO
        continuam1M1: req.body,
        continuam2M2: req.body,
        observacionesPtaC: req.body,

        //VENTILACION
        //SVC
        //PRENDIDO
        ventiladorm1M1: req.body,
        ventiladorm2M2: req.body,
        observacionesVent: req.body,

        //APAGADO
        ventiladorCm1M1: req.body,
        ventiladorCm2M2: req.body,
        observacionesVc: req.body,

        //SVP
        //EN
        ventiladorSm1M1: req.body,
        ventiladorSm1M2: req.body,
        ventiladorSm2M1: req.body,
        ventiladorSm2M2: req.body,
        observacionesVs: req.body,

        //RTS
        //EN
        ledm1M1: req.body,
        ledm2M2: req.body,
        observacionesLed: req.body,

        ventSalm1M1: req.body,
        ventSalm1M2: req.body,
        ventSalm2M1: req.body,
        ventSalm2M2: req.body,
        observacionesVentS: req.body,

        //AP
        ledFm1M1: req.body,
        ledFm2M2: req.body,
        observacionesLedF: req.body,

        ventSalonm1M1: req.body,
        ventSalonm1M2: req.body,
        ventSalonm2M1: req.body,
        ventSalonm2M2: req.body,
        observacionesVentSal: req.body,

        //APAG
        vSalPm1M1: req.body,
        vSalPm1M2: req.body,
        vSalPm2M1: req.body,
        vSalPm2M2: req.body,
        observacionesVsp: req.body,

        //ALUMBRADO
        //SAC
        //PREN
        plafonesm1M1: req.body,
        plafonesm2M2: req.body,
        observacionesPlaf: req.body,

        //APAG
        plafonesCm1M1: req.body,
        plafonesCm2M2: req.body,
        observacionesPc: req.body,

        //SMA
        //EN
        alumbradoNorm1M1: req.body,
        alumbradoNorm1M2: req.body,
        alumbradoNorm2M1: req.body,
        alumbradoNorm2M2: req.body,
        observacionesAlumN: req.body,

        //SAP
        //F.S.
        alumbradoNm1M1: req.body,
        alumbradoNm1M2: req.body,
        alumbradoNm2M1: req.body,
        alumbradoNm2M2: req.body,
        observacionesAn: req.body,

        alumbradoPm1M1: req.body,
        alumbradoPm1M2: req.body,
        alumbradoPm2M1: req.body,
        alumbradoPm2M2: req.body,
        observacionesAp: req.body,

        //S.
        alumbradoNPm1M1: req.body,
        alumbradoNPm1M2: req.body,
        alumbradoNPm2M1: req.body,
        alumbradoNPm2M2: req.body,
        observacionesAnp: req.body,

        alumbradoPermm1M1: req.body,
        alumbradoPermm1M2: req.body,
        alumbradoPermm2M1: req.body,
        alumbradoPermm2M2: req.body,
        observacionesAperm: req.body,

        //APAGADO
        alumbradoNormm1M1: req.body,
        alumbradoNormm1M2: req.body,
        alumbradoNormm2M1: req.body,
        alumbradoNormm2M2: req.body,
        observacionesAnorm: req.body,

        //COMPRESOR
        //COMPRESOR EN NORMAL
        presionm1M1: req.body,
        presionm2M2: req.body,
        observacionesPresion: req.body,

        presionPm1M1: req.body,
        presionPm2M2: req.body,
        observacionesPp: req.body,

        separadorm1M2: req.body,
        separadorm2M2: req.body,
        observacionesS: req.body,

        electrovalvulam1M2: req.body,
        electrovalvulam2M2: req.body,
        observacionesElec: req.body,

        //COMPRESOR EN DIRECTO
        //EN
        presion2m1M1: req.body,
        presion2m2M2: req.body,
        observacionesP2: req.body,

        valvulam1M2: req.body,
        valvulam2M2: req.body,
        observacionesV: req.body,

        //AP
        separadorAm1M2: req.body,
        separadorAm2M2: req.body,
        observacionesSa: req.body,

        electrovalvulaSecm1M2: req.body,
        electrovalvulaSecm2M2: req.body,
        observacionesElecS: req.body,

        //INTERFONO
        botonm1M1: req.body,
        botonm2M2: req.body,
        observacionesBot: req.body,

        audioHPIm1M1: req.body,
        audioHPIm2M2: req.body,
        observacionesAhpi: req.body,

        botonAm1M1: req.body,
        botonAm1M2: req.body,
        botonAm2M1: req.body,
        botonAm2M2: req.body,
        observacionesBa: req.body,

        audioBm1M1: req.body,
        audioBm1M2: req.body,
        audioBm2M1: req.body,
        audioBm2M2: req.body,
        observacionesAb: req.body,

        //SERVICIOS AUXILIARES
        botonBm1M1: req.body,
        botonBm2M2: req.body,
        observacionesBb: req.body,

        claxonm1M1: req.body,
        claxonm1M2: req.body,
        claxonm2M1: req.body,
        claxonm2M2: req.body,
        observacionesClax: req.body,

        lavaparabrisasm1M1: req.body,
        lavaparabrisasm2M2: req.body,
        observacionesL: req.body,

        //SMLP
        posicionBm1M1: req.body,
        posicionBm2M2: req.body,
        observacionesPb: req.body,

        posicionNm1M1: req.body,
        posicionNm2M2: req.body,
        observacionePn: req.body,

        posicionAltam1M1: req.body,
        posicionAltam2M2: req.body,
        observacionesPalta: req.body,

        //SMF
        posicionAm1M1: req.body,
        posicionAm2M2: req.body,
        observacionesPosA: req.body,

        posicionFm1M1: req.body,
        posicionFm2M2: req.body,
        observacionesPf: req.body,

        posicionPm1M1: req.body,
        posicionPm2M2: req.body,
        observacionesPosP: req.body,

        //PRUEBAS DINAMICAS DE TRACCION-FRENADO
        mover01M1: req.body,
        mover01M2: req.body,
        soltar02M1: req.body,
        soltar02M2: req.body,
        regresar03M1: req.body,
        regresar03M2: req.body,
        colocar04M1: req.body,
        colocar04M2: req.body,
        colocar05M1: req.body,
        colocar05M2: req.body,
        colocar06M1: req.body,
        colocar06M2: req.body,
        jalar07M1: req.body,
        jalar07M2: req.body,
        traccionar08M1: req.body,
        traccionar08M2: req.body,
        frenando09M1: req.body,
        frenando09M2: req.body,
        repetir10M1: req.body,   
        repetir10M2: req.body,
        repetir11M1: req.body,   
        repetir11M2: req.body,
        colocar12M1: req.body,   
        colocar12M2: req.body,
        traccionar13M1: req.body,   
        traccionar13M2: req.body,
        soltar14M1: req.body,   
        soltar14M2: req.body,
        jalar15M1: req.body,   
        jalar15M2: req.body,
        colocar16M1: req.body,   
        colocar16M2: req.body,
        colocar17M1: req.body,   
        colocar17M2: req.body,
        restablecer18M1: req.body,   
        restablecer18M2: req.body,
        colocar19M1: req.body,   
        colocar19M2: req.body,
        traccionar20M1: req.body,   
        traccionar20M2: req.body,
        jalar21M1: req.body,   
        jalar21M2: req.body,
        frenar22M1: req.body,   
        frenar22M2: req.body,
        colocar23M1: req.body,   
        colocar23M2: req.body,
        restablecer24M1: req.body,   
        restablecer24M2: req.body,
        traccionar25M1: req.body,   
        traccionar25M2: req.body,
        velocidad26M1: req.body,   
        velocidad26M2: req.body,
        velocidad27M1: req.body,   
        velocidad27M2: req.body,
        frenar28M1: req.body,   
        frenar28M2: req.body,
        colocar29M1: req.body,   
        colocar29M2: req.body,
        aplicar30M1: req.body,   
        aplicar30M2: req.body,
        traccionar31M1: req.body,   
        traccionar31M2: req.body,
        colocar32M1: req.body,   
        colocar32M2: req.body,
        desaccionar33M1: req.body,   
        desaccionar33M2: req.body,
        cargar34M1: req.body,   
        cargar34M2: req.body,
        quitar35M1: req.body,   
        quitar35M2: req.body,
        apagar36M1: req.body,   
        apagar36M2: req.body,
        verificar37M1: req.body,

        //VARIOS
        //EXTINGUIDORES
        cargaM1:req.body,
        cargaM2:req.body,
        observacionesCarg:req.body,

        seguroM1:req.body,
        seguroM2:req.body,
        observacionesSeg:req.body,

        asientoM1:req.body,
        asientoM2:req.body,
        observacionesAo:req.body,

        //VENTANAS DE CABINA
        derechasM1:req.body,
        derechasM2:req.body,
        observacionesD:req.body,

        izquierdasM1:req.body,
        izquierdasM2:req.body,
        observacionesI:req.body,

        //VENTANAS LARGAS DE S.P
        vDerM1:req.body,
        vDerM2:req.body,
        observacionesVd:req.body,

        vIzqM1:req.body,
        vIzqM2:req.body,
        observacionesVi:req.body,

        //VENTANAS CORTAS DE S.P
        vCortasDM1:req.body,
        vCortasDM2:req.body,
        observacionesVcd:req.body,

        vCortasIM1:req.body,
        vCortasIM2:req.body,
        observacionesVci:req.body,

        //ASIENTOS DE ARTICULACION
        asientosDM1:req.body,
        asientosDM2:req.body,
        observacionesAd:req.body,

        asientosIM1:req.body,
        asientosIM2:req.body,
        observacionesAi:req.body,

        //ASIENTOS DE SALON DE PASAJEROS
        aSalonDM1:req.body,
        aSalonDM2:req.body,
        observacionesAsd:req.body,

        aSalonIM1:req.body,
        aSalonIM2:req.body,
        observacionesAsi:req.body,

        //MANTAS DE LETREROS DE RUTA
        letrerosM1: req.body,
        letrerosM2: req.body,
        observacionesLetreros: req.body,

        unidadesM1: req.body,
        unidadesM2: req.body,
        observacionesU: req.body,

        decenasM1: req.body,
        decenasM2: req.body,
        observacionesDec: req.body,

        //PUERTA DE CABINA
        chapaM1: req.body,
        chapaM2: req.body,
        observacionesCh: req.body,

        bisagraM1: req.body,
        bisagraM2: req.body,
        observacionesBisagra: req.body,

        //PASAMANOS HORIZONTAL
        pasamanosHdM1: req.body,
        pasamanosHdM2: req.body,
        observacionesPhd: req.body,

        pasamanosHiM1: req.body,
        pasamanosHiM2: req.body,
        observacionesPhi: req.body,

        //PASAMANOS VERTICAL
        pasamanosVdM1: req.body,
        pasamanosVdM2: req.body,
        observacionesPvd: req.body,

        pasamanosViM1: req.body,
        pasamanosViM2: req.body,
        observacionesPvi: req.body,

        pisoSM1: req.body,
        pisoSM2: req.body,
        observacionesPsp: req.body,

        pisoAM1: req.body,
        pisoAM2: req.body,
        observacionesPArt: req.body,

        //TAPAS DE ZOCLOS
        tapasDM1: req.body,
        tapasDM2: req.body,
        observacionesTzd: req.body,

        tapasIM1: req.body,
        tapasIM2: req.body,
        observacionesTzi: req.body,

        //UMBRALES DE PUERTAS
        umbralesDM1: req.body,
        umbralesDM2: req.body,
        observacionesUd: req.body,

        umbralesIM1: req.body,
        umbralesIM2: req.body,
        observacionesUi: req.body,

        //FORROS DE SALON DE PASAJEROS
        forrosDM1: req.body,
        forrosDM2: req.body,
        observacionesFd: req.body,

        forrosSM1: req.body,
        forrosSIM2: req.body,
        observacionesFs: req.body,

        forrosIM1: req.body,
        forrosIM2: req.body,
        observacionesFi: req.body,

        //FORROS DE ARTICULACION
        forrosAdM1: req.body,
        forrosAdM2: req.body,
        observacionesFad: req.body,

        forrosAsM1: req.body,
        forrosAsM2: req.body,
        observacionesFas: req.body,

        forrosAiM1: req.body,
        forrosAiM2: req.body,
        observacionesFai: req.body,

        marcosM1: req.body,
        marcosM2: req.body,
        observacionesM: req.body,

        revisionM1: req.body,
        revisionM2: req.body,
        observacionesRev: req.body,

        //PARATREN MAGNETICO
        dispositivoM1: req.body,
        dispositivoM2: req.body,
        observacionesDisp: req.body,

        antenaM1: req.body,
        antenaM2: req.body,
        observacionesAntena: req.body,

        //VALVULAS DE CORTE NEUMATICO
        suspencionM1: req.body,
        suspencionM2: req.body,
        observacionesSs: req.body,

        acoplamientoM1: req.body,
        acoplamientoM2: req.body,
        observacionesAcN: req.body,

        pantografoM1: req.body,
        observacionesVp: req.body,

        //REVISION DE COLCHONES
        revisionIM1: req.body,
        revisionIM2: req.body,
        observacionesRi: req.body,

        revisionDM1: req.body,
        revisionDM2: req.body,
        observacionesRd: req.body,

        observaciones: req.body.obs || '',
        materialUtilizado: materiales,
    };
    await memeB01.findByIdAndUpdate(id, { $set: MEME_B01}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B01.getAllMaintenenceMEME_B01 = async (req, res) => {
    const maintenances = await memeB01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_B01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B01New = {
        historyFile: req.body.historyFile || []
    }
    await memeB01.findByIdAndUpdate(id, { $set: historyMEME_B01New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B01.createMaintenenceMEME_B01 = async (req, res) => {
    const maintenence = new memeB01(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B01;