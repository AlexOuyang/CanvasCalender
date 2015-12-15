var schedule = [ {'name': 'CSE103',
		'links' : [
			{
				'title': 'Class Website',
				'url': 'http://cse103.github.io'
			},
			{
				'title': 'WebWork',
				'url': 'http://webwork.cse.ucsd.edu/webwork2/CSE103_Fall2015'
			},
			{
				'title': 'Piazza',
				'url': 'http://piazza.com'
			},
			{
				'title': 'Textbopk',
				'url': 'http://nb.mit.edu'
			}
		],
		'schedule' : [
			{
				'time': new Date(2015, 11, 8),
				'activity': 'Final Exam'
			}
		]
	},
	{
		'name': 'CSE120',
		'links' : [
			{
				'title': 'Class Website',
				'url': 'http://cseweb.ucsd.edu/classes/fa15/cse120-b/'
			},
			{
				"title": "Free Book",
				"url": "http://pages.cs.wisc.edu/~remzi/OSTEP/"
			}
		],
		'schedule' : [
			{ 'time': new Date(2015, 9, 29), 'activity': 'Midterm Exam' },
			{ 'time': new Date(2015, 11, 9), 'activity': 'Final Exam' },
			{ 'time': new Date(2015, 9, 5), 'activity': 'Project #0' }
		]
    }
 ];
 

 //var canvas = document.getElementById('myCanvas');
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
//var context = canvas.getContext('2d');

var calender = createCalender(2,2);