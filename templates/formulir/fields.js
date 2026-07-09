export const FIELDS = [
  {
    name: 'fullName',
    label: 'Nama Lengkap',
    type: 'text',
    required: true,
    autoComplete: 'name',
  },
  {
    name: 'phone',
    label: 'Nomor Ponsel',
    type: 'tel',
    required: true,
    helperText:
      'Informasi ini digunakan untuk menghubungi Anda dan tidak akan dibagikan kepada pihak lain.',
    autoComplete: 'tel',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Kata Sandi',
    type: 'password',
    required: true,
    helperText: 'Minimal 8 karakter.',
    autoComplete: 'new-password',
  },
  {
    name: 'passwordConfirm',
    label: 'Konfirmasi Kata Sandi',
    type: 'password',
    required: true,
    autoComplete: 'new-password',
  },
]

export function validate(values, agreed) {
  const errors = {}
  if (!values.fullName?.trim()) errors.fullName = 'Nama lengkap wajib diisi.'
  if (!values.phone || values.phone.replace(/\D/g, '').length < 8) {
    errors.phone = 'Nomor ponsel minimal 8 digit.'
  }
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Format email tidak valid.'
  }
  if (!values.password || values.password.length < 8) {
    errors.password = 'Kata sandi minimal 8 karakter.'
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Konfirmasi kata sandi tidak cocok.'
  }
  if (!agreed) {
    errors.agreement = 'Anda harus menyetujui Ketentuan dan Kebijakan Privasi.'
  }
  return errors
}
