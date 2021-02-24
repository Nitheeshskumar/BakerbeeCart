/* Handling Errors through Toastr */


import toastr from "vue-toastr";

export const successToaster = (title, desc,pointer) => {
    return (pointer.$toastr.s(desc, title))
}
export const errorToaster = (title, desc,pointer) => {

    return (pointer.$toastr.e(desc, title))
}

export const warnToaster = (title, desc,pointer) => {
    return (pointer.$toastr.w(desc, title))
}

export const infoToaster = (title, desc,pointer) => {
    return (pointer.$toastr.i(desc, title))
}