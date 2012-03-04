var mailer = require('nodemailer');
var config = require('../config').config;

mailer.SMTP = {
	host: config.mail_host,
	port: config.mail_port,
	use_authentication: config.mail_use_authentication,
	user: config.mail_user,
	pass: config.mail_pass
};

function send_mail(data,cb){
	mailer.send_mail(data,function(err,success){
		return cb(err,success);
	});
}

function send_active_mail(who,token,name,email,cb){
	var sender =  config.mail_sender;
	var to = who; 
	var subject = config.name + '社區帳號激活';
	var html = '<p>您好：<p/>' +
			   '<p>我們收到您在' + config.name + '社區的註冊信息，請點擊下面的鏈接來激活帳戶：</p>' +
			   '<a href="' + config.host + '/active_account?key=' + token + '&name=' + name + '&email=' + email + '">激活鏈接</a>' +
			   '<p>若您沒有在' + config.name + '社區填寫過註冊信息，說明有人濫用了您的電子郵箱，請刪除此郵件，我們對給您造成的打擾感到抱歉。</p>' +
			   '<p>' +config.name +'社區 謹上。</p>'

	var data = {
		sender: sender,
		to: to,
		subject: subject,
		html: html
	}

	send_mail(data,function(err,success){
		return cb(err,success);	
	});
}
function send_reset_pass_mail(who,token,name,cb){
	var sender = config.mail_sender;
	var to = who; 
	var subject = config.name + '社區密碼重置';
	var html = '<p>您好：<p/>' +
			   '<p>我們收到您在' + config.name + '社區重置密碼的請求，請單擊下面的鏈接來重置密碼：</p>' +
			   '<a href="' + config.host + '/reset_pass?key=' + token + '&name=' + name + '">重置密碼鏈接</a>' +
			   '<p>若您沒有在' + config.name + '社區填寫過註冊信息，說明有人濫用了您的電子郵箱，請刪除此郵件，我們對給您造成的打擾感到抱歉。</p>' +
			   '<p>' + config.name +'社區 謹上。</p>'

	var data = {
		sender: sender,
		to: to,
		subject: subject,
		html: html
	}

	send_mail(data,function(err,success){
		return cb(err,success);	
	});
}
function send_reply_mail(who,msg){
	var sender =  config.mail_sender;
	var to = who; 
	var subject = config.name + ' 新消息';
	var html = '<p>您好：<p/>' +
			   '<p>' +
			   '<a href="' + config.host + ':' + config.port + '/user/' + msg.author.name + '">' + msg.author.name + '</a>' +
			   ' 在話題 ' + '<a href="' + config.host + ':' + config.port + '/topic/' + msg.topic._id + '">' + msg.topic.title + '</a>' +
			   ' 中回復了你。</p>' +
			   '<p>若您沒有在' + config.name + '社區填寫過註冊信息，說明有人濫用了您的電子郵箱，請刪除此郵件，我們對給您造成的打擾感到抱歉。</p>' +
			   '<p>' +config.name +'社區 謹上。</p>'

	var data = {
		sender: sender,
		to: to,
		subject: subject,
		html: html
	}

	send_mail(data,function(err,success){});

}
function send_at_mail(who,msg){
	var sender =  config.mail_sender;
	var to = who; 
	var subject = config.name + ' 新消息';
	var html = '<p>您好：<p/>' +
			   '<p>' +
			   '<a href="' + config.host + ':' + config.port + '/user/' + msg.author.name + '">' + msg.author.name + '</a>' +
			   ' 在話題 ' + '<a href="' + config.host + ':' + config.port + '/topic/' + msg.topic._id + '">' + msg.topic.title + '</a>' +
			   ' 中@了你。</p>' +
			   '<p>若您沒有在' + config.name + '社區填寫過註冊信息，說明有人濫用了您的電子郵箱，請刪除此郵件，我們對給您造成的打擾感到抱歉。</p>' +
			   '<p>' +config.name +'社區 謹上。</p>'

	var data = {
		sender: sender,
		to: to,
		subject: subject,
		html: html
	}

	send_mail(data,function(err,success){});
}

exports.send_active_mail = send_active_mail;
exports.send_reset_pass_mail = send_reset_pass_mail;
exports.send_reply_mail = send_reply_mail;
exports.send_at_mail = send_at_mail;
