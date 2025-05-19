'use server'

export async function signup(formData: FormData) {
    console.log("Form Data", formData.get("email"))
    console.log("Form Data", formData.get("password"))
}
