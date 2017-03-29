var quotes = [
	{	
		title:"悯农",
		quote:"锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。",
		author:"李绅",
	},
	{	
		title:"新嫁娘词",
		quote:"三日入厨下，洗手作羹汤。未谙姑食性，先遣小姑尝。",
		author:"王建",
	},
	/*{
		title:"春望",
		quote:"国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。",
		author:"杜甫",
	},*/
	{	
		title:"十一月四日风雨大作",
		quote:"僵卧孤村不自哀，尚思为国戍轮台。夜阑卧听风吹雨，铁马冰河入梦来。",
		author:"陆游",
	},
	{	
		title:"静夜思",
		quote:"床前明月光，疑是地上霜。举头望明月，低头思故乡。",
		author:"李白",
	},
	{
		title:"春日",
		quote:"胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。",
		author:"朱熹",
	},
	/*{	
		title:"望岳",
		quote:"岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。",
		author:"杜甫",
	},*/
	{	
		title:"题西林壁",
		quote:"横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。",
		author:"苏轼",
	},
	/*{
		title:"次北固山下",
		quote:"客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。",
		author:"王湾",
	}*/
]
var color = ["#33f","#099","#090","0f0","#39f","00c","#06c"];
var title = document.getElementById('title');
var quote = document.getElementById('quote');
var author = document.getElementById('author');
var wrap = document.getElementById('quoteWrapper');//坑啊，element不是elements
var button = document.getElementById('button');
function newQuote(){
	var index = Math.floor(Math.random()*10);
	//alert(index);
	var colorindex=Math.floor(Math.random()*7);
	title.innerHTML = quotes[index].title;
	quote.innerHTML = quotes[index].quote.replace('。','。<br>');
	author.innerHTML = quotes[index].author;
	quote.style.color = color[colorindex];
	wrap.style.backgroundColor = color[colorindex];
	button.style.backgroundColor = color[colorindex];
	title.style.color = color[colorindex];
	author.style.color = color[colorindex];
}
