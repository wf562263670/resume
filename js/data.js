const edu1 = {
    "school": "江苏电子信息职业技术学院",
    "time": "2017.07-2020.06",
    "subject": "软件技术"
};


const skillData = [
    "熟练使用SpringBoot, SpringCloud, Zookeeper,Dubbo等开源框架",
    "熟练使用MySQL、Redis等数据库技术",
    "熟悉JVM调优,MySQL调优",
    "了解RabbitMQ,Kafka等消息中间件",
    "了解Docker、ElasticSearch",
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
    "time": "2020.7-至今",
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
    "time": "2020.7-2020.9",
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
            "2.生产计划管理：</br>" +
            "3.数据可视化看板：页面开发实现，和后台对接数据接口</br>"
    }
}
const project7 = {
    "project": "体系咨询认证业务平台",
    "time": "2020.11-2020.12",
    "job": "Java开发工程师",
    "describe": {
        "architecture": "springboot+mysql",
        "remark": "知识产权认证平台，是利用模块化、可配置化的技术思想打造的市面上首款知识产权管理系统，解决了知识产权文档需要大量人工录入，数据重复填写的问题，发挥了系统的主观能动性，为规范知识产权认证活动，提高产权有效性。",
        "liability": "1.搭建Saas模式的底层结构基础</br>" +
            "2.解决前后端技术性问题，把控项目进度</br>" +
            "3.项目用户端系统开发</br>"
    }
}