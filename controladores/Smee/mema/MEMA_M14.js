
const memaM14 = require('../../../models/smee/mema/MEMA_M14');

const mema_M14 = {};
//Metodos
// Obtiene todos los empleados
mema_M14.getmema_M14Data = async (req, res)=>{
    const {id} = req.params;

    const memam14 = await memaM14.findById(id)
    res.json(memam14)
}

// Editar un documento
mema_M14.editmema_M14Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM14 = {
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

        //Freno Socorro M1
        //KFS 1 Derecho
        tor1dr: req.body.tor1drr || '',
        tor1dl: req.body.tor1dll || '',
        tor1dlu: req.body.tor1dluu || '',
        tor1dre: req.body.tor1dree || '',

        tapa1dr: req.body.tapa1drr || '',
        tapa1dl: req.body.tapa1dll || '',
        tapa1dlu: req.body.tapa1dluu || '',
        tapa1dre: req.body.tapa1dree || '',

        sf1dr: req.body.sf1drr || '',
        sf1dl: req.body.sf1dll || '',
        sf1dlu: req.body.sf1dluu || '',
        sf1dre: req.body.sf1dree || '',

        p1dr: req.body.p1drr || '',
        p1dl: req.body.p1dll || '',
        p1dlu: req.body.p1dluu || '',
        p1dre: req.body.p1dree || '',

        se1dr: req.body.se1drr || '',
        se1dl: req.body.se1dll || '',
        se1dlu: req.body.se1dluu || '',
        se1dre: req.body.se1dree || '',

        re1dr: req.body.re1drr || '',
        re1dl: req.body.re1dll || '',
        re1dlu: req.body.re1dluu || '',
        re1dre: req.body.re1dree || '',

        //Conmutador freno socorro
        co1dl: req.body.co1dll || '',
        co1dc: req.body.co1dcc || '',
        co1do: req.body.co1doo || '',

        cna1dl: req.body.cna1dll || '',
        cna1dc: req.body.cna1dcc || '',
        cna1do: req.body.cna1doo || '',

        cnc1dl: req.body.cnc1dll || '',
        cnc1dc: req.body.cnc1dcc || '',
        cnc1do: req.body.cnc1doo || '',

        //KFS 1 Izquierdo
        tor1ir: req.body.tor1irr || '',
        tor1il: req.body.tor1il || '',
        tor1ilu: req.body.tor1iluu || '',
        tor1ire: req.body.tor1iree || '',

        tapa1ir: req.body.tapa1irr || '',
        tapa1il: req.body.tapa1il || '',
        tapa1ilu: req.body.tapa1iluu || '',
        tapa1ire: req.body.tapa1iree || '',

        sf1ir: req.body.sf1irr || '',
        sf1il: req.body.sf1il || '',
        sf1ilu: req.body.sf1iluu || '',
        sf1ire: req.body.sf1iree || '',

        p1ir: req.body.p1irr || '',
        p1il: req.body.p1il || '',
        p1ilu: req.body.p1iluu || '',
        p1ire: req.body.p1iree || '',

        se1ir: req.body.se1irr || '',
        se1il: req.body.se1il || '',
        se1ilu: req.body.se1iluu || '',
        se1ire: req.body.se1iree || '',

        re1ir: req.body.re1irr || '',
        re1il: req.body.re1il || '',
        re1ilu: req.body.re1iluu || '',
        re1ire: req.body.re1iree || '',

        //Conmutador freno socorro
        co1il: req.body.co1ill || '',
        co1ic: req.body.co1icc || '',
        co1io: req.body.co1ioo || '',

        cna1il: req.body.cna1ill || '',
        cna1ic: req.body.cna1icc || '',
        cna1io: req.body.cna1ioo || '',

        cnc1il: req.body.cnc1ill || '',
        cnc1ic: req.body.cnc1icc || '',
        cnc1io: req.body.cnc1ioo || '',

        //KFS 2 Derecho
        tor2dr: req.body.tor2drr || '',
        tor2dl: req.body.tor2dll || '',
        tor2dlu: req.body.tor2dluu || '',
        tor2dre: req.body.tor2dree || '',

        tapa2dr: req.body.tapa2drr || '',
        tapa2dl: req.body.tapa2dll || '',
        tapa2dlu: req.body.tapa2dluu || '',
        tapa2dre: req.body.tapa2dree || '',

        sf2dr: req.body.sf2drr || '',
        sf2dl: req.body.sf2dll || '',
        sf2dlu: req.body.sf2dluu || '',
        sf2dre: req.body.sf2dree || '',

        p2dr: req.body.p2drr || '',
        p2dl: req.body.p2dll || '',
        p2dlu: req.body.p2dluu || '',
        p2dre: req.body.p2dree || '',

        se2dr: req.body.se2drr || '',
        se2dl: req.body.se2dll || '',
        se2dlu: req.body.se2dluu || '',
        se2dre: req.body.se2dree || '',

        re2dr: req.body.re2drr || '',
        re2dl: req.body.re2dll || '',
        re2dlu: req.body.re2dluu || '',
        re2dre: req.body.re2dree || '',

        //Conmutador freno socorro
        co2dl: req.body.co2dll || '',
        co2dc: req.body.co2dcc || '',
        co2do: req.body.co2doo || '',

        cna2dl: req.body.cna2dll || '',
        cna2dc: req.body.cna2dcc || '',
        cna2do: req.body.cna2doo || '',

        cnc2dl: req.body.cnc2dll || '',
        cnc2dc: req.body.cnc2dcc || '',
        cnc2do: req.body.cnc2doo || '',

        //KFS 2 Izquierdo

        tor2ir: req.body.tor2irr || '',
        tor2il: req.body.tor2ill || '',
        tor2ilu: req.body.tor2iluu || '',
        tor2ire: req.body.tor2iree || '',

        tapa2ir: req.body.tapa2irr || '',
        tapa2il: req.body.tapa2ill || '',
        tapa2ilu: req.body.tapa2iluu || '',
        tapa2ire: req.body.tapa2iree || '',

        sf2ir: req.body.sf2irr || '',
        sf2il: req.body.sf2ill || '',
        sf2ilu: req.body.sf2iluu || '',
        sf2ire: req.body.sf2iree || '',

        p2ir: req.body.p2irr || '',
        p2il: req.body.p2ill || '',
        p2ilu: req.body.p2iluu || '',
        p2ire: req.body.p2iree || '',

        se2ir: req.body.se2irr || '',
        se2il: req.body.se2ill || '',
        se2ilu: req.body.se2iluu || '',
        se2ire: req.body.se2iree || '',

        re2ir: req.body.re2irr || '',
        re2il: req.body.re2ill || '',
        re2ilu: req.body.re2iluu || '',
        re2ire: req.body.re2iree || '',

        //Conmutador freno socorro
        co2il: req.body.co2ill || '',
        co2ic: req.body.co2icc || '',
        co2io: req.body.co2ioo || '',

        cna2il: req.body.cna2ill || '',
        cna2ic: req.body.cna2icc || '',
        cna2io: req.body.cna2ioo || '',

        cnc2il: req.body.cnc2ill || '',
        cnc2ic: req.body.cnc2icc || '',
        cnc2io: req.body.cnc2ioo || '',

        //KFS 3 Derecho
        tor3dr: req.body.tor3drr || '',
        tor3dl: req.body.tor3dll || '',
        tor3dlu: req.body.tor3dluu || '',
        tor3dre: req.body.tor3dree || '',

        tapa3dr: req.body.tapa3drr || '',
        tapa3dl: req.body.tapa3dll || '',
        tapa3dlu: req.body.tapa3dluu || '',
        tapa3dre: req.body.tapa3dree || '',

        sf3dr: req.body.sf3drr || '',
        sf3dl: req.body.sf3dll || '',
        sf3dlu: req.body.sf3dluu || '',
        sf3dre: req.body.sf3dree || '',

        p3dr: req.body.p3drr || '',
        p3dl: req.body.p3dll || '',
        p3dlu: req.body.p3dluu || '',
        p3dre: req.body.p3dree || '',

        se3dr: req.body.se3drr || '',
        se3dl: req.body.se3dll || '',
        se3dlu: req.body.se3dluu || '',
        se3dre: req.body.se3dree || '',

        re3dr: req.body.re3drr || '',
        re3dl: req.body.re3dll || '',
        re3dlu: req.body.re3dluu || '',
        re3dre: req.body.re3dree || '',

        //Conmutador freno socorro
        co3dl: req.body.co3dll || '',
        co3dc: req.body.co3dcc || '',
        co3do: req.body.co3doo || '',

        cna3dl: req.body.cna3dll || '',
        cna3dc: req.body.cna3dcc || '',
        cna3do: req.body.cna3doo || '',

        cnc3dl: req.body.cnc3dll || '',
        cnc3dc: req.body.cnc3dcc || '',
        cnc3do: req.body.cnc3doo || '',

        //KFS 3 Izquierdo

        tor3ir: req.body.tor3irr || '',
        tor3il: req.body.tor3ill || '',
        tor3ilu: req.body.tor3iluu || '',
        tor3ire: req.body.tor3iree || '',

        tapa3ir: req.body.tapa3irr || '',
        tapa3il: req.body.tapa3ill || '',
        tapa3ilu: req.body.tapa3iluu || '',
        tapa3ire: req.body.tapa3iree || '',

        sf3ir: req.body.sf3irr || '',
        sf3il: req.body.sf3ill || '',
        sf3ilu: req.body.sf3iluu || '',
        sf3ire: req.body.sf3iree || '',

        p3ir: req.body.p3irr || '',
        p3il: req.body.p3ill || '',
        p3ilu: req.body.p3iluu || '',
        p3ire: req.body.p3iree || '',

        se3ir: req.body.se3irr || '',
        se3il: req.body.se3ill || '',
        se3ilu: req.body.se3iluu || '',
        se3ire: req.body.se3iree || '',

        re3ir: req.body.re3irr || '',
        re3il: req.body.re3ill || '',
        re3ilu: req.body.re3iluu || '',
        re3ire: req.body.re3iree || '',

        //Conmutador freno socorro
        co3il: req.body.co3ill || '',
        co3ic: req.body.co3icc || '',
        co3io: req.body.co3ioo || '',

        cna3il: req.body.cna3ill || '',
        cna3ic: req.body.cna3icc || '',
        cna3io: req.body.cna3ioo || '',

        cnc3il: req.body.cnc3ill || '',
        cnc3ic: req.body.cnc3icc || '',
        cnc3io: req.body.cnc3ioo || '',
        
        obs2: req.body.obs22 || '',

        //Freno Socorro M2
        //KFS 1 Derecho
        tor21dr: req.body.tor21drr || '',
        tor21dl: req.body.tor21dll || '',
        tor21dlu: req.body.tor21dluu || '',
        tor21dre: req.body.tor21dree || '',

        tapa21dr: req.body.tapa21drr || '',
        tapa21dl: req.body.tapa21dll || '',
        tapa21dlu: req.body.tapa21dluu || '',
        tapa21dre: req.body.tapa21dree || '',

        sf21dr: req.body.sf21drr || '',
        sf21dl: req.body.sf21dll || '',
        sf21dlu: req.body.sf21dluu || '',
        sf21dre: req.body.sf21dree || '',

        p21dr: req.body.p21drr || '',
        p21dl: req.body.p21dll || '',
        p21dlu: req.body.p21dluu || '',
        p21dre: req.body.p21dree || '',

        se21dr: req.body.se21drr || '',
        se21dl: req.body.se21dll || '',
        se21dlu: req.body.se21dluu || '',
        se21dre: req.body.se21dree || '',

        re21dr: req.body.re21drr || '',
        re21dl: req.body.re21dll || '',
        re21dlu: req.body.re21dluu || '',
        re21dre: req.body.re21dree || '',

        //Conmutador freno socorro
        co21dl: req.body.co21dll || '',
        co21dc: req.body.co21dcc || '',
        co21do: req.body.co21doo || '',

        cna21dl: req.body.cna21dll || '',
        cna21dc: req.body.cna21dcc || '',
        cna21do: req.body.cna21doo || '',

        cnc21dl: req.body.cnc21dll || '',
        cnc21dc: req.body.cnc21dcc || '',
        cnc21do: req.body.cnc21doo || '',

        //KFS 1 Izquierdo
        tor21ir: req.body.tor21irr || '',
        tor21il: req.body.tor21il || '',
        tor21ilu: req.body.tor21iluu || '',
        tor21ire: req.body.tor21iree || '',

        tapa21ir: req.body.tapa21irr || '',
        tapa21il: req.body.tapa21il || '',
        tapa21ilu: req.body.tapa21iluu || '',
        tapa21ire: req.body.tapa21iree || '',

        sf21ir: req.body.sf21irr || '',
        sf21il: req.body.sf21il || '',
        sf21ilu: req.body.sf21iluu || '',
        sf21ire: req.body.sf21iree || '',

        p21ir: req.body.p21irr || '',
        p21il: req.body.p21il || '',
        p21ilu: req.body.p21iluu || '',
        p21ire: req.body.p21iree || '',

        se21ir: req.body.se21irr || '',
        se21il: req.body.se21il || '',
        se21ilu: req.body.se21iluu || '',
        se21ire: req.body.se21iree || '',

        re21ir: req.body.re21irr || '',
        re21il: req.body.re21il || '',
        re21ilu: req.body.re21iluu || '',
        re21ire: req.body.re21iree || '',

        //Conmutador freno socorro
        co21il: req.body.co21ill || '',
        co21ic: req.body.co21icc || '',
        co21io: req.body.co21ioo || '',

        cna21il: req.body.cna21ill || '',
        cna21ic: req.body.cna21icc || '',
        cna21io: req.body.cna21ioo || '',

        cnc21il: req.body.cnc21ill || '',
        cnc21ic: req.body.cnc21icc || '',
        cnc21io: req.body.cnc21ioo || '',

        //KFS 2 Derecho
        tor22dr: req.body.tor22drr || '',
        tor22dl: req.body.tor22dll || '',
        tor22dlu: req.body.tor22dluu || '',
        tor22dre: req.body.tor22dree || '',

        tapa22dr: req.body.tapa22drr || '',
        tapa22dl: req.body.tapa22dll || '',
        tapa22dlu: req.body.tapa22dluu || '',
        tapa22dre: req.body.tapa22dree || '',

        sf22dr: req.body.sf22drr || '',
        sf22dl: req.body.sf22dll || '',
        sf22dlu: req.body.sf22dluu || '',
        sf22dre: req.body.sf22dree || '',

        p22dr: req.body.p22drr || '',
        p22dl: req.body.p22dll || '',
        p22dlu: req.body.p22dluu || '',
        p22dre: req.body.p22dree || '',

        se22dr: req.body.se22drr || '',
        se22dl: req.body.se22dll || '',
        se22dlu: req.body.se22dluu || '',
        se22dre: req.body.se22dree || '',

        re22dr: req.body.re22drr || '',
        re22dl: req.body.re22dll || '',
        re22dlu: req.body.re22dluu || '',
        re22dre: req.body.re22dree || '',

        //Conmutador freno socorro
        co22dl: req.body.co22dll || '',
        co22dc: req.body.co22dcc || '',
        co22do: req.body.co22doo || '',

        cna22dl: req.body.cna22dll || '',
        cna22dc: req.body.cna22dcc || '',
        cna22do: req.body.cna22doo || '',

        cnc22dl: req.body.cnc22dll || '',
        cnc22dc: req.body.cnc22dcc || '',
        cnc22do: req.body.cnc22doo || '',

        //KFS 2 Izquierdo

        tor22ir: req.body.tor22irr || '',
        tor22il: req.body.tor22ill || '',
        tor22ilu: req.body.tor22iluu || '',
        tor22ire: req.body.tor22iree || '',

        tapa22ir: req.body.tapa22irr || '',
        tapa22il: req.body.tapa22ill || '',
        tapa22ilu: req.body.tapa22iluu || '',
        tapa22ire: req.body.tapa22iree || '',

        sf22ir: req.body.sf22irr || '',
        sf22il: req.body.sf22ill || '',
        sf22ilu: req.body.sf22iluu || '',
        sf22ire: req.body.sf22iree || '',

        p22ir: req.body.p22irr || '',
        p22il: req.body.p22ill || '',
        p22ilu: req.body.p22iluu || '',
        p22ire: req.body.p22iree || '',

        se22ir: req.body.se22irr || '',
        se22il: req.body.se22ill || '',
        se22ilu: req.body.se22iluu || '',
        se22ire: req.body.se22iree || '',

        re22ir: req.body.re22irr || '',
        re22il: req.body.re22ill || '',
        re22ilu: req.body.re22iluu || '',
        re22ire: req.body.re22iree || '',

        //Conmutador freno socorro
        co22il: req.body.co22ill || '',
        co22ic: req.body.co22icc || '',
        co22io: req.body.co22ioo || '',

        cna22il: req.body.cna22ill || '',
        cna22ic: req.body.cna22icc || '',
        cna22io: req.body.cna22ioo || '',

        cnc22il: req.body.cnc22ill || '',
        cnc22ic: req.body.cnc22icc || '',
        cnc22io: req.body.cnc22ioo || '',

        //KFS 3 Derecho
        tor32dr: req.body.tor32drr || '',
        tor32dl: req.body.tor32dll || '',
        tor32dlu: req.body.tor32dluu || '',
        tor32dre: req.body.tor32dree || '',

        tapa32dr: req.body.tapa32drr || '',
        tapa32dl: req.body.tapa32dll || '',
        tapa32dlu: req.body.tapa32dluu || '',
        tapa32dre: req.body.tapa32dree || '',

        sf32dr: req.body.sf32drr || '',
        sf32dl: req.body.sf32dll || '',
        sf32dlu: req.body.sf32dluu || '',
        sf32dre: req.body.sf32dree || '',

        p32dr: req.body.p32drr || '',
        p32dl: req.body.p32dll || '',
        p32dlu: req.body.p32dluu || '',
        p32dre: req.body.p32dree || '',

        se32dr: req.body.se32drr || '',
        se32dl: req.body.se32dll || '',
        se32dlu: req.body.se32dluu || '',
        se32dre: req.body.se32dree || '',

        re32dr: req.body.re32drr || '',
        re32dl: req.body.re32dll || '',
        re32dlu: req.body.re32dluu || '',
        re32dre: req.body.re32dree || '',

        //Conmutador freno socorro
        co32dl: req.body.co32dll || '',
        co32dc: req.body.co32dcc || '',
        co32do: req.body.co32doo || '',

        cna32dl: req.body.cna32dll || '',
        cna32dc: req.body.cna32dcc || '',
        cna32do: req.body.cna32doo || '',

        cnc32dl: req.body.cnc32dll || '',
        cnc32dc: req.body.cnc32dcc || '',
        cnc32do: req.body.cnc32doo || '',

        //KFS 3 Izquierdo

        tor32ir: req.body.tor32irr || '',
        tor32il: req.body.tor32ill || '',
        tor32ilu: req.body.tor32iluu || '',
        tor32ire: req.body.tor32iree || '',

        tapa32ir: req.body.tapa32irr || '',
        tapa32il: req.body.tapa32ill || '',
        tapa32ilu: req.body.tapa32iluu || '',
        tapa32ire: req.body.tapa32iree || '',

        sf32ir: req.body.sf32irr || '',
        sf32il: req.body.sf32ill || '',
        sf32ilu: req.body.sf32iluu || '',
        sf32ire: req.body.sf32iree || '',

        p32ir: req.body.p32irr || '',
        p32il: req.body.p32ill || '',
        p32ilu: req.body.p32iluu || '',
        p32ire: req.body.p32iree || '',

        se32ir: req.body.se32irr || '',
        se32il: req.body.se32ill || '',
        se32ilu: req.body.se32iluu || '',
        se32ire: req.body.se32iree || '',

        re32ir: req.body.re32irr || '',
        re32il: req.body.re32ill || '',
        re32ilu: req.body.re32iluu || '',
        re32ire: req.body.re32iree || '',

        //Conmutador freno socorro
        co32il: req.body.co32ill || '',
        co32ic: req.body.co32icc || '',
        co32io: req.body.co32ioo || '',

        cna32il: req.body.cna32ill || '',
        cna32ic: req.body.cna32icc || '',
        cna32io: req.body.cna32ioo || '',

        cnc32il: req.body.cnc32ill || '',
        cnc32ic: req.body.cnc32icc || '',
        cnc32io: req.body.cnc32ioo || '',
        
        obs3: req.body.obs33 || '',

        //-------------------------------

        }
        await memaM14.findByIdAndUpdate(id, { $set: mema_M14}, { new: true });
        res.json({
            status: 'Employee update'
        });

        };

        mema_M14.checkedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const checked = {
            documentFormCurrentState: req.body
        }
        await memaM14.findByIdAndUpdate(id, { $set: checked }, { new: true });
        res.json({
            status: 'worker state update'
        })
        }

        mema_M14.getStateCheckedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const state = await memaM14.findById(id, {
            "_id": 1, 
            "documentFormCurrentState": 1
        })
        res.json(state)
        }

        mema_M14.getAllmema_M14TypeM = async (req, res) => {
        const memam14 = await memaM14.find({}, {
            "_id": 1, 
            "unidad": 1, 
            "documentFormCurrentState.approvalByWorker.checked": 1, 
            "documentFormCurrentState.approvalBySupervisor.checked": 1,
            "documentFormCurrentState.approvalByMannager.checked": 1,
            "documentFormCurrentState.loading": 1
        })
        res.json(memam14)
        };

        mema_M14.addNewHistoryrecord = async (req, res) => {
        const { id } = req.params;
        const historymemaM14New = {
            historyFile: req.body.historyFile || []
        }
        await memaM14.findByIdAndUpdate(id, { $set: historymemaM14New }, { new: true });
        res.json({
            status: 'History update'
        })
        }

        mema_M14.getHistoryOF = async (req, res) => {
        const { id } = req.params;
        const memam14 = await memaM14.findById(id, {
            "_id": 0, 
            "historyFile": 1
        })
        res.json(memam14)
        }

        mema_M14.createmema_M14TypeM = async (req, res) => {
        const memam14 = new memaM14(req.body)

        await memam14.save()
        res.json({res: 'Ok'})
        };

        module.exports = mema_M14;
