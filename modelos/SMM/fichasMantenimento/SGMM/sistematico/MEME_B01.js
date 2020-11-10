
'use strict'//usar novedades de JS

var mongoose = require('mongoose');//modulo de moongose
var Schema = mongoose.Schema;//Schema carga moongoose.Schema esto permite definir nuevos esquemas

var memeB01Schema = Schema({//esquema de la estructura que va a tener el formulario
    date_created: { type: Date, required: true },
    //datos tren
    noInspeccion: { type: String },
    noTren: { type: String },
    kilometraje: { type: String },
    horaInicio: { type: String },
    horaTerminacion: { type: String },
    modelo90: { type: String },
    modelo95: { type: String },
     
    operario: { type: String, required: true},
    id_worker1: {type: String, required: true},
    operador: { type: String, required: true},
    id_worker2: {type: String, required: true},
    unidad: { type: Number, required: true },
    //preparacion de material y pantografo
    //CMP/MP
    aEm1M1: Boolean,
    aEm1M2: Boolean,
    observacionesAE: String,
    
    tAm1M1: String,
    observacionestA: String,
    
    campm1M2: Boolean,
    observacionesCa: String,
    
    cmpm1M1: Boolean,
    observacionesC: String,

    //N
    aEnm1M1: Boolean,
    cEnm1M2: Boolean,
    observacionesAe: String,
    
    tDnm1M1: String,
    observacionesTd: String,
    
    cAnm1M2: Boolean,
    observacionesConv: String,
    
    cnm1M1: Boolean,
    observacionesCom: String,
    
    //bajo bastidor
    //EN
    pAm1M1: Boolean,
    pAm2M1: Boolean,
    observacionesP: String,
    
    cAenm1M2: Boolean,
    cAenm2M2: Boolean,
    observacionesCaen: String,
    
    cenm1M2: Boolean,
    cenm2M2: Boolean,
    observacionesComp: String,
    
    venm1M1: Boolean,
    venm1M2: Boolean,
    venm2M1: Boolean,
    venm2M2: Boolean,
    observacionesVol: String,
    
    eENm1M1: Boolean,
    eENm1M2: Boolean,
    eENm2M1: Boolean,
    eENm2M2: Boolean,
    observacionesEi: String,
    
    fenm1M1: Boolean,
    fenm1M2: Boolean,
    fenm2M1: Boolean,
    fenm2M2: Boolean,
    observacionesFt: String,
    
    oenm1M1: Boolean,
    oenm1M2: Boolean,
    oenm2M1: Boolean,
    oenm2M2: Boolean,
    observacionesOa: String,
    
    //AP
    pDm1M1: Boolean,
    pDm2M1: Boolean,
    observacionesPap: String,
    
    cAapm1M2: Boolean,
    cAapm2M2: Boolean,
    observacionesCaAp: String,
    
    capm1M2: Boolean,
    capm2M2: Boolean,
    observacionesCap: String,
    
    vapm1M1: Boolean,
    vapm1M2: Boolean,
    vapm2M1: Boolean,
    vapm2M2: Boolean,
    observacionesVap: String,
    
    fapm1M1: Boolean,
    fapm1M2: Boolean,
    fapm2M1: Boolean,
    fapm2M2: Boolean,
    observacionesFap: String,
    
    dOapm1M1: Boolean,
    dOapm1M2: Boolean,
    dOapm2M1: Boolean,
    dOapm2M2: Boolean,
    observacionesDoap: String,
    
    //tabique izquierdo
    //EN
    pAscm1M1: Boolean,
    pAscm2M1: Boolean,
    observacionesPasc: String,
    
    convm1M2: Boolean,
    convm2M2: Boolean,
    observacionesConvCEA: String,
    
    cFenm1M2: Boolean,
    cFenm2M2: Boolean,
    observacionesCfen: String,

    vFenm1M1: Boolean,
    vFenm1M2: Boolean,
    vFenm2M1: Boolean,
    vFenm2M2: Boolean,
    observacionesVfen: String,
    
    eIenm1M1: Boolean,
    eIenm1M2: Boolean,
    eIenm2M1: Boolean,
    eIenm2M2: Boolean,
    observacionesEien: String,
    
    fTenm1M1: Boolean,
    fTenm1M2: Boolean,
    fTenm2M1: Boolean,
    fTenm2M2: Boolean,
    observacionesFten: String,
    
    oAenm1M1: Boolean,
    oAenm1M2: Boolean,
    oAenm2M1: Boolean,
    oAenm2M2: Boolean,
    observacionesOaen: String,
    
    //AP
    pDapm1M1: Boolean,
    pDapm2M1: Boolean,
    observacionesPdap: String,
    
    convApm1M2: Boolean,
    convApm2M2: Boolean,
    observacionesConvAp: String,
    
    compAapm1M2: Boolean,
    compAapm2M2: Boolean,
    observacionesCompAp: String,
    
    vFapm1M1: Boolean,
    vFapm1M2: Boolean,
    vFapm2M1: Boolean,
    vFapm2M2: Boolean,
    observacionesVoltAp: String,
    
    fTapm1M1: Boolean,
    fTapm1M2: Boolean,
    fTapm2M1: Boolean,
    fTapm2M2: Boolean,
    observacionesFtap: String,
    
    dOAapm1M1: Boolean,
    dOAapm1M2: Boolean,
    dOAapm2M1: Boolean,
    dOAapm2M2: Boolean,
    observacionesDo: String,

    //mandos 
    //llave "C" en conduccion
    torretam1M1: Boolean,
    torretam2M2: Boolean,
    observacionesT: String,

    timbrem1M1: Boolean,
    timbrem2M2: Boolean,
    observacionesTim: String,

    ledMotm1M1: Boolean,
    ledMotm2M2: Boolean,
    observacionesLedMot: String,

    ledCm1M1: Boolean,
    ledCm2M2: Boolean,
    observacionesLc: String,

    velocimetrom1M1: Boolean,
    velocimetrom2M2: Boolean,
    observacionesVel: String,
    
    bloqueSm1M1: Boolean,
    bloqueSm2M2: Boolean,
    observacionesB: String,

    equipom1M1: Boolean,
    equipom2M2: Boolean,
    observacionesE: String,

    fanalesAm1M1: Boolean,
    fanalesAm1M2: Boolean,
    fanalesAm2M1: Boolean,
    fanalesAm2M2: Boolean,
    observacionesF: String,

    fanalesRm1M1: Boolean,
    fanalesRm1M2: Boolean,
    fanalesRm2M1: Boolean,
    fanalesRm2M2: Boolean,
    observacionesR: String,

    //accionamiento de llave de manipulador posicion "1" y selector de marcha en adelante
    timbreFm1M1: Boolean,
    timbreFm2M2: Boolean,
    observacionesTf: String,

    ledMotrizm1M1: Boolean,
    ledMotrizm2M2: Boolean,
    observacionesLedM: String,

    ledCarrom1M1: Boolean,
    ledCarrom2M2: Boolean,
    observacionesLedC: String,

    velocimetroCm1M1: Boolean,
    velocimetroCm2M2: Boolean,
    observacionesVelC: String,

    bloqueScm1M1: Boolean,
    bloqueScm2M2: Boolean,
    observacionesBs: String,

    equipoSAEm1M1: Boolean,
    equipoSAEm2M2: Boolean,
    observacionesEs: String,

    fanalesOnm1M1: Boolean,
    fanalesOnm1M2: Boolean,
    fanalesOnm2M1: Boolean,
    fanalesOnm2M2: Boolean,
    observacionesFon: String,

    fanalesOffm1M1: Boolean,
    fanalesOffm1M2: Boolean,
    fanalesOffm2M1: Boolean,
    fanalesOffm2M2: Boolean,
    observacionesFoff: String,

    resistenciasm1M1: Boolean,
    resistenciasm1M2: Boolean,
    resistenciasm2M1: Boolean,
    resistenciasm2M2: Boolean,
    observacionesRes: String,

    alumbradom1M1: Boolean,
    alumbradom2M2: Boolean,
    observacionesA: String,

    //SERVICIOS DE TREN
    //"KP" en derechas
    puertasIzqm1M1: Boolean,
    puertasIzqm1M2: Boolean,
    puertasIzqm2M1: Boolean,
    puertasIzqm2M2: Boolean,
    observacionesPtasIzq: String,

    lamparasBotonerasm1M1: Boolean,
    lamparasBotonerasm2M2: Boolean,
    observacionesLb: String,

    //BPA
    lamparasBotonm1M1: Boolean,
    lamparasBotonm2M2: Boolean,
    observacionesLboton: String,

    puertasDerm1M1: Boolean,
    puertasDerm1M2: Boolean,
    puertasDerm2M1: Boolean,
    puertasDerm2M2: Boolean,
    observacionesPder: String,

    lampAmbarm1M1: Boolean,
    lampAmbarm1M2: Boolean,
    lampAmbarm2M1: Boolean,
    lampAmbarm2M2: Boolean,
    observacionesLambar: String,

    //BAA
    lampBotm1M1: Boolean,
    lampBotm2M2: Boolean,
    observacionesLampB: String,

    puertasDesblm1M1: Boolean,
    puertasDesblm1M2: Boolean,
    puertasDesblm2M1: Boolean,
    puertasDesblm2M2: Boolean,
    observacionesPtasD: String,

    //BASD
    audiom1M1: Boolean,
    audiom1M2: Boolean,
    audiom2M1: Boolean,
    audiom2M2: Boolean,
    observacionesAudio: String,

    //BCD
    puertasBloqm1M1: Boolean,
    puertasBloqm1M2: Boolean,
    puertasBloqm2M1: Boolean,
    puertasBloqm2M2: Boolean,
    observacionesPtasB: String,

    lampAmbarOffm1M1: Boolean,
    lampAmbarOffm1M2: Boolean,
    lampAmbarOffm2M1: Boolean,
    lampAmbarOffm2M2: Boolean,
    observacionesLampOff: String,

    lamparam1M1: Boolean,
    lamparam2M2: Boolean,
    observacionesLamp: String,

    timbreMonoGm1M1: Boolean,
    timbreMonoGm2M2: Boolean,
    observacionesTimMg: String,

    presManFrenMenorm1M1: Boolean,
    presManFrenMenorm1M2: Boolean,
    presManFrenMenorm2M1: Boolean,
    presManFrenMenorm2M2: Boolean,
    observacionesPmfm: String,

    //"KP" en izquierdas
    ptasDerm1M1: Boolean,
    ptasDerm1M2: Boolean,
    ptasDerm2M1: Boolean,
    ptasDerm2M2: Boolean,
    observacionesPtasDer: String,

    lampBotonerasOnm1M1: Boolean,
    lampBotonerasOnm2M2: Boolean,    observacionesLbon: String,

    //BPA
    lampBotonOnm1M1: Boolean,
    lampBotonOnm2M2: Boolean,
    observacionesLbp: String,

    puertasIzqAbrenm1M1: Boolean,
    puertasIzqAbrenm1M2: Boolean,
    puertasIzqAbrenm2M1: Boolean,
    puertasIzqAbrenm2M2: Boolean,
    observacionesPizqA: String,

    lampAmbarOnm1M1: Boolean,
    lampAmbarOnm1M2: Boolean,
    lampAmbarOnm2M1: Boolean,
    lampAmbarOnm2M2: Boolean,
    observacionesLaon: String,

    //BAA
    lampBotOffm1M1: Boolean,
    lampBotOffm2M2: Boolean,
    observacionesLbotOff: String,

    puertasIzqDesblm1M1: Boolean,
    puertasIzqDesblm1M2: Boolean,
    puertasIzqDesblm2M1: Boolean,
    puertasIzqDesblm2M2: Boolean,
    observacionesPizqD: String,

    //BASI
    audioSalonm1M1: Boolean,
    audioSalonm1M2: Boolean,
    audioSalonm2M1: Boolean,
    audioSalonm2M2: Boolean,
    observacionesAsalon: String,

    //BCI
    puertasIzqCierranm1M1: Boolean,
    puertasIzqCierranm1M2: Boolean,
    puertasIzqCierranm2M1: Boolean,
    puertasIzqCierranm2M2: Boolean,
    observacionesPizqC: String,

    lampAmbarAm1M1: Boolean,
    lampAmbarAm1M2: Boolean,
    lampAmbarAm2M1: Boolean,
    lampAmbarAm2M2: Boolean,
    observacionesLaa: String,

    lamparaMttom1M1: Boolean,
    lamparaMttom2M2: Boolean,
    observacionesLampMtto: String,

    timbreMgm1M1: Boolean,
    timbreMgm2M2: Boolean,
    observacionesTimbremg: String,

    presManFrenm1M1: Boolean,
    presManFrenm1M2: Boolean,
    presManFrenm2M1: Boolean,
    presManFrenm2M2: Boolean,
    observacionesPresM: String,

    //SERVICIO DE TREN
    //"KP" en ambas
    lampara2m1M1: Boolean,
    lampara2m2M2: Boolean,
    observacionesL2: String,

    //BPA
    lampBot2m1M1: Boolean,
    lampBot2m2M2: Boolean,
    observacionesLb2: String,

    puertasm1M1: Boolean,
    puertasm1M2: Boolean,
    puertasm2M1: Boolean,
    puertasm2M2: Boolean,
    observacionesPa: String,

    lAmbarm1M1: Boolean,
    lAmbarm1M2: Boolean,
    lAmbarm2M1: Boolean,
    lAmbarm2M2: Boolean,
    observacionesLa: String,

    //BAA
    lampBPrepm1M1: Boolean,
    lampBPrepm2M2: Boolean,
    observacionesLbot: String,

    ptasAmbosm1M1: Boolean,
    ptasAmbosm1M2: Boolean,
    ptasAmbosm2M1: Boolean,
    ptasAmbosm2M2: Boolean,
    observacionesPtas: String,

    //BASD
    audio2m1M1: Boolean,
    audio2m1M2: Boolean,
    audio2m2M1: Boolean,
    audio2m2M2: Boolean,
    observacionesA2: String,

    //BCD
    puertasDm1M1: Boolean,
    puertasDm1M2: Boolean,
    puertasDm2M1: Boolean,
    puertasDm2M2: Boolean,
    observacionesPd: String,

    lAmbarOffm1M1: Boolean,
    lAmbarOffm1M2: Boolean,
    lAmbarOffm2M1: Boolean,
    lAmbarOffm2M2: Boolean,
    observacionesLamb: String,

    lampMm1M1: Boolean,
    lampMm2M2: Boolean,
    observacionesLm: String,

    timbre2m1M1: Boolean,
    timbre2m2M2: Boolean,
    observacionesT2: String,

    presm1M1: Boolean,
    presm1M2: Boolean,
    presm2M1: Boolean,
    presm2M2: Boolean,
    observacionesPm: String,

    //BASI
    audioSm1M1: Boolean,
    audioSm1M2: Boolean,
    audioSm2M1: Boolean,
    audioSm2M2: Boolean,
    observacionesAud: String,

    //BCI
    ptasIzqm1M1: Boolean,
    ptasIzqm1M2: Boolean,
    ptasIzqm2M1: Boolean,
    ptasIzqm2M2: Boolean,
    observacionesPizq: String,

    lAmbOnm1M1: Boolean,
    lAmbOnm1M2: Boolean,
    lAmbOnm2M1: Boolean,
    lAmbOnm2M2: Boolean,
    observacionesLambC: String,

    lampMttom1M1: Boolean,
    lampMttom2M2: Boolean,
    observacionesLmtto: String,

    timbreMm1M1: Boolean,
    timbreMm2M2: Boolean,
    observacionesTmg: String,

    presManm1M1: Boolean,
    presManm1M2: Boolean,
    presManm2M1: Boolean,
    presManm2M2: Boolean,
    observacionesPres: String,

    //SPD1
    //AP
    puertaOm1M1: Boolean,
    puertaOm2M2: Boolean,
    observacionesPta: String,

    //CIE
    ptaOperadorm1M1: Boolean,
    ptaOperadorm2M2: Boolean,
    observacionesPo: String,

    //SEP
    //APERTURA
    pOpenm1M1: Boolean,
    pOpenm2M2: Boolean,
    observacionesPopen: String,

    //CIERRE
    ptaClosem1M1: Boolean,
    ptaClosem2M2: Boolean,
    observacionesPtaClose: String,

    //NEUTRO
    continuam1M1: Boolean,
    continuam2M2: Boolean,
    observacionesPtaC: String,

    //VENTILACION
    //SVC
    //PRENDIDO
    ventiladorm1M1: Boolean,
    ventiladorm2M2: Boolean,
    observacionesVent: String,

    //APAGADO
    ventiladorCm1M1: Boolean,
    ventiladorCm2M2: Boolean,
    observacionesVc: String,

    //SVP
    //EN
    ventiladorSm1M1: Boolean,
    ventiladorSm1M2: Boolean,
    ventiladorSm2M1: Boolean,
    ventiladorSm2M2: Boolean,
    observacionesVs: String,

    //RTS
    //EN
    ledm1M1: Boolean,
    ledm2M2: Boolean,
    observacionesLed: String,

    ventSalm1M1: Boolean,
    ventSalm1M2: Boolean,
    ventSalm2M1: Boolean,
    ventSalm2M2: Boolean,
    observacionesVentS: String,

    //AP
    ledFm1M1: Boolean,
    ledFm2M2: Boolean,
    observacionesLedF: String,

    ventSalonm1M1: Boolean,
    ventSalonm1M2: Boolean,
    ventSalonm2M1: Boolean,
    ventSalonm2M2: Boolean,
    observacionesVentSal: String,

    //APAG
    vSalPm1M1: Boolean,
    vSalPm1M2: Boolean,
    vSalPm2M1: Boolean,
    vSalPm2M2: Boolean,
    observacionesVsp: String,

    //ALUMBRADO
    //SAC
    //PREN
    plafonesm1M1: Boolean,
    plafonesm2M2: Boolean,
    observacionesPlaf: String,

    //APAG
    plafonesCm1M1: Boolean,
    plafonesCm2M2: Boolean,
    observacionesPc: String,

    //SMA
    //EN
    alumbradoNorm1M1: Boolean,
    alumbradoNorm1M2: Boolean,
    alumbradoNorm2M1: Boolean,
    alumbradoNorm2M2: Boolean,
    observacionesAlumN: String,

    //SAP
    //F.S.
    alumbradoNm1M1: Boolean,
    alumbradoNm1M2: Boolean,
    alumbradoNm2M1: Boolean,
    alumbradoNm2M2: Boolean,
    observacionesAn: String,

    alumbradoPm1M1: Boolean,
    alumbradoPm1M2: Boolean,
    alumbradoPm2M1: Boolean,
    alumbradoPm2M2: Boolean,
    observacionesAp: String,

    //S.
    alumbradoNPm1M1: Boolean,
    alumbradoNPm1M2: Boolean,
    alumbradoNPm2M1: Boolean,
    alumbradoNPm2M2: Boolean,
    observacionesAnp: String,

    alumbradoPermm1M1: Boolean,
    alumbradoPermm1M2: Boolean,
    alumbradoPermm2M1: Boolean,
    alumbradoPermm2M2: Boolean,
    observacionesAperm: String,

    //APAGADO
    alumbradoNormm1M1: Boolean,
    alumbradoNormm1M2: Boolean,
    alumbradoNormm2M1: Boolean,
    alumbradoNormm2M2: Boolean,
    observacionesAnorm: String,

    //COMPRESOR
    //COMPRESOR EN NORMAL
    presionm1M1: String,
    presionm2M2: String,
    observacionesPresion: String,

    presionPm1M1: String,
    presionPm2M2: String,
    observacionesPp: String,

    separadorm1M2: Boolean,
    separadorm2M2: Boolean,
    observacionesS: String,

    electrovalvulam1M2: Boolean,
    electrovalvulam2M2: Boolean,
    observacionesElec: String,

    //COMPRESOR EN DIRECTO
    //EN
    presion2m1M1: String,
    presion2m2M2: String,
    observacionesP2: String,

    valvulam1M2: Boolean,
    valvulam2M2: Boolean,
    observacionesV: String,

    //AP
    separadorAm1M2: Boolean,
    separadorAm2M2: Boolean,
    observacionesSa: String,

    electrovalvulaSecm1M2: Boolean,
    electrovalvulaSecm2M2: Boolean,
    observacionesElecS: String,

    //INTERFONO
    botonm1M1: Boolean,
    botonm2M2: Boolean,
    observacionesBot: String,

    audioHPIm1M1: Boolean,
    audioHPIm2M2: Boolean,
    observacionesAhpi: String,

    botonAm1M1: Boolean,
    botonAm1M2: Boolean,
    botonAm2M1: Boolean,
    botonAm2M2: Boolean,
    observacionesBa: String,

    audioBm1M1: Boolean,
    audioBm1M2: Boolean,
    audioBm2M1: Boolean,
    audioBm2M2: Boolean,
    observacionesAb: String,

    //SERVICIOS AUXILIARES
    botonBm1M1: Boolean,
    botonBm2M2: Boolean,
    observacionesBb: String,

    claxonm1M1: Boolean,
    claxonm1M2: Boolean,
    claxonm2M1: Boolean,
    claxonm2M2: Boolean,
    observacionesClax: String,

    lavaparabrisasm1M1: Boolean,
    lavaparabrisasm2M2: Boolean,
    observacionesL: String,

    //SMLP
    posicionBm1M1: Boolean,
    posicionBm2M2: Boolean,
    observacionesPb: String,

    posicionNm1M1: Boolean,
    posicionNm2M2: Boolean,
    observacionePn: String,

    posicionAltam1M1: Boolean,
    posicionAltam2M2: Boolean,
    observacionesPalta: String,

    //SMF
    posicionAm1M1: Boolean,
    posicionAm2M2: Boolean,
    observacionesPosA: String,

    posicionFm1M1: Boolean,
    posicionFm2M2: Boolean,
    observacionesPf: String,

    posicionPm1M1: Boolean,
    posicionPm2M2: Boolean,
    observacionesPosP: String,

    //PRUEBAS DINAMICAS DE TRACCION-FRENADO
    mover01M1: Boolean,
    mover01M2: Boolean,
    soltar02M1: Boolean,
    soltar02M2: Boolean,
    regresar03M1: Boolean,
    regresar03M2: Boolean,
    colocar04M1: Boolean,
    colocar04M2: Boolean,
    colocar05M1: Boolean,
    colocar05M2: Boolean,
    colocar06M1: Boolean,
    colocar06M2: Boolean,
    jalar07M1: Boolean,
    jalar07M2: Boolean,
    traccionar08M1: Boolean,
    traccionar08M2: Boolean,
    frenando09M1: Boolean,
    frenando09M2: Boolean,
    repetir10M1: Boolean,   
    repetir10M2: Boolean,
    repetir11M1: Boolean,   
    repetir11M2: Boolean,
    colocar12M1: Boolean,   
    colocar12M2: Boolean,
    traccionar13M1: Boolean,   
    traccionar13M2: Boolean,
    soltar14M1: Boolean,   
    soltar14M2: Boolean,
    jalar15M1: Boolean,   
    jalar15M2: Boolean,
    colocar16M1: Boolean,   
    colocar16M2: Boolean,
    colocar17M1: Boolean,   
    colocar17M2: Boolean,
    restablecer18M1: Boolean,   
    restablecer18M2: Boolean,
    colocar19M1: Boolean,   
    colocar19M2: Boolean,
    traccionar20M1: Boolean,   
    traccionar20M2: Boolean,
    jalar21M1: Boolean,   
    jalar21M2: Boolean,
    frenar22M1: Boolean,   
    frenar22M2: Boolean,
    colocar23M1: Boolean,   
    colocar23M2: Boolean,
    restablecer24M1: Boolean,   
    restablecer24M2: Boolean,
    traccionar25M1: Boolean,   
    traccionar25M2: Boolean,
    velocidad26M1: Boolean,   
    velocidad26M2: Boolean,
    velocidad27M1: Boolean,   
    velocidad27M2: Boolean,
    frenar28M1: Boolean,   
    frenar28M2: Boolean,
    colocar29M1: Boolean,   
    colocar29M2: Boolean,
    aplicar30M1: Boolean,   
    aplicar30M2: Boolean,
    traccionar31M1: Boolean,   
    traccionar31M2: Boolean,
    colocar32M1: Boolean,   
    colocar32M2: Boolean,
    desaccionar33M1: Boolean,   
    desaccionar33M2: Boolean,
    cargar34M1: Boolean,   
    cargar34M2: Boolean,
    quitar35M1: Boolean,   
    quitar35M2: Boolean,
    apagar36M1: Boolean,   
    apagar36M2: Boolean,
    verificar37M1: Boolean,

    //VARIOS
    //EXTINGUIDORES
    cargaM1:Boolean,
    cargaM2:Boolean,
    observacionesCarg:String,

    seguroM1:Boolean,
    seguroM2:Boolean,
    observacionesSeg:String,

    asientoM1:Boolean,
    asientoM2:Boolean,
    observacionesAo:String,

    //VENTANAS DE CABINA
    derechasM1:Boolean,
    derechasM2:Boolean,
    observacionesD:String,

    izquierdasM1:Boolean,
    izquierdasM2:Boolean,
    observacionesI:String,

    //VENTANAS LARGAS DE S.P
    vDerM1:Boolean,
    vDerM2:Boolean,
    observacionesVd:String,

    vIzqM1:Boolean,
    vIzqM2:Boolean,
    observacionesVi:String,

    //VENTANAS CORTAS DE S.P
    vCortasDM1:Boolean,
    vCortasDM2:Boolean,
    observacionesVcd:String,

    vCortasIM1:Boolean,
    vCortasIM2:Boolean,
    observacionesVci:String,

    //ASIENTOS DE ARTICULACION
    asientosDM1:Boolean,
    asientosDM2:Boolean,
    observacionesAd:String,

    asientosIM1:Boolean,
    asientosIM2:Boolean,
    observacionesAi:String,

    //ASIENTOS DE SALON DE PASAJEROS
    aSalonDM1:Boolean,
    aSalonDM2:Boolean,
    observacionesAsd:String,

    aSalonIM1:Boolean,
    aSalonIM2:Boolean,
    observacionesAsi:String,

    //MANTAS DE LETREROS DE RUTA
    letrerosM1: Boolean,
    letrerosM2: Boolean,
    observacionesLetreros: String,

    unidadesM1: Boolean,
    unidadesM2: Boolean,
    observacionesU: String,

    decenasM1: Boolean,
    decenasM2: Boolean,
    observacionesDec: String,

    //PUERTA DE CABINA
    chapaM1: Boolean,
    chapaM2: Boolean,
    observacionesCh: String,

    bisagraM1: Boolean,
    bisagraM2: Boolean,
    observacionesBisagra: String,

    //PASAMANOS HORIZONTAL
    pasamanosHdM1: Boolean,
    pasamanosHdM2: Boolean,
    observacionesPhd: String,

    pasamanosHiM1: Boolean,
    pasamanosHiM2: Boolean,
    observacionesPhi: String,

    //PASAMANOS VERTICAL
    pasamanosVdM1: Boolean,
    pasamanosVdM2: Boolean,
    observacionesPvd: String,

    pasamanosViM1: Boolean,
    pasamanosViM2: Boolean,
    observacionesPvi: String,

    pisoSM1: Boolean,
    pisoSM2: Boolean,
    observacionesPsp: String,

    pisoAM1: Boolean,
    pisoAM2: Boolean,
    observacionesPArt: String,

    //TAPAS DE ZOCLOS
    tapasDM1: Boolean,
    tapasDM2: Boolean,
    observacionesTzd: String,

    tapasIM1: Boolean,
    tapasIM2: Boolean,
    observacionesTzi: String,

    //UMBRALES DE PUERTAS
    umbralesDM1: Boolean,
    umbralesDM2: Boolean,
    observacionesUd: String,

    umbralesIM1: Boolean,
    umbralesIM2: Boolean,
    observacionesUi: String,

    //FORROS DE SALON DE PASAJEROS
    forrosDM1: Boolean,
    forrosDM2: Boolean,
    observacionesFd: String,

    forrosSM1: Boolean,
    forrosSIM2: Boolean,
    observacionesFs: String,

    forrosIM1: Boolean,
    forrosIM2: Boolean,
    observacionesFi: String,

    //FORROS DE ARTICULACION
    forrosAdM1: Boolean,
    forrosAdM2: Boolean,
    observacionesFad: String,

    forrosAsM1: Boolean,
    forrosAsM2: Boolean,
    observacionesFas: String,

    forrosAiM1: Boolean,
    forrosAiM2: Boolean,
    observacionesFai: String,

    marcosM1: Boolean,
    marcosM2: Boolean,
    observacionesM: String,

    revisionM1: Boolean,
    revisionM2: Boolean,
    observacionesRev: String,

    //PARATREN MAGNETICO
    dispositivoM1: Boolean,
    dispositivoM2: Boolean,
    observacionesDisp: String,

    antenaM1: Boolean,
    antenaM2: Boolean,
    observacionesAntena: String,

    //VALVULAS DE CORTE NEUMATICO
    suspencionM1: Boolean,
    suspencionM2: Boolean,
    observacionesSs: String,

    acoplamientoM1: Boolean,
    acoplamientoM2: Boolean,
    observacionesAcN: String,

    pantografoM1: Boolean,
    observacionesVp: String,

    //REVISION DE COLCHONES
    revisionIM1: Boolean,
    revisionIM2: Boolean,
    observacionesRi: String,

    revisionDM1: Boolean,
    revisionDM2: Boolean,
    observacionesRd: String,

    observaciones: String,

    //MATERIAL UTILIZADO
    materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
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
module.exports = mongoose.model('memeB01', memeB01Schema);