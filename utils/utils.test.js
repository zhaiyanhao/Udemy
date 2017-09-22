const expect = require('expect');

const utils = require('./util');

describe('Util',()=>{
    it('this should add two numbers',()=>{
        var res = utils.add(5,7);
        //throw new Error('value not right');
        expect(res).toBe(12).toBeA('number');
        expect(res).toBeA('number');
        //expect(res).toNotBe(12);
    });

    /*
     it('should multi result',()=>{
     var res =utils.square(4);
     if(res!=17){
     throw new Error('not right value');
     }

     })*/
    it('should have same value',()=>{
        expect({name:'test'}).toEqual({name:'test'}); //not right use toBe()

    });


//toInclue for array

    it('should change name',()=>{
        var user={location:'test',age:25};
        var res = utils.setName(user,'Zhai');

        expect(res).toInclude({name:'Zhai'});
    });

    /*ASYNC test*/
    it('should async add',(done)=>{  //done is for aysnc of mocha
        utils.asyncAdd(3,5,(sum)=>{
            expect(sum).toBe(8);
            done();
        });
    });
});
