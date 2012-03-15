/**
 * config
 */

exports.config = {
	name: 'Node Club',
	description: 'Node Club 是用Node.js開發的社區軟件',
	version: '0.2.0',

	// site settings
	site_headers: [
		'<meta name="author" content="EDP@TAOBAO" />',
	],
	host: 'http://127.0.0.1', // host 結尾不要添加'/'
	site_logo: '', // default is `name`
	site_navs: [
		// [ path, title, [target=''] ]
		[ '/about', '關於' ],
	],
	site_static_host: '', // 靜態文件存儲域名

	db: 'mongodb://127.0.0.1/node_club',
	session_secret: 'node_club',
	auth_cookie_name: 'node_club',
	port: 80,

	// 話題列表顯示的話題數量
	list_topic_count: 20,

	// mail SMTP
	mail_port: 25,
	mail_user: 'club',
	mail_pass: 'club',
	mail_host: 'smtp.126.com',
	mail_sender: 'club@126.com',
	mail_use_authentication: true,
	
	//weibo app key
	weibo_key: 10000000,

	// admin 可刪除話題，編輯標籤，設某人為達人
	admins: { admin: true },

	// [ [ plugin_name, options ], ... ]
	plugins: []
};

var host = exports.config.host;
if (host[host.length - 1] === '/') {
	exports.config.host = host.substring(0, host.length - 1);
}
