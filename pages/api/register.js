<<<<<<< HEAD
import axios from "axios";
import { setCookie } from "nookies";
import baseApiUrl from "../../utils/baseApiUrl";

export default async (req, res) => {
  const { username, password, email } = req.body;
=======
import axios from 'axios'
import { setCookie } from 'nookies'
import baseApiUrl from '../../utils/baseApiUrl'

export default async (req, res) => {
  const { username, password, email } = req.body
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d

  try {
    const response = await axios.post(`${baseApiUrl}/api/auth/local/register`, {
      username,
      email,
      password,
<<<<<<< HEAD
    });

    /*setCookie({ res }, 'jwt', response.data.jwt, {
=======
    })

    setCookie({ res }, 'jwt', response.data.jwt, {
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
<<<<<<< HEAD
    })*/

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.response.data);
  }
};
=======
    })

    res.status(200).end()
  } catch (e) {
    console.log('???', e.response.data)
    res.status(400).send(e.response.data)
  }
}
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d
