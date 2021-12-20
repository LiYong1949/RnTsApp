import axios from './request';

/* 公共 */
const login = async (datas: any) => { // 登录
  return axios(`/api/web/jwt/login`, 'POST', datas);
};
const refreshToken = async (datas: any) => { // 刷新token
  return axios(`/api/web/jwt/refresh_token`, 'POST', datas);
};
const changePassword = async (datas: any) => { // 修改自己的密码
  return axios(`/api/web/password`, 'POST', datas);
};
const getQiniuToken = async () => { // 获取七牛token
  return axios(`/api/web/qiniu`, 'GET', null);
};
const getUserAuthorities = async (datas?: any) => { // 获取当前人员权限
  return axios(`/api/web/user/authorities`, 'GET', datas);
};
const getProjects = async () => { // 获取当前登录人员的所有项目
  return axios(`/api/web/projects`, 'GET');
};
const getUsers = async () => { // 获取所有人员
  return axios(`/api/web/users`, 'GET', null);
};
const getUser = async (datas?: any) => { // 获取指定人员信息(不传user_id表示获取当前登录人员信息)
  return axios(`/api/web/user`, 'GET', datas);
};
const getProjectUsers = async (projectId: number, datas?: any) => { // 获取指定项目所有项目人员
  return axios(`/api/web/projects/${projectId}/users`, 'GET', datas);
};
const getProjectNoUsers = async (projectId: number) => { // 获取指定项目所有非项目人员
  return axios(`/api/web/projects/${projectId}/no-users`, 'GET', null);
};
const getProjectUser = async (projectId: number, userId: number) => { // 获取指定项目指定人员信息
  return axios(`/api/web/projects/${projectId}/users/${userId}`, 'GET', null);
};
const createProjectUser = async (projectId: number, datas: any) => { // 新增项目人员
  return axios(`/api/web/projects/${projectId}/users`, 'POST', datas);
};
const updateProjectUser = async (projectId: number, userId: any, data?: any) => { // 更新指定项目指定人员信息
  return axios(`/api/web/projects/${projectId}/users/${userId}`, 'PUT', data);
};
const deleteProjectUser = async (projectId: number, userId: number) => { // 移除指定项目的指定项目人员
  return axios(`/api/web/projects/${projectId}/users/${userId}`, 'DELETE', null);
};
const getStandardPosts = async () => { // 获取标准岗位
  return axios(`/api/web/standard-posts`, 'GET', null);
};
const setStandardPostAuth = async (postId: number, datas: any) => { // 设置标准岗位权限
  return axios(`/api/web/standard-posts/${postId}`, 'POST', datas);
};
const getStandardPostAuth = async (id: number) => { // 获取标准岗位权限
  return axios(`/api/web/standard-posts/${id}`, 'GET', null);
};
const getRoles = async () => { // 获取角色
  return axios(`/api/web/roles`, 'GET', null);
};
const getQualificationUsers = async () => { // 获取有资质的项目人员
  return axios(`/api/web/user/qualifications`, 'GET', null);
};
const getAuthorities = async () => { // 获取所有权限
  return axios(`/api/web/authorities`, 'GET', null);
};
const getAuthoritie = async (authId: number) => { // 获取指定权限
  return axios(`/api/web/authorities/${authId}`, 'GET', null);
};
const updateAuthoritie = async (authId: number, datas: any) => { // 修改指定权限
  return axios(`/api/web/authorities/${authId}`, 'PUT', datas);
};
const getTodos = async (ids: string) => {             // 获取当前人员待办
  return axios(`/api/web/to-do?to_do_ids=${ids}`);
};

/* 现场作业——安全措施 */
const getMeasures = async (datas: any) => { // 获取所有安全措施
  return axios(`/api/web/measures`, 'GET', datas);
};
const getProjectMeasures = async (projectId: any) => { // 获取项目涉及所有安全措施
  return axios(`/api/web/project/${projectId}/measures`, 'GET', null);
};
const getMeasure = async (id: number) => { // 获取指定安全措施
  return axios(`/api/web/measures/${id}`, 'GET', null);
};
const createMeasure = async (datas: any) => { // 创建安全措施信息
  return axios(`/api/web/measure`, 'POST', datas);
};
const updateMeasure = async (id: number, datas: any) => { // 更新安全措施信息
  return axios(`/api/web/measures/${id}`, 'PUT', datas);
};
const deleteMeasure = async (id: number) => { // 删除安全措施
  return axios(`/api/web/measures/${id}`, 'DELETE', null);
};
const getMeasureTemplateUrl = async () => { // 获取安全措施模板地址
  return axios(`/api/web/measure/template`, 'GET', null);
};


/* 现场作业——双周计划 */
const getBiweeklyPlans = async (datas: any) => { // 获取双周计划
  return axios(`/api/web/plans`, 'GET', datas);
};
const getBiweeklyPlan = async (id: number) => {// 获取指定计划
  return axios(`/api/web/plans/${id}`, 'GET', null);
};
const createBiweeklyPlan = async (datas: any) => { // 创建双周计划
  return axios(`/api/web/plan`, 'POST', datas);
};
const updateBiweeklyPlan = async (id: number, datas: any) => { // 更新双周计划信息
  return axios(`/api/web/plans/${id}`, 'PUT', datas);
};
const deleteBiweeklyPlan = async (id: number) => { // 删除双周计划
  return axios(`/api/web/plans/${id}`, 'DELETE', null);
};


/* 现场作业——施工作业 */
const getConstructionTasks = async (datas: any) => { // 获取施工作业
  return axios(`/api/web/jobs`, 'GET', datas);
};
const getConstructionTask = async (id: number) => {// 获取指定施工作业
  return axios(`/api/web/jobs/${id}`, 'GET', null);
};
const updateConstructionTask = async (id: number, datas: any) => {// 修改施工作业
  return axios(`/api/web/jobs/${id}`, 'PUT', datas);
};
const deleteConstructionTask = async (id: number) => { // 删除施工作业
  return axios(`/api/web/plans/${id}`, 'DELETE', null);
};
const operateConstructionTask = async (id: number, datas: any) => {// 操作施工作业
  return axios(`/api/web/jobs/${id}`, 'POST', datas);
};

/* 审计——施工作业 */
const getAuditConstructionTasks = async (datas: any) => { // 获取审计施工作业分页
  return axios(`/api/web/operations/audits`, 'GET', datas);
};
const getAuditConstructionTask = async (id: number) => {// 获取指定审计施工作业
  return axios(`/api/web/operations/audits/${id}`, 'GET', null);
};
const getAuditConstructionTaskCount = async () => { // 获取审计施工作业数量
  return axios(`/api/web/operations/audits/count`, 'GET', null);
};
const auditConstructionTask = async (id: number, datas: any) => { // 审计施工作业
  return axios(`/api/web/operations/audits/${id}`, 'POST', datas);
};
const getAuditConstructionTaskExplain = async (id: number) => { // 获取指定审计施工作业补充说明
  return axios(`/api/web/operations/audits/${id}/explains`, 'GET', null);
};
const addAuditConstructionTaskExplain = async (id: number, datas: any) => { // 添加指定审计施工作业补充说明
  return axios(`/api/web/operations/audits/${id}/explains`, 'POST', datas);
};

/* 工具物资管理——工具物资库 */
const getToolsAndMaterials = async (datas: any) => { // 获取工具物资库分页
  return axios(`/api/web/tools`, 'GET', datas);
};
const getToolsAndMaterial = async (id: number) => { // 获取指定工具物资库
  return axios(`/api/web/tools/${id}`, 'GET', null);
};
const createToolsAndMaterial = async (datas: any) => { // 添加工具物资库
  return axios(`/api/web/tools`, 'POST', datas);
};
const updateToolsAndMaterial = async (id: number, datas: any) => {// 修改指定工具物资库
  return axios(`/api/web/tools/${id}`, 'PUT', datas);
};
const deleteToolsAndMaterial = async (id: number) => {// 删除指定工具物资库
  return axios(`/api/web/tools/${id}`, 'DELETE', null);
};

/* 工具物资管理——工具物资检查计划 */

const getToolsAndMaterialCheckPlans = async (datas: any) => { // 获取工具物资检查计划分页
  return axios(`/api/web/tools/plans`, 'GET', datas);
};
const createToolsAndMaterialCheckPlan = async (datas: any) => { // 添加工具物资检查计划
  return axios(`/api/web/tools/plan`, 'POST', datas);
};
const updateToolsAndMaterialCheckPlan = async (id: number, datas: any) => {// 修改指定工具物资检查计划
  return axios(`/api/web/tools/plans/${id}`, 'PUT', datas);
};
const deleteToolsAndMaterialCheckPlan = async (id: number) => {// 删除指定工具物资检查计划
  return axios(`/api/web/tools/plans/${id}`, 'DELETE', null);
};
const getToolsAndMaterialCheckPlanItems = async (id: number) => {// 获取指定工具物资检查计划
  return axios(`/api/web/tools/plans/${id}`, 'GET', null);
};
const getToolsAndMaterialCheckPlanItem = async (id: number) => {// 获取指定工具物资检查计划检查项
  return axios(`/api/web/tools/plans/check-items/${id}`, 'GET', null);
};
const checkToolsAndMaterialCheckPlan = async (id: number, datas: any) => {// 物资检查计划检查项检查
  return axios(`/api/web/tools/plans/check-items/${id}`, 'POST', datas);
};
const finishToolsAndMaterialCheckPlan = async (id: number) => { // 结束工具物资检查计划
  return axios(`/api/web/tools/plans/${id}`, 'POST', null);
};

/** 让步报批 */
const getConcessions = async (params: {}) => { // 获取让步报批列表
  return axios(`/api/web/concessions`, 'GET', params);
};
const getConcession = async (id: number) => {  // 获取让步报批详情
  return axios(`/api/web/concessions/${id}`);
};
const updateConcession = async (id: number, params: any) => { // 修改让步报批
  return axios(`/api/web/concessions/${id}`, 'PUT', params);
};
const createConcession = async (params: {}) => { // 创建让步报批
  return axios(`/api/web/concession`, 'POST', params);
};
const deleteConcession = async (id: number) => { // 删除让步报批
  return axios(`/api/web/concessions/${id}`, 'DELETE');
};
const operateConcession = async (id: number, datas: any) => {// 操作让步报批
  return axios(`/api/web/concessions/${id}`, 'POST', datas);
};


/** 安全检查与隐患排查——安全检查标准 */

const getSafetyInspectionStandards = async (params: any) => { // 获取安全检查标准列表
  return axios(`/api/web/standards`, 'GET', params);
};
const createSafetyInspectionStandard = async (datas: any) => { // 创建安全检查标准
  return axios(`/api/web/standard`, 'POST', datas);
};
const updateSafetyInspectionStandard = async (id: number, datas: any) => { // 修改安全检查标准
  return axios(`/api/web/standards/${id}`, 'PUT', datas);
};
const deleteSafetyInspectionStandard = async (id: number) => { // 删除安全检查标准
  return axios(`/api/web/standards/${id}`, 'DELETE');
};
const getSafetyInspectionStandard = async (id: number) => { // 获取安全检查标准详情
  return axios(`/api/web/standards/${id}`, 'GET');
};

/** 安全检查与隐患排查——安全检查计划 */
const getSafetyInspectionPlans = async (params: any) => { // 获取安全检查计划列表
  return axios(`/api/web/safety/plans`, 'GET', params);
};
const createSafetyInspectionPlan = async (datas: any) => { // 创建安全检查计划
  return axios(`/api/web/safety/plan`, 'POST', datas);
};
const updateSafetyInspectionPlan = async (id: number, datas: any) => { // 修改安全检查计划
  return axios(`/api/web/safety/plans/${id}`, 'PUT', datas);
};
const deleteSafetyInspectionPlan = async (id: number) => { // 删除安全检查计划
  return axios(`/api/web/safety/plans/${id}`, 'DELETE');
};
const getSafetyInspectionPlan = async (id: number) => { // 获取安全检查计划详情
  return axios(`/api/web/safety/plans/${id}`, 'GET');
};
const operateSafetyInspectionPlan = async (id: number, datas: any) => { // 操作安全检查计划
  return axios(`/api/web/safety/plans/${id}`, 'POST', datas);
};

/** 安全检查与隐患排查——安全检查执行 */
const getSafetyInspectionExecutions = async (params: any) => { // 获取安全检查执行列表
  return axios(`/api/web/safety/execution-plans`, 'GET', params);
};
const createSafetyInspectionExecution = async (datas: any) => { // 创建临时检查
  return axios(`/api/web/safety/execution-plan`, 'POST', datas);
};
const acceptSafetyInspectionExecution = async (id: number, datas: any) => { // 安全检查执行受理
  return axios(`/api/web/safety/execution-plans/${id}`, 'POST', datas);
};
const getSafetyInspectionExecution = async (id: number) => { // 获取安全检查执行详情
  return axios(`/api/web/safety/execution-plans/${id}`, 'GET');
};
const checkSafetyInspectionExecution = async (id: number, checkId: number, datas: any) => { // 安全检查执行检查
  return axios(`/api/web/safety/execution-plans/${id}/checks/${checkId}`, 'POST', datas);
};
const operateSafetyInspectionExecution = async (id: number, datas: any) => { // 检查执行操作
  return axios(`/api/web/safety/execution-plans/${id}`, 'POST', datas);
};
const getSafetyInspectionRectifications = async (params: any) => { // 获取安全检查执行整改项列表
  return axios(`/api/web/safety/rectifications`, 'GET', params);
};
const createSafetyInspectionRectification = async (executionId: number, datas: any) => { // 创建安全检查执行整改项
  return axios(`/api/web/safety/execution-plans/${executionId}/rectification`, 'POST', datas);
};
const updateSafetyInspectionRectification = async (id: number, datas: any) => { // 修改安全检查执行整改项
  return axios(`/api/web/safety/rectifications/${id}`, 'PUT', datas);
};
const getSafetyInspectionRectification = async (id: number) => { // 获取安全检查执行整改项详情
  return axios(`/api/web/safety/rectifications/${id}`, 'GET');
};
const deleteSafetyInspectionRectification = async (id: number) => { // 删除安全检查执行整改项
  return axios(`/api/web/safety/rectifications/${id}`, 'DELETE');
};
const operateSafetyInspectionRectification = async (id: number, datas: any) => { // 安全检查执行整改项操作
  return axios(`/api/web/safety/rectifications/${id}`, 'POST', datas);
};


/** 安全检查与隐患排查——隐患排查 */
const getSafetyInspectionTroubles = async (params: any) => { // 获取隐患列表
  return axios(`/api/web/dangers`, 'GET', params);
};
const creteSafetyInspectionTrouble = async (datas: any) => { // 创建隐患
  return axios(`/api/web/danger`, 'POST', datas);
};
const updateSafetyInspectionTrouble = async (id: number, datas: any) => { // 修改隐患
  return axios(`/api/web/dangers/${id}`, 'PUT', datas);
};
const getSafetyInspectionTrouble = async (id: number) => { // 获取隐患详情
  return axios(`/api/web/dangers/${id}`, 'GET');
};
const deleteSafetyInspectionTrouble = async (id: number) => { // 删除隐患
  return axios(`/api/web/dangers/${id}`, 'DELETE');
};
const operateSafetyInspectionTrouble = async (id: number, datas: any) => { // 隐患操作
  return axios(`/api/web/dangers/${id}`, 'POST', datas);
};

/** 事故事件——事故事件库 */
const getAccidents = async (params: any) => { // 获取事故事件库列表
  return axios(`/api/web/accidents`, 'GET', params);
};
const getAccident = async (id: number) => { // 获取事故事件详情
  return axios(`/api/web/accidents/${id}`, 'GET');
};
const getAccidentNatures = async () => { // 获取事故事件类型
  return axios(`/api/web/accidents/natures`, 'GET', null);
};
const deleteAccident = async (id: number) => { // 删除事故事件
  return axios(`/api/web/accidents/${id}`, 'DELETE');
};
const getAccidentLogs = async (id: number) => { // 获取事故事件库日志
  return axios(`/api/web/accidents/${id}/logs`, 'GET', null);
};
const getAccidentOperations = async (id: number) => { // 事故事件详情-（调查证据、整改项、调查报告）查询
  return axios(`/api/web/accidents/${id}/operations`, 'GET', null);
};
const createAccidentOperation = async (id: number, datas: any) => { // 事故事件详情-（调查证据、整改项、调查报告）新增
  return axios(`/api/web/accidents/${id}/operation`, 'POST', datas);
};
const updateAccidentOperation = async (id: number, operationId: number, datas: any) => { // 事故事件详情-（调查证据、整改项、调查报告）更新
  return axios(`/api/web/accidents/${id}/operations/${operationId}`, 'PUT', datas);
};
const operateAccidentOperation = async (id: number, operationId: number, datas: any) => { // 事故事件详情-（调查证据、整改项、调查报告）操作
  return axios(`/api/web/accidents/${id}/operations/${operationId}`, 'POST', datas);
};
const deleteAccidentOperation = async (id: number, operationId: number) => { // 删除事故事件
  return axios(`/api/web/accidents/${id}/operations/${operationId}`, 'DELETE');
};
const createAccident = async (datas: any) => { // 创建事故事件库-（调查证据、整改项、调查报告）
  return axios(`/api/web/accident`, 'POST', datas);
};
const updateAccident = async (id: number, datas: any) => { // 修改事故事件库
  return axios(`/api/web/accidents/${id}`, 'PUT', datas);
};
const operateAccident = async (id: number, datas: any) => { // 事故事件库操作
  return axios(`/api/web/accidents/${id}`, 'POST', datas);
};

/** 事故事件——案例与最佳实践 */
const getAccidentCases = async (params: any) => { // 获取事故事件案例与实践列表
  return axios(`/api/web/accidents/cases`, 'GET', params);
};
const createAccidentCase = async (datas: any) => { // 创建事故事件案例与实践
  return axios(`/api/web/accidents/case`, 'POST', datas);
};
const updateAccidentCase = async (id: number, datas: any) => { // 修改事故事件案例与实践
  return axios(`/api/web/accidents/cases/${id}`, 'PUT', datas);
};
const deleteAccidentCase = async (id: number) => { // 删除事故事件案例与实践
  return axios(`/api/web/accidents/cases/${id}`, 'DELETE');
};

/** 危险作业——危险作业库 */
const getDangerJobs = async (params: any) => { // 获取危险作业库列表
  return axios(`/api/web/danger-jobs`, 'GET', params);
};
const createDangerJob = async (datas: any) => { // 创建危险作业库
  return axios(`/api/web/danger-job`, 'POST', datas);
};
const updateDangerJob = async (id: number, datas: any) => { // 修改危险作业库
  return axios(`/api/web/danger-jobs/${id}`, 'PUT', datas);
};
const getDangerJob = async (id: number) => { // 获取事危险作业库详情
  return axios(`/api/web/danger-jobs/${id}`, 'GET', null);
};
const deleteDangerJob = async (id: number) => { // 删除危险作业库
  return axios(`/api/web/danger-jobs/${id}`, 'DELETE');
};
const operateDangerJob = async (id: number, datas: any) => { // 危险作业库操作
  return axios(`/api/web/danger-jobs/${id}`, 'POST', datas);
};

/** 控制台——审批配置 */
const getApproveModules = async (params: any) => { // 获取审批模块
  return axios(`/api/web/approve/keys`, 'GET', params);
};
const getApproves = async (params: any) => { // 获取审批配置列表
  return axios(`/api/web/approves`, 'GET', params);
};
const getApprove = async (id: number) => { // 获取审批配置详情
  return axios(`/api/web/approves/${id}`, 'GET', null);
};
const createApprove = async (datas: any) => { // 创建审批配置
  return axios(`/api/web/approve`, 'POST', datas);
};
const updateApprove = async (id: number, datas: any) => { // 修改审批配置
  return axios(`/api/web/approves/${id}`, 'PUT', datas);
};
const deleteApprove = async (id: number) => { // 删除审批配置
  return axios(`/api/web/approves/${id}`, 'DELETE');
};

export default {
  login,
  refreshToken,
  changePassword,
  getQiniuToken,
  getUserAuthorities,
  getProjects,
  getUsers,
  getUser,
  getProjectUsers,
  getProjectNoUsers,
  getProjectUser,
  createProjectUser,
  updateProjectUser,
  deleteProjectUser,
  getStandardPosts,
  setStandardPostAuth,
  getStandardPostAuth,
  getRoles,
  getQualificationUsers,
  getAuthorities,
  getAuthoritie,
  updateAuthoritie,
  getTodos,

  getMeasures,
  getProjectMeasures,
  getMeasure,
  createMeasure,
  updateMeasure,
  deleteMeasure,
  getMeasureTemplateUrl,

  getBiweeklyPlans,
  getBiweeklyPlan,
  createBiweeklyPlan,
  updateBiweeklyPlan,
  deleteBiweeklyPlan,

  getConstructionTasks,
  getConstructionTask,
  updateConstructionTask,
  deleteConstructionTask,
  operateConstructionTask,

  getAuditConstructionTasks,
  getAuditConstructionTask,
  getAuditConstructionTaskCount,
  auditConstructionTask,
  getAuditConstructionTaskExplain,
  addAuditConstructionTaskExplain,

  getToolsAndMaterials,
  getToolsAndMaterial,
  createToolsAndMaterial,
  updateToolsAndMaterial,
  deleteToolsAndMaterial,

  getToolsAndMaterialCheckPlans,
  getToolsAndMaterialCheckPlanItems,
  getToolsAndMaterialCheckPlanItem,
  createToolsAndMaterialCheckPlan,
  updateToolsAndMaterialCheckPlan,
  deleteToolsAndMaterialCheckPlan,
  checkToolsAndMaterialCheckPlan,
  finishToolsAndMaterialCheckPlan,

  updateConcession,
  getConcessions,
  getConcession,
  createConcession,
  deleteConcession,
  operateConcession,

  getSafetyInspectionStandards,
  createSafetyInspectionStandard,
  updateSafetyInspectionStandard,
  deleteSafetyInspectionStandard,
  getSafetyInspectionStandard,

  getSafetyInspectionPlans,
  createSafetyInspectionPlan,
  updateSafetyInspectionPlan,
  deleteSafetyInspectionPlan,
  getSafetyInspectionPlan,
  operateSafetyInspectionPlan,

  getSafetyInspectionExecutions,
  createSafetyInspectionExecution,
  acceptSafetyInspectionExecution,
  getSafetyInspectionExecution,
  checkSafetyInspectionExecution,
  operateSafetyInspectionExecution,
  getSafetyInspectionRectifications,
  createSafetyInspectionRectification,
  updateSafetyInspectionRectification,
  getSafetyInspectionRectification,
  deleteSafetyInspectionRectification,
  operateSafetyInspectionRectification,

  getSafetyInspectionTroubles,
  creteSafetyInspectionTrouble,
  updateSafetyInspectionTrouble,
  getSafetyInspectionTrouble,
  deleteSafetyInspectionTrouble,
  operateSafetyInspectionTrouble,

  getAccidents,
  getAccident,
  getAccidentNatures,
  deleteAccident,
  getAccidentLogs,
  getAccidentOperations,
  createAccidentOperation,
  updateAccidentOperation,
  operateAccidentOperation,
  deleteAccidentOperation,
  createAccident,
  updateAccident,
  operateAccident,

  getAccidentCases,
  createAccidentCase,
  updateAccidentCase,
  deleteAccidentCase,

  getDangerJobs,
  createDangerJob,
  updateDangerJob,
  getDangerJob,
  deleteDangerJob,
  operateDangerJob,

  getApproveModules,
  getApproves,
  getApprove,
  createApprove,
  updateApprove,
  deleteApprove,
};
