
import supertest from 'supertest';
var chai = require('chai');
chai.use(require('chai-json-schema'));
const assert = chai.assert;  
var data=require('./schema/candidateschema.json')
var obj = {};
var keys = ["plateNo","driverName", "lat","lng","location","lastUpdated"];
var values=["X 19599","Wyatt Liam",25.357119,55.391068,"Rolla, Sharjah, the UAE","2021-07-15T23:09:27+00:00"];
const request=supertest('https://interviewtestapi.azurewebsites.net/api/');

describe('validate schema',function(){
    it('Get/Candidate',function(done){
request.get('candidate').end((err,res) => {      
    for(var i = 0; i < keys.length; i++){
        obj[keys[i]] = values[i];
    }
    for (var key of Object.keys(obj)) {
        console.log(key + ": " + obj[key] )        
    }
    console.log(data)
    assert.jsonSchema([obj],data);   
done();
});
    });
});
