// var APP_ID = 'XvCCPbKnym0sanKNsrgTAPAH-gzGzoHsz';
// var APP_KEY = 'iKK1JdsIp3AfRp2167gkftip';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

// var postMessageForm = document.getElementById("postMessage");
// postMessageForm.addEventListener("submit",function(e){
// 	e.preventDefault();
// 	let content = postMessageForm.querySelector("input[name = content]").value;
// 	let author = postMessageForm.querySelector("input[name = author]").value;
// 	var MessageObject = AV.Object.extend('message');
// 	var messageObject = new MessageObject();
// 	messageObject.set('words', content);
// 	messageObject.set('author',author);
// 	messageObject.save().then(function (messageObject) {
// 		let li = document.createElement("li");
// 		li.innerText = `${author}：${content}`;
// 		messageList.append(li);
// 		postMessageForm.querySelector("input[name = content]").value = "";
// 	})
// });

// var query = new AV.Query("message");
// query.find().then(function(messages){
// 	let array = messages.map((message)=>{
// 		return `${message.attributes.author}：${message.attributes.words}`;
// 	});
// 	array.forEach(function(item){
// 		let li = document.createElement("li");
// 		li.innerText = item;
// 		messageList.append(li);
// 	});
// },function(){//异常处理
// 	alert("提交失败，请改天再试");
// });



!function(){
	var view = document.querySelector("section.message");
	var modal = {
		// 获取数据
		fetch:function(){
			var query = new AV.Query("message");
			return query.find(); //Promise对象
		},
		//保存
		save:function({content,author}){
			var MessageObject = AV.Object.extend('message');
			var messageObject = new MessageObject();
			messageObject.set('words', content);
			messageObject.set('author',author);
			return messageObject.save();
		}
	}
	var controller = {
		view:null,
		messageList:null,
		postMessageForm:null,
		init:function(view){
			this.view = view;
			this.messageList = view.querySelector("#messageList");
			this.postMessageForm = document.getElementById("postMessage"); 
			this.initAV();
			this.loadMessages();
			this.bindEvents();
		},
		initAV:function(){
			var APP_ID = 'XvCCPbKnym0sanKNsrgTAPAH-gzGzoHsz';
			var APP_KEY = 'iKK1JdsIp3AfRp2167gkftip';
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			});
		},
		loadMessages:function(){
			modal.fetch().then((messages)=>{
				let array = messages.map((message)=>{
					return `${message.attributes.author}：${message.attributes.words}`;
				});
				array.forEach((item)=>{
					let li = document.createElement("li");
					li.innerText = item;
					this.messageList.append(li);
				});
			},function(){//异常处理
				alert("提交失败，请改天再试");
			});
		},
		bindEvents:function(){
			let postMessageForm = this.postMessageForm;
			postMessageForm.addEventListener("submit",(e)=>{
				e.preventDefault();
				this.postMessage();
			});
		},
		postMessage:function(){
			let postMessageForm = this.postMessageForm;
			let content = postMessageForm.querySelector("input[name = content]").value;
			let author = postMessageForm.querySelector("input[name = author]").value;
			modal.save({author:author,content:content}).then(function (messageObject) {
				let li = document.createElement("li");
				li.innerText = `${author}：${content}`;
				messageList.append(li);
				postMessageForm.querySelector("input[name = content]").value = "";
			})
		}
	}
	controller.init(view);
}.call();