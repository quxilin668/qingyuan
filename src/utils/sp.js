export default function Sp(){
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = false;
    var code=0;
    var v = 0;
    for (v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
    }
    if (flag) {
    console.log('当前是移动端')
      return  code =0;
     } else {
    console.log('当前是PC')
     return code =1;
    }
}
