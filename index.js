/*
* @Author: Administrator
* @Date:   2018-11-12 11:35:45
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-12 13:41:00
*/

'use strict';

const express = require('express');

const app = express();

app.get('/login', (request, response) => {
	response.send('Hello World...');
});

app.listen(8888, () => {
	console.log('server is running...');
});
