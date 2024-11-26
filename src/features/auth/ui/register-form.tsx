import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Box, Typography, FormHelperText, TextField } from '@mui/material'
import { RegisterFormInputs, registerSchema } from '../model/schemas'
import CustomLink from '@/shared/ui/link'
import styles from './auth.module.css'

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    //TODO: implement registration
    console.log('Form Data:', data)
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Typography variant='h5' align='center'>
        Регистрация
      </Typography>

      <Box>
        <TextField label='Имя' fullWidth {...register('first_name')} error={!!errors.first_name} />
        {errors.first_name && <FormHelperText error>{errors.first_name.message}</FormHelperText>}
      </Box>

      <Box>
        <TextField
          label='Фамилия'
          fullWidth
          {...register('last_name')}
          error={!!errors.last_name}
        />
        {errors.last_name && <FormHelperText error>{errors.last_name.message}</FormHelperText>}
      </Box>

      <Box>
        <TextField
          label='Email'
          type='email'
          fullWidth
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
      </Box>

      <Box>
        <TextField
          label='Пароль'
          type='password'
          fullWidth
          {...register('password')}
          error={!!errors.password}
        />
        {errors.password && <FormHelperText error>{errors.password.message}</FormHelperText>}
      </Box>

      <Box>
        <TextField
          label='Повторите пароль'
          type='password'
          fullWidth
          {...register('passwordAgain')}
          error={!!errors.passwordAgain}
        />
        {errors.passwordAgain && (
          <FormHelperText error>{errors.passwordAgain.message}</FormHelperText>
        )}
      </Box>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        size='large'
        sx={{ fontWeight: 'bold' }}
      >
        Зарегистрироваться
      </Button>
      <CustomLink to={'/login'}>Уже есть аккаунт? Войти</CustomLink>
    </Box>
  )
}
