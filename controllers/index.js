var express = require('express');
var router = express.Router();
/* GET home page. */


let projects = [
  {'name':'Scorpios Pizza',
    'url':'https://github.com/InderjitSingh2002/COMP1011-Pizza',
    'desc': 'Creating a Pizza ordering app using JavaFX and SceneBuilder.',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Ongoing'
  },
  {'name':'My Barrie',
    'url':'https://github.com/InderjitSingh2002/MyBarrie',
    'desc': 'Creating a web app that lists our favourite places in Barrie. This is built using Node.js,Express,MongoDb',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Ongoing'
  },
  {'name':'Jobpedia',
    'url':'https://github.com/InderjitSingh2002/Jobpedia',
    'desc': 'Created a Indeed-like webapp that allows user to search for jobs and employers to post jobs. This was done using ASP.NET and Microsoft Azure.',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Completed'
  },
  {'name':'PROJ',
    'url':'',
    'desc': 'Hey, Rich. I do not have more projects to put up here. I will start working on some starting next week. I just put these projects here to demonstrate that I know how to do this and also to make the site look good.',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Not started'
  },
  {'name':'PROJ',
    'url':'',
    'desc': 'Hey, Rich. I do not have more projects to put up here. I will start working on some starting next week. I just put these projects here to demonstrate that I know how to do this and also to make the site look good.',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Not started'
  },
  {'name':'PROJ',
    'url':'',
    'desc': 'Hey, Rich. I do not have more projects to put up here. I will start working on some starting next week. I just put these projects here to demonstrate that I know how to do this and also to make the site look good.',
    'img': 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'status': 'Not started'
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inder Parihar - Portfolio' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Inder Parihar - Portfolio' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Inder Parihar - Portfolio', projects: projects});
});

module.exports = router;
