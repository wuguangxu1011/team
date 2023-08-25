// 配置文件
window.g = {
    api:'http://mobilerightsdist.189smarthome.com:10024/right-distribution-api/',
    timerAccount:60,//验证码倒计时60s
    apiTimeOut: 5, // 请求超时配置 单位秒
    
    imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/',//静态图片服务器地址，
    spid:'770001',  // 后端约定spid值
    aspid:'0',   // spid
    platform:'1006',  // 平台标识
    content:`退订请拨打4008281189，\n或联系作业帮APP客服！`, //退订说明
    activitycode:'educationright_001',  // 活动编码
    platformMd5Key:'$WGDg1nmGRFv0CN8BsAy0GIaWK6EtH6O', //后台侧MD5加密Key
    phoneNumberKey:'pZUe9LMg6sklA6OWXp7ARQ==' ,//手机号加密的key
 //    serviceUrl:'', //客服跳转地址
    //所有权益的描述//后台权益数组
    authAllList:[
     {
         rightid:8,//权益Id,
         rightname:'作业帮通兑课程',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，       
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 作业帮小学、初中、高中各年级的春秋季</div>
         <div>、寒暑假各门类各版本课程</div>
         
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 最终价格以作业帮官网为准，如当前课程</div>
         <div>兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:9,//权益Id,
         rightname:'作业帮小学春秋季',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，        
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文学习掌握基本知识，不同文本阅读培</div>
         <div>养学生阅读能力，国学内容提高文化素养。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学提供对应知识模块，锻炼学生五大思</div>
         <div>维能力和十大学习能力。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语学习掌握重点单词，重点句型和校内</div>
         <div>重点语法点，同时锻炼培养学生英语阅读能力。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 最终价格以作业帮官网为准，如当前课程</div>
         <div>兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:10,//权益Id,
         rightname:'作业帮初中春秋季',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，   
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文学习掌握七大模块，分类更详细</div>
         <div>养学生阅读能力，国学内容提高文化素养。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学平行线模型解决6种题型，同时针对</div>
         <div>初中数学985个知识点，162个易错点，总结196个口诀大招。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语提供听力、语法、词汇学习，针对各</div>
         <div>类题型总结大招。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 最终价格以作业帮官网为准，如当前课程</div>
         <div>兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:11,//权益Id,
         rightname:'作业帮高中春秋季',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文纵向深入，透析文本内涵，针对六</div>
         <div>大知识模块，研发81大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学定制个性化学习方案因材施教，针</div>
         <div>对八大模块，研发186大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语针对七大知识模块，研发108大招</div>
         <div>体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 物理还原实验场景，快速解决繁琐分析，</div>
         <div>六类112大招体系，大幅提升解题速度与正确率。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>5</div> 化学情景式趣味教学，针对高中化学62</div>
         <div>1个知识点，研发126大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>6</div> 生物从理解到记忆，从知识到手法，让</div>
         <div>学生解题更有逻辑。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>7</div> 政治分类归纳，记忆简化，联系生活记</div>
         <div>得住。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>8</div> 地理紧扣学科能力要求，地理情景快速</div>
         <div>切入。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>9</div> 历史轻松记忆完整通史，专题线索清晰。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>10</div> 最终价格以作业帮官网为准，如当前课</div>
         <div>程兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:12,//权益Id,
         rightname:'作业帮小学寒暑假',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文学习掌握基本知识，不同文本阅读</div>
         <div>培养学生阅读能力，国学内容提高文化素养。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学提供对应知识模块，锻炼学生五大</div>
         <div>思维能力和十大学习能力。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语学习掌握重点单词，重点句型和校</div>
         <div>内重点语法点，同时锻炼培养学生英语阅读能力。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 最终价格以作业帮官网为准，如当前课</div>
         <div>程兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:13,//权益Id,
         rightname:'作业帮初中寒暑假',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，
         msg: `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文学习掌握七大模块，分类更详细。</div>
         <div>培养学生阅读能力，国学内容提高文化素养。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学平行线模型解决6种题型，同时</div>
         <div>针对初中数学985个知识点，162个易错点，总结196个口诀大招。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语提供听力、语法、词汇学习，</div>
         <div>针对各类题型总结大招。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 最终价格以作业帮官网为准，如当</div>
         <div>前课程兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
     {
         rightid:14,//权益Id,
         rightname:'作业帮高中寒暑假',//权益名称
         imgUrl:'http://cdniptvbind-h5.189smarthome.com/jiaoyu-right-mobile/static/img/zuoyebang_vip.png',//静态图片CDN服务器地址，
         msg:  `
         <div style="border:1px solid #D9D9D9"></div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>1</div> 语文纵向深入，透析文本内涵，针对</div>
         <div>六大知识模块，研发81大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>2</div> 数学定制个性化学习方案因材施教，</div>
         <div>针对八大模块，研发186大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>3</div> 英语针对七大知识模块，研发108大</div>
         <div>招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>4</div> 物理还原实验场景，快速解决繁琐分</div>
         <div>析，六类112大招体系，大幅提升解题速度与正确率。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>5</div> 化学情景式趣味教学，针对高中化学</div>
         <div>621个知识点，研发126大招体系。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>6</div> 生物从理解到记忆，从知识到手法，</div>
         <div>让学生解题更有逻辑。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>7</div> 政治分类归纳，记忆简化，联系生</div>
         <div>活记得住。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>8</div> 地理紧扣学科能力要求，地理情景</div>
         <div>快速切入。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>9</div> 历史轻松记忆完整通史，专题线索</div>
         <div>清晰。</div>
         <div style='display:flex;font-size:13px;margin-top:16px'><div style='display:flex;justify-content:center;aligh-item:center; width:19px;height:19px;border-radius:50%;background: #FBB301;margin-right:6px'>10</div> 最终价格以作业帮官网为准，如</div>
         <div>当前课程兑换券面值低于作业帮官网价格，用户需在兑换课程时自行承担剩余金额。</div>
         `
     },
 ]
 
  
   
 }