import React, { useState, useEffect } from 'react'
import { PageLayout, Input, PasswordInput, Button, Spinner } from 'components/common'
import styled from 'styled-components'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  >${Button}:first-of-type {
    margin-top: 40px;
  }

  >${Input} {
    margin-top: 20px;
  }
`

let timeout

export const Login = () => {
  const [formFields, setFormFields] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false)

  const handleChangeInput = e => {
    e.persist();
    setFormFields(s => ({
      ...s,
      [e.target.name]: e.target.value
    }));
  }

  const handlesubmit = e => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handlesubmit}>
        {loading ? <Spinner /> :
          <>
            <span>Login if you have an account</span>
            <Input
              value={formFields.username}
              onChange={handleChangeInput}
              name='username'
              type='text'
              placeholder='Username'
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleChangeInput}
              name='password'
            />
          </>
        }
        <Button type='submit' large disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading &&
          <>
            <div className='alt-text'>
              or
          </div>
            <Button secondary type='button'>
              Register
          </Button>
          </>
        }
      </Form>
    </PageLayout>
  )
}
