const app = require('./app.js')
const supertest = require('supertest')
const request = supertest(app)

describe('/testNodePage endpoint', ()=>{
  it('should return a response', async ()=>{
    const response = await request.get('/testNodePage')
    expect(response.status).toBe(201)
    expect(response.text).toBe('test endpoint success')
  })
})