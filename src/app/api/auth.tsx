'use server'

class AuthError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
  }
}

export async function signup(formData: FormData) {
  const email = formData.get("email")?.toString()
  const password = formData.get("password")?.toString()

  console.log("Form Data - Email:", email)
  console.log("Form Data - Password:", password)

  // Validation
  if (!email || !password) {
    throw new AuthError("Email and password are required")
  }

  if (!email.includes('@')) {
    throw new AuthError("Invalid email format")
  }

  // Simulate different error scenarios
  if (email === 'test@error.com') {
    throw new AuthError("Email already exists")
  }

  // Simulate server error
  if (email === 'server@error.com') {
    throw new Error("Internal Server Error")
  }

  // If everything is okay, return the success response
  return {
    userId: "test-123",
    email
  }
}
