/**
 *
 *	js Demo_1
 *	2018-7-1 @AsusClass
 *
 *
 *	1.图片点击切换数据源展示
 *	2.按钮点击后弹出供用户输入的对话框，并本地持久化用户输入数据
 *
 **/

/**
 *	图片点击事件处理，更改显示的图片
 **/
fetchViewByTag('img').onclick = function () {
	this.setAttribute('src', 'imgs/2.jpg');
}

/**
 *	查询本地缓存数据K_V
 **/
var localName = queryLocalCache('name');

if (!localName) {

	setUserName();
} else {

	updateHeadingText(localName);
}

/**
 *	ChangeUser按钮点击事件处理
 **/
fetchViewByTag('button').onclick = function () {
	setUserName();
}

function setUserName() {
	var inputName = window.prompt('please enter your name.', 'root'); //弹出一个对话框，需要用户输入

	/**
	 *	对于输入语句，最好做参数校验，非法数据应alert给用户，此处对话框输入可产生null，需要注意
	 **/
	saveLocalCache('name', inputName);

	updateHeadingText(inputName);
}

/**
 *	更新页面名称显示
 **/
function updateHeadingText(headInfo) {
	fetchViewByTag('h1').textContent = 'Hello!'.concat(headInfo, '!');  //concat可连接两个或者多个数组
}

/**
 *	根据关键字查询本地缓存
 **/
function queryLocalCache(key) {
	return localStorage.getItem(key);
}

/**
 *	将K_V数据缓存至本地
 **/
function saveLocalCache(key, value) {
	localStorage.setItem(key, value);
}

/**
 *	根据指定标签搜索指定容器
 **/
function fetchViewByTag(tag) {
	return document.querySelector(tag);
}
