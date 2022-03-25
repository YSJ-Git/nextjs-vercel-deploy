import { useRouter } from 'next/router'
import axios from 'axios'
import nookies from 'nookies'
import LoginComponent from '../components/loginComponent'
import baseApiUrl from '../utils/baseApiUrl'

const Login = () => {
  const router = useRouter()
  const goToRegister = () => {
    router.push('/register')
  }

  return (
    <div>
      <LoginComponent />
      <button onClick={goToRegister}>Register</button>
    </div>
  )
}

export const getServerSideProps = async ctx => {
  const cookies = nookies.get(ctx)
  let user = null

  if (cookies?.jwt) {
    try {
      const { data } = await axios.get(`${baseApiUrl}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      })
      user = data
    } catch (e) {
      console.log(e)
    }
  }

  if (user) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile',
      },
    }
  }

  return {
    props: {},
  }
}

export default Login
