import { createServer, Model, RestSerializer } from "miragejs";

export const setupMirageServer = () => {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      codeExecution: Model,
    },

    seeds(server) {
      server.create("codeExecution", {
        language: "python",
        code: "print(2 + 2)",
        output: "4",
        status: "success",
      });

      server.create("codeExecution", {
        language: "python",
        code: "for i in range(5): print(i)",
        output: "0\n1\n2\n3\n4",
        status: "success",
      });

      server.create("codeExecution", {
        language: "python",
        code: "x = [i**2 for i in range(3)]\nprint(x)",
        output: "[0, 1, 4]",
        status: "success",
      });
    },

    routes() {
      this.namespace = "api";

      this.post("/execute", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        try {
          if (attrs.language === "python") {
            const predefinedExecution = schema.db.codeExecutions.findBy({
              language: "python",
              code: attrs.code,
            });

            if (predefinedExecution) {
              return {
                status: "success",
                output: predefinedExecution.output,
              };
            } else {
              return {
                status: "error",
                error: "Code not found in predefined scripts.",
              };
            }
          } else {
            let result = "";
            let output = "";

            const originalConsoleLog = console.log;
            console.log = (message) => {
              output += message + "\n";
            };

            result = eval(attrs.code);

            console.log = originalConsoleLog;

            if (result === undefined && output) {
              result = output.trim();
            }

            return { status: "success", output: result !== undefined ? String(result) : "No output" };
          }
        } catch (error) {
          return { status: "error", error: `Execution failed: ${error.message}` };
        }
      });
    },
  });
};
