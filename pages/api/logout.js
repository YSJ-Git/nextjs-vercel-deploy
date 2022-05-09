<<<<<<< HEAD
import { destroyCookie } from "nookies";

export default async (req, res) => {
  destroyCookie({ res }, "jwt", {
    path: "/",
  });

  res.status(200).end();
};
=======
import { destroyCookie } from 'nookies'

export default async (req, res) => {
  destroyCookie({ res }, 'jwt', {
    path: '/',
  })

  res.status(200).end()
}
>>>>>>> a8d67ad582ea6fd89079231165718683294a283d
