const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use(express.json())

let equipment = [
    {id: 1, conn: 'asbkj', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_01', cf: 6550, bw: 10, power: -90, sat: 'Satellite A', feed: 'Feed 01', active: false},
    {id: 2, conn: 'sfsdk', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_02', cf: 6560, bw: .5, power: -90, sat: 'Satellite A', feed: 'Feed 02', active: false},
    {id: 3, conn: '237sf', server: '0a2b', team: 'Instructor', unit_type: 'Group_X', unit_name: 'Signal_03', cf: 6565, bw: .5, power: -90, sat: 'Satellite A', feed: 'Feed 03', active: false},
    {id: 4, conn: '7sdfn', server: '0a2c', team: 'Instructor', unit_type: 'Group_2', unit_name: 'TheBigOne', cf: 12300, bw: 50, power: -87, sat: 'Satellite B', feed: 'Feed 04', active: false},
    {id: 5, conn: '23fsj', server: '0a2c', team: 'Instructor', unit_type: 'Group_2', unit_name: 'TheLittleOne', cf: 30565, bw: .5, power: -90, sat: 'Satellite C', feed: 'Feed 05', active: false},
    {id: 6, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX1', unit_name: '1', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 7, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX1', unit_name: '2', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 8, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX1', unit_name: '3', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 9, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX1', unit_name: '4', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 10, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX2', unit_name: '1', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 11, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX2', unit_name: '2', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 12, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX2', unit_name: '3', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 13, conn: '', server: '0a2b', team: 'Victor', unit_type: 'RX2', unit_name: '4', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 14, conn: 'vic01', server: '0a2b', team: 'Victor', unit_type: 'TX1', unit_name: '1', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 15, conn: 'vic02', server: '0a2b', team: 'Victor', unit_type: 'TX1', unit_name: '2', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 16, conn: 'vic03', server: '0a2b', team: 'Victor', unit_type: 'TX1', unit_name: '3', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 17, conn: 'vic04', server: '0a2b', team: 'Victor', unit_type: 'TX1', unit_name: '4', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 18, conn: 'vic05', server: '0a2b', team: 'Victor', unit_type: 'TX2', unit_name: '1', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 19, conn: 'vic06', server: '0a2b', team: 'Victor', unit_type: 'TX2', unit_name: '2', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 20, conn: 'vic07', server: '0a2b', team: 'Victor', unit_type: 'TX2', unit_name: '3', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 21, conn: 'vic08', server: '0a2b', team: 'Victor', unit_type: 'TX2', unit_name: '4', cf: 5000, bw: 0, power: 0, sat: 'Antenna 1', feed: '', active: true},
    {id: 22, conn: '', server: '0a2b', team: 'Victor', unit_type: 'Antenna 1', unit_name: '1', cf: 5000, bw: 0, power: 0, sat: 'Satellite A', feed: '', active: true},
    {id: 23, conn: '', server: '0a2b', team: 'Victor', unit_type: 'Antenna 2', unit_name: '2', cf: 4500, bw: 0, power: 0, sat: 'Satellite A', feed: '', active: true},
    {id: 24, conn: '', server: '0a2b', team: 'Victor', unit_type: 'SpecA', unit_name: '1', cf: 6500, bw: 1000, power: 0, sat: 'ULRF', feed: '', active: true},
    {id: 25, conn: '', server: '0a2b', team: 'Victor', unit_type: 'SpecA', unit_name: '2', cf: 4500, bw: 1000, power: 0, sat: 'ULRF', feed: '', active: true},
];
let satEnv = [
    {id: 0, server: '0a2b', conn: 'x', team: 'Instructor', cf: 6250, bw: 5, power: -90, sat: "Satellite A", feed: 'Feed 01', stage: "ULRF"}
];

app.listen(port, () => console.log(`API listening on port ${port}`))

app.get('/server', (req, res) => {
    const serverList = new Set(equipment.map(x => x.server))
    res.status(200).send([...serverList])
});

app.get('/equipment?', (req, res) => {
    const { server, team } = req.query;
    const equipmentList = equipment.filter(x => x.server == server && x.team == team)
    res.status(200).send(equipmentList)
});

app.get('/satEnv?', (req, res) => {
    const { server } = req.query;
    const tmpSatEnv = satEnv.filter(x => x.server == server)
    res.status(200).send(tmpSatEnv)
});

app.post('/table?', (req, res) => {
    const { table } = req.query;
    if ( table == 'equipment' ) {
        equipment.push(req.body) // Temporary: handle this in db
        const tmpEquipment = [...equipment].filter(x => x.server == req.body.server && x.team == req.body.team)
        res.status(200).send(tmpEquipment)
    } else if (table == 'satEnv') {   
        satEnv.push(req.body) // Temporary: handle this in db
        const tmpSatEnv = [...satEnv].filter(x => x.server == req.body.server && x.team == req.body.team)
        res.status(200).send(tmpSatEnv)
    }
});

app.patch('/table?', (req, res) => {
    const {table} = req.query;
    if ( table == 'equipment' ) {
        const index = equipment.map(x => x.id).indexOf(req.body.id);
        equipment[index] = req.body
        const tmpEquipment = [...equipment].filter(x => x.server == req.body.server && x.team == req.body.team)
        console.log("patch equip\n", tmpEquipment)
        res.status(200).send(tmpEquipment)
    } else if ( table == 'satEnv' ) {
        const index = satEnv.map(x => x.id).indexOf(req.body.id);
        satEnv[index] = req.body
        const tmpSatEnv = [...satEnv].filter(x => x.server == req.body.server && x.team == req.body.team)
        res.status(200).send(tmpSatEnv)
    }
});

app.delete('/table?', (req, res) => {
    const {table} = req.query;
    if ( table == 'equipment' ) {
        const index = equipment.map(x => x.id).indexOf(req.body.id);
        equipment.splice(index, 1)
        const tmpEquipment = [...equipment].filter(x => x.server == req.body.server && x.team == req.body.team)
        res.status(200).send(tmpEquipment)
    } else if ( table == 'satEnv' ) {
        const index = satEnv.map(x => x.id).indexOf(req.body.id);
        satEnv.splice(index, 1)
        const tmpSatEnv = [...satEnv].filter(x => x.server == req.body.server && x.team == req.body.team)
        res.status(200).send(tmpSatEnv)
    }
});

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).send('App root route running');
});