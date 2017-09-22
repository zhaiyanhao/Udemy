const request = require('supertest');
const expect = require('expect');


var app = require('./server').app;

describe('Server',()=>{
    it('shoud return hello world response',(done)=>{
        request(app).get('/')
            .expect(200)
            .expect('hello')
            .end(done);
    });

    it('should return user object',(done)=>{
        request(app).get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({name:'test1'});
            })
            .end(done);
    });
});
