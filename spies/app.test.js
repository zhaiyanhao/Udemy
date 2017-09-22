const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');



describe('app',()=>{
    var db = {
        saveUser:expect.createSpy()
    };

    app.__set__('db',db);
   it('should call spy',()=>{
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
   }) ;

   it('should call save user',()=>{
      var email = 'howad@gmail.com';
      var password = '12321';

      app.handleSignup(email,password);

      expect(db.saveUser).toHaveBeenCalledWith({email,password});
   });
});