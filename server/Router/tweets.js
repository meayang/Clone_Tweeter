import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js'
import { isAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [
    body('text')
    .trim()
    .isLength({ min: 3 })
    .withMessage('text should be at least 3 characters'),
    validate
];

//Get /tweets
//Get /tweets?username=bb
router.get('/', isAuth, tweetController.getTweets)

//Get /tweets/:id
router.get('/:id', isAuth, tweetController.getTweet)

//Post /tweets
router.post('/', isAuth, validateTweet, tweetController.createTweet)

//Put /tweets/:id
router.put('/:id', isAuth, validateTweet, tweetController.updateTweet)

//Delete /tweets/:id
router.delete('/:id', isAuth, tweetController.deleteTweet)

export default router;