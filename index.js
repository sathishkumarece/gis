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

app.get('/', (req,res)=>{
    res.send('Hi, I made it correct');
})

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
    }
]

app.get('/api/getnearports', (req,res)=>{
    const q = req.query.q;
    console.log(q);
    axios.get(openStreetMap, {
        params: {
            addressdetails: 1,
            q: '204 Verbeke St, Harrisburg, PA 17102, United States',
            format: 'json',
            limit: 1
        }
    }).then((response)=>{
        console.log(response.data[0]);
        findShortestDistance(response.data[0]).then(val => {
            val = sortAddBasedDist(val);
            res.send(val)
        }).catch(err => {
            res.send(err)
        })
    }).catch((err)=>{
        res.send(err);
    })
})

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
            resolve({portInfo: portInfo, distance:summary.distance * 0.000621371, duration:`${hours}h ${minutes}min ${seconds}sec`})
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