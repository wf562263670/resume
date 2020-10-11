$(function () {
    const eduList = [];
    const companyList = [];
    const projectList = [];
    const edu = $("#edu_table");
    const skill = $("#skill_table");
    const company = $("#company_table");
    const projectTable = $("#project_table");
    eduList.push(edu1);
    companyList.push(company1, company2);
    projectList.push(project1, project2, project3, project4, project5);
    for (let i = eduList.length - 1; i >= 0; i--) {
        let html = "<tr>" +
            "<td width='8%' class='font-weight-bold font_size'>学校名称:</td>" +
            "<td width='20%' class='font_size'>" + eduList[i].school + "</td>" +
            "<td width='8%' class='font-weight-bold font_size'>就读时间:</td>" +
            "<td width='14%' class='font_size'>" + eduList[i].time + "</td>" +
            "<td width='8%' class='font-weight-bold font_size'>所学专业:</td>" +
            "<td width='12%' class='font_size'>" + eduList[i].subject + "</td>" +
            "</tr>"
        if (i !== 0) {
            html += "<tr><td><p/></tr>";
        }
        edu.append(html);
    }

    for (let i = 0; i < skillData.length; i++) {
        const html = "<tr>" +
            "<td class='font_size'>" + (i + 1) + "." + skillData[i] + "</td>" +
            "</tr>";
        skill.append(html);
    }

    for (let i = companyList.length - 1; i >= 0; i--) {
        let html = "<tr>" +
            "<td width='10%' class='font-weight-bold font_size'>公司名称:</td>" +
            "<td width='30%' class='font_size'>" + companyList[i].company + "</td>" +
            "<td width='10%' class='font-weight-bold font_size'>职位名称:</td>" +
            "<td width='20%' class='font_size'>" + companyList[i].position + "</td>" +
            "<td width='10%' class='font-weight-bold font_size'>在职时间:</td>" +
            "<td width='20%' class='font_size'>" + companyList[i].time + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='font-weight-bold font_size'>工作描述:</td>" +
            "<td colspan='5' class='font_size'>" + companyList[i].remark + "</td>" +
            "</tr>";
        if (i !== 0) {
            html += "<tr><td><p/></tr>";
        }
        company.append(html);
    }
    for (let i = projectList.length - 1; i >= 0; i--) {
        let html = "<tr>" +
            "<td width='10%' class='font-weight-bold font_size'>项目名称:</td>" +
            "<td width='20%' class='font_size'>" + projectList[i].project + "</td>" +
            "<td width='10%' class='font-weight-bold font_size'>项目时间:</td>" +
            "<td width='20%' class='font_size'>" + projectList[i].time + "</td>" +
            "<td width='10%' class='font-weight-bold font_size'>项目位置:</td>" +
            "<td width='20%' class='font_size'>" + projectList[i].job + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class='font-weight-bold font_size'>项目描述:</td>" +
            "<td colspan='5'>" +
            "<table>" +
            "<tr>" +
            "<td width='120' valign='top' class='font_size'>系统架构：</td>" +
            "<td class='font_size' valign='top'>" + projectList[i].describe.architecture + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td width='120' valign='top' class='font_size'>项目描述：</td>" +
            "<td class='font_size' valign='top'>" + projectList[i].describe.remark + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td width='120' valign='top' class='font_size'>责任描述：</td>" +
            "<td class='font_size' valign='top'>" + projectList[i].describe.liability + "</td>" +
            "</tr>" +
            "</table>" +
            "</td>" +
            "</tr>";
        if (i !== 0) {
            html += "<tr><td><p/></tr>";
        }
        projectTable.append(html);
    }
});
