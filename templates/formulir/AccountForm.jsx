import { useState } from 'react'
import { TextField, PhoneInput, Checkbox, Button } from '@idds/react'

import { FIELDS, validate } from './fields.js'

export function AccountForm({ onSubmit, submitting }) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [agreed, setAgreed] = useState(false)

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: undefined }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values, agreed)
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return
    onSubmit(values)
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-16">
      {FIELDS.map((field) => {
        if (field.type === 'tel') {
          return (
            <PhoneInput
              key={field.name}
              label={field.label}
              required={field.required}
              countryCode="+62"
              placeholder="812 3456 7890"
              helperText={field.helperText}
              value={values[field.name] ?? ''}
              onChange={(v) => handleChange(field.name, v)}
              error={errors[field.name]}
              disabled={submitting}
            />
          )
        }
        return (
          <TextField
            key={field.name}
            type={field.type}
            label={field.label}
            required={field.required}
            helperText={field.helperText}
            value={values[field.name] ?? ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            error={errors[field.name]}
            disabled={submitting}
            autoComplete={field.autoComplete}
          />
        )
      })}

      <Checkbox
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
        disabled={submitting}
        error={errors.agreement}
      >
        Saya menyetujui Ketentuan dan Kebijakan Privasi.
      </Checkbox>

      <Button
        type="submit"
        hierarchy="primary"
        size="lg"
        loading={submitting}
        disabled={!agreed || submitting}
        className="mt-8"
      >
        Buat Akun
      </Button>
    </form>
  )
}
