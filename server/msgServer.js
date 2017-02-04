/**
 * Created by baoyinghai on 2/4/17.
 */

function msgServer(msg) {
  if (msg.MsgType === 'text') {
    console.log('FromUserName: ' + msg.FromUserName + ', time: ' + msg.CreateTime + ', Content: ' + msg.Content);
    const ret = Object.assign({}, msg);
    ret.FromUserName = msg.ToUserName;
    ret.ToUserName = msg.FromUserName;
    ret.Content = msg.Content + ' lalalla';
    return ret;
  } else {
    return null;
  }
}

module.exports = msgServer;