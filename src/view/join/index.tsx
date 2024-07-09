import { Button, Card, CardActions, CardContent, CardHeader, Container, TextField, useTheme } from '@mui/material'
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router'
import UserInputValidator from '../../presentation/validator/userValidator.ts/userInputValidator';
import JoinPasswordsComponent from './passwords';

const USER_FORM = {
  password : "",
  passwordRepeat : "",
  id : "",
  name : "",
  email : "",
  mobile : "",
}

const getInitValidated = () => {
  const validated:{
    [key: string]: boolean
  } = {};
  Object.keys(USER_FORM).forEach(property => {
    if(property == 'mobile') validated[property] = false;
    else if(property) validated[property] = true;
  });

  return validated;
}
export default function JoinPage({}) {

  const navigate = useNavigate();
  const theme = useTheme();

  const [values, setValues] = useState({...USER_FORM})
  const [validation, setValidation] = useState<{[key:string]:boolean}>({});
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setValidation(getInitValidated());
  }, [])

  const handleChange = (props:string) => (event:React.ChangeEvent<HTMLInputElement>) => {
    const newState = {
      ...values,
      [props] : event.target.value
    };
    const validated = new UserInputValidator(
      values.id,
      values.email,
      values.password,
      values.passwordRepeat,
      values.name,
      values.mobile,
    ).test();

    setValidation(validated.error);
    setValues(newState);
  };

  const handleSummit = async () => {
    const validated = new UserInputValidator(
      values.id,
      values.email,
      values.password,
      values.passwordRepeat,
      values.name,
      values.mobile,
    ).test();

    if(!validated.isValid) {
      setValidation(validated.error);
    }
  }

  const handleCancel = () => navigate(-1);
  return (
    <Container maxWidth="sm" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Card>
        <CardHeader title="회원가입" sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText }}></CardHeader>
        <CardContent>
          <div className={'flex flex-wrap flex-col space-y-3'}>
            <TextField
              label="성명"
              value={values.name}
              onChange={handleChange('name')}
              required={true}
              helperText={validation.name && "성명을 입력해주세요."}
              error={validation.name}
            ></TextField>
            <TextField
              label="아이디"
              value={values.id}
              onChange={handleChange("id")}
              required={true}
              error={validation.id}
              helperText={validation.id && "아이디를 4자 이상 입력해주세요."}
            ></TextField>
            <JoinPasswordsComponent value={values} handleChange={handleChange} />
            <TextField
              label="이메일"
              value={values.email}
              onChange={handleChange('email')}
              helperText={validation.email && '이메일 주소를 입력해주세요.'}
              required={true}
              error={validation.email}
              type="email"
            ></TextField>
            <TextField
              label="핸드폰"
              value={values.mobile}
              onChange={handleChange('mobile')}
              error={validation.mobile}
              helperText={validation.mobile && "핸드폰 번호 양식을 확인해주세요."}
              type="mobile"
            ></TextField>
          </div>
        </CardContent>
        <CardActions sx={{ display: 'flex', flexWrap: 'wrap', padding: '0 16px 16px 16px' }} disableSpacing={true}>
          <Button color="primary" fullWidth variant="contained" onClick={handleSummit}>가입</Button>
          <Button fullWidth variant='outlined' sx={{ marginTop: '4px' }} onClick={handleCancel}>취소</Button>
        </CardActions>
      </Card>
    </Container>
  )
}