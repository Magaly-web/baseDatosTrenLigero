const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM17Schema = new Schema({

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
     //----------------------------
        //M1
     //Motoventilador 1
     b1ahaef: String,
     b1ahal: String,
     b1ahap: String,
     b1ahaa: String,

     b1toef: String,
     b1tol: String,
     b1top: String,
     b1toa: String,

     b1rpef: String,
     b1rpl: String,
     b1rpp: String,
     b1rpa: String,

     b1def: String,
     b1dl: String,
     b1dp: String,
     b1da: String,

     b1bfef: String,
     b1bfl: String,
     b1bfp: String,
     b1bfa: String,

     b1rfef: String,
     b1rfl: String,
     b1rfp: String,
     b1rfa: String,

     b1pef: String,
     b1pl: String,
     b1pp: String,
     b1pa: String,

     b1lpef: String,
     b1lpl: String,
     b1lpp: String,
     b1lpa: String,

     b1tdef: String,
     b1tdl: String,
     b1tdp: String,
     b1tda: String,

     b1bfef: String,
     b1bfl: String,
     b1bfp: String,
     b1bfa: String,
     //-----------Motor

     m1eef: String,
     m1el: String,
     m1ep: String,
     m1ea: String,

     m1ref: String,
     m1rl: String,
     m1rp: String,
     m1ra: String,

     m1roef: String,
     m1rol: String,
     m1rop: String,
     m1roa: String,

     m1tef: String,
     m1tl: String,
     m1tp: String,
     m1ta: String,

     m1ttef: String,
     m1ttl: String,
     m1ttp: String,
     m1tta: String,

     m1cef: String,
     m1cl: String,
     m1cp: String,
     m1ca: String,

     m1aef: String,
     m1al: String,
     m1ap: String,
     m1aa: String,

     m1tcef: String,
     m1tcl: String,
     m1tcp: String,
     m1tca: String,

     m1coef: String,
     m1col: String,
     m1cop: String,
     m1coa: String,

     //Referencias electricas
     r1ca: String,
     r1rpm: String,
     r1v: String,
     r1fp: String,
     r1bdm: String,
     r1nct: String,

     al1: String,
     al2: String,
     al3: String,

     nl1: String,
     nl2: String,
     nl3: String,

     idl1l3: String,
     idl2l1: String,
     idl3l2: String,

     ampl1: String,
     ampl2: String,
     ampl3: String,

     obs2: String,
     
     //Motor ventilador 2

     b2ahaef: String,
     b2ahal: String,
     b2ahap: String,
     b2ahaa: String,

     b2toef: String,
     b2tol: String,
     b2top: String,
     b2toa: String,

     b2rpef: String,
     b2rpl: String,
     b2rpp: String,
     b2rpa: String,

     b2def: String,
     b2dl: String,
     b2dp: String,
     b2da: String,

     b2bfef: String,
     b2bfl: String,
     b2bfp: String,
     b2bfa: String,

     b2rfef: String,
     b2rfl: String,
     b2rfp: String,
     b2rfa: String,

     b2pef: String,
     b2pl: String,
     b2pp: String,
     b2pa: String,

     b2lpef: String,
     b2lpl: String,
     b2lpp: String,
     b2lpa: String,

     b2tdef: String,
     b2tdl: String,
     b2tdp: String,
     b2tda: String,

     b2tdef: String,
     b2tdl: String,
     b2tdp: String,
     b2tda: String,
     //-----------Motor

     m2eef: String,
     m2el: String,
     m2ep: String,
     m2ea: String,

     m2ref: String,
     m2rl: String,
     m2rp: String,
     m2ra: String,

     m2roef: String,
     m2rol: String,
     m2rop: String,
     m2roa: String,

     m2tef: String,
     m2tl: String,
     m2tp: String,
     m2ta: String,

     m2ttef: String,
     m2ttl: String,
     m2ttp: String,
     m2tta: String,

     m2cef: String,
     m2cl: String,
     m2cp: String,
     m2ca: String,

     m2aef: String,
     m2al: String,
     m2ap: String,
     m2aa: String,

     m2tcef: String,
     m2tcl: String,
     m2tcp: String,
     m2tca: String,

     m2coef: String,
     m2col: String,
     m2cop: String,
     m2coa: String,

     //Referencias electricas
     r2ca: String,
     r2rpm: String,
     r2v: String,
     r2fp: String,
     r2bdm: String,
     r2nct: String,

     a2l1: String,
     a2l2: String,
     a2l3: String,

     n2l1: String,
     n2l2: String,
     n2l3: String,

     id2l1l3: String,
     id2l2l1: String,
     id2l3l2: String,

     amp2l1: String,
     amp2l2: String,
     amp2l3: String,

     obs3: String,

     //Motor ventilador 3
     b3ahaef: String,
     b3ahal: String,
     b3ahap: String,
     b3ahaa: String,

     b3toef: String,
     b3tol: String,
     b3top: String,
     b3toa: String,

     b3rpef: String,
     b3rpl: String,
     b3rpp: String,
     b3rpa: String,

     b3def: String,
     b3dl: String,
     b3dp: String,
     b3da: String,

     b3bfef: String,
     b3bfl: String,
     b3bfp: String,
     b3bfa: String,

     b3rfef: String,
     b3rfl: String,
     b3rfp: String,
     b3rfa: String,

     b3pef: String,
     b3pl: String,
     b3pp: String,
     b3pa: String,

     b3lpef: String,
     b3lpl: String,
     b3lpp: String,
     b3lpa: String,

     b3tdef: String,
     b3tdl: String,
     b3tdp: String,
     b3tda: String,

     b3tdef: String,
     b3tdl: String,
     b3tdp: String,
     b3tda: String,
     //-----------Motor

     m3eef: String,
     m3el: String,
     m3ep: String,
     m3ea: String,

     m3ref: String,
     m3rl: String,
     m3rp: String,
     m3ra: String,

     m3roef: String,
     m3rol: String,
     m3rop: String,
     m3roa: String,

     m3tef: String,
     m3tl: String,
     m3tp: String,
     m3ta: String,

     m3ttef: String,
     m3ttl: String,
     m3ttp: String,
     m3tta: String,

     m3cef: String,
     m3cl: String,
     m3cp: String,
     m3ca: String,

     m3aef: String,
     m3al: String,
     m3ap: String,
     m3aa: String,

     m3tcef: String,
     m3tcl: String,
     m3tcp: String,
     m3tca: String,

     m3coef: String,
     m3col: String,
     m3cop: String,
     m3coa: String,

     //Referencias electricas
     r3ca: String,
     r3rpm: String,
     r3v: String,
     r3fp: String,
     r3bdm: String,
     r3nct: String,

     a3l1: String,
     a3l2: String,
     a3l3: String,

     n3l1: String,
     n3l2: String,
     n3l3: String,

     id3l1l3: String,
     id3l2l1: String,
     id3l3l2: String,

     amp3l1: String,
     amp3l2: String,
     amp3l3: String,

     obs4: String,

     //Motor ventilador 4

     b4ahaef: String,
     b4ahal: String,
     b4ahap: String,
     b4ahaa: String,

     b4toef: String,
     b4tol: String,
     b4top: String,
     b4toa: String,

     b4rpef: String,
     b4rpl: String,
     b4rpp: String,
     b4rpa: String,

     b4def: String,
     b4dl: String,
     b4dp: String,
     b4da: String,

     b4bfef: String,
     b4bfl: String,
     b4bfp: String,
     b4bfa: String,

     b4rfef: String,
     b4rfl: String,
     b4rfp: String,
     b4rfa: String,

     b4pef: String,
     b4pl: String,
     b4pp: String,
     b4pa: String,

     b4lpef: String,
     b4lpl: String,
     b4lpp: String,
     b4lpa: String,

     b4tdef: String,
     b4tdl: String,
     b4tdp: String,
     b4tda: String,

     b4tdef: String,
     b4tdl: String,
     b4tdp: String,
     b4tda: String,
     //-----------Motor

     m4eef: String,
     m4el: String,
     m4ep: String,
     m4ea: String,

     m4ref: String,
     m4rl: String,
     m4rp: String,
     m4ra: String,

     m4roef: String,
     m4rol: String,
     m4rop: String,
     m4roa: String,

     m4tef: String,
     m4tl: String,
     m4tp: String,
     m4ta: String,

     m4ttef: String,
     m4ttl: String,
     m4ttp: String,
     m4tta: String,

     m4cef: String,
     m4cl: String,
     m4cp: String,
     m4ca: String,

     m4aef: String,
     m4al: String,
     m4ap: String,
     m4aa: String,

     m4tcef: String,
     m4tcl: String,
     m4tcp: String,
     m4tca: String,

     m4coef: String,
     m4col: String,
     m4cop: String,
     m4coa: String,

     //Referencias electricas
     r4ca: String,
     r4rpm: String,
     r4v: String,
     r4fp: String,
     r4bdm: String,
     r4nct: String,

     a4l1: String,
     a4l2: String,
     a4l3: String,

     n4l1: String,
     n4l2: String,
     n4l3: String,

     id4l1l3: String,
     id4l2l1: String,
     id4l3l2: String,

     amp4l1: String,
     amp4l2: String,
     amp4l3: String,

     obs5: String,



     //Motor ventilador 5

     b5ahaef: String,
     b5ahal: String,
     b5ahap: String,
     b5ahaa: String,

     b5toef: String,
     b5tol: String,
     b5top: String,
     b5toa: String,

     b5rpef: String,
     b5rpl: String,
     b5rpp: String,
     b5rpa: String,

     b5def: String,
     b5dl: String,
     b5dp: String,
     b5da: String,

     b5bfef: String,
     b5bfl: String,
     b5bfp: String,
     b5bfa: String,

     b5rfef: String,
     b5rfl: String,
     b5rfp: String,
     b5rfa: String,

     b5pef: String,
     b5pl: String,
     b5pp: String,
     b5pa: String,

     b5lpef: String,
     b5lpl: String,
     b5lpp: String,
     b5lpa: String,

     b5tdef: String,
     b5tdl: String,
     b5tdp: String,
     b5tda: String,

     b5tdef: String,
     b5tdl: String,
     b5tdp: String,
     b5tda: String,
     //-----------Motor

     m5eef: String,
     m5el: String,
     m5ep: String,
     m5ea: String,

     m5ref: String,
     m5rl: String,
     m5rp: String,
     m5ra: String,

     m5roef: String,
     m5rol: String,
     m5rop: String,
     m5roa: String,

     m5tef: String,
     m5tl: String,
     m5tp: String,
     m5ta: String,

     m5ttef: String,
     m5ttl: String,
     m5ttp: String,
     m5tta: String,

     m5cef: String,
     m5cl: String,
     m5cp: String,
     m5ca: String,

     m5aef: String,
     m5al: String,
     m5ap: String,
     m5aa: String,

     m5tcef: String,
     m5tcl: String,
     m5tcp: String,
     m5tca: String,

     m5coef: String,
     m5col: String,
     m5cop: String,
     m5coa: String,

     //Referencias electricas
     r5ca: String,
     r5rpm: String,
     r5v: String,
     r5fp: String,
     r5bdm: String,
     r5nct: String,

     a5l1: String,
     a5l2: String,
     a5l3: String,

     n5l1: String,
     n5l2: String,
     n5l3: String,

     id5l1l3: String,
     id5l2l1: String,
     id5l3l2: String,

     amp5l1: String,
     amp5l2: String,
     amp5l3: String,

     obs6: String,

     //Motor ventilador 6

     b6ahaef: String,
     b6ahal: String,
     b6ahap: String,
     b6ahaa: String,

     b6toef: String,
     b6tol: String,
     b6top: String,
     b6toa: String,

     b6rpef: String,
     b6rpl: String,
     b6rpp: String,
     b6rpa: String,

     b6def: String,
     b6dl: String,
     b6dp: String,
     b6da: String,

     b6bfef: String,
     b6bfl: String,
     b6bfp: String,
     b6bfa: String,

     b6rfef: String,
     b6rfl: String,
     b6rfp: String,
     b6rfa: String,

     b6pef: String,
     b6pl: String,
     b6pp: String,
     b6pa: String,

     b6lpef: String,
     b6lpl: String,
     b6lpp: String,
     b6lpa: String,

     b6tdef: String,
     b6tdl: String,
     b6tdp: String,
     b6tda: String,

     b6tdef: String,
     b6tdl: String,
     b6tdp: String,
     b6tda: String,
     //-----------Motor

     m6eef: String,
     m6el: String,
     m6ep: String,
     m6ea: String,

     m6ref: String,
     m6rl: String,
     m6rp: String,
     m6ra: String,

     m6roef: String,
     m6rol: String,
     m6rop: String,
     m6roa: String,

     m6tef: String,
     m6tl: String,
     m6tp: String,
     m6ta: String,

     m6ttef: String,
     m6ttl: String,
     m6ttp: String,
     m6tta: String,

     m6cef: String,
     m6cl: String,
     m6cp: String,
     m6ca: String,

     m6aef: String,
     m6al: String,
     m6ap: String,
     m6aa: String,

     m6tcef: String,
     m6tcl: String,
     m6tcp: String,
     m6tca: String,

     m6coef: String,
     m6col: String,
     m6cop: String,
     m6coa: String,

     //Referencias electricas
     r6ca: String,
     r6rpm: String,
     r6v: String,
     r6fp: String,
     r6bdm: String,
     r6nct: String,

     a6l1: String,
     a6l2: String,
     a6l3: String,

     n6l1: String,
     n6l2: String,
     n6l3: String,

     id6l1l3: String,
     id6l2l1: String,
     id6l3l2: String,

     amp6l1: String,
     amp6l2: String,
     amp6l3: String,

     obs7: String,


     //Motor ventilador 7

     b7ahaef: String,
     b7ahal: String,
     b7ahap: String,
     b7ahaa: String,

     b7toef: String,
     b7tol: String,
     b7top: String,
     b7toa: String,

     b7rpef: String,
     b7rpl: String,
     b7rpp: String,
     b7rpa: String,

     b7def: String,
     b7dl: String,
     b7dp: String,
     b7da: String,

     b7bfef: String,
     b7bfl: String,
     b7bfp: String,
     b7bfa: String,

     b7rfef: String,
     b7rfl: String,
     b7rfp: String,
     b7rfa: String,

     b7pef: String,
     b7pl: String,
     b7pp: String,
     b7pa: String,

     b7lpef: String,
     b7lpl: String,
     b7lpp: String,
     b7lpa: String,

     b7tdef: String,
     b7tdl: String,
     b7tdp: String,
     b7tda: String,

     b7tdef: String,
     b7tdl: String,
     b7tdp: String,
     b7tda: String,
     //-----------Motor

     m7eef: String,
     m7el: String,
     m7ep: String,
     m7ea: String,

     m7ref: String,
     m7rl: String,
     m7rp: String,
     m7ra: String,

     m7roef: String,
     m7rol: String,
     m7rop: String,
     m7roa: String,

     m7tef: String,
     m7tl: String,
     m7tp: String,
     m7ta: String,

     m7ttef: String,
     m7ttl: String,
     m7ttp: String,
     m7tta: String,

     m7cef: String,
     m7cl: String,
     m7cp: String,
     m7ca: String,

     m7aef: String,
     m7al: String,
     m7ap: String,
     m7aa: String,

     m7tcef: String,
     m7tcl: String,
     m7tcp: String,
     m7tca: String,

     m7coef: String,
     m7col: String,
     m7cop: String,
     m7coa: String,

     //Referencias electricas
     r7ca: String,
     r7rpm: String,
     r7v: String,
     r7fp: String,
     r7bdm: String,
     r7nct: String,

     a7l1: String,
     a7l2: String,
     a7l3: String,

     n7l1: String,
     n7l2: String,
     n7l3: String,

     id7l1l3: String,
     id7l2l1: String,
     id7l3l2: String,

     amp7l1: String,
     amp7l2: String,
     amp7l3: String,

     obs8: String,


     //M2----------------------------------------------------------------------

     //Motoventilador 1
     m2b1ahaef: String,
     m2b1ahal: String,
     m2b1ahap: String,
     m2b1ahaa: String,

     m2b1toef: String,
     m2b1tol: String,
     m2b1top: String,
     m2b1toa: String,

     m2b1rpef: String,
     m2b1rpl: String,
     m2b1rpp: String,
     m2b1rpa: String,

     m2b1def: String,
     m2b1dl: String,
     m2b1dp: String,
     m2b1da: String,

     m2b1bfef: String,
     m2b1bfl: String,
     m2b1bfp: String,
     m2b1bfa: String,

     m2b1rfef: String,
     m2b1rfl: String,
     m2b1rfp: String,
     m2b1rfa: String,

     m2b1pef: String,
     m2b1pl: String,
     m2b1pp: String,
     m2b1pa: String,

     m2b1lpef: String,
     m2b1lpl: String,
     m2b1lpp: String,
     m2b1lpa: String,

     m2b1tdef: String,
     m2b1tdl: String,
     m2b1tdp: String,
     m2b1tda: String,

     m2b1tdef: String,
     m2b1tdl: String,
     m2b1tdp: String,
     m2b1tda: String,
     //-----------Motor

     m2m1eef: String,
     m2m1el: String,
     m2m1ep: String,
     m2m1ea: String,

     m2m1ref: String,
     m2m1rl: String,
     m2m1rp: String,
     m2m1ra: String,

     m2m1roef: String,
     m2m1rol: String,
     m2m1rop: String,
     m2m1roa: String,

     m2m1tef: String,
     m2m1tl: String,
     m2m1tp: String,
     m2m1ta: String,

     m2m1ttef: String,
     m2m1ttl: String,
     m2m1ttp: String,
     m2m1tta: String,

     m2m1cef: String,
     m2m1cl: String,
     m2m1cp: String,
     m2m1ca: String,

     m2m1aef: String,
     m2m1al: String,
     m2m1ap: String,
     m2m1aa: String,

     m2m1tcef: String,
     m2m1tcl: String,
     m2m1tcp: String,
     m2m1tca: String,

     m2m1coef: String,
     m2m1col: String,
     m2m1cop: String,
     m2m1coa: String,

     //Referencias electricas
     m2r1ca: String,
     m2r1rpm: String,
     m2r1v: String,
     m2r1fp: String,
     m2r1bdm: String,
     m2r1nct: String,

     m2al1: String,
     m2al2: String,
     m2al3: String,

     m2nl1: String,
     m2nl2: String,
     m2nl3: String,

     m2idl1l3: String,
     m2idl2l1: String,
     m2idl3l2: String,

     m2ampl1: String,
     m2ampl2: String,
     m2ampl3: String,

     m2obs2: String,
     
     //Motor ventilador 2

     m2b2ahaef: String,
     m2b2ahal: String,
     m2b2ahap: String,
     m2b2ahaa: String,

     m2b2toef: String,
     m2b2tol: String,
     m2b2top: String,
     m2b2toa: String,

     m2b2rpef: String,
     m2b2rpl: String,
     m2b2rpp: String,
     m2b2rpa: String,

     m2b2def: String,
     m2b2dl: String,
     m2b2dp: String,
     m2b2da: String,

     m2b2bfef: String,
     m2b2bfl: String,
     m2b2bfp: String,
     m2b2bfa: String,

     m2b2rfef: String,
     m2b2rfl: String,
     m2b2rfp: String,
     m2b2rfa: String,

     m2b2pef: String,
     m2b2pl: String,
     m2b2pp: String,
     m2b2pa: String,

     m2b2lpef: String,
     m2b2lpl: String,
     m2b2lpp: String,
     m2b2lpa: String,

     m2b2tdef: String,
     m2b2tdl: String,
     m2b2tdp: String,
     m2b2tda: String,

     m2b2tdef: String,
     m2b2tdl: String,
     m2b2tdp: String,
     m2b2tda: String,
     //-----------Motor

     m2m2eef: String,
     m2m2el: String,
     m2m2ep: String,
     m2m2ea: String,

     m2m2ref: String,
     m2m2rl: String,
     m2m2rp: String,
     m2m2ra: String,

     m2m2roef: String,
     m2m2rol: String,
     m2m2rop: String,
     m2m2roa: String,

     m2m2tef: String,
     m2m2tl: String,
     m2m2tp: String,
     m2m2ta: String,

     m2m2ttef: String,
     m2m2ttl: String,
     m2m2ttp: String,
     m2m2tta: String,

     m2m2cef: String,
     m2m2cl: String,
     m2m2cp: String,
     m2m2ca: String,

     m2m2aef: String,
     m2m2al: String,
     m2m2ap: String,
     m2m2aa: String,

     m2m2tcef: String,
     m2m2tcl: String,
     m2m2tcp: String,
     m2m2tca: String,

     m2m2coef: String,
     m2m2col: String,
     m2m2cop: String,
     m2m2coa: String,

     //Referencias electricas
     m2r2ca: String,
     m2r2rpm: String,
     m2r2v: String,
     m2r2fp: String,
     m2r2bdm: String,
     m2r2nct: String,

     m2a2l1: String,
     m2a2l2: String,
     m2a2l3: String,

     m2n2l1: String,
     m2n2l2: String,
     m2n2l3: String,

     m2id2l1l3: String,
     m2id2l2l1: String,
     m2id2l3l2: String,

     m2amp2l1: String,
     m2amp2l2: String,
     m2amp2l3: String,

     m2obs3: String,



     //Motor ventilador 3

     m2b3ahaef: String,
     m2b3ahal: String,
     m2b3ahap: String,
     m2b3ahaa: String,

     m2b3toef: String,
     m2b3tol: String,
     m2b3top: String,
     m2b3toa: String,

     m2b3rpef: String,
     m2b3rpl: String,
     m2b3rpp: String,
     m2b3rpa: String,

     m2b3def: String,
     m2b3dl: String,
     m2b3dp: String,
     m2b3da: String,

     m2b3bfef: String,
     m2b3bfl: String,
     m2b3bfp: String,
     m2b3bfa: String,

     m2b3rfef: String,
     m2b3rfl: String,
     m2b3rfp: String,
     m2b3rfa: String,

     m2b3pef: String,
     m2b3pl: String,
     m2b3pp: String,
     m2b3pa: String,

     m2b3lpef: String,
     m2b3lpl: String,
     m2b3lpp: String,
     m2b3lpa: String,

     m2b3tdef: String,
     m2b3tdl: String,
     m2b3tdp: String,
     m2b3tda: String,

     m2b3tdef: String,
     m2b3tdl: String,
     m2b3tdp: String,
     m2b3tda: String,
     //-----------Motor

     m2m3eef: String,
     m2m3el: String,
     m2m3ep: String,
     m2m3ea: String,

     m2m3ref: String,
     m2m3rl: String,
     m2m3rp: String,
     m2m3ra: String,

     m2m3roef: String,
     m2m3rol: String,
     m2m3rop: String,
     m2m3roa: String,

     m2m3tef: String,
     m2m3tl: String,
     m2m3tp: String,
     m2m3ta: String,

     m2m3ttef: String,
     m2m3ttl: String,
     m2m3ttp: String,
     m2m3tta: String,

     m2m3cef: String,
     m2m3cl: String,
     m2m3cp: String,
     m2m3ca: String,

     m2m3aef: String,
     m2m3al: String,
     m2m3ap: String,
     m2m3aa: String,

     m2m3tcef: String,
     m2m3tcl: String,
     m2m3tcp: String,
     m2m3tca: String,

     m2m3coef: String,
     m2m3col: String,
     m2m3cop: String,
     m2m3coa: String,

     //Referencias electricas
     m2r3ca: String,
     m2r3rpm: String,
     m2r3v: String,
     m2r3fp: String,
     m2r3bdm: String,
     m2r3nct: String,

     m2a3l1: String,
     m2a3l2: String,
     m2a3l3: String,

     m2n3l1: String,
     m2n3l2: String,
     m2n3l3: String,

     m2id3l1l3: String,
     m2id3l2l1: String,
     m2id3l3l2: String,

     m2amp3l1: String,
     m2amp3l2: String,
     m2amp3l3: String,

     m2obs4: String,

     //Motor ventilador 4

     m2b4ahaef: String,
     m2b4ahal: String,
     m2b4ahap: String,
     m2b4ahaa: String,

     m2b4toef: String,
     m2b4tol: String,
     m2b4top: String,
     m2b4toa: String,

     m2b4rpef: String,
     m2b4rpl: String,
     m2b4rpp: String,
     m2b4rpa: String,

     m2b4def: String,
     m2b4dl: String,
     m2b4dp: String,
     m2b4da: String,

     m2b4bfef: String,
     m2b4bfl: String,
     m2b4bfp: String,
     m2b4bfa: String,

     m2b4rfef: String,
     m2b4rfl: String,
     m2b4rfp: String,
     m2b4rfa: String,

     m2b4pef: String,
     m2b4pl: String,
     m2b4pp: String,
     m2b4pa: String,

     m2b4lpef: String,
     m2b4lpl: String,
     m2b4lpp: String,
     m2b4lpa: String,

     m2b4tdef: String,
     m2b4tdl: String,
     m2b4tdp: String,
     m2b4tda: String,

     m2b4tdef: String,
     m2b4tdl: String,
     m2b4tdp: String,
     m2b4tda: String,
     //-----------Motor

     m2m4eef: String,
     m2m4el: String,
     m2m4ep: String,
     m2m4ea: String,

     m2m4ref: String,
     m2m4rl: String,
     m2m4rp: String,
     m2m4ra: String,

     m2m4roef: String,
     m2m4rol: String,
     m2m4rop: String,
     m2m4roa: String,

     m2m4tef: String,
     m2m4tl: String,
     m2m4tp: String,
     m2m4ta: String,

     m2m4ttef: String,
     m2m4ttl: String,
     m2m4ttp: String,
     m2m4tta: String,

     m2m4cef: String,
     m2m4cl: String,
     m2m4cp: String,
     m2m4ca: String,

     m2m4aef: String,
     m2m4al: String,
     m2m4ap: String,
     m2m4aa: String,

     m2m4tcef: String,
     m2m4tcl: String,
     m2m4tcp: String,
     m2m4tca: String,

     m2m4coef: String,
     m2m4col: String,
     m2m4cop: String,
     m2m4coa: String,

     //Referencias electricas
     m2r4ca: String,
     m2r4rpm: String,
     m2r4v: String,
     m2r4fp: String,
     m2r4bdm: String,
     m2r4nct: String,

     m2a4l1: String,
     m2a4l2: String,
     m2a4l3: String,

     m2n4l1: String,
     m2n4l2: String,
     m2n4l3: String,

     m2id4l1l3: String,
     m2id4l2l1: String,
     m2id4l3l2: String,

     m2amp4l1: String,
     m2amp4l2: String,
     m2amp4l3: String,

     m2obs5: String,

     //Motor ventilador 5

     m2b5ahaef: String,
     m2b5ahal: String,
     m2b5ahap: String,
     m2b5ahaa: String,

     m2b5toef: String,
     m2b5tol: String,
     m2b5top: String,
     m2b5toa: String,

     m2b5rpef: String,
     m2b5rpl: String,
     m2b5rpp: String,
     m2b5rpa: String,

     m2b5def: String,
     m2b5dl: String,
     m2b5dp: String,
     m2b5da: String,

     m2b5bfef: String,
     m2b5bfl: String,
     m2b5bfp: String,
     m2b5bfa: String,

     m2b5rfef: String,
     m2b5rfl: String,
     m2b5rfp: String,
     m2b5rfa: String,

     m2b5pef: String,
     m2b5pl: String,
     m2b5pp: String,
     m2b5pa: String,

     m2b5lpef: String,
     m2b5lpl: String,
     m2b5lpp: String,
     m2b5lpa: String,

     m2b5tdef: String,
     m2b5tdl: String,
     m2b5tdp: String,
     m2b5tda: String,

     m2b5tdef: String,
     m2b5tdl: String,
     m2b5tdp: String,
     m2b5tda: String,
     //-----------Motor

     m2m5eef: String,
     m2m5el: String,
     m2m5ep: String,
     m2m5ea: String,

     m2m5ref: String,
     m2m5rl: String,
     m2m5rp: String,
     m2m5ra: String,

     m2m5roef: String,
     m2m5rol: String,
     m2m5rop: String,
     m2m5roa: String,

     m2m5tef: String,
     m2m5tl: String,
     m2m5tp: String,
     m2m5ta: String,

     m2m5ttef: String,
     m2m5ttl: String,
     m2m5ttp: String,
     m2m5tta: String,

     m2m5cef: String,
     m2m5cl: String,
     m2m5cp: String,
     m2m5ca: String,

     m2m5aef: String,
     m2m5al: String,
     m2m5ap: String,
     m2m5aa: String,

     m2m5tcef: String,
     m2m5tcl: String,
     m2m5tcp: String,
     m2m5tca: String,

     m2m5coef: String,
     m2m5col: String,
     m2m5cop: String,
     m2m5coa: String,

     //Referencias electricas
     m2r5ca: String,
     m2r5rpm: String,
     m2r5v: String,
     m2r5fp: String,
     m2r5bdm: String,
     m2r5nct: String,

     m2a5l1: String,
     m2a5l2: String,
     m2a5l3: String,

     m2n5l1: String,
     m2n5l2: String,
     m2n5l3: String,

     m2id5l1l3: String,
     m2id5l2l1: String,
     m2id5l3l2: String,

     m2amp5l1: String,
     m2amp5l2: String,
     m2amp5l3: String,

     m2obs6: String,

     //Motor ventilador 6

     m2b6ahaef: String,
     m2b6ahal: String,
     m2b6ahap: String,
     m2b6ahaa: String,

     m2b6toef: String,
     m2b6tol: String,
     m2b6top: String,
     m2b6toa: String,

     m2b6rpef: String,
     m2b6rpl: String,
     m2b6rpp: String,
     m2b6rpa: String,

     m2b6def: String,
     m2b6dl: String,
     m2b6dp: String,
     m2b6da: String,

     m2b6bfef: String,
     m2b6bfl: String,
     m2b6bfp: String,
     m2b6bfa: String,

     m2b6rfef: String,
     m2b6rfl: String,
     m2b6rfp: String,
     m2b6rfa: String,

     m2b6pef: String,
     m2b6pl: String,
     m2b6pp: String,
     m2b6pa: String,

     m2b6lpef: String,
     m2b6lpl: String,
     m2b6lpp: String,
     m2b6lpa: String,

     m2b6tdef: String,
     m2b6tdl: String,
     m2b6tdp: String,
     m2b6tda: String,

     m2b6tdef: String,
     m2b6tdl: String,
     m2b6tdp: String,
     m2b6tda: String,
     //-----------Motor

     m2m6eef: String,
     m2m6el: String,
     m2m6ep: String,
     m2m6ea: String,

     m2m6ref: String,
     m2m6rl: String,
     m2m6rp: String,
     m2m6ra: String,

     m2m6roef: String,
     m2m6rol: String,
     m2m6rop: String,
     m2m6roa: String,

     m2m6tef: String,
     m2m6tl: String,
     m2m6tp: String,
     m2m6ta: String,

     m2m6ttef: String,
     m2m6ttl: String,
     m2m6ttp: String,
     m2m6tta: String,

     m2m6cef: String,
     m2m6cl: String,
     m2m6cp: String,
     m2m6ca: String,

     m2m6aef: String,
     m2m6al: String,
     m2m6ap: String,
     m2m6aa: String,

     m2m6tcef: String,
     m2m6tcl: String,
     m2m6tcp: String,
     m2m6tca: String,

     m2m6coef: String,
     m2m6col: String,
     m2m6cop: String,
     m2m6coa: String,

     //Referencias electricas
     m2r6ca: String,
     m2r6rpm: String,
     m2r6v: String,
     m2r6fp: String,
     m2r6bdm: String,
     m2r6nct: String,

     m2a6l1: String,
     m2a6l2: String,
     m2a6l3: String,

     m2n6l1: String,
     m2n6l2: String,
     m2n6l3: String,

     m2id6l1l3: String,
     m2id6l2l1: String,
     m2id6l3l2: String,

     m2amp6l1: String,
     m2amp6l2: String,
     m2amp6l3: String,

     m2obs7: String,


     //Motor ventilador 7

     m2b7ahaef: String,
     m2b7ahal: String,
     m2b7ahap: String,
     m2b7ahaa: String,

     m2b7toef: String,
     m2b7tol: String,
     m2b7top: String,
     m2b7toa: String,

     m2b7rpef: String,
     m2b7rpl: String,
     m2b7rpp: String,
     m2b7rpa: String,

     m2b7def: String,
     m2b7dl: String,
     m2b7dp: String,
     m2b7da: String,

     m2b7bfef: String,
     m2b7bfl: String,
     m2b7bfp: String,
     m2b7bfa: String,

     m2b7rfef: String,
     m2b7rfl: String,
     m2b7rfp: String,
     m2b7rfa: String,

     m2b7pef: String,
     m2b7pl: String,
     m2b7pp: String,
     m2b7pa: String,

     m2b7lpef: String,
     m2b7lpl: String,
     m2b7lpp: String,
     m2b7lpa: String,

     m2b7tdef: String,
     m2b7tdl: String,
     m2b7tdp: String,
     m2b7tda: String,

     m2b7tdef: String,
     m2b7tdl: String,
     m2b7tdp: String,
     m2b7tda: String,
     //-----------Motor

     m2m7eef: String,
     m2m7el: String,
     m2m7ep: String,
     m2m7ea: String,

     m2m7ref: String,
     m2m7rl: String,
     m2m7rp: String,
     m2m7ra: String,

     m2m7roef: String,
     m2m7rol: String,
     m2m7rop: String,
     m2m7roa: String,

     m2m7tef: String,
     m2m7tl: String,
     m2m7tp: String,
     m2m7ta: String,

     m2m7ttef: String,
     m2m7ttl: String,
     m2m7ttp: String,
     m2m7tta: String,

     m2m7cef: String,
     m2m7cl: String,
     m2m7cp: String,
     m2m7ca: String,

     m2m7aef: String,
     m2m7al: String,
     m2m7ap: String,
     m2m7aa: String,

     m2m7tcef: String,
     m2m7tcl: String,
     m2m7tcp: String,
     m2m7tca: String,

     m2m7coef: String,
     m2m7col: String,
     m2m7cop: String,
     m2m7coa: String,

     //Referencias electricas
     m2r7ca: String,
     m2r7rpm: String,
     m2r7v: String,
     m2r7fp: String,
     m2r7bdm: String,
     m2r7nct: String,

     m2a7l1: String,
     m2a7l2: String,
     m2a7l3: String,

     m2n7l1: String,
     m2n7l2: String,
     m2n7l3: String,

     m2id7l1l3: String,
     m2id7l2l1: String,
     m2id7l3l2: String,

     m2amp7l1: String,
     m2amp7l2: String,
     m2amp7l3: String,

     m2obs8: String,

     obs9: String,

     //----------------------------
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
  
  module.exports = mongoose.model('memaM17', memaM17Schema);
  