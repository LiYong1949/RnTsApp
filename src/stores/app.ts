
import { observable, action, makeObservable, runInAction } from 'mobx';
import { Appearance } from 'react-native';
import api from '../services/api';


class AppStore {
  @observable public qiniuToken: string = '';                                                       // 七牛token
  @observable public colorScheme = Appearance.getColorScheme()                                      // 当前颜色主题
  @observable public currentUserInfo = null;                                                        // 当前用户信息

  constructor() {
    makeObservable(this); // 需要observable的值，默认全部（mobx6引入）
  }

  /**
  * 获取七牛token
  * @param type （forced 强制更新数据）
  */
  @action.bound
  async handleGetQiniuToken(type: string) {

    let newQiniuToken = this.qiniuToken;

    if (!G_LOCALSTORAGE_GET('_QINIU_TOKEN_GET_TIME')) {
      type = 'forced';
    } else {
      let dateDiff = new Date().getTime() - new Date(G_LOCALSTORAGE_GET('_QINIU_TOKEN_GET_TIME')).getTime();
      let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); // 距离上次获取七牛token天数

      if (dayDiff > 7) {
        type = 'forced';
      }
    }

    if (!newQiniuToken || type === 'forced') {

      let res: any = await api.getQiniuToken();

      const { token } = res.data;

      G_LOCALSTORAGE_SET('_QINIU_TOKEN_GET_TIME', new Date()); // 缓存七牛token获取时间，若距离上次获取时间超过7天则强制重新获取

      runInAction(() => {

        newQiniuToken = token;

        this.qiniuToken = token;

      });

    }

    return newQiniuToken;

  }

  /**
 * 设置当前用户信息
 */
  @action.bound
  async handleSetCurrentUserInfo(userInfo: any) {
    await G_LOCALSTORAGE_SET('_USER_INFO', userInfo);
    runInAction(() => {
      this.currentUserInfo = userInfo;
    });
  }

}


export default new AppStore();
