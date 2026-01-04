# github-actions-node-js
first npm init -y, then install express, Jest and Supertest.
second define your express and its endpoints and port
third create test file with extintion: nameFile.test.js
fourth create test code:
  #  const app = require('./app.js')
  #  const supertest = require('supertest')
  #  const request = supertest(app)

  #  describe('/testNodePage endpoint', ()=>{
  #    it('should return a response', async ()=>{
  #      const response = await request.get('/testNodePage')
  #      expect(response.status).toBe(201)
  #      expect(response.text).toBe('test endpoint success')
  #    })
  #  })

fifth create .gitignore file: node_modules
sixth change in package.json the scripts to: 
  #  "scripts": {
  #    "test": "jest src/app.test.js",
  #    "start": "node src"
  #  }

you can now run the server using: node index.js (or where you write the app listen port)
then you can in terminal run the test with command: npm test.

is all thing run okay?? so: 

seventh create yml file.


