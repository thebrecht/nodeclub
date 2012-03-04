var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
/*
 * type:
 * reply: xx 回復了你的話題
 * reply2: xx 在話題中回復了你
 * follow: xx 關注了你
 * at: xx ＠了你
 */
 
var MessageSchema = new Schema({
	type: {type: String},
	master_id: {type: ObjectId, index:true},
	author_id: {type: ObjectId},
	topic_id: {type: ObjectId},
	has_read: {type: Boolean, default: false},
	create_at: {type: Date, default: Date.now}
});

mongoose.model('Message', MessageSchema);
