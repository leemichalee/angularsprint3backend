const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/customfunds', (req, res) => {
  const customfunds = db.customfunds.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  console.log("htting the customfunds route", customfunds[0]);
  res.json(customfunds)
})

router.get('/customfunds/:id', (req, res) => {
  const customfund = db.customfunds.find(req.params.id)
  res.json(customfund)
})

router.post('/customfunds', (req, res) => {
  const newFund = db.customfunds.insert({
    "name": req.body.name,
    "ticker": req.body.ticker,
    "assetclass": req.body.assetclass,
    "expenseratio": req.body.expenseratio,
    "price": req.body.price,
    "change1": req.body.change1,
    "change2": req.body.change2,
    "secyield": req.body.secyield,
    "ytd": req.body.ytd,
    "yr1": req.body.yr1,
    "yr5": req.body.yr5,
    "yr10": req.body.yr10,
    "yrinception": req.body.yrinception,
    "website": req.body.website
  })
  res.json(newFund)
})

router.put('/customfunds/:id', (req, res) => {
  const updatedFund = db.customfunds.findByIdAndUpdate(req.params.id, {
    "name": req.body.name,
    "ticker": req.body.ticker,
    "assetclass": req.body.assetclass,
    "expenseratio": req.body.expenseratio,
    "price": req.body.price,
    "change1": req.body.change1,
    "change2": req.body.change2,
    "secyield": req.body.secyield,
    "ytd": req.body.ytd,
    "yr1": req.body.yr1,
    "yr5": req.body.yr5,
    "yr10": req.body.yr10,
    "yrinception": req.body.yrinception,
    "website": req.body.website
  })
  res.json(updatedFund)
})

// router.patch('/books/cart/add/:id', function (req, res) {
//   const book = db.books.find(req.params.id)
//   book.inCart = true
//   res.json(book)
// })

// router.patch('/books/cart/remove/:id', function (req, res) {
//   const book = db.books.find(req.params.id)
//   book.inCart = false
//   res.json(book)
//})

router.patch('/customfunds/:id', (req, res) => {
   const customfund = db.customfunds.findByIdAndUpdate(req.params.id, req.body)
   res.json(db.customfunds.findAll())
})

router.delete('/customfunds/:id', (req, res) => {
  let selectedFund = db.customfunds.find(req.params.id)
  db.customfunds.delete(req.params.id)
  res.json(selectedFund)

})



module.exports = router
