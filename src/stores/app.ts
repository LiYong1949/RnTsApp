
import { observable, action, makeObservable, runInAction } from 'mobx';
import api from '../services/api';

declare let global: any;

class AppStore {

  @observable public appLoading: boolean = false;                                                   // 全局加载提示
  @observable public projects: Array<any> = [];                                                     // 全部项目
  @observable public users: Array<any> = [];                                                        // 全部人员
  @observable public standardPosts: Array<any> = [];                                                // 全部标准岗位
  @observable public qiniuToken: string = '';                                                       // 七牛token
  @observable public selectedProject: any = null;                                                   // 当前选中项目

  constructor() {
    makeObservable(this); // 需要observable的值，默认全部（mobx6引入）
  }

  /**
   * 加载提示控制
   */
  @action.bound
  handleAppLoading() {
    this.appLoading = true;
    setTimeout(() => {
      this.appLoading = false;
    }, 200);
  }

  /**
   * 获取所有项目
   * @param type （forced 强制更新数据）
   */
  @action.bound
  async handleGetProjects(type: string) {
    let newProjects = [...this.projects];

    if (newProjects.length === 0 || type === 'forced') {

      let res: any = await api.getProjects();

      const projects = res.data;

      runInAction(() => {

        newProjects = projects;

        this.projects = projects;

      });

    }

    return newProjects;

  }

  /**
   * 获取所有人员
   * @param type （forced 强制更新数据）
   */
  @action.bound
  async handleGetUsers(type: string) {
    let newUsers = [...this.users];

    if (newUsers.length === 0 || type === 'forced') {

      let res: any = await api.getUsers();

      const users = res.data;

      runInAction(() => {

        newUsers = users;

        this.users = users;

      });

    }

    return newUsers;

  }

  /**
   * 获取所有标准岗位
   * @param type （forced 强制更新数据）
   */
  @action.bound
  async handleGetStandardPosts(type: string) {
    let newStandardPosts = [...this.standardPosts];

    if (newStandardPosts.length === 0 || type === 'forced') {

      let res: any = await api.getStandardPosts();

      const standardPosts = res.data;

      runInAction(() => {

        newStandardPosts = standardPosts;

        this.standardPosts = standardPosts;

      });

    }

    return newStandardPosts;

  }

  /**
  * 获取七牛token
  * @param type （forced 强制更新数据）
  */
  @action.bound
  async handleGetQiniuToken(type: string) {

    let newQiniuToken = this.qiniuToken;

    if (!global.G_LOCALSTORAGE_GET('_QINIU_TOKEN_GET_TIME')) {
      type = 'forced';
    } else {
      let dateDiff = new Date().getTime() - new Date(global.G_LOCALSTORAGE_GET('_QINIU_TOKEN_GET_TIME')).getTime();
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); // 距离上次获取七牛token天数

      if (dayDiff > 7) {
        type = 'forced';
      }
    }

    if (!newQiniuToken || type === 'forced') {

      let res: any = await api.getQiniuToken();

      const { token } = res.data;

      global.G_LOCALSTORAGE_SET('_QINIU_TOKEN_GET_TIME', new Date()); // 缓存七牛token获取时间，若距离上次获取时间超过7天则强制重新获取

      runInAction(() => {

        newQiniuToken = token;

        this.qiniuToken = token;

      });

    }

    return newQiniuToken;

  }


  /**
   * 切换选中项目
   */
  @action.bound
  handleChangeSelectedProject(project: any) {
    if (project?.id) {
      global.G_LOCALSTORAGE_SET('_SELECT_PROJECT', project);
      this.selectedProject = project;
    }
  }

}


export default new AppStore();
