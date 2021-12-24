import axios from 'axios';
import { Toast } from '@ant-design/react-native';
import {
  remove,
  findLast
} from 'lodash';

const baseWaitTime = 100; // 默认的等待时间100毫秒

const requestURLRate: Array<Object> = []; // 如：{ api: '/api/standardRoles', timestamp: 1596597701181 }

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

/**
 * 请求出入口
 * @param {*} api 地址
 * @param {*} method 方法，默认为GET
 * @param {*} params 参数，默认为空对象
 * @param {*} maxRequestCycleCount 最大请求频次（与baseWaitTime结合），默认为1
 * @param {*} serverHost 接口主机地址
 * @param {*} headers 传入头部信息，默认为空对象
 */
export default function axiosRequest(api: string, method: Method = 'GET', params: any = {}, maxRequestCycleCount: number = 1, headers: any = { 'Content-Type': 'application/json' }) {


  // 针对非GET请求进行限流拦截
  if (method !== 'GET') {

    let nowTimestamp = new Date().getTime(); // 当前时间戳

    // 去除当前接口指定周期外的数据
    remove(requestURLRate, (o: any) => {
      return o.api === api && o.timestamp < nowTimestamp - (maxRequestCycleCount * baseWaitTime);
    });

    // 获取上一次请求信息（一般同周期只有一个，防止处理意外）
    let hasRequestURLRate = findLast(requestURLRate, (o: any) => (o.api === api));

    if (hasRequestURLRate) {

      Toast.fail('当前访问的频次过高，请适当放慢手速！', 1);

      // 为了保持数据完整性，返回数据与接口定义一致
      return {
        errcode: -100,
        msg: null
      };

    } else {
      requestURLRate.push({
        api,
        timestamp: new Date().getTime()
      });
    }

  }

  return new Promise(async (resolve: any, reject: any) => {

    let token = await G_LOCALSTORAGE_GET('_TOKEN');
    if (!G_HTTP_WHITELIST.includes(api) && !token) {
      if (_PROPS) {
        _PROPS.navigation.navigate('Login');
      }
      return false;
    }

    let sendData: any = {
      method,
      url: G_CONFIG.serverHost + api,
      headers: {
        ...headers,
        'Authorization': 'Bearer ' + token
      },
      params: method === 'GET' ? params : {},
      data: params
    };

    axios(sendData)
      .then((res: any) => {

        let newData = res.data;

        if (typeof newData === 'string') {

          newData = JSON.parse(newData);

        }

        let { errcode, msg } = newData;

        if (errcode && errcode !== 0 && errcode !== 4) {

          Toast.fail(msg || '请求错误！', 1);

          // 直接跳转到登录页面（简单粗暴）
          if (errcode === -401 || errcode === 2) {
            if (_PROPS) {
              const { navigate } = _PROPS.navigation;
              navigate('/login');
            } else {
              Toast.fail('登录失效！', 1);
            }
            reject(newData);
          }

          resolve(newData);
        }
        resolve(newData);
      })
      .catch((error: any) => {
        console.log(error);

        if (error) {
          Toast.fail(`服务端发生逻辑错误！${JSON.stringify(error)}`, 1);
        }

        reject(error);

      });
  }).catch((error: any) => {
    throw new Error(error);
  });
}
