// 我这里把action的type常量和action创建函数写在一起
// 而不是把常量单独装到constants/下，觉得这样有点过度分离了
export const USERINFO_UPDATE = 'USERINFO_UPDATE';

export function update(data) {
    return {
        type: USERINFO_UPDATE,
        data
    }
}