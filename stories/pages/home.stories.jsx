import { rest } from "msw"
import Home from "../../pages/index"

export default {
  title: "Pages/Home",
  component: Home,
}

export const HomePage = () => <Home />

HomePage.parameters = {
  msw: {
    handlers: [
      rest.get("/api/calculate/*", (req, res, ctx) => {
        return res(
          ctx.json({
            result: "10",
          })
        )
      }),
    ],
  },
}
