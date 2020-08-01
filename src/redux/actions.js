// action creator (function): action을 동적으로 생성
export const updateUser = (name = '') => ({
    type: 'updateUser',
    name
});
