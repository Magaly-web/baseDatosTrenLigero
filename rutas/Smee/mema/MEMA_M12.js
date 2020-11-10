
const express = require('express');
const api = express.Router();
const MEMA_M12 = require('../../../controllers/smee/mema/MEMA_M12')

api.get('/all-formsM12', MEMA_M12.getAllmema_M12TypeM)
api.post('/createM12', MEMA_M12.createmema_M12TypeM)
api.get('/get-historyM12/:id', MEMA_M12.getHistoryOF)
api.put('/update-M12/:id', MEMA_M12.editmema_M12Data)
api.put('/historyUpdateM12/:id', MEMA_M12.addNewHistoryrecord)
api.get('/getStateM12/:id', MEMA_M12.getStateCheckedApprovalByWorker )
api.put('/updateSateM12/:id', MEMA_M12.checkedApprovalByWorker)
api.get('/MEMEM12/:id', MEMA_M12.getmema_M12Data)


module.exports = api;