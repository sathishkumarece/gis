//Declaring the module dependencies
const express = require('express');
const axios = require('axios');
const methodOverride = require('method-override');
const bodyParse = require('body-parser')

const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(bodyParse.json({type: 'application/vnd.api+json'}))
app.use(methodOverride());

const openStreetMap = 'https://nominatim.openstreetmap.org/';
const openRouteService = 'https://api.openrouteservice.org/v2/directions/driving-car';


const portsInfo = [
    {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'FREEPORT',
        deliveryTerminal: 'HORIZON TERMINAL SERVICE LLC',
        address: '1341A PINE STREET',
        city: 'FREEPORT',
        state: 'TEXAS',
        zipcode: '77541',
        other: `979-871-3090
        Email:
        fpocustserv@horizonterminals.com
        Receiving Hours:
        Monday through Friday 8 AM to 4 PM`,
        coordinates: '-95.3480233,28.9380716'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'JACKSONVILLE ',
        deliveryTerminal: 'HORIZON TERMINAL SERVICES',
        address: '5263 INTERMODAL DRIVE',
        city: 'JACKSONVILLE',
        state: 'FLORIDA',
        zipcode: '32226',
        other: `904-757-1227
        Hours of Operation:
        Monday through Friday 8 AM to 4 PM`,
        coordinates: '-81.542155,30.4020455'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'PHILADELPHIA ',
        deliveryTerminal: 'HORIZON TERMINAL SERVICES',
        address: 'PIER 122',
        city: 'PHILADELPHIA',
        state: 'PA',
        zipcode: '19112',
        other: `412-504-1607
        General Delivery Hours:
        Monday through Friday 7:30 am to 2:30 pm`,
        coordinates: '-75.1459939,39.8969018'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'NOARD',
        deliveryTerminal: 'NOARD',
        address: '30 MARINE RD',
        city: 'NORTH KINGSTOWN',
        state: 'RI',
        zipcode: '2852',
        other: `401-667-7000 X 124
        Hours of operation:
        Monday through Friday 7 AM TO 3 PM`,
        coordinates: '-71.4252919,41.6198372'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'BALTIMORE SLP PORT',
        deliveryTerminal: 'BALTERM',
        address: '2025 EAST MCCOMAS STREET ',
        city: 'BALTIMORE',
        state: 'MD',
        zipcode: '21230',
        other: `443-510-4646
        General Delivery Hours:
        Monday through Friday 8 am to 4:30 pm`,
        coordinates: '-76.5906295,39.2634043'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'BALTIMORE AMPORTS',
        deliveryTerminal: 'AMPORTS',
        address: '3201 VERA STREET',
        city: 'BALTIMORE',
        state: 'MD',
        zipcode: '21226',
        other: `410-843-7141
        Email:amportspov@amports.com
         Hours of Operation:
        Monday through Friday 8 am to 4 pm`,
        coordinates: '-76.5783941,39.2403904'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'NEWARK NJ / NEW YORK',
        deliveryTerminal: 'RED HOOK TERMINAL',
        address: '138 MARSH ST',
        city: 'NEWARK',
        state: 'NJ',
        zipcode: '07114',
        other: `973-522-0999
        Hours of Operation:
        Monday through Friday 8am to 4pm`,
        coordinates: '-74.1499361,40.6959509'
    }, {
        carrier: 'SALLUM LINES',
        portOfOrgin: 'BOSTON ',
        deliveryTerminal: 'DIVERSIFIED AUTOMOTIVE, INC.',
        address: '100 TERMINAL STREET',
        city: 'CHARLESTOWN',
        state: 'MA',
        zipcode: '02129',
        other: `800-666-9007  EXT: 1157
        MOBILE:  781-690-5964
        FAX: 617-242-4455
        MONDAY THROUGH FRIDAY 7 AM TO 5 PM
         VEHICLE DELIVERY HOURS:
        MONDAY THROUGH FRIDAY 7 AM TO 3:30 PM
        NIGHT DELIVERY AVAILABLE 3:30PM – 7:00 PM (CARS WILL BE PROCESSED NEXT BUSINESS DAY)`,
        coordinates: '-71.0575833,42.3828264'
    }, {
        carrier: 'ATLANTIC CONTAINER LINE',
        portOfOrgin: 'JACKSONVILLE',
        deliveryTerminal: 'HORIZON TERMINAL SERVICES',
        address: '5263 INTERMODAL DRIVE',
        city: 'JACKSONVILLE',
        state: 'FLORIDA',
        zipcode: '32226',
        other: `904-757-1227
        Hours of Operation
        Monday through Friday 8 AM to 4 PM
        Letter of ownership for Tractor / Construction cargo,`,
        coordinates: '-81.542155,30.4020455'
    }, {
        carrier: 'ATLANTIC CONTAINER LINE',
        portOfOrgin: 'NEWARK NJ / NEW YORK',
        deliveryTerminal: 'NEWARK AUTO TERMINAL',
        address: 'BERTHS 16 & 18, 171 MARSH STREET',
        city: 'NEWARK',
        state: 'NJ',
        zipcode: '07114',
        other: `CELL: 201-30-6973
        OFFICE: 973-522-0224
        EMAIL: Nicole.Furina@portsamerica.com`,
        coordinates: '-74.1506983,40.694532'
    }, {
        carrier: 'ATLANTIC CONTAINER LINE',
        portOfOrgin: 'FREEPORT',
        deliveryTerminal: 'HORIZON TERMINAL SERVICE LLC',
        address: '1341A PINE STREET',
        city: 'FREEPORT',
        state: 'TEXAS',
        zipcode: '77541',
        other: `979-871-3090
        Email:
        fpocustserv@horizonterminals.com
        Receiving Hours:
        Monday through Friday 8 AM to 4 PM
        Closed 12PM-1PM for Lunch`,
        coordinates: '-95.3480233,28.9380716'
    }
]
if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.use(express.static(path.join(__dirname, 'client', 'dist')))
}else{
    app.get('/', (req,res)=>{
        res.send('Hi, I made it correct');
    })
    app.use(function(req, res, next) {
        // Website you wish to allow to connect
       res.setHeader('Access-Control-Allow-Origin', '*');
       // Request methods you wish to allow
       res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
       // Request headers you wish to allow
       res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-origin, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
       next();
     });
}


app.get('/api/getnearports', (req,res)=>{
    let q = req.query.q;
    console.log(q);
    if(!q){
        q ='204 Verbeke St, Harrisburg, PA 17102, United States';
    }
    axios.get(openStreetMap, {
        params: {
            addressdetails: 1,
            q: q,
            format: 'json',
            limit: 1
        }
    }).then((response)=>{
        console.log(response.data[0]);
        findShortestDistance(response.data[0]).then(val => {
            val = sortAddBasedDist(val);
            let newVal  = val.map(port=> port.distance)
            let max = getListCount(newVal);
            res.send(val.slice(0,max))
        }).catch(err => {
            res.send(err)
        })
    }).catch((err)=>{
        res.send(err);
    })
})

//Sorting the list of PostInfo based on distance
function sortAddBasedDist(val){
    val.sort(function(a,b){
        if(a.distance < b.distance){
            return -1;
        }else if(a.distance > b.distance){
            return 1;
        }else{
            return 0;
        }
    })
    return val;
}

//Function to determine the total number of results to display
function getListCount(value) {
    let defaulCount = 5;
    let toAdd = 0;
    let tempVal = 0;
    for(let i=0; i<value.length; i++){
        if(tempVal === value[i]){
            if(i === defaulCount+toAdd){
                break;
            }else {
                toAdd += 1;
            }
        }else if(i === defaulCount+toAdd){
            break;
        }
        tempVal = value[i];
    }
    return defaulCount+toAdd;
}

function findShortestDistance(userPoint){

    return new Promise((resolve, reject)=>{
        let promiseArray = []
        // portsInfo.forEach(portInfo => {
        //     promiseArray.push(getDistance(userPoint, portInfo))
        // })
        for(let portInfo of portsInfo){
            promiseArray.push(getDistance(userPoint, portInfo));
        }
        Promise.all(promiseArray).then(val=>{
            console.log(val);
            resolve(val)
        }).catch(err=>{
            console.log(err);
            reject(err);
        })
    })
    // getDistance(userPoint, '-77.0451182,38.8952122')
}

function getDistance({lat,lon}, portInfo){
    return new Promise((resolve,reject)=>{
        console.log(lat);
        console.log(lon);
        axios.get(openRouteService,{
            params: {
                api_key : process.env.API_KEY,
                start: `${lon},${lat}`,
                end: portInfo.coordinates
            }
        }).then((res) => {
            const summary = res.data.features[0].properties.summary
            console.log(summary);
            console.log('Distance: ' +summary.distance * 0.000621371);
            const duration = summary.duration;
            var hours   = Math.floor(duration / 3600);
            var minutes = Math.floor((duration - (hours * 3600)) / 60);
            var seconds = Math.floor(duration - (hours * 3600) - (minutes * 60));
            console.log('Time: '+ `${hours}h ${minutes}min ${seconds}sec`)
            resolve({portInfo: portInfo, distance:Math.floor(summary.distance * 0.000621371), duration:`${hours}h ${minutes}min ${seconds}sec`})
        }).catch((err) =>{
            console.log(err);
            reject(err);
        })
    })
}

const port = 8081;
app.listen(port, () => {
    console.log('Server ready to serve');
})