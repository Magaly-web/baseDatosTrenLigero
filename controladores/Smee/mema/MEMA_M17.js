
const memaM17 = require('../../../models/smee/mema/MEMA_M17');

const mema_M17 = {};
//Metodos
// Obtiene todos los empleados
mema_M17.getmema_M17Data = async (req, res)=>{
    const {id} = req.params;

    const memam17 = await memaM17.findById(id)
    res.json(memam17)
}

// Editar un documento
mema_M17.editmema_M17Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM17 = {
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
         //M1
     //Motoventilador 1

        b1ahaef: req.body.b1ahaeff || '',
        b1ahal: req.body.b1ahall || '',
        b1ahap: req.body.b1ahapp || '',
        b1ahaa: req.body.b1ahaaa || '',

        b1toef: req.body.b1toeff || '',
        b1tol: req.body.b1toll || '',
        b1top: req.body.b1topp || '',
        b1toa: req.body.b1toaa || '',

        b1rpef: req.body.b1rpeff || '',
        b1rpl: req.body.b1rpll || '',
        b1rpp: req.body.b1rppp || '',
        b1rpa: req.body.b1rpaa || '',

        b1def: req.body.b1deff || '',
        b1dl: req.body.b1dll || '',
        b1dp: req.body.b1dpp || '',
        b1da: req.body.b1daa || '',

        b1bfef: req.body.b1bfeff || '',
        b1bfl: req.body.b1bfll || '',
        b1bfp: req.body.b1bfpp || '',
        b1bfa: req.body.b1bfaa || '',

        b1rfef: req.body.b1rfeff || '',
        b1rfl: req.body.b1rfll || '',
        b1rfp: req.body.b1rfpp || '',
        b1rfa: req.body.b1rfaa || '',

        b1pef: req.body.b1peff || '',
        b1pl: req.body.b1pll || '',
        b1pp: req.body.b1ppp || '',
        b1pa: req.body.b1paa || '',

        b1lpef: req.body.b1lpeff || '',
        b1lpl: req.body.b1lpll || '',
        b1lpp: req.body.b1lppp || '',
        b1lpa: req.body.b1lpaa || '',

        b1tdef: req.body.b1tdeff || '',
        b1tdl: req.body.b1tdll || '',
        b1tdp: req.body.b1tdpp || '',
        b1tda: req.body.b1tdaa || '',

        b1fbef: req.body.b1fbeff || '',
        b1fbl: req.body.b1fbll || '',
        b1fbp: req.body.b1fbpp || '',
        b1fba: req.body.b1fbaa || '',

        //-----------Motor1
        
        m1eef: req.body.m1eeff || '',
        m1el: req.body.m1ell || '',
        m1ep: req.body.m1epp || '',
        m1ea: req.body.m1eaa || '',

        m1ref: req.body.m1reff || '',
        m1rl: req.body.m1rll || '',
        m1rp: req.body.m1rpp || '',
        m1ra: req.body.m1raa || '',

        m1roef: req.body.m1roeff || '',
        m1rol: req.body.m1roll || '',
        m1rop: req.body.m1ropp || '',
        m1roa: req.body.m1roaa || '',

        m1tef: req.body.m1teff || '',
        m1tl: req.body.m1tll || '',
        m1tp: req.body.m1tpp || '',
        m1ta: req.body.m1taa || '',

        m1ttef: req.body.m1tteff || '',
        m1ttl: req.body.m1ttll || '',
        m1ttp: req.body.m1ttpp || '',
        m1tta: req.body.m1ttaa || '',

        m1cef: req.body.m1ceff || '',
        m1cl: req.body.m1cll || '',
        m1cp: req.body.m1cpp || '',
        m1ca: req.body.m1caa || '',

        m1aef: req.body.m1aeff || '',
        m1al: req.body.m1all || '',
        m1ap: req.body.m1app || '',
        m1aa: req.body.m1aaa || '',

        m1tcef: req.body.m1tceff || '',
        m1tcl: req.body.m1tcll || '',
        m1tcp: req.body.m1tcpp || '',
        m1tca: req.body.m1tcaa || '',

        m1coef: req.body.m1coeff || '',
        m1col: req.body.m1coll || '',
        m1cop: req.body.m1copp || '',
        m1coa: req.body.m1coaa || '',

        //Referencias electricas1

        r1ca: req.body.r1caa || '',
        r1rpm: req.body.r1rpmm || '',
        r1v: req.body.r1vv || '',
        r1fp: req.body.r1fpp || '',
        r1bdm: req.body.r1bdmm || '',
        r1nct: req.body.r1nct || '',
        
        al1: req.body.al11 || '',
        al2: req.body.al22 || '',
        al3: req.body.al33 || '',

        nl1: req.body.nl11 || '',
        nl2: req.body.nl22 || '',
        nl3: req.body.nl33 || '',

        idl2l1: req.body.idl2l11 || '',
        idl3l2: req.body.idl3l22 || '',
        idl1l3: req.body.idl1l33 || '',

        ampl1: req.body.ampl11 || '',
        ampl2: req.body.ampl22 || '',
        ampl3: req.body.ampl33 || '',

        obs2: req.body.obs22 || '',

        //Motoventilador 2
        //Bastidor 1

        b2ahaef: req.body.b2ahaeff || '',
        b2ahal: req.body.b2ahall || '',
        b2ahap: req.body.b2ahapp || '',
        b2ahaa: req.body.b2ahaaa || '',

        b2toef: req.body.b2toeff || '',
        b2tol: req.body.b2toll || '',
        b2top: req.body.b2topp || '',
        b2toa: req.body.b2toaa || '',

        b2rpef: req.body.b2rpeff || '',
        b2rpl: req.body.b2rpll || '',
        b2rpp: req.body.b2rppp || '',
        b2rpa: req.body.b2rpaa || '',

        b2def: req.body.b2deff || '',
        b2dl: req.body.b2dll || '',
        b2dp: req.body.b2dpp || '',
        b2da: req.body.b2daa || '',

        b2bfef: req.body.b2bfeff || '',
        b2bfl: req.body.b2bfll || '',
        b2bfp: req.body.b2bfpp || '',
        b2bfa: req.body.b2bfaa || '',

        b2rfef: req.body.b2rfeff || '',
        b2rfl: req.body.b2rfll || '',
        b2rfp: req.body.b2rfpp || '',
        b2rfa: req.body.b2rfaa || '',

        b2pef: req.body.b2peff || '',
        b2pl: req.body.b2pll || '',
        b2pp: req.body.b2ppp || '',
        b2pa: req.body.b2paa || '',

        b2lpef: req.body.b2lpeff || '',
        b2lpl: req.body.b2lpll || '',
        b2lpp: req.body.b2lppp || '',
        b2lpa: req.body.b2lpaa || '',

        b2tdef: req.body.b2tdeff || '',
        b2tdl: req.body.b2tdll || '',
        b2tdp: req.body.b2tdpp || '',
        b2tda: req.body.b2tdaa || '',

        b2fbef: req.body.b2fbeff || '',
        b2fbl: req.body.b2fbll || '',
        b2fbp: req.body.b2fbpp || '',
        b2fba: req.body.b2fbaa || '',

        //-----------Motor1
        
        m2eef: req.body.m2eeff || '',
        m2el: req.body.m2ell || '',
        m2ep: req.body.m2epp || '',
        m2ea: req.body.m2eaa || '',

        m2ref: req.body.m2reff || '',
        m2rl: req.body.m2rll || '',
        m2rp: req.body.m2rpp || '',
        m2ra: req.body.m2raa || '',

        m2roef: req.body.m2roeff || '',
        m2rol: req.body.m2roll || '',
        m2rop: req.body.m2ropp || '',
        m2roa: req.body.m2roaa || '',

        m2tef: req.body.m2teff || '',
        m2tl: req.body.m2tll || '',
        m2tp: req.body.m2tpp || '',
        m2ta: req.body.m2taa || '',

        m2ttef: req.body.m2tteff || '',
        m2ttl: req.body.m2ttll || '',
        m2ttp: req.body.m2ttpp || '',
        m2tta: req.body.m2ttaa || '',

        m2cef: req.body.m2ceff || '',
        m2cl: req.body.m2cll || '',
        m2cp: req.body.m2cpp || '',
        m2ca: req.body.m2caa || '',

        m2aef: req.body.m2aeff || '',
        m2al: req.body.m2all || '',
        m2ap: req.body.m2app || '',
        m2aa: req.body.m2aaa || '',

        m2tcef: req.body.m2tceff || '',
        m2tcl: req.body.m2tcll || '',
        m2tcp: req.body.m2tcpp || '',
        m2tca: req.body.m2tcaa || '',

        m2coef: req.body.m2coeff || '',
        m2col: req.body.m2coll || '',
        m2cop: req.body.m2copp || '',
        m2coa: req.body.m2coaa || '',

        //Referencias electricas1

        r2ca: req.body.r2caa || '',
        r2rpm: req.body.r2rpmm || '',
        r2v: req.body.r2vv || '',
        r2fp: req.body.r2fpp || '',
        r2bdm: req.body.r2bdmm || '',
        r2nct: req.body.r2nct || '',
        
        a2l1: req.body.a2l11 || '',
        a2l2: req.body.a2l22 || '',
        a2l3: req.body.a2l33 || '',

        n2l1: req.body.n2l11 || '',
        n2l2: req.body.n2l22 || '',
        n2l3: req.body.n2l33 || '',

        id2l2l1: req.body.id2l2l11 || '',
        id2l3l2: req.body.id2l3l22 || '',
        id2l1l3: req.body.id2l1l33 || '',

        amp2l1: req.body.amp2l11 || '',
        amp2l2: req.body.amp2l22 || '',
        amp2l3: req.body.amp2l33 || '',

        obs3: req.body.obs33 || '',

        //Motoventilador 3

        b3ahaef: req.body.b3ahaeff || '',
        b3ahal: req.body.b3ahall || '',
        b3ahap: req.body.b3ahapp || '',
        b3ahaa: req.body.b3ahaaa || '',

        b3toef: req.body.b3toeff || '',
        b3tol: req.body.b3toll || '',
        b3top: req.body.b3topp || '',
        b3toa: req.body.b3toaa || '',

        b3rpef: req.body.b3rpeff || '',
        b3rpl: req.body.b3rpll || '',
        b3rpp: req.body.b3rppp || '',
        b3rpa: req.body.b3rpaa || '',

        b3def: req.body.b3deff || '',
        b3dl: req.body.b3dll || '',
        b3dp: req.body.b3dpp || '',
        b3da: req.body.b3daa || '',

        b3bfef: req.body.b3bfeff || '',
        b3bfl: req.body.b3bfll || '',
        b3bfp: req.body.b3bfpp || '',
        b3bfa: req.body.b3bfaa || '',

        b3rfef: req.body.b3rfeff || '',
        b3rfl: req.body.b3rfll || '',
        b3rfp: req.body.b3rfpp || '',
        b3rfa: req.body.b3rfaa || '',

        b3pef: req.body.b3peff || '',
        b3pl: req.body.b3pll || '',
        b3pp: req.body.b3ppp || '',
        b3pa: req.body.b3paa || '',

        b3lpef: req.body.b3lpeff || '',
        b3lpl: req.body.b3lpll || '',
        b3lpp: req.body.b3lppp || '',
        b3lpa: req.body.b3lpaa || '',

        b3tdef: req.body.b3tdeff || '',
        b3tdl: req.body.b3tdll || '',
        b3tdp: req.body.b3tdpp || '',
        b3tda: req.body.b3tdaa || '',

        b3fbef: req.body.b3fbeff || '',
        b3fbl: req.body.b3fbll || '',
        b3fbp: req.body.b3fbpp || '',
        b3fba: req.body.b3fbaa || '',

        //-----------Motor1
        
        m3eef: req.body.m3eeff || '',
        m3el: req.body.m3ell || '',
        m3ep: req.body.m3epp || '',
        m3ea: req.body.m3eaa || '',

        m3ref: req.body.m3reff || '',
        m3rl: req.body.m3rll || '',
        m3rp: req.body.m3rpp || '',
        m3ra: req.body.m3raa || '',

        m3roef: req.body.m3roeff || '',
        m3rol: req.body.m3roll || '',
        m3rop: req.body.m3ropp || '',
        m3roa: req.body.m3roaa || '',

        m3tef: req.body.m3teff || '',
        m3tl: req.body.m3tll || '',
        m3tp: req.body.m3tpp || '',
        m3ta: req.body.m3taa || '',

        m3ttef: req.body.m3tteff || '',
        m3ttl: req.body.m3ttll || '',
        m3ttp: req.body.m3ttpp || '',
        m3tta: req.body.m3ttaa || '',

        m3cef: req.body.m3ceff || '',
        m3cl: req.body.m3cll || '',
        m3cp: req.body.m3cpp || '',
        m3ca: req.body.m3caa || '',

        m3aef: req.body.m3aeff || '',
        m3al: req.body.m3all || '',
        m3ap: req.body.m3app || '',
        m3aa: req.body.m3aaa || '',

        m3tcef: req.body.m3tceff || '',
        m3tcl: req.body.m3tcll || '',
        m3tcp: req.body.m3tcpp || '',
        m3tca: req.body.m3tcaa || '',

        m3coef: req.body.m3coeff || '',
        m3col: req.body.m3coll || '',
        m3cop: req.body.m3copp || '',
        m3coa: req.body.m3coaa || '',

        //Referencias electricas1

        r3ca: req.body.r3caa || '',
        r3rpm: req.body.r3rpmm || '',
        r3v: req.body.r3vv || '',
        r3fp: req.body.r3fpp || '',
        r3bdm: req.body.r3bdmm || '',
        r3nct: req.body.r3nct || '',
        
        a3l1: req.body.a3l11 || '',
        a3l2: req.body.a3l22 || '',
        a3l3: req.body.a3l33 || '',

        n3l1: req.body.n3l11 || '',
        n3l2: req.body.n3l22 || '',
        n3l3: req.body.n3l33 || '',

        id3l2l1: req.body.id3l2l11 || '',
        id3l3l2: req.body.id3l3l22 || '',
        id3l1l3: req.body.id3l1l33 || '',

        amp3l1: req.body.amp3l11 || '',
        amp3l2: req.body.amp3l22 || '',
        amp3l3: req.body.amp3l33 || '',

        obs5: req.body.obs55 || '',

        //Motoventilador 4

        b4ahaef: req.body.b4ahaeff || '',
        b4ahal: req.body.b4ahall || '',
        b4ahap: req.body.b4ahapp || '',
        b4ahaa: req.body.b4ahaaa || '',

        b4toef: req.body.b4toeff || '',
        b4tol: req.body.b4toll || '',
        b4top: req.body.b4topp || '',
        b4toa: req.body.b4toaa || '',

        b4rpef: req.body.b4rpeff || '',
        b4rpl: req.body.b4rpll || '',
        b4rpp: req.body.b4rppp || '',
        b4rpa: req.body.b4rpaa || '',

        b4def: req.body.b4deff || '',
        b4dl: req.body.b4dll || '',
        b4dp: req.body.b4dpp || '',
        b4da: req.body.b4daa || '',

        b4bfef: req.body.b4bfeff || '',
        b4bfl: req.body.b4bfll || '',
        b4bfp: req.body.b4bfpp || '',
        b4bfa: req.body.b4bfaa || '',

        b4rfef: req.body.b4rfeff || '',
        b4rfl: req.body.b4rfll || '',
        b4rfp: req.body.b4rfpp || '',
        b4rfa: req.body.b4rfaa || '',

        b4pef: req.body.b4peff || '',
        b4pl: req.body.b4pll || '',
        b4pp: req.body.b4ppp || '',
        b4pa: req.body.b4paa || '',

        b4lpef: req.body.b4lpeff || '',
        b4lpl: req.body.b4lpll || '',
        b4lpp: req.body.b4lppp || '',
        b4lpa: req.body.b4lpaa || '',

        b4tdef: req.body.b4tdeff || '',
        b4tdl: req.body.b4tdll || '',
        b4tdp: req.body.b4tdpp || '',
        b4tda: req.body.b4tdaa || '',

        b4fbef: req.body.b4fbeff || '',
        b4fbl: req.body.b4fbll || '',
        b4fbp: req.body.b4fbpp || '',
        b4fba: req.body.b4fbaa || '',

        //-----------Motor1
        
        m4eef: req.body.m4eeff || '',
        m4el: req.body.m4ell || '',
        m4ep: req.body.m4epp || '',
        m4ea: req.body.m4eaa || '',

        m4ref: req.body.m4reff || '',
        m4rl: req.body.m4rll || '',
        m4rp: req.body.m4rpp || '',
        m4ra: req.body.m4raa || '',

        m4roef: req.body.m4roeff || '',
        m4rol: req.body.m4roll || '',
        m4rop: req.body.m4ropp || '',
        m4roa: req.body.m4roaa || '',

        m4tef: req.body.m4teff || '',
        m4tl: req.body.m4tll || '',
        m4tp: req.body.m4tpp || '',
        m4ta: req.body.m4taa || '',

        m4ttef: req.body.m4tteff || '',
        m4ttl: req.body.m4ttll || '',
        m4ttp: req.body.m4ttpp || '',
        m4tta: req.body.m4ttaa || '',

        m4cef: req.body.m4ceff || '',
        m4cl: req.body.m4cll || '',
        m4cp: req.body.m4cpp || '',
        m4ca: req.body.m4caa || '',

        m4aef: req.body.m4aeff || '',
        m4al: req.body.m4all || '',
        m4ap: req.body.m4app || '',
        m4aa: req.body.m4aaa || '',

        m4tcef: req.body.m4tceff || '',
        m4tcl: req.body.m4tcll || '',
        m4tcp: req.body.m4tcpp || '',
        m4tca: req.body.m4tcaa || '',

        m4coef: req.body.m4coeff || '',
        m4col: req.body.m4coll || '',
        m4cop: req.body.m4copp || '',
        m4coa: req.body.m4coaa || '',

        //Referencias electricas1

        r4ca: req.body.r4caa || '',
        r4rpm: req.body.r4rpmm || '',
        r4v: req.body.r4vv || '',
        r4fp: req.body.r4fpp || '',
        r4bdm: req.body.r4bdmm || '',
        r4nct: req.body.r4nct || '',
        
        a4l1: req.body.a4l11 || '',
        a4l2: req.body.a4l22 || '',
        a4l3: req.body.a4l33 || '',

        n4l1: req.body.n4l11 || '',
        n4l2: req.body.n4l22 || '',
        n4l3: req.body.n4l33 || '',

        id4l2l1: req.body.id4l2l11 || '',
        id4l3l2: req.body.id4l3l22 || '',
        id4l1l3: req.body.id4l1l33 || '',

        amp4l1: req.body.amp4l11 || '',
        amp4l2: req.body.amp4l22 || '',
        amp4l3: req.body.amp4l33 || '',

        obs5: req.body.obs55 || '',

        //Motoventilador 5

        b5ahaef: req.body.b5ahaeff || '',
        b5ahal: req.body.b5ahall || '',
        b5ahap: req.body.b5ahapp || '',
        b5ahaa: req.body.b5ahaaa || '',

        b5toef: req.body.b5toeff || '',
        b5tol: req.body.b5toll || '',
        b5top: req.body.b5topp || '',
        b5toa: req.body.b5toaa || '',

        b5rpef: req.body.b5rpeff || '',
        b5rpl: req.body.b5rpll || '',
        b5rpp: req.body.b5rppp || '',
        b5rpa: req.body.b5rpaa || '',

        b5def: req.body.b5deff || '',
        b5dl: req.body.b5dll || '',
        b5dp: req.body.b5dpp || '',
        b5da: req.body.b5daa || '',

        b5bfef: req.body.b5bfeff || '',
        b5bfl: req.body.b5bfll || '',
        b5bfp: req.body.b5bfpp || '',
        b5bfa: req.body.b5bfaa || '',

        b5rfef: req.body.b5rfeff || '',
        b5rfl: req.body.b5rfll || '',
        b5rfp: req.body.b5rfpp || '',
        b5rfa: req.body.b5rfaa || '',

        b5pef: req.body.b5peff || '',
        b5pl: req.body.b5pll || '',
        b5pp: req.body.b5ppp || '',
        b5pa: req.body.b5paa || '',

        b5lpef: req.body.b5lpeff || '',
        b5lpl: req.body.b5lpll || '',
        b5lpp: req.body.b5lppp || '',
        b5lpa: req.body.b5lpaa || '',

        b5tdef: req.body.b5tdeff || '',
        b5tdl: req.body.b5tdll || '',
        b5tdp: req.body.b5tdpp || '',
        b5tda: req.body.b5tdaa || '',

        b5fbef: req.body.b5fbeff || '',
        b5fbl: req.body.b5fbll || '',
        b5fbp: req.body.b5fbpp || '',
        b5fba: req.body.b5fbaa || '',

        //-----------Motor1
        
        m5eef: req.body.m5eeff || '',
        m5el: req.body.m5ell || '',
        m5ep: req.body.m5epp || '',
        m5ea: req.body.m5eaa || '',

        m5ref: req.body.m5reff || '',
        m5rl: req.body.m5rll || '',
        m5rp: req.body.m5rpp || '',
        m5ra: req.body.m5raa || '',

        m5roef: req.body.m5roeff || '',
        m5rol: req.body.m5roll || '',
        m5rop: req.body.m5ropp || '',
        m5roa: req.body.m5roaa || '',

        m5tef: req.body.m5teff || '',
        m5tl: req.body.m5tll || '',
        m5tp: req.body.m5tpp || '',
        m5ta: req.body.m5taa || '',

        m5ttef: req.body.m5tteff || '',
        m5ttl: req.body.m5ttll || '',
        m5ttp: req.body.m5ttpp || '',
        m5tta: req.body.m5ttaa || '',

        m5cef: req.body.m5ceff || '',
        m5cl: req.body.m5cll || '',
        m5cp: req.body.m5cpp || '',
        m5ca: req.body.m5caa || '',

        m5aef: req.body.m5aeff || '',
        m5al: req.body.m5all || '',
        m5ap: req.body.m5app || '',
        m5aa: req.body.m5aaa || '',

        m5tcef: req.body.m5tceff || '',
        m5tcl: req.body.m5tcll || '',
        m5tcp: req.body.m5tcpp || '',
        m5tca: req.body.m5tcaa || '',

        m5coef: req.body.m5coeff || '',
        m5col: req.body.m5coll || '',
        m5cop: req.body.m5copp || '',
        m5coa: req.body.m5coaa || '',

        //Referencias electricas1

        r5ca: req.body.r5caa || '',
        r5rpm: req.body.r5rpmm || '',
        r5v: req.body.r5vv || '',
        r5fp: req.body.r5fpp || '',
        r5bdm: req.body.r5bdmm || '',
        r5nct: req.body.r5nct || '',
        
        a5l1: req.body.a5l11 || '',
        a5l2: req.body.a5l22 || '',
        a5l3: req.body.a5l33 || '',

        n5l1: req.body.n5l11 || '',
        n5l2: req.body.n5l22 || '',
        n5l3: req.body.n5l33 || '',

        id5l2l1: req.body.id5l2l11 || '',
        id5l3l2: req.body.id5l3l22 || '',
        id5l1l3: req.body.id5l1l33 || '',

        amp5l1: req.body.amp5l11 || '',
        amp5l2: req.body.amp5l22 || '',
        amp5l3: req.body.amp5l33 || '',

        obs6: req.body.obs66 || '',

        //Motoventilador 6

        b6ahaef: req.body.b6ahaeff || '',
        b6ahal: req.body.b6ahall || '',
        b6ahap: req.body.b6ahapp || '',
        b6ahaa: req.body.b6ahaaa || '',

        b6toef: req.body.b6toeff || '',
        b6tol: req.body.b6toll || '',
        b6top: req.body.b6topp || '',
        b6toa: req.body.b6toaa || '',

        b6rpef: req.body.b6rpeff || '',
        b6rpl: req.body.b6rpll || '',
        b6rpp: req.body.b6rppp || '',
        b6rpa: req.body.b6rpaa || '',

        b6def: req.body.b6deff || '',
        b6dl: req.body.b6dll || '',
        b6dp: req.body.b6dpp || '',
        b6da: req.body.b6daa || '',

        b6bfef: req.body.b6bfeff || '',
        b6bfl: req.body.b6bfll || '',
        b6bfp: req.body.b6bfpp || '',
        b6bfa: req.body.b6bfaa || '',

        b6rfef: req.body.b6rfeff || '',
        b6rfl: req.body.b6rfll || '',
        b6rfp: req.body.b6rfpp || '',
        b6rfa: req.body.b6rfaa || '',

        b6pef: req.body.b6peff || '',
        b6pl: req.body.b6pll || '',
        b6pp: req.body.b6ppp || '',
        b6pa: req.body.b6paa || '',

        b6lpef: req.body.b6lpeff || '',
        b6lpl: req.body.b6lpll || '',
        b6lpp: req.body.b6lppp || '',
        b6lpa: req.body.b6lpaa || '',

        b6tdef: req.body.b6tdeff || '',
        b6tdl: req.body.b6tdll || '',
        b6tdp: req.body.b6tdpp || '',
        b6tda: req.body.b6tdaa || '',

        b6fbef: req.body.b6fbeff || '',
        b6fbl: req.body.b6fbll || '',
        b6fbp: req.body.b6fbpp || '',
        b6fba: req.body.b6fbaa || '',

        //-----------Motor1
        
        m6eef: req.body.m6eeff || '',
        m6el: req.body.m6ell || '',
        m6ep: req.body.m6epp || '',
        m6ea: req.body.m6eaa || '',

        m6ref: req.body.m6reff || '',
        m6rl: req.body.m6rll || '',
        m6rp: req.body.m6rpp || '',
        m6ra: req.body.m6raa || '',

        m6roef: req.body.m6roeff || '',
        m6rol: req.body.m6roll || '',
        m6rop: req.body.m6ropp || '',
        m6roa: req.body.m6roaa || '',

        m6tef: req.body.m6teff || '',
        m6tl: req.body.m6tll || '',
        m6tp: req.body.m6tpp || '',
        m6ta: req.body.m6taa || '',

        m6ttef: req.body.m6tteff || '',
        m6ttl: req.body.m6ttll || '',
        m6ttp: req.body.m6ttpp || '',
        m6tta: req.body.m6ttaa || '',

        m6cef: req.body.m6ceff || '',
        m6cl: req.body.m6cll || '',
        m6cp: req.body.m6cpp || '',
        m6ca: req.body.m6caa || '',

        m6aef: req.body.m6aeff || '',
        m6al: req.body.m6all || '',
        m6ap: req.body.m6app || '',
        m6aa: req.body.m6aaa || '',

        m6tcef: req.body.m6tceff || '',
        m6tcl: req.body.m6tcll || '',
        m6tcp: req.body.m6tcpp || '',
        m6tca: req.body.m6tcaa || '',

        m6coef: req.body.m6coeff || '',
        m6col: req.body.m6coll || '',
        m6cop: req.body.m6copp || '',
        m6coa: req.body.m6coaa || '',

        //Referencias electricas1

        r6ca: req.body.r6caa || '',
        r6rpm: req.body.r6rpmm || '',
        r6v: req.body.r6vv || '',
        r6fp: req.body.r6fpp || '',
        r6bdm: req.body.r6bdmm || '',
        r6nct: req.body.r6nct || '',
        
        a6l1: req.body.a6l11 || '',
        a6l2: req.body.a6l22 || '',
        a6l3: req.body.a6l33 || '',

        n6l1: req.body.n6l11 || '',
        n6l2: req.body.n6l22 || '',
        n6l3: req.body.n6l33 || '',

        id6l2l1: req.body.id6l2l11 || '',
        id6l3l2: req.body.id6l3l22 || '',
        id6l1l3: req.body.id6l1l33 || '',

        amp6l1: req.body.amp6l11 || '',
        amp6l2: req.body.amp6l22 || '',
        amp6l3: req.body.amp6l33 || '',

        obs7: req.body.obs77 || '',

        //Motoventilador 7

        b7ahaef: req.body.b7ahaeff || '',
        b7ahal: req.body.b7ahall || '',
        b7ahap: req.body.b7ahapp || '',
        b7ahaa: req.body.b7ahaaa || '',

        b7toef: req.body.b7toeff || '',
        b7tol: req.body.b7toll || '',
        b7top: req.body.b7topp || '',
        b7toa: req.body.b7toaa || '',

        b7rpef: req.body.b7rpeff || '',
        b7rpl: req.body.b7rpll || '',
        b7rpp: req.body.b7rppp || '',
        b7rpa: req.body.b7rpaa || '',

        b7def: req.body.b7deff || '',
        b7dl: req.body.b7dll || '',
        b7dp: req.body.b7dpp || '',
        b7da: req.body.b7daa || '',

        b7bfef: req.body.b7bfeff || '',
        b7bfl: req.body.b7bfll || '',
        b7bfp: req.body.b7bfpp || '',
        b7bfa: req.body.b7bfaa || '',

        b7rfef: req.body.b7rfeff || '',
        b7rfl: req.body.b7rfll || '',
        b7rfp: req.body.b7rfpp || '',
        b7rfa: req.body.b7rfaa || '',

        b7pef: req.body.b7peff || '',
        b7pl: req.body.b7pll || '',
        b7pp: req.body.b7ppp || '',
        b7pa: req.body.b7paa || '',

        b7lpef: req.body.b7lpeff || '',
        b7lpl: req.body.b7lpll || '',
        b7lpp: req.body.b7lppp || '',
        b7lpa: req.body.b7lpaa || '',

        b7tdef: req.body.b7tdeff || '',
        b7tdl: req.body.b7tdll || '',
        b7tdp: req.body.b7tdpp || '',
        b7tda: req.body.b7tdaa || '',

        b7fbef: req.body.b7fbeff || '',
        b7fbl: req.body.b7fbll || '',
        b7fbp: req.body.b7fbpp || '',
        b7fba: req.body.b7fbaa || '',

        //-----------Motor7
        
        m7eef: req.body.m7eeff || '',
        m7el: req.body.m7ell || '',
        m7ep: req.body.m7epp || '',
        m7ea: req.body.m7eaa || '',

        m7ref: req.body.m7reff || '',
        m7rl: req.body.m7rll || '',
        m7rp: req.body.m7rpp || '',
        m7ra: req.body.m7raa || '',

        m7roef: req.body.m7roeff || '',
        m7rol: req.body.m7roll || '',
        m7rop: req.body.m7ropp || '',
        m7roa: req.body.m7roaa || '',

        m7tef: req.body.m7teff || '',
        m7tl: req.body.m7tll || '',
        m7tp: req.body.m7tpp || '',
        m7ta: req.body.m7taa || '',

        m7ttef: req.body.m7tteff || '',
        m7ttl: req.body.m7ttll || '',
        m7ttp: req.body.m7ttpp || '',
        m7tta: req.body.m7ttaa || '',

        m7cef: req.body.m7ceff || '',
        m7cl: req.body.m7cll || '',
        m7cp: req.body.m7cpp || '',
        m7ca: req.body.m7caa || '',

        m7aef: req.body.m7aeff || '',
        m7al: req.body.m7all || '',
        m7ap: req.body.m7app || '',
        m7aa: req.body.m7aaa || '',

        m7tcef: req.body.m7tceff || '',
        m7tcl: req.body.m7tcll || '',
        m7tcp: req.body.m7tcpp || '',
        m7tca: req.body.m7tcaa || '',

        m7coef: req.body.m7coeff || '',
        m7col: req.body.m7coll || '',
        m7cop: req.body.m7copp || '',
        m7coa: req.body.m7coaa || '',

        //Referencias electricas7

        r7ca: req.body.r7caa || '',
        r7rpm: req.body.r7rpmm || '',
        r7v: req.body.r7vv || '',
        r7fp: req.body.r7fpp || '',
        r7bdm: req.body.r7bdmm || '',
        r7nct: req.body.r7nct || '',
        
        a7l1: req.body.a7l11 || '',
        a7l2: req.body.a7l22 || '',
        a7l3: req.body.a7l33 || '',

        n7l1: req.body.n7l11 || '',
        n7l2: req.body.n7l22 || '',
        n7l3: req.body.n7l33 || '',

        id7l2l1: req.body.id7l2l11 || '',
        id7l3l2: req.body.id7l3l22 || '',
        id7l1l3: req.body.id7l1l33 || '',

        amp7l1: req.body.amp7l11 || '',
        amp7l2: req.body.amp7l22 || '',
        amp7l3: req.body.amp7l33 || '',

        obs8: req.body.obs88 || '',
        //M2----------------------------------------------------------------------

        //Motoventilador 1

        m2b1ahaef: req.body.m2b1ahaeff || '',
        m2b1ahal: req.body.m2b1ahall || '',
        m2b1ahap: req.body.m2b1ahapp || '',
        m2b1ahaa: req.body.m2b1ahaaa || '',

        m2b1toef: req.body.m2b1toeff || '',
        m2b1tol: req.body.m2b1toll || '',
        m2b1top: req.body.m2b1topp || '',
        m2b1toa: req.body.m2b1toaa || '',

        m2b1rpef: req.body.m2b1rpeff || '',
        m2b1rpl: req.body.m2b1rpll || '',
        m2b1rpp: req.body.m2b1rppp || '',
        m2b1rpa: req.body.m2b1rpaa || '',

        m2b1def: req.body.m2b1deff || '',
        m2b1dl: req.body.m2b1dll || '',
        m2b1dp: req.body.m2b1dpp || '',
        m2b1da: req.body.m2b1daa || '',

        m2b1bfef: req.body.m2b1bfeff || '',
        m2b1bfl: req.body.m2b1bfll || '',
        m2b1bfp: req.body.m2b1bfpp || '',
        m2b1bfa: req.body.m2b1bfaa || '',

        m2b1rfef: req.body.m2b1rfeff || '',
        m2b1rfl: req.body.m2b1rfll || '',
        m2b1rfp: req.body.m2b1rfpp || '',
        m2b1rfa: req.body.m2b1rfaa || '',

        m2b1pef: req.body.m2b1peff || '',
        m2b1pl: req.body.m2b1pll || '',
        m2b1pp: req.body.m2b1ppp || '',
        m2b1pa: req.body.m2b1paa || '',

        m2b1lpef: req.body.m2b1lpeff || '',
        m2b1lpl: req.body.m2b1lpll || '',
        m2b1lpp: req.body.m2b1lppp || '',
        m2b1lpa: req.body.m2b1lpaa || '',

        m2b1tdef: req.body.m2b1tdeff || '',
        m2b1tdl: req.body.m2b1tdll || '',
        m2b1tdp: req.body.m2b1tdpp || '',
        m2b1tda: req.body.m2b1tdaa || '',

        m2b1fbef: req.body.m2b1fbeff || '',
        m2b1fbl: req.body.m2b1fbll || '',
        m2b1fbp: req.body.m2b1fbpp || '',
        m2b1fba: req.body.m2b1fbaa || '',

        //-----------Motor1
        
        m2m1eef: req.body.m2m1eeff || '',
        m2m1el: req.body.m2m1ell || '',
        m2m1ep: req.body.m2m1epp || '',
        m2m1ea: req.body.m2m1eaa || '',

        m2m1ref: req.body.m2m1reff || '',
        m2m1rl: req.body.m2m1rll || '',
        m2m1rp: req.body.m2m1rpp || '',
        m2m1ra: req.body.m2m1raa || '',

        m2m1roef: req.body.m2m1roeff || '',
        m2m1rol: req.body.m2m1roll || '',
        m2m1rop: req.body.m2m1ropp || '',
        m2m1roa: req.body.m2m1roaa || '',

        m2m1tef: req.body.m2m1teff || '',
        m2m1tl: req.body.m2m1tll || '',
        m2m1tp: req.body.m2m1tpp || '',
        m2m1ta: req.body.m2m1taa || '',

        m2m1ttef: req.body.m2m1tteff || '',
        m2m1ttl: req.body.m2m1ttll || '',
        m2m1ttp: req.body.m2m1ttpp || '',
        m2m1tta: req.body.m2m1ttaa || '',

        m2m1cef: req.body.m2m1ceff || '',
        m2m1cl: req.body.m2m1cll || '',
        m2m1cp: req.body.m2m1cpp || '',
        m2m1ca: req.body.m2m1caa || '',

        m2m1aef: req.body.m2m1aeff || '',
        m2m1al: req.body.m2m1all || '',
        m2m1ap: req.body.m2m1app || '',
        m2m1aa: req.body.m2m1aaa || '',

        m2m1tcef: req.body.m2m1tceff || '',
        m2m1tcl: req.body.m2m1tcll || '',
        m2m1tcp: req.body.m2m1tcpp || '',
        m2m1tca: req.body.m2m1tcaa || '',

        m2m1coef: req.body.m2m1coeff || '',
        m2m1col: req.body.m2m1coll || '',
        m2m1cop: req.body.m2m1copp || '',
        m2m1coa: req.body.m2m1coaa || '',

        //Referencias electricas1

        m2r1ca: req.body.m2r1caa || '',
        m2r1rpm: req.body.m2r1rpmm || '',
        m2r1v: req.body.m2r1vv || '',
        m2r1fp: req.body.m2r1fpp || '',
        m2r1bdm: req.body.m2r1bdmm || '',
        m2r1nct: req.body.m2r1nct || '',
        
        m2al1: req.body.m2al11 || '',
        m2al2: req.body.m2al22 || '',
        m2al3: req.body.m2al33 || '',

        m2nl1: req.body.m2nl11 || '',
        m2nl2: req.body.m2nl22 || '',
        m2nl3: req.body.m2nl33 || '',

        m2idl2l1: req.body.m2idl2l11 || '',
        m2idl3l2: req.body.m2idl3l22 || '',
        m2idl1l3: req.body.idl1l33 || '',

        m2ampl1: req.body.m2ampl11 || '',
        m2ampl2: req.body.m2ampl22 || '',
        m2ampl3: req.body.m2ampl33 || '',

        m2obs2: req.body.m2obs22 || '',

        //Motoventilador 2
        //Bastidor 1

        m2b2ahaef: req.body.m2b2ahaeff || '',
        m2b2ahal: req.body.m2b2ahall || '',
        m2b2ahap: req.body.m2b2ahapp || '',
        m2b2ahaa: req.body.m2b2ahaaa || '',

        m2b2toef: req.body.m2b2toeff || '',
        m2b2tol: req.body.m2b2toll || '',
        m2b2top: req.body.m2b2topp || '',
        m2b2toa: req.body.m2b2toaa || '',

        m2b2rpef: req.body.m2b2rpeff || '',
        m2b2rpl: req.body.m2b2rpll || '',
        m2b2rpp: req.body.m2b2rppp || '',
        m2b2rpa: req.body.m2b2rpaa || '',

        m2b2def: req.body.m2b2deff || '',
        m2b2dl: req.body.m2b2dll || '',
        m2b2dp: req.body.m2b2dpp || '',
        m2b2da: req.body.m2b2daa || '',

        m2b2bfef: req.body.m2b2bfeff || '',
        m2b2bfl: req.body.m2b2bfll || '',
        m2b2bfp: req.body.m2b2bfpp || '',
        m2b2bfa: req.body.m2b2bfaa || '',

        m2b2rfef: req.body.m2b2rfeff || '',
        m2b2rfl: req.body.m2b2rfll || '',
        m2b2rfp: req.body.m2b2rfpp || '',
        m2b2rfa: req.body.m2b2rfaa || '',

        m2b2pef: req.body.m2b2peff || '',
        m2b2pl: req.body.m2b2pll || '',
        m2b2pp: req.body.m2b2ppp || '',
        m2b2pa: req.body.m2b2paa || '',

        m2b2lpef: req.body.m2b2lpeff || '',
        m2b2lpl: req.body.m2b2lpll || '',
        m2b2lpp: req.body.m2b2lppp || '',
        m2b2lpa: req.body.m2b2lpaa || '',

        m2b2tdef: req.body.m2b2tdeff || '',
        m2b2tdl: req.body.m2b2tdll || '',
        m2b2tdp: req.body.m2b2tdpp || '',
        m2b2tda: req.body.m2b2tdaa || '',

        m2b2fbef: req.body.m2b2fbeff || '',
        m2b2fbl: req.body.m2b2fbll || '',
        m2b2fbp: req.body.m2b2fbpp || '',
        m2b2fba: req.body.m2b2fbaa || '',

        //-----------Motor1
        
        m2m2eef: req.body.m2m2eeff || '',
        m2m2el: req.body.m2m2ell || '',
        m2m2ep: req.body.m2m2epp || '',
        m2m2ea: req.body.m2m2eaa || '',

        m2m2ref: req.body.m2m2reff || '',
        m2m2rl: req.body.m2m2rll || '',
        m2m2rp: req.body.m2m2rpp || '',
        m2m2ra: req.body.m2m2raa || '',

        m2m2roef: req.body.m2m2roeff || '',
        m2m2rol: req.body.m2m2roll || '',
        m2m2rop: req.body.m2m2ropp || '',
        m2m2roa: req.body.m2m2roaa || '',

        m2m2tef: req.body.m2m2teff || '',
        m2m2tl: req.body.m2m2tll || '',
        m2m2tp: req.body.m2m2tpp || '',
        m2m2ta: req.body.m2m2taa || '',

        m2m2ttef: req.body.m2m2tteff || '',
        m2m2ttl: req.body.m2m2ttll || '',
        m2m2ttp: req.body.m2m2ttpp || '',
        m2m2tta: req.body.m2m2ttaa || '',

        m2m2cef: req.body.m2m2ceff || '',
        m2m2cl: req.body.m2m2cll || '',
        m2m2cp: req.body.m2m2cpp || '',
        m2m2ca: req.body.m2m2caa || '',

        m2m2aef: req.body.m2m2aeff || '',
        m2m2al: req.body.m2m2all || '',
        m2m2ap: req.body.m2m2app || '',
        m2m2aa: req.body.m2m2aaa || '',

        m2m2tcef: req.body.m2m2tceff || '',
        m2m2tcl: req.body.m2m2tcll || '',
        m2m2tcp: req.body.m2m2tcpp || '',
        m2m2tca: req.body.m2m2tcaa || '',

        m2m2coef: req.body.m2m2coeff || '',
        m2m2col: req.body.m2m2coll || '',
        m2m2cop: req.body.m2m2copp || '',
        m2m2coa: req.body.m2m2coaa || '',

        //Referencias electricas1

        m2r2ca: req.body.m2r2caa || '',
        m2r2rpm: req.body.m2r2rpmm || '',
        m2r2v: req.body.m2r2vv || '',
        m2r2fp: req.body.m2r2fpp || '',
        m2r2bdm: req.body.m2r2bdmm || '',
        m2r2nct: req.body.m2r2nct || '',
        
        m2a2l1: req.body.m2a2l11 || '',
        m2a2l2: req.body.m2a2l22 || '',
        m2a2l3: req.body.m2a2l33 || '',

        m2n2l1: req.body.m2n2l11 || '',
        m2n2l2: req.body.m2n2l22 || '',
        m2n2l3: req.body.m2n2l33 || '',

        m2id2l2l1: req.body.m2id2l2l11 || '',
        m2id2l3l2: req.body.m2id2l3l22 || '',
        m2id2l1l3: req.body.m2id2l1l33 || '',

        m2amp2l1: req.body.m2amp2l11 || '',
        m2amp2l2: req.body.m2amp2l22 || '',
        m2amp2l3: req.body.m2amp2l33 || '',

        m2obs3: req.body.m2obs33 || '',

        //Motoventilador 3

        m2b3ahaef: req.body.m2b3ahaeff || '',
        m2b3ahal: req.body.m2b3ahall || '',
        m2b3ahap: req.body.m2b3ahapp || '',
        m2b3ahaa: req.body.m2b3ahaaa || '',

        m2b3toef: req.body.m2b3toeff || '',
        m2b3tol: req.body.m2b3toll || '',
        m2b3top: req.body.m2b3topp || '',
        m2b3toa: req.body.m2b3toaa || '',

        m2b3rpef: req.body.m2b3rpeff || '',
        m2b3rpl: req.body.m2b3rpll || '',
        m2b3rpp: req.body.m2b3rppp || '',
        m2b3rpa: req.body.m2b3rpaa || '',

        m2b3def: req.body.m2b3deff || '',
        m2b3dl: req.body.m2b3dll || '',
        m2b3dp: req.body.m2b3dpp || '',
        m2b3da: req.body.m2b3daa || '',

        m2b3bfef: req.body.m2b3bfeff || '',
        m2b3bfl: req.body.m2b3bfll || '',
        m2b3bfp: req.body.m2b3bfpp || '',
        m2b3bfa: req.body.m2b3bfaa || '',

        m2b3rfef: req.body.m2b3rfeff || '',
        m2b3rfl: req.body.m2b3rfll || '',
        m2b3rfp: req.body.m2b3rfpp || '',
        m2b3rfa: req.body.m2b3rfaa || '',

        m2b3pef: req.body.m2b3peff || '',
        m2b3pl: req.body.m2b3pll || '',
        m2b3pp: req.body.m2b3ppp || '',
        m2b3pa: req.body.m2b3paa || '',

        m2b3lpef: req.body.m2b3lpeff || '',
        m2b3lpl: req.body.m2b3lpll || '',
        m2b3lpp: req.body.m2b3lppp || '',
        m2b3lpa: req.body.m2b3lpaa || '',

        m2b3tdef: req.body.m2b3tdeff || '',
        m2b3tdl: req.body.m2b3tdll || '',
        m2b3tdp: req.body.m2b3tdpp || '',
        m2b3tda: req.body.m2b3tdaa || '',

        m2b3fbef: req.body.m2b3fbeff || '',
        m2b3fbl: req.body.m2b3fbll || '',
        m2b3fbp: req.body.m2b3fbpp || '',
        m2b3fba: req.body.m2b3fbaa || '',

        //-----------Motor
        
        m2m3eef: req.body.m2m3eeff || '',
        m2m3el: req.body.m2m3ell || '',
        m2m3ep: req.body.m2m3epp || '',
        m2m3ea: req.body.m2m3eaa || '',

        m2m3ref: req.body.m2m3reff || '',
        m2m3rl: req.body.m2m3rll || '',
        m2m3rp: req.body.m2m3rpp || '',
        m2m3ra: req.body.m2m3raa || '',

        m2m3roef: req.body.m2m3roeff || '',
        m2m3rol: req.body.m2m3roll || '',
        m2m3rop: req.body.m2m3ropp || '',
        m2m3roa: req.body.m2m3roaa || '',

        m2m3tef: req.body.m2m3teff || '',
        m2m3tl: req.body.m2m3tll || '',
        m2m3tp: req.body.m2m3tpp || '',
        m2m3ta: req.body.m2m3taa || '',

        m2m3ttef: req.body.m2m3tteff || '',
        m2m3ttl: req.body.m2m3ttll || '',
        m2m3ttp: req.body.m2m3ttpp || '',
        m2m3tta: req.body.m2m3ttaa || '',

        m2m3cef: req.body.m2m3ceff || '',
        m2m3cl: req.body.m2m3cll || '',
        m2m3cp: req.body.m2m3cpp || '',
        m2m3ca: req.body.m2m3caa || '',

        m2m3aef: req.body.m2m3aeff || '',
        m2m3al: req.body.m2m3all || '',
        m2m3ap: req.body.m2m3app || '',
        m2m3aa: req.body.m2m3aaa || '',

        m2m3tcef: req.body.m2m3tceff || '',
        m2m3tcl: req.body.m2m3tcll || '',
        m2m3tcp: req.body.m2m3tcpp || '',
        m2m3tca: req.body.m2m3tcaa || '',

        m2m3coef: req.body.m2m3coeff || '',
        m2m3col: req.body.m2m3coll || '',
        m2m3cop: req.body.m2m3copp || '',
        m2m3coa: req.body.m2m3coaa || '',

        //Referencias electricas1

        m2r3ca: req.body.m2r3caa || '',
        m2r3rpm: req.body.m2r3rpmm || '',
        m2r3v: req.body.m2r3vv || '',
        m2r3fp: req.body.m2r3fpp || '',
        m2r3bdm: req.body.m2r3bdmm || '',
        m2r3nct: req.body.m2r3nct || '',
        
        m2a3l1: req.body.m2a3l11 || '',
        m2a3l2: req.body.m2a3l22 || '',
        m2a3l3: req.body.m2a3l33 || '',

        m2n3l1: req.body.m2n3l11 || '',
        m2n3l2: req.body.m2n3l22 || '',
        m2n3l3: req.body.m2n3l33 || '',

        m2id3l2l1: req.body.m2id3l2l11 || '',
        m2id3l3l2: req.body.m2id3l3l22 || '',
        m2id3l1l3: req.body.m2id3l1l33 || '',

        m2amp3l1: req.body.m2amp3l11 || '',
        m2amp3l2: req.body.m2amp3l22 || '',
        m2amp3l3: req.body.m2amp3l33 || '',

        m2obs5: req.body.m2obs55 || '',

        //Motoventilador 4

        m2b4ahaef: req.body.m2b4ahaeff || '',
        m2b4ahal: req.body.m2b4ahall || '',
        m2b4ahap: req.body.m2b4ahapp || '',
        m2b4ahaa: req.body.m2b4ahaaa || '',

        m2b4toef: req.body.m2b4toeff || '',
        m2b4tol: req.body.m2b4toll || '',
        m2b4top: req.body.m2b4topp || '',
        m2b4toa: req.body.m2b4toaa || '',

        m2b4rpef: req.body.m2b4rpeff || '',
        m2b4rpl: req.body.m2b4rpll || '',
        m2b4rpp: req.body.m2b4rppp || '',
        m2b4rpa: req.body.m2b4rpaa || '',

        m2b4def: req.body.m2b4deff || '',
        m2b4dl: req.body.m2b4dll || '',
        m2b4dp: req.body.m2b4dpp || '',
        m2b4da: req.body.m2b4daa || '',

        m2b4bfef: req.body.m2b4bfeff || '',
        m2b4bfl: req.body.m2b4bfll || '',
        m2b4bfp: req.body.m2b4bfpp || '',
        m2b4bfa: req.body.m2b4bfaa || '',

        m2b4rfef: req.body.m2b4rfeff || '',
        m2b4rfl: req.body.m2b4rfll || '',
        m2b4rfp: req.body.m2b4rfpp || '',
        m2b4rfa: req.body.m2b4rfaa || '',

        m2b4pef: req.body.m2b4peff || '',
        m2b4pl: req.body.m2b4pll || '',
        m2b4pp: req.body.m2b4ppp || '',
        m2b4pa: req.body.m2b4paa || '',

        m2b4lpef: req.body.m2b4lpeff || '',
        m2b4lpl: req.body.m2b4lpll || '',
        m2b4lpp: req.body.m2b4lppp || '',
        m2b4lpa: req.body.m2b4lpaa || '',

        m2b4tdef: req.body.m2b4tdeff || '',
        m2b4tdl: req.body.m2b4tdll || '',
        m2b4tdp: req.body.m2b4tdpp || '',
        m2b4tda: req.body.m2b4tdaa || '',

        m2b4fbef: req.body.m2b4fbeff || '',
        m2b4fbl: req.body.m2b4fbll || '',
        m2b4fbp: req.body.m2b4fbpp || '',
        m2b4fba: req.body.m2b4fbaa || '',

        //-----------Motor
        
        m2m4eef: req.body.m2m4eeff || '',
        m2m4el: req.body.m2m4ell || '',
        m2m4ep: req.body.m2m4epp || '',
        m2m4ea: req.body.m2m4eaa || '',

        m2m4ref: req.body.m2m4reff || '',
        m2m4rl: req.body.m2m4rll || '',
        m2m4rp: req.body.m2m4rpp || '',
        m2m4ra: req.body.m2m4raa || '',

        m2m4roef: req.body.m2m4roeff || '',
        m2m4rol: req.body.m2m4roll || '',
        m2m4rop: req.body.m2m4ropp || '',
        m2m4roa: req.body.m2m4roaa || '',

        m2m4tef: req.body.m2m4teff || '',
        m2m4tl: req.body.m2m4tll || '',
        m2m4tp: req.body.m2m4tpp || '',
        m2m4ta: req.body.m2m4taa || '',

        m2m4ttef: req.body.m2m4tteff || '',
        m2m4ttl: req.body.m2m4ttll || '',
        m2m4ttp: req.body.m2m4ttpp || '',
        m2m4tta: req.body.m2m4ttaa || '',

        m2m4cef: req.body.m2m4ceff || '',
        m2m4cl: req.body.m2m4cll || '',
        m2m4cp: req.body.m2m4cpp || '',
        m2m4ca: req.body.m2m4caa || '',

        m2m4aef: req.body.m2m4aeff || '',
        m2m4al: req.body.m2m4all || '',
        m2m4ap: req.body.m2m4app || '',
        m2m4aa: req.body.m2m4aaa || '',

        m2m4tcef: req.body.m2m4tceff || '',
        m2m4tcl: req.body.m2m4tcll || '',
        m2m4tcp: req.body.m2m4tcpp || '',
        m2m4tca: req.body.m2m4tcaa || '',

        m2m4coef: req.body.m2m4coeff || '',
        m2m4col: req.body.m2m4coll || '',
        m2m4cop: req.body.m2m4copp || '',
        m2m4coa: req.body.m2m4coaa || '',

        //Referencias electricas1

        m2r4ca: req.body.m2r4caa || '',
        m2r4rpm: req.body.m2r4rpmm || '',
        m2r4v: req.body.m2r4vv || '',
        m2r4fp: req.body.m2r4fpp || '',
        m2r4bdm: req.body.m2r4bdmm || '',
        m2r4nct: req.body.m2r4nct || '',
        
        m2a4l1: req.body.m2a4l11 || '',
        m2a4l2: req.body.m2a4l22 || '',
        m2a4l3: req.body.m2a4l33 || '',

        m2n4l1: req.body.m2n4l11 || '',
        m2n4l2: req.body.m2n4l22 || '',
        m2n4l3: req.body.m2n4l33 || '',

        m2id4l2l1: req.body.m2id4l2l11 || '',
        m2id4l3l2: req.body.m2id4l3l22 || '',
        m2id4l1l3: req.body.m2id4l1l33 || '',

        m2amp4l1: req.body.m2amp4l11 || '',
        m2amp4l2: req.body.m2amp4l22 || '',
        m2amp4l3: req.body.m2amp4l33 || '',

        m2obs5: req.body.m2obs55 || '',

        //Motoventilador 5

        m2b5ahaef: req.body.m2b5ahaeff || '',
        m2b5ahal: req.body.m2b5ahall || '',
        m2b5ahap: req.body.m2b5ahapp || '',
        m2b5ahaa: req.body.m2b5ahaaa || '',

        m2b5toef: req.body.m2b5toeff || '',
        m2b5tol: req.body.m2b5toll || '',
        m2b5top: req.body.m2b5topp || '',
        m2b5toa: req.body.m2b5toaa || '',

        m2b5rpef: req.body.m2b5rpeff || '',
        m2b5rpl: req.body.m2b5rpll || '',
        m2b5rpp: req.body.m2b5rppp || '',
        m2b5rpa: req.body.m2b5rpaa || '',

        m2b5def: req.body.m2b5deff || '',
        m2b5dl: req.body.m2b5dll || '',
        m2b5dp: req.body.m2b5dpp || '',
        m2b5da: req.body.m2b5daa || '',

        m2b5bfef: req.body.m2b5bfeff || '',
        m2b5bfl: req.body.m2b5bfll || '',
        m2b5bfp: req.body.m2b5bfpp || '',
        m2b5bfa: req.body.m2b5bfaa || '',

        m2b5rfef: req.body.m2b5rfeff || '',
        m2b5rfl: req.body.m2b5rfll || '',
        m2b5rfp: req.body.m2b5rfpp || '',
        m2b5rfa: req.body.m2b5rfaa || '',

        m2b5pef: req.body.m2b5peff || '',
        m2b5pl: req.body.m2b5pll || '',
        m2b5pp: req.body.m2b5ppp || '',
        m2b5pa: req.body.m2b5paa || '',

        m2b5lpef: req.body.m2b5lpeff || '',
        m2b5lpl: req.body.m2b5lpll || '',
        m2b5lpp: req.body.m2b5lppp || '',
        m2b5lpa: req.body.m2b5lpaa || '',

        m2b5tdef: req.body.m2b5tdeff || '',
        m2b5tdl: req.body.m2b5tdll || '',
        m2b5tdp: req.body.m2b5tdpp || '',
        m2b5tda: req.body.m2b5tdaa || '',

        m2b5fbef: req.body.m2b5fbeff || '',
        m2b5fbl: req.body.m2b5fbll || '',
        m2b5fbp: req.body.m2b5fbpp || '',
        m2b5fba: req.body.m2b5fbaa || '',

        //-----------Motor1
        
        m2m5eef: req.body.m2m5eeff || '',
        m2m5el: req.body.m2m5ell || '',
        m2m5ep: req.body.m2m5epp || '',
        m2m5ea: req.body.m2m5eaa || '',

        m2m5ref: req.body.m2m5reff || '',
        m2m5rl: req.body.m2m5rll || '',
        m2m5rp: req.body.m2m5rpp || '',
        m2m5ra: req.body.m2m5raa || '',

        m2m5roef: req.body.m2m5roeff || '',
        m2m5rol: req.body.m2m5roll || '',
        m2m5rop: req.body.m2m5ropp || '',
        m2m5roa: req.body.m2m5roaa || '',

        m2m5tef: req.body.m2m5teff || '',
        m2m5tl: req.body.m2m5tll || '',
        m2m5tp: req.body.m2m5tpp || '',
        m2m5ta: req.body.m2m5taa || '',

        m2m5ttef: req.body.m2m5tteff || '',
        m2m5ttl: req.body.m2m5ttll || '',
        m2m5ttp: req.body.m2m5ttpp || '',
        m2m5tta: req.body.m2m5ttaa || '',

        m2m5cef: req.body.m2m5ceff || '',
        m2m5cl: req.body.m2m5cll || '',
        m2m5cp: req.body.m2m5cpp || '',
        m2m5ca: req.body.m2m5caa || '',

        m2m5aef: req.body.m2m5aeff || '',
        m2m5al: req.body.m2m5all || '',
        m2m5ap: req.body.m2m5app || '',
        m2m5aa: req.body.m2m5aaa || '',

        m2m5tcef: req.body.m2m5tceff || '',
        m2m5tcl: req.body.m2m5tcll || '',
        m2m5tcp: req.body.m2m5tcpp || '',
        m2m5tca: req.body.m2m5tcaa || '',

        m2m5coef: req.body.m2m5coeff || '',
        m2m5col: req.body.m2m5coll || '',
        m2m5cop: req.body.m2m5copp || '',
        m2m5coa: req.body.m2m5coaa || '',

        //Referencias electricas1

        m2r5ca: req.body.m2r5caa || '',
        m2r5rpm: req.body.m2r5rpmm || '',
        m2r5v: req.body.m2r5vv || '',
        m2r5fp: req.body.m2r5fpp || '',
        m2r5bdm: req.body.m2r5bdmm || '',
        m2r5nct: req.body.m2r5nct || '',
        
        m2a5l1: req.body.m2a5l11 || '',
        m2a5l2: req.body.m2a5l22 || '',
        m2a5l3: req.body.m2a5l33 || '',

        m2n5l1: req.body.m2n5l11 || '',
        m2n5l2: req.body.m2n5l22 || '',
        m2n5l3: req.body.m2n5l33 || '',

        m2id5l2l1: req.body.m2id5l2l11 || '',
        m2id5l3l2: req.body.m2id5l3l22 || '',
        m2id5l1l3: req.body.m2id5l1l33 || '',

        m2amp5l1: req.body.m2amp5l11 || '',
        m2amp5l2: req.body.m2amp5l22 || '',
        m2amp5l3: req.body.m2amp5l33 || '',

        m2obs6: req.body.m2obs66 || '',

        //Motoventilador 6

        m2b6ahaef: req.body.m2b6ahaeff || '',
        m2b6ahal: req.body.m2b6ahall || '',
        m2b6ahap: req.body.m2b6ahapp || '',
        m2b6ahaa: req.body.m2b6ahaaa || '',

        m2b6toef: req.body.m2b6toeff || '',
        m2b6tol: req.body.m2b6toll || '',
        m2b6top: req.body.m2b6topp || '',
        m2b6toa: req.body.m2b6toaa || '',

        m2b6rpef: req.body.m2b6rpeff || '',
        m2b6rpl: req.body.m2b6rpll || '',
        m2b6rpp: req.body.m2b6rppp || '',
        m2b6rpa: req.body.m2b6rpaa || '',

        m2b6def: req.body.m2b6deff || '',
        m2b6dl: req.body.m2b6dll || '',
        m2b6dp: req.body.m2b6dpp || '',
        m2b6da: req.body.m2b6daa || '',

        m2b6bfef: req.body.m2b6bfeff || '',
        m2b6bfl: req.body.m2b6bfll || '',
        m2b6bfp: req.body.m2b6bfpp || '',
        m2b6bfa: req.body.m2b6bfaa || '',

        m2b6rfef: req.body.m2b6rfeff || '',
        m2b6rfl: req.body.m2b6rfll || '',
        m2b6rfp: req.body.m2b6rfpp || '',
        m2b6rfa: req.body.m2b6rfaa || '',

        m2b6pef: req.body.m2b6peff || '',
        m2b6pl: req.body.m2b6pll || '',
        m2b6pp: req.body.m2b6ppp || '',
        m2b6pa: req.body.m2b6paa || '',

        m2b6lpef: req.body.m2b6lpeff || '',
        m2b6lpl: req.body.m2b6lpll || '',
        m2b6lpp: req.body.m2b6lppp || '',
        m2b6lpa: req.body.m2b6lpaa || '',

        m2b6tdef: req.body.m2b6tdeff || '',
        m2b6tdl: req.body.m2b6tdll || '',
        m2b6tdp: req.body.m2b6tdpp || '',
        m2b6tda: req.body.m2b6tdaa || '',

        m2b6fbef: req.body.m2b6fbeff || '',
        m2b6fbl: req.body.m2b6fbll || '',
        m2b6fbp: req.body.m2b6fbpp || '',
        m2b6fba: req.body.m2b6fbaa || '',

        //-----------Motor1
        
        m2m6eef: req.body.m2m6eeff || '',
        m2m6el: req.body.m2m6ell || '',
        m2m6ep: req.body.m2m6epp || '',
        m2m6ea: req.body.m2m6eaa || '',

        m2m6ref: req.body.m2m6reff || '',
        m2m6rl: req.body.m2m6rll || '',
        m2m6rp: req.body.m2m6rpp || '',
        m2m6ra: req.body.m2m6raa || '',

        m2m6roef: req.body.m2m6roeff || '',
        m2m6rol: req.body.m2m6roll || '',
        m2m6rop: req.body.m2m6ropp || '',
        m2m6roa: req.body.m2m6roaa || '',

        m2m6tef: req.body.m2m6teff || '',
        m2m6tl: req.body.m2m6tll || '',
        m2m6tp: req.body.m2m6tpp || '',
        m2m6ta: req.body.m2m6taa || '',

        m2m6ttef: req.body.m2m6tteff || '',
        m2m6ttl: req.body.m2m6ttll || '',
        m2m6ttp: req.body.m2m6ttpp || '',
        m2m6tta: req.body.m2m6ttaa || '',

        m2m6cef: req.body.m2m6ceff || '',
        m2m6cl: req.body.m2m6cll || '',
        m2m6cp: req.body.m2m6cpp || '',
        m2m6ca: req.body.m2m6caa || '',

        m2m6aef: req.body.m2m6aeff || '',
        m2m6al: req.body.m2m6all || '',
        m2m6ap: req.body.m2m6app || '',
        m2m6aa: req.body.m2m6aaa || '',

        m2m6tcef: req.body.m2m6tceff || '',
        m2m6tcl: req.body.m2m6tcll || '',
        m2m6tcp: req.body.m2m6tcpp || '',
        m2m6tca: req.body.m2m6tcaa || '',

        m2m6coef: req.body.m2m6coeff || '',
        m2m6col: req.body.m2m6coll || '',
        m2m6cop: req.body.m2m6copp || '',
        m2m6coa: req.body.m2m6coaa || '',

        //Referencias electricas1

        m2r6ca: req.body.m2r6caa || '',
        m2r6rpm: req.body.m2r6rpmm || '',
        m2r6v: req.body.m2r6vv || '',
        m2r6fp: req.body.m2r6fpp || '',
        m2r6bdm: req.body.m2r6bdmm || '',
        m2r6nct: req.body.m2r6nct || '',
        
        m2a6l1: req.body.m2a6l11 || '',
        m2a6l2: req.body.m2a6l22 || '',
        m2a6l3: req.body.m2a6l33 || '',

        m2n6l1: req.body.m2n6l11 || '',
        m2n6l2: req.body.m2n6l22 || '',
        m2n6l3: req.body.m2n6l33 || '',

        m2id6l2l1: req.body.m2id6l2l11 || '',
        m2id6l3l2: req.body.m2id6l3l22 || '',
        m2id6l1l3: req.body.m2id6l1l33 || '',

        m2amp6l1: req.body.m2amp6l11 || '',
        m2amp6l2: req.body.m2amp6l22 || '',
        m2amp6l3: req.body.m2amp6l33 || '',

        m2obs7: req.body.m2obs77 || '',

        //Motoventilador 7

        m2b7ahaef: req.body.m2b7ahaeff || '',
        m2b7ahal: req.body.m2b7ahall || '',
        m2b7ahap: req.body.m2b7ahapp || '',
        m2b7ahaa: req.body.m2b7ahaaa || '',

        m2b7toef: req.body.m2b7toeff || '',
        m2b7tol: req.body.m2b7toll || '',
        m2b7top: req.body.m2b7topp || '',
        m2b7toa: req.body.m2b7toaa || '',

        m2b7rpef: req.body.m2b7rpeff || '',
        m2b7rpl: req.body.m2b7rpll || '',
        m2b7rpp: req.body.m2b7rppp || '',
        m2b7rpa: req.body.m2b7rpaa || '',

        m2b7def: req.body.m2b7deff || '',
        m2b7dl: req.body.m2b7dll || '',
        m2b7dp: req.body.m2b7dpp || '',
        m2b7da: req.body.m2b7daa || '',

        m2b7bfef: req.body.m2b7bfeff || '',
        m2b7bfl: req.body.m2b7bfll || '',
        m2b7bfp: req.body.m2b7bfpp || '',
        m2b7bfa: req.body.m2b7bfaa || '',

        m2b7rfef: req.body.m2b7rfeff || '',
        m2b7rfl: req.body.m2b7rfll || '',
        m2b7rfp: req.body.m2b7rfpp || '',
        m2b7rfa: req.body.m2b7rfaa || '',

        m2b7pef: req.body.m2b7peff || '',
        m2b7pl: req.body.m2b7pll || '',
        m2b7pp: req.body.m2b7ppp || '',
        m2b7pa: req.body.m2b7paa || '',

        m2b7lpef: req.body.m2b7lpeff || '',
        m2b7lpl: req.body.m2b7lpll || '',
        m2b7lpp: req.body.m2b7lppp || '',
        m2b7lpa: req.body.m2b7lpaa || '',

        m2b7tdef: req.body.m2b7tdeff || '',
        m2b7tdl: req.body.m2b7tdll || '',
        m2b7tdp: req.body.m2b7tdpp || '',
        m2b7tda: req.body.m2b7tdaa || '',

        m2b7fbef: req.body.m2b7fbeff || '',
        m2b7fbl: req.body.m2b7fbll || '',
        m2b7fbp: req.body.m2b7fbpp || '',
        m2b7fba: req.body.m2b7fbaa || '',

        //-----------Motor1
        
        m2m7eef: req.body.m2m7eeff || '',
        m2m7el: req.body.m2m7ell || '',
        m2m7ep: req.body.m2m7epp || '',
        m2m7ea: req.body.m2m7eaa || '',

        m2m7ref: req.body.m2m7reff || '',
        m2m7rl: req.body.m2m7rll || '',
        m2m7rp: req.body.m2m7rpp || '',
        m2m7ra: req.body.m2m7raa || '',

        m2m7roef: req.body.m2m7roeff || '',
        m2m7rol: req.body.m2m7roll || '',
        m2m7rop: req.body.m2m7ropp || '',
        m2m7roa: req.body.m2m7roaa || '',

        m2m7tef: req.body.m2m7teff || '',
        m2m7tl: req.body.m2m7tll || '',
        m2m7tp: req.body.m2m7tpp || '',
        m2m7ta: req.body.m2m7taa || '',

        m2m7ttef: req.body.m2m7tteff || '',
        m2m7ttl: req.body.m2m7ttll || '',
        m2m7ttp: req.body.m2m7ttpp || '',
        m2m7tta: req.body.m2m7ttaa || '',

        m2m7cef: req.body.m2m7ceff || '',
        m2m7cl: req.body.m2m7cll || '',
        m2m7cp: req.body.m2m7cpp || '',
        m2m7ca: req.body.m2m7caa || '',

        m2m7aef: req.body.m2m7aeff || '',
        m2m7al: req.body.m2m7all || '',
        m2m7ap: req.body.m2m7app || '',
        m2m7aa: req.body.m2m7aaa || '',

        m2m7tcef: req.body.m2m7tceff || '',
        m2m7tcl: req.body.m2m7tcll || '',
        m2m7tcp: req.body.m2m7tcpp || '',
        m2m7tca: req.body.m2m7tcaa || '',

        m2m7coef: req.body.m2m7coeff || '',
        m2m7col: req.body.m2m7coll || '',
        m2m7cop: req.body.m2m7copp || '',
        m2m7coa: req.body.m2m7coaa || '',

        //Referencias electricas1

        m2r7ca: req.body.m2r7caa || '',
        m2r7rpm: req.body.m2r7rpmm || '',
        m2r7v: req.body.m2r7vv || '',
        m2r7fp: req.body.m2r7fpp || '',
        m2r7bdm: req.body.m2r7bdmm || '',
        m2r7nct: req.body.m2r7nct || '',
        
        m2a7l1: req.body.m2a7l11 || '',
        m2a7l2: req.body.m2a7l22 || '',
        m2a7l3: req.body.m2a7l33 || '',

        m2n7l1: req.body.m2n7l11 || '',
        m2n7l2: req.body.m2n7l22 || '',
        m2n7l3: req.body.m2n7l33 || '',

        m2id7l2l1: req.body.m2id7l2l11 || '',
        m2id7l3l2: req.body.m2id7l3l22 || '',
        m2id7l1l3: req.body.m2id7l1l33 || '',

        m2amp7l1: req.body.m2amp7l11 || '',
        m2amp7l2: req.body.m2amp7l22 || '',
        m2amp7l3: req.body.m2amp7l33 || '',

        m2obs8: req.body.m2obs88 || '',
        obs9: req.body.obs99 || '',
        
//-------------------------------

}
await memaM17.findByIdAndUpdate(id, { $set: mema_M17}, { new: true });
res.json({
    status: 'Employee update'
});

};

mema_M17.checkedApprovalByWorker = async (req, res) => {
const { id } = req.params;
const checked = {
    documentFormCurrentState: req.body
}
await memaM17.findByIdAndUpdate(id, { $set: checked }, { new: true });
res.json({
    status: 'worker state update'
})
}

mema_M17.getStateCheckedApprovalByWorker = async (req, res) => {
const { id } = req.params;
const state = await memaM17.findById(id, {
    "_id": 1, 
    "documentFormCurrentState": 1
})
res.json(state)
}

mema_M17.getAllmema_M17TypeM = async (req, res) => {
const memam17 = await memaM17.find({}, {
    "_id": 1, 
    "unidad": 1, 
    "documentFormCurrentState.approvalByWorker.checked": 1, 
    "documentFormCurrentState.approvalBySupervisor.checked": 1,
    "documentFormCurrentState.approvalByMannager.checked": 1,
    "documentFormCurrentState.loading": 1
})
res.json(memam17)
};

mema_M17.addNewHistoryrecord = async (req, res) => {
const { id } = req.params;
const historymemaM17New = {
    historyFile: req.body.historyFile || []
}
await memaM17.findByIdAndUpdate(id, { $set: historymemaM17New }, { new: true });
res.json({
    status: 'History update'
})
}

mema_M17.getHistoryOF = async (req, res) => {
const { id } = req.params;
const memam17 = await memaM17.findById(id, {
    "_id": 0, 
    "historyFile": 1
})
res.json(memam17)
}

mema_M17.createmema_M17TypeM = async (req, res) => {
const memam17 = new memaM17(req.body)

await memam17.save()
res.json({res: 'Ok'})
};

module.exports = mema_M17;
