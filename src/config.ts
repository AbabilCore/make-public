import CuteFetch from "cutefetch";

export const cf = new CuteFetch({
  baseURL: atob("aHR0cHM6Ly9wcnhpLnZlcmNlbC5hcHA="),
  methods: ["GET"],
  timeout: 1000 * 20,
});
