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
          // Check if the language is Python
          if (attrs.language === "python") {
            // Find the matching predefined Python code
            const predefinedExecution = schema.db.codeExecutions.findBy({
              language: "python",
              code: attrs.code,
            });

            if (predefinedExecution) {
              // Return the predefined output
              return {
                status: "success",
                output: predefinedExecution.output,
              };
            } else {
              // Return error if the code does not match
              return {
                status: "error",
                error: "Code not found in predefined scripts.",
              };
            }
          } else {
            return { status: "error", error: "Unsupported language in Mirage server" };
          }
        } catch (error) {
          return { status: "error", error: `Execution failed: ${error.message}` };
        }
      });
    },
  });
};
