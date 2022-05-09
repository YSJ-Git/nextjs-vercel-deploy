import axios from "axios";
import { encode } from "next-auth/jwt";
import { setCookie } from "nookies";
import baseApiUrl from "../../utils/baseApiUrl";

export default async (req, res) => {
  const { password, identifier } = req.body;
import axios from 'axios'
import { setCookie } from 'nookies'
import baseApiUrl from '../../utils/baseApiUrl'

export default async (req, res) => {
  const { password, identifier } = req.body

  try {
    const postRes = await axios.post(`${baseApiUrl}/api/auth/local`, {
      identifier,
      password,
    });

    setCookie({ res }, "jwt", postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    res.status(200).end();
  } catch (e) {
    res.status(400).send(e.response.data);
  }
};
    })

    setCookie({ res }, 'jwt', postRes.data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    res.status(200).end()
  } catch (e) {
    res.status(400).send(e.response.data)
  }
}
