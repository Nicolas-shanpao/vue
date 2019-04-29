import store from '@/store/store'

export default function hasPermission (permission) {
    let myPermissions = store.getters.permissions
    return myPermissions.indexOf(permission) > -1
}
