import { app } from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.info(`API running at port ${PORT}`);
});