const edu1 = {
    "school": "江苏电子信息职业技术学院",
    "time": "2017.07-2020.06",
    "subject": "软件技术"
};

const skillData = [
    "熟练使用SpringBoot, MyBatis, SpringCloud, Zookeeper, Dubbo等开源框架",
    "熟练使用MySQL、Redis等数据库技术",
    "熟练使用Vue、BootStrap、JQuery、UniApp等前端技术",
    "熟悉JVM和MySQL调优原理",
    "熟练使用JenKins和Docker搭建自动化部署环境",
    "了解RabbitMQ,ElasticSearch等开源框架",
];
const company1 = {
    "company": "南通东华软件有限公司",
    "position": "Java开发工程师",
    "time": "2019.11-2020.6",
    "remark": "Java开发工程师，负责企业项目运维，带领团队对其中项目进行二次开发"
};
const company2 = {
    "company": "江苏功业互联科技有限公司",
    "position": "Java开发工程师",
    "time": "2020.8-2021.3",
    "remark": "Java开发工程师，担任开发组组长，解决技术性问题，负责对公司项目问题排查，对项目数据库调优"
};
const project1 = {
    "project": "企业运营支撑系统",
    "time": "2019.11-2020.4",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "一次开发：spring+springMVC+hibernate+activiti+mysql，二次开发：springboot+mybatis",
        "remark": "神州新桥企业运营支撑系统由合同管理，审批管理，财务管理，人力资源管理等几个主要模块组成，是针对企业物资资源、人力资源、资金资源、信息资源进行全面管理，为企业决策层及员工提供决策支撑手段的信息管理系统。",
        "liability": "1.商品订单功能：子订单金额计算</br>" +
            "2.创建订单功能：保存子订单日志</br>"
    }
}
const project2 = {
    "project": "招聘系统",
    "time": "2019.11-2020.3",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mybatis+elasticsearch+zookeeper+dubbo+mysql+微信小程序",
        "remark": "招聘系统由岗位管理，简历管理，面试管理，入职管理等模块组成，为解决本公司招聘组对外招聘的业务需求，以及接入ehr查询到相关外包人员信息。",
        "liability": "1.简历模块：前端页面上传简历，通过fastdfs上传到文件服务器，以及获取文件所存在的路径回传给前端</br>" +
            "2.钉钉打卡数据处理：由人事部员工上传钉钉打卡数据及数据模板，通过poi做数据处理</br>" +
            "3.微信小程序后端：查询所有岗位信息</br>" +
            "4.组织架构功能：分析企业架构，根据Team回去给Leader下所有在职人员信息</br>"
    }
}
const project3 = {
    "project": "快捷审批系统",
    "time": "2020.4-2020.6",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springcloud+springboot+mybatis+rabbitMQ+activiti+mysql+redis+微信小程序",
        "remark": "快捷审批系统为企业运营支撑系统中独立出来的模块系统，由审批中心和审批历史模块组成，该项目为便捷上级领导审批，通过公众号或PC端来审批。",
        "liability": "项目组长，完成领导提出的需求，带领队伍参与该项目开发，测试，部署，运维等职责"
    }
}
const project4 = {
    "project": "快捷报销系统",
    "time": "2020.4-2020.6",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springcloud+springboot+mybatis+rabbitMQ+activiti+mysql+redis+微信小程序",
        "remark": "快捷报销系统为企业运营支撑系统中独立出来的模块系统，由发票模块，报销单模块，借款单模块组成，该项目为企业及子公司的报销审批提供便利的报销方式，由员工创建报销单，使用Activiti工作流作为审批引擎，通过RabbitMQ推送到公众号由审批人进行审批。",
        "liability": "项目组长，完成领导提出的需求，带领队伍参与该项目开发，测试，部署，运维等职责"
    }
}
const project5 = {
    "project": "设备管理系统",
    "time": "2020.8-2020.10",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+activiti+mysql",
        "remark": "公司对外项目，各行业设备台账、设备管理流程、设备管理经验总结而成开发设备管理系统",
        "liability": "1.审批中心模块：使用Activiti完成各个功能的审批，查询，新增</br>" +
            "2.资产管理模块：实现对公司财产的查询，新增，对接审批中心模块进行审批</br>" +
            "3.MySQL调优：根据MySQL慢查询日志获取慢SQL,并对SQL进行优化</br>"
    }
}
const project6 = {
    "project": "雄邦压铸产品产能分析系统",
    "time": "2020.10-2020.11",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mysql",
        "remark": "工厂设备运转实施自动化监控设备",
        "liability": "1.多租户管理：搭建Saas模式的底层结构基础/平台管理</br>" +
            "2. 生产计划管理：通过算法计算产出货物数量向对应的多个库位</br>" +
            "3.数据可视化看板：页面开发实现，和后台对接数据接口</br>"
    }
}
const project7 = {
    "project": "体系咨询认证业务平台",
    "time": "2020.11-2020.12",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mybatis+security+mysql+redis",
        "remark": "知识产权认证平台，是利用模块化、可配置化的技术思想打造的市面上首款知识产权管理系统，解决了知识产权文档需要大量人工录入，数据重复填写的问题，发挥了系统的主观能动性，为规范知识产权认证活动，提高产权有效性。系统分为前台用户系统和后台管理系统，前台系统包含我的模板，我的工单，部门信息，职能管理，我的项目等7个模块，后台系统包含基础数据，权限管理，用户管理，模板管理等10个模块。",
        "liability": "1.与产品经理进行需求讨论和分析，编制软件开发计划，分发任务至团队成员，把控项目开发进度和质量控制</br>" +
            "2.搭建Saas模式的底层结构基础</br>" +
            "3.基础模块：基础数据的操作维护，使用shiro权限框架分配给不同登录用户的角色，注册/登录/找回密码，对接阿里云第三方短信进行验证，项目字段表单维护</br>" +
            "4.文件模块：文件的上传，下载，使用easyPoi对模板文件内容图片进行替换</br>" +
            "5.项目管理：项目详情页根据不同权限动态生成不同字段，显示不同流程，用户上传文件，审批员使用activity对用户信息进行审核</br>" +
            "6.前端使用Vue autoForm动态生成字段</br>" +
            "7.负责项目部署及后期项目运维</br>"
    }
}
const project8 = {
    "project": "科技咨询机构服务平台",
    "time": "2020.12-2020.12",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mybatis+security+mysql+redis+微信小程序",
        "remark": "该系统为公司匹配客户匹配国家相关政策信息，简化了人员操作。整个项目包含基础模块，客户管理，政策管理，案件管理，项目管理，小程序等。",
        "liability": "1. 基础模块：注册/登录/找回密码，对接阿里云第三方短信进行验证，基础数据的操作维护</br>" +
            "2.政策模块：使用爬虫技术抓取相关信息进行维护，根据用户类型匹配相关政策类型</br>" +
            "3. 案件管理：根据政策类型，使用easyPoi对模板字段进行替换导出，通过政策申报建议书，提供选择申报政策的参考报价，定制产品报价方案，使用POI生成报价信息文件</br>"
    }
}
const project9 = {
    "project": "上海伊威WMS仓储系统",
    "time": "2020.12-2021.3",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mybatis-plus+security+mysql+redis+uniapp",
        "remark": "该系统涉及多工厂，包含上海伊威和江苏伊威采购、生产、仓储、销售等环节。整个项目包含货位模块，入库模块，出库模块，退货模块，盘点模块，基础模块，PDA软件模块等。",
        "liability": "1. 与产品经理进行需求讨论和分析，编制软件开发计划，分发任务至团队成员，把控项目开发进度和质量控制</br>" +
            "2. 基础模块：基础数据的操作维护，使用security权限框架分配给不同登录用户的角色</br>" +
            "3. 入库模块：基础数据CRUD，使用POI生成Excel导出数据，生成数据对应二维码，与前端研发人员对接接口</br>"+
            "4. 负责项目部署及后期项目运维</br>"
    }
}