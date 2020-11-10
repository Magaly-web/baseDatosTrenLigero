'use strict'
var express = require('express'); //Cargar el modulo de express que nos permitira trabajar con las rutas
var bodyParser = require('body-parser');//Sirve para convertir las peticiones que llegan por post y convertirlo a un objeto javascript

var app =express();//Instancia de app

//CARGAR RUTAS
var user_routes =require('./routes/user');//carga la configuracion del controlador de usuarios
var memec01_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C01');
var memec02_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C02');

var memec03_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C03');

var memec04_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C04');
var memec041_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C041');
var memec05_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C05');

var memec06_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C06');

var memec07_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C07');
var memec08_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C08');
var memec09_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C09');
var memec10_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C10');

var memec11_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C11');

var memec12_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C12');

var memec13_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C13');

var memec14_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C14');

var memec141_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C141');

var memec15_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C15');

var memec16_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C16');

var memec17_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C17');

var memec18_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C18');

var memec19_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C19');

var memec20_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C20');

var memec21_routes = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C21');

//Mantenimiento mayor

var memam01_routes = require('./routes/smee/mema/MEMA_M01');

var memam02_routes = require('./routes/smee/mema/MEMA_M02');

var memam03_routes = require('./routes/smee/mema/MEMA_M03');

var memam04_routes = require('./routes/smee/mema/MEMA_M04');

var memam05_routes = require('./routes/smee/mema/MEMA_M05');

var memam06_routes = require('./routes/smee/mema/MEMA_M06');

var memam07_routes = require('./routes/smee/mema/MEMA_M07');

var memam08_routes = require('./routes/smee/mema/MEMA_M08');

var memam09_routes = require('./routes/smee/mema/MEMA_M09');

var memam10_routes = require('./routes/smee/mema/MEMA_M10');

var memam11_routes = require('./routes/smee/mema/MEMA_M11');

var memam12_routes = require('./routes/smee/mema/MEMA_M12');

var memam14_routes = require('./routes/smee/mema/MEMA_M14');

var memam15_routes = require('./routes/smee/mema/MEMA_M15');

var memam16_routes = require('./routes/smee/mema/MEMA_M16');

var memam17_routes = require('./routes/smee/mema/MEMA_M17');

var memam18_routes = require('./routes/smee/mema/MEMA_M18');

var memam19_routes = require('./routes/smee/mema/MEMA_M19');

var memam20_routes = require('./routes/smee/mema/MEMA_M20');

var memam21_routes = require('./routes/smee/mema/MEMA_M21');

var memam22_routes = require('./routes/smee/mema/MEMA_M22');

var memam23_routes = require('./routes/smee/mema/MEMA_M23');

var memam24_routes = require('./routes/smee/mema/MEMA_M24');

var memam25_routes = require('./routes/smee/mema/MEMA_M25');

var memam26_routes = require('./routes/smee/mema/MEMA_M26');


var memam27_routes = require('./routes/smee/mema/MEMA_M27');

var memam28_routes = require('./routes/smee/mema/MEMA_M28');

var memam29_routes = require('./routes/smee/mema/MEMA_M29');

var memam30_routes = require('./routes/smee/mema/MEMA_M30');

var memam31_routes = require('./routes/smee/mema/MEMA_M31');

var memam32_routes = require('./routes/smee/mema/MEMA_M32');

var memam33_routes = require('./routes/smee/mema/MEMA_M33');

var memam34_routes = require('./routes/smee/mema/MEMA_M34');

var memam35_routes = require('./routes/smee/mema/MEMA_M35');

var memam36_routes = require('./routes/smee/mema/MEMA_M36');

var memam37_routes = require('./routes/smee/mema/MEMA_M37');

var memam38_routes = require('./routes/smee/mema/MEMA_M38');

var memam39_routes = require('./routes/smee/mema/MEMA_M39');

var memam40_routes = require('./routes/smee/mema/MEMA_M40');

var memam41_routes = require('./routes/smee/mema/MEMA_M41');

//Mantenimiento tipo A*************************

var mpa01_routes = require('./routes/smee/SGMEE/TipoA/MP_A01');

var mpa02_routes = require('./routes/smee/SGMEE/TipoA/MP_A02');
var material_routes = require('./routes/Material/Materiales');

//Mantenimiento SISTEMATICO*************************
var alta_tension = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/aislarAltaTension');

var conectar_AT = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/conectarAltaTension');

var memeB01 = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B01');

var memeB01PS = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B01PS');

var memeB03 = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B03');

var memeB04 = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B04');

var memeB05_9 = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_9');

var memeB05_612 = require('./routes/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_612');

//************MAYOR */
var mmmaM01 = require('./routes/smm/mayor/MMMA_M01');
var mmmaM02 = require('./routes/smm/mayor/MMMA_M02');
var mmmaM03 = require('./routes/smm/mayor/MMMA_M03');
var mmmaM04_1 = require('./routes/smm/mayor/MMMA_M04_1');
var mmmaM04_2 = require('./routes/smm/mayor/MMMA_M04_2');
var mmmaM05 = require('./routes/smm/mayor/MMMA_M05');
var mmmaM06 = require('./routes/smm/mayor/MMMA_M06');
var mmmaM07 = require('./routes/smm/mayor/MMMA_M07');
var mmmaM08 = require('./routes/smm/mayor/MMMA_M08');
var mmmaM09 = require('./routes/smm/mayor/MMMA_M09');
var mmmaM10 = require('./routes/smm/mayor/MMMA_M10');
var mmmaM11 = require('./routes/smm/mayor/MMMA_M11');
var mmmaM12 = require('./routes/smm/mayor/MMMA_M12');
var mmmaM13 = require('./routes/smm/mayor/MMMA_M13');
var mmmaM14_1 = require('./routes/smm/mayor/MMMA_M14_1');
var mmmaM14_2 = require('./routes/smm/mayor/MMMA_M14_2');
var mmmaM15 = require('./routes/smm/mayor/MMMA_M15');
var mmmaM16 = require('./routes/smm/mayor/MMMA_M16');
var mmmaM17 = require('./routes/smm/mayor/MMMA_M17');
var mmmaM18_1 = require('./routes/smm/mayor/MMMA_M18_1');
var mmmaM18_2 = require('./routes/smm/mayor/MMMA_M18_2');
var mmmaM18_3 = require('./routes/smm/mayor/MMMA_M18_3');
var mmmaM18_4 = require('./routes/smm/mayor/MMMA_M18_4');
var mmmaM18_5 = require('./routes/smm/mayor/MMMA_M18_5');
var mmmaM18_6 = require('./routes/smm/mayor/MMMA_M18_6');
var mmmaM18_7 = require('./routes/smm/mayor/MMMA_M18_7');
var mmmaM18_8 = require('./routes/smm/mayor/MMMA_M18_8');
var mmmaM18_9 = require('./routes/smm/mayor/MMMA_M18_9');
var mmmaM18_10 = require('./routes/smm/mayor/MMMA_M18_10');
var mmmaM18_11 = require('./routes/smm/mayor/MMMA_M18_11');
var mmmaM18_12 = require('./routes/smm/mayor/MMMA_M18_12');
var mmmaM18_13 = require('./routes/smm/mayor/MMMA_M18_13');
var mmmaM18_14 = require('./routes/smm/mayor/MMMA_M18_14');
var mmmaM18_15 = require('./routes/smm/mayor/MMMA_M18_15');
var mmmaM19_1 = require('./routes/smm/mayor/MMMA_M19_1');
var mmmaM19_2 = require('./routes/smm/mayor/MMMA_M19_2');
var mmmaM19_4 = require('./routes/smm/mayor/MMMA_M19_4');
var mmmaM19_5 = require('./routes/smm/mayor/MMMA_M19_5');
var mmmaM19_6 = require('./routes/smm/mayor/MMMA_M19_6');
var mmmaM19_7 = require('./routes/smm/mayor/MMMA_M19_7');
var mmmaM19_8 = require('./routes/smm/mayor/MMMA_M19_8');
var mmmaM20 = require('./routes/smm/mayor/MMMA_M20');
var mmmaM21 = require('./routes/smm/mayor/MMMA_M21');
var mmmaM22 = require('./routes/smm/mayor/MMMA_M22');
var mmmaM23 = require('./routes/smm/mayor/MMMA_M23');
var mmmaM24 = require('./routes/smm/mayor/MMMA_M24');
var mmmaM25 = require('./routes/smm/mayor/MMMA_M25');
var mmmaM26 = require('./routes/smm/mayor/MMMA_M26');
var mmmaM27 = require('./routes/smm/mayor/MMMA_M27');
var mmmaM28 = require('./routes/smm/mayor/MMMA_M28');
var mmmaM29 = require('./routes/smm/mayor/MMMA_M29');
var mmmaM30 = require('./routes/smm/mayor/MMMA_M30');
var MMMA_M31_1 = require('./routes/smm/mayor/MMMA_M31_1');
var MMMA_M31_2 = require('./routes/smm/mayor/MMMA_M31_2');
var MMMA_M32 = require('./routes/smm/mayor/MMMA_M32');
var mmmaM33 = require('./routes/smm/mayor/MMMA_M33');
var mmmaM34 = require('./routes/smm/mayor/MMMA_M34');
var mmmaM35 = require('./routes/smm/mayor/MMMA_M35');
var mmmaM36 = require('./routes/smm/mayor/MMMA_M36');
var mmmaM37 = require('./routes/smm/mayor/MMMA_M37');
var mmmaM38 = require('./routes/smm/mayor/MMMA_M38');
var mmmaM39_1 = require('./routes/smm/mayor/MMMA_M39_1');
var mmmaM39_2 = require('./routes/smm/mayor/MMMA_M39_2');
var mmmaM40 = require('./routes/smm/mayor/MMMA_M40');
var mmmaM41_1 = require('./routes/smm/mayor/MMMA_M41_1');
var mmmaM41_2 = require('./routes/smm/mayor/MMMA_M41_2');
var mmmaM42 = require('./routes/smm/mayor/MMMA_M42');
var mmmaM43 = require('./routes/smm/mayor/MMMA_M43');
var mmmaM44 = require('./routes/smm/mayor/MMMA_M44');
var mmmaM45 = require('./routes/smm/mayor/MMMA_M45');
var mmmaM46 = require('./routes/smm/mayor/MMMA_M46');
var mmmaM47 = require('./routes/smm/mayor/MMMA_M47');
var mmmaM48 = require('./routes/smm/mayor/MMMA_M48');
var mmmaM49 = require('./routes/smm/mayor/MMMA_M49');
var mmmaM50 = require('./routes/smm/mayor/MMMA_M50');
var mmmaM51 = require('./routes/smm/mayor/MMMA_M51');
var mmmaM52 = require('./routes/smm/mayor/MMMA_M52');
var mmmaM53 = require('./routes/smm/mayor/MMMA_M53');
var mmmaM54 = require('./routes/smm/mayor/MMMA_M54');
var mmmaM55 = require('./routes/smm/mayor/MMMA_M55');
var mmmaM56 = require('./routes/smm/mayor/MMMA_M56');
var mmmaM57_1 = require('./routes/smm/mayor/MMMA_M57_1');
var mmmaM57_2 = require('./routes/smm/mayor/MMMA_M57_2');
var mmmaM58 = require('./routes/smm/mayor/MMMA_M58');
var mmmaM59 = require('./routes/smm/mayor/MMMA_M59');
var mmmaM60 = require('./routes/smm/mayor/MMMA_M60');
var mmmaM61 = require('./routes/smm/mayor/MMMA_M61');
var mmmaM62 = require('./routes/smm/mayor/MMMA_M62');
var mmmaM63 = require('./routes/smm/mayor/MMMA_M63');
var mmmaM64_1 = require('./routes/smm/mayor/MMMA_M64_1');
var mmmaM64_2 = require('./routes/smm/mayor/MMMA_M64_2');
var mmmaM65 = require('./routes/smm/mayor/MMMA_M65');
var mmmaM66 = require('./routes/smm/mayor/MMMA_M66');
var mmmaM67 = require('./routes/smm/mayor/MMMA_M67');
var mmmaM68 = require('./routes/smm/mayor/MMMA_M68');



//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false})); //Es un metodo que se ejecuta antes de llegar a un controlador
app.use(bodyParser.json());//conviertela peticion a Json

//CORS CABECERAS

//RUTAS
//sobreescribimos la url para tener disponibles dos rutas
app.use('/api',user_routes);

app.use('/api', memec01_routes);
app.use('/api', memec02_routes);
app.use('/api', memec03_routes);
app.use('/api', memec04_routes);
app.use('/api', memec041_routes);
app.use('/api', memec05_routes);
app.use('/api', memec06_routes);
app.use('/api', memec07_routes);
app.use('/api', memec08_routes);
app.use('/api', memec09_routes);
app.use('/api', memec10_routes);
app.use('/api', memec11_routes);
app.use('/api', memec12_routes);
app.use('/api', memec13_routes);
app.use('/api', memec14_routes);
app.use('/api', memec141_routes);
app.use('/api', memec15_routes);
app.use('/api', memec16_routes);
app.use('/api', memec17_routes);
app.use('/api', memec18_routes);
app.use('/api', memec19_routes);
app.use('/api', memec20_routes);
app.use('/api', memec21_routes);

//Mantenimiento mayor
app.use('/api', memam01_routes);
app.use('/api', memam02_routes);
app.use('/api', memam03_routes);
app.use('/api', memam04_routes);
app.use('/api', memam05_routes);
app.use('/api', memam06_routes);
app.use('/api', memam07_routes);
app.use('/api', memam08_routes);
app.use('/api', memam09_routes);
app.use('/api', memam10_routes);
app.use('/api', memam11_routes);
app.use('/api', memam12_routes);
app.use('/api', memam14_routes);
app.use('/api', memam15_routes);
app.use('/api', memam16_routes);
app.use('/api', memam17_routes);
app.use('/api', memam18_routes);
app.use('/api', memam19_routes);
app.use('/api', memam20_routes);
app.use('/api', memam21_routes);
app.use('/api', memam22_routes);
app.use('/api', memam23_routes);
app.use('/api', memam24_routes);
app.use('/api', memam25_routes);
app.use('/api', memam26_routes);
app.use('/api', memam27_routes);
app.use('/api', memam28_routes);
app.use('/api', memam29_routes);
app.use('/api', memam30_routes);
app.use('/api', memam31_routes);
app.use('/api', memam32_routes);
app.use('/api', memam33_routes);
app.use('/api', memam34_routes);
app.use('/api', memam35_routes);
app.use('/api', memam36_routes);
app.use('/api', memam37_routes);
app.use('/api', memam38_routes);
app.use('/api', memam39_routes);
app.use('/api', memam40_routes);
app.use('/api', memam41_routes);


//Mantenimiento Tipo A*******************
app.use('/api', mpa01_routes);
app.use('/api', mpa02_routes);

//Mantenimiento SISTEMATICO*************************
app.use('/api', alta_tension);
app.use('/api', conectar_AT);
app.use('/api', memeB01);
app.use('/api', memeB01PS);
app.use('/api', memeB03);
app.use('/api', memeB04);
app.use('/api', memeB05_9);
app.use('/api', memeB05_612);

//*********MAYOR */
app.use('/api', mmmaM01);
app.use('/api', mmmaM02);
app.use('/api', mmmaM03);
app.use('/api', mmmaM04_1);
app.use('/api', mmmaM04_2);
app.use('/api', mmmaM05);
app.use('/api', mmmaM06);
app.use('/api', mmmaM07);
app.use('/api', mmmaM08);
app.use('/api', mmmaM09);
app.use('/api', mmmaM10);
app.use('/api', mmmaM11);
app.use('/api', mmmaM12);
app.use('/api', mmmaM13);
app.use('/api', mmmaM14_1);
app.use('/api', mmmaM14_2);
app.use('/api', mmmaM15);
app.use('/api', mmmaM16);
app.use('/api', mmmaM17);
app.use('/api', mmmaM18_1);
app.use('/api', mmmaM18_2);
app.use('/api', mmmaM18_3);
app.use('/api', mmmaM18_4);
app.use('/api', mmmaM18_5);
app.use('/api', mmmaM18_6);
app.use('/api', mmmaM18_7);
app.use('/api', mmmaM18_8);
app.use('/api', mmmaM18_9);
app.use('/api', mmmaM18_10);
app.use('/api', mmmaM18_11);
app.use('/api', mmmaM18_12);
app.use('/api', mmmaM18_13);
app.use('/api', mmmaM18_14);
app.use('/api', mmmaM18_15);
app.use('/api', mmmaM19_1);
app.use('/api', mmmaM19_2);
app.use('/api', mmmaM19_4);
app.use('/api', mmmaM19_5);
app.use('/api', mmmaM19_6);
app.use('/api', mmmaM19_7);
app.use('/api', mmmaM19_8);
app.use('/api', mmmaM20);
app.use('/api', mmmaM21);
app.use('/api', mmmaM22);
app.use('/api', mmmaM23);
app.use('/api', mmmaM24);
app.use('/api', mmmaM25);
app.use('/api', mmmaM26);
app.use('/api', mmmaM27);
app.use('/api', mmmaM28);
app.use('/api', mmmaM29);
app.use('/api', mmmaM30);
app.use('/api', MMMA_M31_1);
app.use('/api', MMMA_M31_2);
app.use('/api', MMMA_M32);
app.use('/api', mmmaM33);
app.use('/api', mmmaM34);
app.use('/api', mmmaM35);
app.use('/api', mmmaM36);
app.use('/api', mmmaM37);
app.use('/api', mmmaM38);
app.use('/api', mmmaM39_1);
app.use('/api', mmmaM39_2);
app.use('/api', mmmaM40);
app.use('/api', mmmaM41_1);
app.use('/api', mmmaM41_2);
app.use('/api', mmmaM41_2);
app.use('/api', mmmaM42);
app.use('/api', mmmaM43);
app.use('/api', mmmaM44);
app.use('/api', mmmaM45);
app.use('/api', mmmaM46);
app.use('/api', mmmaM47);
app.use('/api', mmmaM48);
app.use('/api', mmmaM49);
app.use('/api', mmmaM50);
app.use('/api', mmmaM51);
app.use('/api', mmmaM52);
app.use('/api', mmmaM53);
app.use('/api', mmmaM54);
app.use('/api', mmmaM55);
app.use('/api', mmmaM56);
app.use('/api', mmmaM57_1);
app.use('/api', mmmaM57_2);
app.use('/api', mmmaM58);
app.use('/api', mmmaM59);
app.use('/api', mmmaM60);
app.use('/api', mmmaM61);
app.use('/api', mmmaM62);
app.use('/api', mmmaM63);
app.use('/api', mmmaM64_1);
app.use('/api', mmmaM64_2);
app.use('/api', mmmaM65);
app.use('/api', mmmaM66);
app.use('/api', mmmaM67);
app.use('/api', mmmaM68);


//Rutas de pruebas
app.get('/', (req, res) => { //Ruta en la raiz
    res.status(200).send({
        message: 'HOLA MUNDO servidor de NodeJS'
    });
});
app.post('/pruebas', (req, res) => {//ruta con una direccion
    console.log(req.body);//Verificamos que datos esta recibiendo el backendpor el metodo de pruebas
    res.status(200).send({
        message: 'Accion de pruebas en el servidor de NodeJS'
    });
});

//EXPORTAR CONFIGURACION
module.exports = app; //Exportamos el modulo app
